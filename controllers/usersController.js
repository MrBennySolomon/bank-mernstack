import colors from 'colors';
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';

// @desc    Get all Users
// @route   GET /api/v1/users
// @access  Public
export const getUsers = asyncHandler(async (req, res, next) => { 
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: users,
  });
});

// @desc    Create a User
// @route   POST /api/v1/users
// @access  Private
export const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Get a single User
// @route   GET /api/v1/users/:id
// @access  Public
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new Error(`User that end with '${req.params.id.slice(-6)}' not found`));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Update a User
// @route   PUT /api/v1/users/:id
// @access  Private
export const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new Error(`User that end with '${req.params.id.slice(-6)}' not found`));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Deposite money to User
// @route   PUT /api/v1/users/deposite/:id/:cash
// @access  Private
export const depositeUser = asyncHandler(async (req, res, next) => {
  const specificUser = await User.findById(req.params.id);

  specificUser.cash = Number(specificUser.cash) + Number(req.params.cash);
  const user = await User.findByIdAndUpdate(req.params.id, specificUser, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new Error(`User that end with '${req.params.id.slice(-6)}' not found`));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    withdraw money from User
// @route   PUT /api/v1/users/withdraw/:id/:cash
// @access  Private
export const withdrawUser = asyncHandler(async (req, res, next) => {
  const specificUser = await User.findById(req.params.id);

  specificUser.cash = Number(specificUser.cash) - Number(req.params.cash);
  const user = await User.findByIdAndUpdate(req.params.id, specificUser, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new Error(`User that end with '${req.params.id.slice(-6)}' not found`));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Transfer money from User1 to User2
// @route   PUT /api/v1/users/transfer/:id_from/:id_to/:cash
// @access  Private
export const transferUser = asyncHandler(async (req, res, next) => {
  const userFrom = await User.findById(req.params.id_from);
  const userTo = await User.findById(req.params.id_to);

  userFrom.cash = Number(userFrom.cash) - Number(req.params.cash);
  userTo.cash = Number(userTo.cash) + Number(req.params.cash);

  const updatedUserFrom = await User.findByIdAndUpdate(req.params.id_from, userFrom, {
    new: true,
    runValidators: true,
  });

  const updatedUserTo = await User.findByIdAndUpdate(req.params.id_to, userTo, {
    new: true,
    runValidators: true,
  });

  if (!userTo) {
    return next(new Error(`User that end with '${req.params.id_to.slice(-6)}' not found`));
  }

  if (!userFrom) {
    return next(new Error(`User that end with '${req.params.id_from.slice(-6)}' not found`));
  }

  res.status(200).json({
    success: true,
    data: {userTo, userFrom}
  });
});


// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Private
export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`User that ends with '${req.params.id.slice(-6)}' was not found`, 404));
  }

  user.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get all Users with overdraft
// @route   GET /api/v1/users/overdraft
// @access  Public
export const getOverdraftUsers = asyncHandler(async (req, res, next) => { 
  const users = await User.find();
  console.log('users', users);
  console.log('typeof users', typeof users);
  const temp = 0;
  const filteredUsers = users.filter((user) => Number(user.cash) <= temp);

  res.status(200).json({
    success: true,
    data: filteredUsers,
  });
});