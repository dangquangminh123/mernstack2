import express from 'express'
import { getUser , getAllUser } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

//for login
// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send('You are Logged In!')
// });

//for login and you can delete your account
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send('You are Logged In!')
// });

//For get user by id
router.get('/:id', verifyUser, getUser);

//For get all users -> for admin sections, only admin can see all user
router.get('/', isAdmin, getAllUser);

export default router;