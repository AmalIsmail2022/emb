const slugify = require('slugify')
const asyncHandler = require('express-async-handler')

const EmployeeModel = require('../models/employeeModel')
exports.getEmployees = asyncHandler(async (req, res) => {
    const employees =  await EmployeeModel.find({})
    res.status(200)
    .json({results: employees.length, data: employees})
})


exports.getEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params
    const employee = await EmployeeModel.findById(id)
    if (!employee) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(200).json({data:employee})
}

)


exports.createEmployees = asyncHandler (async (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const phone = req.body.phone
        const employee = await EmployeeModel.create({name, slug:slugify(name), age, email, phone})
        res.status(201)
        .json({ data: employee })
    
})

exports.updateEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const { age } = req.body
    const { email } = req.body
    const { phone } = req.body
    
    const employee = await EmployeeModel.findOneAndUpdate({ _id: id }, { name: name, slug: slugify(name), age: age, email:email, phone: phone }, { new: true })
     if (!employee) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(200).json({data:employee})
} 
)

exports.deleteEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params
    const employee = await EmployeeModel.findByIdAndDelete(id)
    if (!employee) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(204).send()
}
)














