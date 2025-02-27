import React from "react";
import "./casestudycards.css"; // Import CSS file

const caseStudies = [
  {
    title: "Car Match",
    description:
      "Car Match is an all-in-one platform that simplifies the car buying process by allowing users to research vehicles, connect with trusted dealers, and access RACV-approved information and reviews. The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car with confidence and peace of mind.",
    image: "/images/up.jpg", // Replace with actual image path
    link: "/up-case-study",
  },
  {
    title: "Whatslively",
    description:
      "Enhancing the Whatslively experience by introducing two key features to improve usability and event discovery. This case study focuses on identifying gaps in the current app and designing solutions that better support users in finding and managing live events.",
    image: "/images/ownhome.jpg", // Replace with actual image path
    link: "/ownhome-case-study",
  },
];

const CaseStudyCards = () => {
  return (
    <section className="case-studies">
      <h2>Other case studies</h2>
      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-card">
            <img src={study.image} alt={study.title} className="case-image" />
            <div className="case-content">
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <a href={study.link} className="case-link">
                View Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyCards;
