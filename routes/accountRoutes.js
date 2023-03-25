import express from "express";
import {getAccounts,getAccount,createAccount,updateAccount,deleteAccount} from "../controllers/accountsController.js";

const router = express.Router();

router.route("/").get(getAccounts).post(createAccount);
router.route("/:id").get(getAccount).put(updateAccount).delete(deleteAccount);

export default router;