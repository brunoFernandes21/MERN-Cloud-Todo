import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ProjectContext } from '../context/ProjectContext'

const NewProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    person: "",
    due: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
  const { projects, setProjects} = useContext(ProjectContext);
  const [emptyFields, setEmptyFields] = useState([])

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    setIsLoading(true);
     //post new project to db
     const response = await fetch("http://localhost:8000/api/projects", {
      method: "POST",
      headers: { 
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData),
    });
    //store response in data variable
    const data = await response.json();
    
    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields)
      setIsLoading(false);
    }
    if(response.ok) {
      setError(null)
      setIsLoading(false);
      setProjects([data, ...projects])
      setEmptyFields([])
      navigate('/')
      setFormData({ title: "", person: "", due: "", status: "" });
    }

  };
  console.log(emptyFields)
  return (
    <div className="new__project">
      {error && (
        <div className='error bg-red-100 mb-5 text-red-700 px-4 py-3 rounded relative" role="alert"'>
          <span className="font-bold">{error}</span>
        </div>
      )}
      <h1>Add New Project</h1>
      <form>
        <label>Project title</label>
        <input
          type="text"
          required
          name="title"
          placeholder="Add a title..."
          value={formData.title}
          onChange={handleChange}
          className={emptyFields.includes('title') ? "error" : ''}
        />
        <label>Person</label>
        <select 
        value={formData.person} 
        name="person" onChange={handleChange} 
        className={emptyFields.includes('person') ? "error" : ''}>
          <option value="">--Choose--</option>
          <option value="Bruno">Bruno</option>
          <option value="Dulce">Dulce</option>
          <option value="Steve">Steve</option>
        </select>
        <label>Date</label>
        <input
          name="due"
          required
          placeholder="Add a date..."
          value={formData.due}
          onChange={handleChange}
          className={emptyFields.includes('due') ? "error" : ''}
        ></input>
        <label>Status</label>
        <select 
        value={formData.status} 
        name="status" onChange={handleChange}
        className={emptyFields.includes('status') ? "error" : ''}
        >
          <option value="">--Choose--</option>
          <option value="complete">Complete</option>
          <option value="ongoing">Ongoing</option>
          <option value="overdue">Overdue</option>
        </select>
        {!isLoading && <button onClick={handleSubmit}>Create Project</button>}
        {isLoading && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default NewProject;
