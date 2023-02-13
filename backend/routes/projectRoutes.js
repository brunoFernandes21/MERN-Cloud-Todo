const express = require('express')
const router = express.Router()
const {
    getProjects, getProject, createProject
} = require('../controllers/projectContoller')
//GET all projects
router.get('/', getProjects)

//GET a single project
router.get('/:id', getProject)

//POST a new project
router.post('/', createProject)

//DELETE a single project
router.delete('/:id', (request, response) => {
    response.status(200).json({mssg: 'Delete a single project'})
})

//GET all projects
router.patch('/:id', (request, response) => {
    response.status(200).json({mssg: 'Update a single project'})
})

//export router
module.exports = router