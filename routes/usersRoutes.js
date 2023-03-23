import express from 'express';
import {getUsers,createUser,getUser,updateUser,deleteUser,depositeUser,getOverdraftUsers,withdrawUser,transferUser} from '../controllers/usersController.js';
import User from '../models/User.js';

// Include other resource routers
const router = express.Router();

// Re-route into other resource routers
router.route('/overdraft').get(getOverdraftUsers);
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
router.route('/deposite/:id/:cash').put(depositeUser);
router.route('/withdraw/:id/:cash').put(withdrawUser);
router.route('/transfer/:id_from/:id_to/:cash').put(transferUser);



export default router;