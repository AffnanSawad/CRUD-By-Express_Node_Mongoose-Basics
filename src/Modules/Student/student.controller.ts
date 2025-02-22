import { Request, Response } from "express";
import { studentServices } from "./student.service";


const createStudent = async(req : Request, res: Response) =>{

try{

    const studentInfo = req.body.student ;

    const  result =  await studentServices.createStudentDB(studentInfo);
   
   res.status(200).json({
       success : true ,
       message : 'Successfully done',
       data : result 
   })



} 
catch(err){
    console.log(err)
}

}

export const student_Controller = {
    createStudent 
}