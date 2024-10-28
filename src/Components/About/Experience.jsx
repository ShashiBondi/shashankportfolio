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
              // textAlign: "center",
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
              Software Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Brane Enterprises
            </h4>
            <ol data-aos="fade-right">
              <li>
                Designed and developed a Recruiter Assistance Application,
                Talent Scout, integrating LinkedIn People’s API for enhanced
                candidate search and management.
              </li>
              <li>
                Implemented advanced search filters (job title, location,
                LinkedIn URL), improving candidate sourcing efficiency.
              </li>
              <li>
                Integrated APIs for contact information retrieval and
                implemented a credit management system for controlled data
                access.
              </li>
              <li>
                Developed candidate collection management features to group,
                save, and export candidate data in CSV format.
              </li>
            </ol>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"Jun 2022 - Dec 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              // textAlign: "center",
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
              Software Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Capgemini Engineering
            </h4>
            <ol data-aos="fade-right">
              <li>
                Contributed to the development of the Smart Healthcare
                Management System for Cera, improving patient care with features
                like appointment scheduling, home consultations, and medical
                record management.
              </li>
              <li>
                Integrated third-party payment providers (e.g., Stripe, PayPal)
                and JWT-based authentication for secure data management.
              </li>
              <li>
                Designed real-time notification systems using RabbitMQ to reduce
                appointment scheduling errors and streamline patient
                interactions.
              </li>
              <li>
                Developed an insurance claims module for document submission and
                integration with multiple insurance providers.
              </li>
            </ol>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"Jun 2022 - Dec 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              // textAlign: "center",
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
              Software Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Capgemini Engineering
            </h4>
            <ol data-aos="fade-right">
              <li>
                Developed the MSC International Freight Management System to
                manage freight booking, container tracking, and vessel
                allocation.
              </li>
              <li>
                Implemented features for real-time vessel allocation, document
                verification for customs and insurance, and secure JWT-based
                authentication for all stakeholders.
              </li>
              <li>
                Built real-time notifications for cargo movements, vessel
                schedules, and transit periods using RabbitMQ.
              </li>
              <li>
                Streamlined container booking processes, improving logistics and
                cargo management efficiency.
              </li>
            </ol>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
