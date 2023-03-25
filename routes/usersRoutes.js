import express from 'express';
import {getUsers,createUser,getUser,updateUser,deleteUser,depositeUser,getOverdraftUsers,withdrawUser,transferUser} from '../controllers/usersController.js';

const router = express.Router();

router.route('/overdraft').get(getOverdraftUsers);
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
router.route('/deposite/:id/:cash').put(depositeUser);
router.route('/withdraw/:id/:cash').put(withdrawUser);
router.route('/transfer/:id_from/:id_to/:cash').put(transferUser);



export default router;