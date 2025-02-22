import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

// Schema : Mongoose
const Student_Schema = new Schema<Student>({
  

    id : { type: String , required: true} ,
    name : {
        
        firstname : { type: String , required: true} ,
        lastname : { type: String , required: true} ,

    },

    email : { type: String , required: true} ,
    age : { type: Number , required: true} ,
    skilss : ["Front-End" , "Back-End" , "Full-Stack"],
    salary :{ type: Number , required: false}
})

// Model

export const Student_Model = model<Student>('Student_Model',Student_Schema);