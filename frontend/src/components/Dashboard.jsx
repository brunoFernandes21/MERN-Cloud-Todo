import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Project from "./Project";

const Dashboard = () => {
  
  const [ projects, setProjects] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:8000/projects')
      const data = await response.json()
      // console.log(data)
      setIsLoading(false)
      setProjects(data)
    }
    fetchProjects()
  }, [])

  const allProjects = projects.map((project) => (
    <Project 
    key={project.id}
    title={project.title}
    person={project.person}
    date={project.date}
    status={project.status}
    />
  ) )
  
  if(isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <h2 className="font-bold text-lg">Dashboard</h2>
        <Container className="container">
          { allProjects }
        </Container>
      </div>
    );
  }
  
};

export default Dashboard;
