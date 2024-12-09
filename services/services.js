const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const createAppointment = async (name, phone, service, time, date, notes) => {
  const { data, error } = await supabase
    .from("appointments")
    .insert([{ name, phone, service, time, date, notes }]);

  if (error) throw new Error(error.message);
  return data;
};

const updateAppointment = async (phone, newDetails) => {
    const { data, error } = await supabase
      .from('appointments')
      .update(newDetails)
      .eq('phone', phone);
  
    if (error) throw new Error(error.message);
    return data;
  };

const cancelAppointment = async (phone) => {
  const { data, error } = await supabase
    .from("appointments")
    .delete()
    .eq("phone", phone);

  if (error) throw new Error(error.message);
  return data;
};

const getAppointments = async () => {
  const { data, error } = await supabase.from("appointments").select("*");

  if (error) throw new Error(error.message);
  return data;
};

module.exports = {
  createAppointment,
  updateAppointment,
  cancelAppointment,
  getAppointments,
};
