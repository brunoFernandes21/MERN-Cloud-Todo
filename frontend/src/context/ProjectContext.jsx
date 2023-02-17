import { createContext, useState } from "react";

export const ProjectContext = createContext()

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects ] = useState([])

    return (
        <ProjectContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectContext.Provider>
    )
}