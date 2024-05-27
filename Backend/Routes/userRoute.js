import { Router } from "express";
import {registerUser,loginUser, getallusers,getUserbyID, enrolledin, getEnrolledCourse} from '../Controllers/userController.js'

const Route = Router()


Route.route('/signin').post(registerUser)
Route.route('/login').post(loginUser)
Route.route('/allusers').get(getallusers)
Route.route('/userbyId/:id').get(getUserbyID)
Route.route('/enroll/:id').post(enrolledin)
Route.route('/enrolledCourse/:id').get(getEnrolledCourse)



export default Route