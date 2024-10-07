import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import { ThemeContext } from "../../Context/theme";

export const Experience = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection" style={{ marginTop: "0px" }}>
        <h2 className="section__title" data-aos="fade-right">
          <span className="different">MY EXPERIENCE</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Jan 2024 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Development Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Brane Enterprises
            </h4>
            <ul data-aos="fade-right">
              <li>
                Developed a Recruiter Assistance Application with LinkedIn
                People’s API for enhanced candidate search.
              </li>
              <li>
                Implemented advanced search filters, boosting efficiency in
                candidate sourcing.
              </li>
              <li>
                Built API integrations for retrieving contact details, with
                credit management for controlled access.
              </li>
              <li>
                Created features to manage and export candidate data, improving
                recruitment workflows.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"Jun 2022 - Dec 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Capgemini Engineering
            </h4>
            <ul data-aos="fade-right">
              <li>
                Built logistics solutions for DP World, improving tracking and
                customs verification.
              </li>
              <li>
                Created REST APIs for supply chain management, enhancing data
                consistency.
              </li>
              <li>
                Developed secure payment system components for Doha Bank's
                credit card operations.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
