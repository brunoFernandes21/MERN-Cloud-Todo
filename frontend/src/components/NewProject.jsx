import { useState } from "react";
import { useNavigate } from "react-router";

const NewProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    person: "",
    date: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/')
    setFormData({ title: "", person: "", date: "", status: "" });
  };

  return (
    <div className="new__project">
      <h1>Add a New Project</h1>
      <form>
        <label>Project title</label>
        <input
          type="text"
          required
          name="title"
          placeholder="Add a title..."
          value={formData.title}
          onChange={handleChange}
        />
        <label>Person</label>
        <select value={formData.person} name="person" onChange={handleChange}>
          <option value="">--Choose--</option>
          <option value="bruno">Bruno</option>
          <option value="dulce">Dulce</option>
          <option value="layla">Layla</option>
        </select>
        <label>Date</label>
        <input
          name="date"
          required
          placeholder="Add a date..."
          value={formData.date}
          onChange={handleChange}
        ></input>
        <label>Status</label>
        <select value={formData.status} name="status" onChange={handleChange}>
          <option value="">--Choose--</option>
          <option value="complete">Complete</option>
          <option value="ongoing">Ongoing</option>
          <option value="overdue">Overdue</option>
        </select>
        {!isLoading && <button onClick={handleSubmit}>Add Post</button>}
        {/* {isLoading && <button disabled>Posting...</button>} */}
      </form>
    </div>
  );
};

export default NewProject;
