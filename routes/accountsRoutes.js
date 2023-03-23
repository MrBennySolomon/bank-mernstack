import express from 'express';
import {getAccounts,getAccount,addAccount,updateAccount,deleteAccount} from '../controllers/accountsController.js';

import Account from '../models/Account.js';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAccounts)
  .post(addAccount);

router
  .route('/:id')
  .get(getAccount)
  .put(updateAccount)
  .delete(deleteAccount);

export default router;