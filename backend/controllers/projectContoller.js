const Project = require("../models/projectModel");
const { ObjectId } = require("mongodb");

//GET all projects
const getProjects = async (request, response) => {
  try {
    //find all projects and sort them by created date
    const workouts = await Project.find({}).sort({ createdAt: -1 });
    response.status(200).json(workouts);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
//GET a single project
const getProject = async (request, response) => {
  // get id from route params
  const { id } = request.params;
  try {
    //check if route param id is a valid mongodb id
    if (ObjectId.isValid(id)) {
      //if so, find doc with corresponding id
      const project = await Project.findById(id);
      //check if a doc with this id exists
      if (!project) {
        return response.status(400).json({ mssg: "No such project" });
      }
      //if such doc exists, send it to client
      response.status(200).json(project);
    } else {
      response.status(404).json({ mssg: "Unable to get project" });
    }
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
//POST a new project
const createProject = async (request, response) => {
  //get request body
  const { title, person, due, status } = request.body;

  try {
    const project = await Project.create({
      title,
      person,
      due,
      status,
    });
    response.status(200).json(project);
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
};
//DELETE a single project
const deleteProject = async (request, response) => {
  // get id from route params
  const { id } = request.params;
  try {
    //check if param id is a valid mongodb id
    if (ObjectId.isValid(id)) {
      //if so, find doc with corresponding id
      const deletedProject = await Project.findByIdAndDelete(id);
      //check if a doc with this id exists
      if (!deletedProject) {
        return response.status(400).json({ mssg: "No such project" });
      }
      //if such doc exists, send it to client
      response.status(200).json(deletedProject);
    } else {
      response.status(404).json({ mssg: "Unable to get project" });
    }
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
};
//Update single project
const updateProject = async (request, response) => {
  // get id from route params
  const { id } = request.params;

  try {
    if (ObjectId.isValid(id)) {
      //if so, find doc with corresponding id
      const updatedProject = await Project.findByIdAndUpdate(id, {
        ...request.body
      }, {new: true});
      //check if a doc with this id exists
      if (!updatedProject) {
        return response.status(400).json({ mssg: "No such project" });
      }
      //if such doc exists, send it to client
      response.status(200).json(updatedProject);
    } else {
      response.status(404).json({ mssg: "Unable to get project" });
    }
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
};
