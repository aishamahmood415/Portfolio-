import React from "react";
import designs from "./data/designs.json";

const Designs = () => {
  return (
    <div className="container designs my-5 mb-5 pb-5" id="designs">
      <h1 className="text-center mb-4">GRAPHIC DESIGN WORK</h1>

      <div className="row d-flex justify-content-center align-content-center">
        {designs.map((design, index) => (
          <div
            key={design.id || index}
            className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"  // 👈 same as Projects.jsx
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div
              className="card bg-dark text-light h-100"
              style={{
                width: "18rem",  // 👈 same fixed width as Projects
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
            >
              <img
                src={design.imageSrc}
                className="card-img-top"
                alt={design.title}
                style={{
                  width: "250px",     // 👈 same width as Projects
                  height: "200px",
                  border: "2px solid yellow",
                  borderRadius: "10px",
                  margin: "10px auto", // center align
                  display: "block"
                }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{design.title}</h5>
                <p className="card-text">{design.description}</p>
                {design.demo && (
                  <a
                    href={design.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning"
                  >
                    View Design
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
