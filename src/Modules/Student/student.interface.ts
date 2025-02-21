import { Schema, model, connect } from 'mongoose';

export type Student = {
    id : string ;
    name : {
        firstname : string;
        lastname : string ;

    }

    email : string ;
    age : number ;
    skilss : "Front-End" | "Back-End" | "Full-Stack";
    salary : number ;
}