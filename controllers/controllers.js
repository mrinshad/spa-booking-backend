const { createAppointment, updateAppointment, cancelAppointment, getAppointments } = require('../services/services');

const createBooking = async (req, res) => {
  try {
    const { name, phone, service, time, date, notes } = req.body;
    const appointment = await createAppointment(name, phone, service, time, date, notes);
    res.status(200).json({ message: 'Booking successful', appointment });
  } catch (error) {
    res.status(400).json({ error: 'Error creating booking' });
  }
};

const modifyAppointment = async (req, res) => {
  try {
    const { phone, name, service, time, date, notes } = req.body;
    const newDetails = { name, service, time, date, notes };
    const updatedAppointment = await updateAppointment(phone, newDetails);
    res.status(200).json({ message: 'Appointment updated', updatedAppointment });
  } catch (error) {
    console.error('Modification error:', error);
    res.status(400).json({ error: 'Error modifying appointment', details: error.message });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const { phone } = req.body;
    const result = await cancelAppointment(phone);
    res.status(200).json({ message: 'Appointment cancelled', result });
  } catch (error) {
    res.status(400).json({ error: 'Error cancelling appointment' });
  }
};


const getAllAppointments = async (req, res) => {
  try {
    const appointments = await getAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching appointments' });
  }
};

module.exports = { createBooking, modifyAppointment, cancelBooking, getAllAppointments};
