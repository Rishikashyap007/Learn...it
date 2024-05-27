import express, { Router } from 'express'
import { addToCart, cartItems, removeFromCart } from '../Controllers/cartController.js';
import verifyToken from '../Middleware/VerifyToken.js'

const cartRoute = Router()

cartRoute.post('/addtocart',addToCart)
cartRoute.get('/cartitems/:id',cartItems)
cartRoute.post('/remove/:id',removeFromCart)

export default cartRoute;