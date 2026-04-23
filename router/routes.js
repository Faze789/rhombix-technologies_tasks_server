// router/routes.js
const express = require('express');
const router = express.Router();
const patient = require('../controller/student_controllers');  
const admin = require('../controller/admin_controller'); 
const schema = require('../schema/schema'); 

//patient
router.get('/home', patient.home);
router.get('/home/search', patient.search1);
router.get('/home/student/get_tours' , patient.tours_data);
router.get("/home/student/get_teachers" , patient.get_teachers_data);
router.get('/home/student/get_events_data' , patient.get_events_data);

router.post('/home/add_patient', patient.sign_up);
router.post('/home/patient/sign_in', patient.sign_in);
router.post('/home/student/add_event' , patient.add_event);
router.post('/home/student_get_events' , patient.get_events_student);




// admin


router.post('/home/admin/sign_in', admin.sign_in);
router.post('/home/add_admin', admin.sign_up);
router.post('/home/admin/sign_in/add_doctors', admin.add_seminars);
router.get('/home/admin/get_doctors_data', admin.get_all_teachers);


router.post('/home/admin/sign_in/add_teachers', admin.add_teachers);
router.get('/home/admin/get_teachers_data', admin.find_teachers);




router.post('/home/admin/tours/add_tours_data', admin.add_tours);
router.get('/home/admin/tours/get_tour_data', admin.find_tours_data);




module.exports = router;
