import React from "react";
import project from "./data/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 className="text-center">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-stretch">
          {project.map((data, index) => (
            <div
              key={data.id || index} // Use index as fallback if id is missing/duplicate
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4 d-flex"
            >
              <div
                className="card bg-dark text-light d-flex flex-column"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title || "Project image"}
                    style={{
                      width: "250px",
                      height: "200px",
                      objectFit: "cover",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text flex-grow-1">{data.descriptionShort}</p>
                  <Link
                    to="/project-details"
                    state={{ project: data }}
                    className="btn btn-warning mt-auto"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;