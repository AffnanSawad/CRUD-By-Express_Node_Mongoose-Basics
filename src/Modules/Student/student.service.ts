import { Student } from "./student.interface";
import { Student_Model } from "./student.model_schema";


const createStudentDB = async( students : Student) => {

   
  const result=  await  Student_Model.create();

  return result ;


}

export const studentServices = {
    createStudentDB
}