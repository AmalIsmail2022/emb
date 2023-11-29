const express = require('express')
const {getEmployees, getEmployee, createEmployees, updateEmployee, deleteEmployee} = require('../services/employeeService')
const router = express.Router()

router.route('/').get(getEmployees).post(createEmployees)
router.route('/:id').get(getEmployee).put(updateEmployee).delete(deleteEmployee)
module.exports = router