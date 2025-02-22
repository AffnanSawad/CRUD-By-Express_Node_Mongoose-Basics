import express from 'express'
import { student_Controller } from './student.controller';

const router = express.Router();

// CRUD OPERATIONS :
router.post('/create-student' , student_Controller.createStudent);


export const Student_Routes = router ;