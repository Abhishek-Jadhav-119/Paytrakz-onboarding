import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateProjects.css'; // CSS file imported

const CreateProjects = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: '',
    projectLocation: '',
    projectType: '',
    startDate: '',
    duration: '',
    endDate: '',
    projectedInvestment: '',
    yourInvestment: '',
  });

  const baseUrl = 'https://devback.infobytestechnosys.in/micro';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/projects`, formData);
      if (response.status === 201 || response.status === 200) {
        alert('Project created successfully!');
        navigate('/');
      } else {
        alert('Failed to create project. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="create-projects-wrapper">
      <form className="create-projects-form" onSubmit={handleSubmit}>
        <div className="header">
          <h2>ADD PROJECT</h2>
          <button type="button" className="close-btn" onClick={() => navigate('/')}>
            &times;
          </button>
        </div>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="projectLocation"
          placeholder="Project Location"
          value={formData.projectLocation}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="projectType"
          placeholder="Project Type"
          value={formData.projectType}
          onChange={handleChange}
          required
        />
        <div className="row">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (in days)"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="projectedInvestment"
            placeholder="Projected Investment"
            value={formData.projectedInvestment}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="yourInvestment"
          placeholder="Your Investment"
          value={formData.yourInvestment}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          CREATE PROJECT
        </button>
      </form>
    </div>
  );
};

export default CreateProjects;
