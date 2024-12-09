const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/controllers');

router.post('/book', appointmentController.createBooking);

router.post('/modify', appointmentController.modifyAppointment);

router.post('/cancel', appointmentController.cancelBooking);

router.get('/get-appointments', appointmentController.getAllAppointments);

module.exports = router;
