import Container from "@mui/material/Container";
import { useEffect, useState, useContext } from "react";
import Project from "./Project";

//context api
import { ProjectContext } from '../context/ProjectContext'

const Dashboard = () => {
  
  const { projects, setProjects} = useContext(ProjectContext);
  const [ isLoading, setIsLoading ] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      const response = await fetch('http://localhost:8000/api/projects')
      const data = await response.json()
      // console.log(data)
      setIsLoading(false)
      setProjects(data)
    }
    fetchProjects()
  }, [])

  //delete single project
  const deleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/projects/${id}`, {
        method: 'DELETE'
      })
      if(response.ok) {
        const filteredProjects = projects.filter((project) => {
          return project._id !== id
        })
        setProjects(filteredProjects)
        console.log(`Project with id: ${id} has been deleted`)
      }
    } catch (error) {
      setError(error.message)
    }
  }
  const allProjects = projects.map((project) => (
    <Project 
    key={project._id}
    project={project}
    onDelete={deleteProject}
    />
  ) )
  
  // console.log(allProjects)

  return (
    <div>
      <h2 className="font-bold text-lg">Dashboard</h2>
      <Container className="container">
        {!isLoading && allProjects }
        {isLoading && <h1>Loading...</h1>}
      </Container>
    </div>
  );  
};

export default Dashboard;
