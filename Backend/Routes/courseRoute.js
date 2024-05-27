import {Router} from 'express'
import { createCourse,deleteCourse,getallcourses,getcoursesByID, updateCourse } from '../Controllers/courseController.js';

const courseRoute = Router()
courseRoute.post('/course',createCourse)
courseRoute.get('/courses',getallcourses)
courseRoute.get('/coursedetails/:id',getcoursesByID)
courseRoute.delete('/coursedelete/:id',deleteCourse)
courseRoute.post('/courseupdate/:id',updateCourse)

export default courseRoute;