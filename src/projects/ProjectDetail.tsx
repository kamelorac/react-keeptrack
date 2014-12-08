import React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "./Project";

interface ProjectDetailProps {
  project: Project;
}
export default function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/projects");
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img className="rounded" src={project.imageUrl} alt={project.name} />
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
            <p>Budget : {project.budget}</p>

            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
            <p>
              <mark className="active">
                {" "}
                {project.isActive ? "Active" : "InActive"}
              </mark>
            </p>
            <button className="bordered" onClick={handleClick}>
              <span className="icon-rss"></span>
              Back
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
