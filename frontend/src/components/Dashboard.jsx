import Container from "@mui/material/Container";
import { useEffect, useState, useContext } from "react";
import Project from "./Project";

//context api
import { ProjectContext } from '../context/ProjectContext'

const Dashboard = () => {
  
  const { projects, setProjects} = useContext(ProjectContext);
  const [ isLoading, setIsLoading ] = useState(false)

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

  const allProjects = projects.map((project) => (
    <Project 
    key={project._id}
    project={project}
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
