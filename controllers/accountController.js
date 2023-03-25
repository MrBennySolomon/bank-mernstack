import asyncHandler from "../middleware/asyncHandler.js";
import Account from "../models/Account.js";

// @desc    Get all accounts, with filter options in req.body
// @route   GET /api/v1/bank/accounts
// @access  Public
export const getAccounts = asyncHandler(async (req, res, next) => {
  const { owner } = req.body;
  const filter = {};

  if (owner !== undefined) {
    filter.owner = owner;
  }

  const accounts = await Account.find(filter);

  if (!accounts || accounts.length === 0) {
    return next(new Error("No accounts found that match your search."));
  }

  res.status(200).json({
    success: true,
    data: accounts,
  });
});

// @desc    Get a single account
// @route   GET /api/v1/bank/accounts/:id
// @access  Public
export const getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    return next(new Error(`Account with ID ${req.params.id} not found`));
  }
  res.status(200).json({
    success: true,
    data: account,
  });
});

// @desc    Create an account
// @route   POST /api/v1/bank/accounts
// @access  Private
export const createAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.create(req.body);
  
  res.status(200).json({
    success: true,
    data: account,
  });
});

// @desc    Update a single account. This also happens in the Transaction model after creating a new transaction
// @route   PUT /api/v1/bank/accounts/:id
// @access  Public
export const updateAccount = asyncHandler(async (req, res, next) => {
  const { balance, credit, owner, isActive } = req.body;
  const updateObj = {};

  const account = await Account.findById(req.params.id);
  if (!account) {
    return next(new Error(`Account with ID ${req.params.id} not found`));
  }

  const activeAccount = await Account.findByIdAndUpdate(
    req.params.id,
    updateObj,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: activeAccount,
  });
});

// @desc    DELETE a single account
// @route   DELETE /api/v1/bank/accounts/:id
// @access  Public
export const deleteAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    return next(new Error(`Account with ID ${req.params.id} not found`));
  }
  const ownerId = account.owner;
  await account.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});
