const mongoose = require('mongoose');


const student_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Admin Schema 
const adminSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});



const  add_doctors = new mongoose.Schema(
  {

   
  },
  { strict: false }
);

const  add_teachers = new mongoose.Schema(
  {
  
   
  },
  { strict: false } 
);

const  add_tours = new mongoose.Schema(
  {
  
   
  },
  { strict: false } ,);





  //for students
  const  add_events_in_student = new mongoose.Schema(
    {
    
     
    },
    { strict: false } 
);







const student = mongoose.model('Patient', student_schema);
const Admin = mongoose.model('Admin', adminSchema);
const doctors = mongoose.model('all_doctors', add_doctors);
const tour = mongoose.model('tours', add_tours);

const teachers = mongoose.model('all_teachers', add_teachers);

const add_events_studnet = mongoose.model('student_events'  , add_events_in_student);

module.exports = { student, Admin , doctors , teachers , tour ,add_events_studnet };
