import express from 'express';
import {verifyToken} from '../middleware/verifyToken.js'
import { allUser, singleUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', allUser);
router.get('/:id', verifyToken, singleUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;
