const Project = require('../models/projectModel')
const { ObjectId } = require("mongodb");

//GET all projects
const getProjects = async (request, response) => {

    try {
        //find all projects and sort them by created date
        const workouts = await Project.find({})
        .sort({createdAt: -1})
        response.status(200).json(workouts)
    } catch (error) {
        response.status(400).json({error: error.message})
    }    
}
//GET a single project
const getProject = async (request, response) => {
    // get id from route params
    const { id } = request.params
    //check if route param id is a valid id 
    if(ObjectId.isValid(id)) {
        //if so, find doc with corresponding id
        const project = await Project.findById(id)

        //check if a doc with this id exists
        if(!project) {
            return response.status(400).json({mssg: "No such project"})
        }
        //if such doc exists, send it to client
        response.status(200).json(project)
    } else {
        response.status(400).json({mssg: "Unable to get project"})
    }
    //check if the id from route params is a valid
    //Mongodb id
    
}
//POST a new project
const createProject = async (request, response) => {
    //get request body 
    const { title, person, due, status } = request.body

    try {
        const project = await Project.create({
            title, person, due, status
        })
        response.status(200).json(project)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
    
}
//DELETE a single project

//GET all projects

module.exports = {
    getProjects,
    createProject,
    getProject
}