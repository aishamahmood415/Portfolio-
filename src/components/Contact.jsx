import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="container contact my-5" id="contact">
        <h1 className="text-center mb-4">CONTACT ME</h1>
        <div
          className="d-flex justify-content-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <form
            className="p-4 rounded"
            style={{
              maxWidth: "600px",
              width: "100%",
              background: "transparent",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              style={{
                background: "transparent",
                border: "1px solid yellow",
                color: "white",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
              style={{
                background: "transparent",
                border: "1px solid yellow",
                color: "white",
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="form-control mb-3"
              style={{
                background: "transparent",
                border: "1px solid yellow",
                color: "white",
              }}
            ></textarea>
            <button
              type="submit"
              className="btn btn-warning w-100 fw-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="text-center text-light py-4"
        style={{ background: "#111" }}
      >
        <h5 className="mb-2">
          <span style={{ color: "yellow" }}>Aisha Mahmood</span>
        </h5>
        <p className="mb-3">
          Full Stack Developer | React.js & Next.js Developer
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://www.linkedin.com/in/aisha-mahmood-96ba9927b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.8rem" }}
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/aishamahmood415"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.8rem" }}
          >
            <FaGithubSquare />
          </a>
          <a
            href="mailto:ayeshamahmood553@gmail.com"
            style={{ color: "white", fontSize: "1.8rem" }}
          >
            <SiGmail />
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0" style={{ fontSize: "0.9rem", color: "#aaa" }}>
          © {new Date().getFullYear()} Aisha Mahmood. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
