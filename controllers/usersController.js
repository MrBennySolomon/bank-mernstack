import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';

// @desc    Get all Users
// @route   GET /api/v1/users
// @access  Public
export const getUsers = asyncHandler(async (req, res, next) => { 
  res.status(200).json(res.advancedResults);
});

// @desc    Create a User
// @route   POST /api/v1/users
// @access  Private
export const createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
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




