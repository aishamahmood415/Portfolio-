import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Aisha_Mahmood_Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Aisha Mahmood",
        "I'm a Full Stack Developer",
        "I specialize in building responsive, user-friendly web apps with React.js, Next.js, and TypeScript.",
        "With hands-on experience in full stack development, I have worked on projects involving API integrations, UI/UX enhancements, and responsive layouts.",
        "I work with the MERN stack and Next.js — MongoDB, Express, React, Node.js — to build dynamic, end-to-end web applications.",
        "From a client's first sketch to a working checkout flow, I handle the frontend and backend both.",
        "My expertise includes React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, and MongoDB.",
        "I'm passionate about writing clean, maintainable code and shipping features that actually work for real users.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Aisha_Mahmood_Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;