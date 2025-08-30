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
        "I'm a Frontend Developer and Creative Web & Graphic Designer",
        "I specialize in building responsive and user-friendly websites with React.js and modern UI frameworks. Alongside web development, I create visually appealing graphic designs for branding and social media.",
        "With hands-on experience in frontend development, I have worked on projects involving API integrations, UI/UX enhancements, and responsive layouts.",
        "I also work with the MERN stack (MongoDB, Express, React, Node.js) to develop dynamic web applications.",
        "On the creative side, I design logos, social media posts, and marketing assets that help brands stand out.",
        "My expertise includes React.js, JavaScript, Redux, HTML, CSS, and tools like Canva & Photoshop for design.", 
        "I’m passionate about combining technology and creativity to deliver impactful solutions, whether it’s a website or a brand identity.",
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