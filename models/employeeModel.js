const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category required'],
        unique: [true, 'category must be unique'],
        minlength: [3, 'too short category name'],
        maxlength: [30, 'too long category name'],
    },
    slug: {
        type: String,
        lowercase:true,    
    },
    age: String,
    email: String,
    phone: String
},{timestamps:true}
)
const EmployeeModel = mongoose.model('Student', employeeSchema)
module.exports = EmployeeModel
