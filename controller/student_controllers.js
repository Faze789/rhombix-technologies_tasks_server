const student = require("../schema/schema");

module.exports = {
  home: (req, res) => {
    console.log('Inside home route');
    res.status(200).json({
      message: 'Hello from the get patient route12'
    });
  },
  search1: (req, res) => {
    console.log('Inside home route,  got it');
    res.status(200).json({
      message: 'searching'
    });
  },



  sign_up: async (req, res) => {
    console.log('okkkkk'); 
    const { name, email, password } = req.body;
  
    try {
      const newstudent = await student.student.create({ name, email, password });
  
      if (newstudent) {
        return res.status(200).json(newstudent);
      } else {
        return res.status(400).json('Could not be added');
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
  
    try {
      const find_studnet = await student.student.findOne({ email:email , password:password });
  
      if (find_studnet ) {
        console.log("sign in");
        return res.status(200).json(find_studnet);
      } else {
        console.log("sign in error ");
        return res.status(400).json('Could not be found');
      }
    } catch (error) {
      console.error('Error while signing in:', error);  
      return res.status(500).json({ message: 'Error while signing in', error: error.message });
    }
  },

  tours_data  : async (req, res) => 
  {

    try {
      const get_college_data = await student.tour.find();

      if(get_college_data)
      {
        console.log(get_college_data);
        return res.status(200).json(get_college_data);
      }
      else {
        return res.status(404).json('TOURS DATA NOT FOUND');
      }
      
    } catch (error) {
      
    }

  
  }
  ,

  get_teachers_data : async(req , res ) => {

    try {
      const get_teachers_data = await student.teachers.find();

      if(get_teachers_data)
      {
        console.log(get_teachers_data);
        return res.status(200).json(get_teachers_data);
      }
      else {
        return res.status(404).json('TOURS DATA NOT FOUND');
      }
      
    } catch (error) {
      
    }

  },

  get_events_data : async (req , res ) =>
  {
    try {
      const get_events_data = await student.doctors.find();

      if(get_events_data)
      {
        console.log(get_events_data);
        return res.status(200).json(get_events_data);
      }
      else {
        return res.status(404).json('Events DATA NOT FOUND');
      }
      
    } catch (error) {
      
    }
  }
,
  add_event : async (req , res ) => {

    const {time,image , venue , date , topic , price , student_registeration_number} = req.body;

    console.log(time);
    console.log(image);
    console.log(venue);
    console.log(date);
    console.log(topic);
    console.log(price);
    console.log(student_registeration_number);

    try {

      const student_add_event = await student.add_events_studnet.create({student_registeration_number , image , time , venue , date , topic , price});

      if(student_add_event)
      {
        return res.status(200).json(student_add_event);

      }
      else {
        return res.status(404).json('Couldnot add data');
      }
      
    } catch (error) {
      
    }
  }

  ,

  get_events_student: async (req, res) => {
    const { student_id } = req.body;
  
    try {
      
      const get_events = await student.add_events_studnet.find({
        student_registeration_number: student_id
      });
  
      if (get_events.length > 0) {
        console.log(get_events);
        return res.status(200).json(get_events);
      } else {
        console.log('No events found for the given student_id');
        return res.status(200).json({ message: 'No events found' });
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  

  
};
