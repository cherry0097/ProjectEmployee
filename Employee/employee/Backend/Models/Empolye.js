const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  cname: String,
  salary: Number,
  doj: Date,
  submit: Boolean
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = { Employee };
