import express from 'express'
import { createHotel, getAllHotels, getHotel, byCity, byType, getHotelsRoom } from '../controllers/hotels.js';
import { isAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//Add new hotels  onyl admin can add a new hotels
router.post('/', isAdmin ,createHotel);

//For get hotel by id
router.get('/find/:id', getHotel);

//For get all hotels
router.get('/', getAllHotels);
router.get('/bycity', byCity);
router.get('/bytype', byType);
router.get('/room/:id', getHotelsRoom);


export default router;