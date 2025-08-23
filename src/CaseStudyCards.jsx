import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./styles/shared.css";
import "./styles/CaseStudyCards.css";
import placeholder from './assets/images/placeholder.png'


const caseStudies = [
  {
    title: "Streamlining vehicle updates for Motor Insurance",
    description:
      "Previously, updating a vehicle in a motor insurance policy was unclear and required support. This project introduced a simple, self-service feature, allowing users to replace or edit their insured vehicle directly in the portal, ensuring a smoother and more efficient experience.",
    image: placeholder,
    link: "/amendmotor", // No need for `/#/`
  },
  {
    title: "Whatslively",
    description:
      "Enhancing the Whatslively experience by introducing two key features to improve usability and event discovery. This case study focuses on identifying gaps in the current app and designing solutions that better support users in finding and managing live events.",
    image: placeholder,
    link: "/whatslively",
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
              {/* Use Link instead of <a> */}
              <Link to={study.link} className="case-link">
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyCards;
