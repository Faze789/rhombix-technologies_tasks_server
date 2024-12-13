const admin = require("../schema/schema");

module.exports = {

  sign_up: async (req, res) => {
    console.log('admin'); 
    const { name, email, password } = req.body;
  
    try {
      const admin_sign_up = await admin.Admin.create({name, email, password});
    
  
      if (admin_sign_up) {
        return res.status(200).json('Admin added');
      } else {
        return res.status(400).json('Admin could not be added');
      }
    } catch (error) {
      console.error('Error while signing up:', error); 
      return res.status(500).json({ message: 'Error while signing up', error: error.message });
    }
  },
  sign_in: async (req, res) => {
    console.log('okkkkk'); 
    const {  email, password } = req.body;
    console.log(email);
    console.log(password);
  

      const find_admin = await admin.Admin.findOne({ email:email , password:password });
  
      if (find_admin) {
        console.log("sign in");
        return res.status(200).json('ADMIN FOUND !!');
      } else {
        console.log("sign in error ");
        return res.status(400).json('ADMIN Could not be found');
      
    }

  },

  add_seminars : async (req, res) => 
    {

    const {image , seminar_name , venue , date , time} = req.body;

  

    try {
      const add_seminars = await admin.doctors.create({image, seminar_name , venue , date ,  time});
    
  
      if (add_seminars) {
        console.log('seminars added');
        return res.status(200).json('seminar just added');
      } else {
        console.log('seminar couldnot be added');
        return res.status(400).json('Admin could not be added');
      }
    } catch (error) {
      console.error('Error while signing up:', error);  
      return res.status(500).json({ message: 'Error while signing up', error: error.message });
    }
  }
,

get_all_teachers : async (req, res) =>  
  {
    try {
      const get_all_teachers_data = await admin.doctors.find();
      
      if(get_all_teachers_data)
      {
        console.log('all doctors data');
        return res.status(200).json(get_all_teachers_data);
      }
      else {
        console.log('fail to get doctors data'); 
      }
      
    } catch (error) {
      
    }
  }
  ,

add_teachers: async (req, res) => 
  {

  const {image , teacher_name, profession , education , experience} = req.body;


  console.log(image);
  console.log(teacher_name);
  console.log(profession);
  console.log(education );
  console.log( experience);



  try {
    const teachers = await admin.teachers.create({image, teacher_name , profession , education ,  experience});
  

    if (teachers) {
      console.log('teachers added');
      return res.status(200).json('teachers just added');
    } else {
      console.log('teachers couldnot be added');
      return res.status(400).json('Admin could not be added');
    }
  } catch (error) {
    console.error('Error while signing up:', error);  
    return res.status(500).json({ message: 'Error while signing up', error: error.message });
  }
}

,
find_teachers : async (req, res) => 
{
  
  try {
    const get_all_teachers_data = await admin.teachers.find();
    
    if(get_all_teachers_data)
    {
      console.log('all teachers data');
      return res.status(200).json(get_all_teachers_data);
    }
    else {
      console.log('fail to get teachers data'); 
    }
    
  } catch (error) {
    
  }

} ,



add_tours: async (req, res) => 
  {

  const {image , tour_image_description} = req.body;


  console.log(image);
  console.log(tour_image_description);
 



  try {
    const tours = await admin.tour.create({image, tour_image_description});
  

    if (tours) {
      console.log('tour data added');
      return res.status(200).json('tour data added');
    } else {
      console.log('tour data couldnot be added');
      return res.status(400).json('tour data couldnot be added');
    }
  } catch (error) {
    console.error('tour data couldnot be added:', error);  
    return res.status(500).json({ message: 'tour data couldnot be added', error: error.message });
  }
}
,

find_tours_data : async (req, res) => 
  {
    
    try {
      const get_all_tour_data = await admin.tour.find();
      
      if(get_all_tour_data)
      {
        console.log('get_all_tour_data');
        return res.status(200).json(get_all_tour_data);
      }
      else {
        console.log('fail to get tour data'); 
      }
      
    } catch (error) {
      
    }
  
  } ,
 


}