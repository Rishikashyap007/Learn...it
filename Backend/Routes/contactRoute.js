import express from 'express'
const contactRouter = express.Router()
import { contactController } from '../Controllers/contactController.js';

contactRouter.post("/contact", contactController)

export default contactRouter;