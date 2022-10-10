import express from 'express'
import { createRoom, getAllRooms, getRoom, updateRoom } from '../controllers/rooms.js';
import { isAdmin } from '../utils/verifyToken.js';
const router = express.Router();


//
//Add new rooms, onyl admin can add a new rooms
router.post('/:hotelId', isAdmin ,createRoom);

//Update Room
router.put("availability/:id", updateRoom)

//For get room by id
router.get('/:id', getRoom);

//For get all rooms
router.get('/', getAllRooms);

export default router;