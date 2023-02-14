const express = require('express')
const router = express.Router()
const {
    getProjects, getProject, createProject, deleteProject,
    updateProject
} = require('../controllers/projectContoller')
//GET all projects
router.get('/', getProjects)

//GET a single project
router.get('/:id', getProject)

//POST a new project
router.post('/', createProject)

//DELETE a single project
router.delete('/:id', deleteProject)

//GET all projects
router.patch('/:id', updateProject)

//export router
module.exports = router