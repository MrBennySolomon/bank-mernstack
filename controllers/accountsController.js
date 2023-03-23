import Account from "../models/Account.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc      Get all accounts
// @route     GET /api/v1/accounts
// @route     GET /api/v1/users/:userId/accounts
// @access    Public
export const getAccounts = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const accounts = await Account.find({ shop: req.params.userId });

    return res.status(200).json({
      success: true,
      count: accounts.length,
      data: accounts
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single account
// @route     GET /api/v1/accounts/:id
// @route     GET /api/v1/users/:userId/accounts/:id
// @access    Public
export const getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id).populate({
    path: "user"
  });

  if (!account) {
    return next(
      new ErrorResponse(
        `Account that ends with '${req.params.id.slice(-6)}' was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: account
  });
});

// @desc      Add a account
// @route     POST /api/v1/user/:userId/accounts
// @access    Private
export const addAccount = asyncHandler(async (req, res, next) => {
  req.body.shop = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(
        `User that ends with '${req.params.userId.slice(-6)}' was not found`,
        404
      )
    );
  }

  let account = await Account.create(req.body);

  account = await Account.findById(account._id).populate({
    path: "user",
  });

  res.status(200).json({
    success: true,
    data: product
  });
});

// @desc      Update a account
// @route     PUT /api/v1/accounts/:id
// @access    Private
export const updateAccount = asyncHandler(async (req, res, next) => {
  let account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!account) {
    return next(
      new ErrorResponse(
        `Account that ends with '${req.params.id.slice(-6)}' was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: account
  });
});

// @desc      Delete a account
// @route     Delete /api/v1/accounts/:id
// @access    Private
export const deleteAccount = asyncHandler(async (req, res, next) => {
  const account = await Accounr.findById(req.params.id);

  if (!account) {
    return next(
      new ErrorResponse(
        `Account that ends with '${req.params.id.slice(-6)}' was not found`,
        404
      )
    );
  }

  await account.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});
