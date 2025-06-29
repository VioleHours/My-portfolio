import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full md:text-sm">
          {work.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Web/Mobile Developer"
            company="Internal Project / Freelance"
            companyLink=""
            time="May 2025 – Present"
            address="Remote"
            work={`Main tasks:
              ● Developed a cross-platform mobile application using NativeScript and Java.
              ● Implemented interactive components and dynamic navigation, following responsive design principles and ensuring a smooth user experience.
              ● Integrated business logic in Java and REST backend services for real-time data management.
              ● Applied mobile development best practices, version control with Git, and agile methodologies for workflow organization.`}
          />
          <Details
            position="Frontend Developer"
            company="InkuA"
            companyLink="https://www.inkua.de/"
            time="Jun. 2024- Oct. 2024"
            address="Remote"
            work={`Main tasks:
              ● Development of websites for NGOs and Odoo updates research for websites.
                    ● Constant updating and research to improve the usability and functionality of the websites.
                    ● Implementation of customized solutions in Odoo to optimize internal processes and improve efficiency.
                    ● Active participation in meetings and brainstorming sessions to generate new strategies and innovative approaches.`}
          />
          <Details
            position="Frontend Developer"
            company="ProcurePro"
            companyLink=""
            time="Apr. 2024- Oct. 2024"
            address="Remote"
            work={`Main tasks:
              ● Collaborated with various clients in designing and developing modern and responsive user interfaces (UI). 
              ● Redesigned websites with included UX/UI Design. 
              ● Utilized technologies such as React.js, TypeScript, JavaScript, Tailwind CSS, and Zustand to create intuitive and engaging user experiences. 
              ● Focused on implementing responsive and accessible design to ensure maximum compatibility with different devices and browsers. 
              ● Efficiently managed application state and maintained clean and modular code.`}
          />
          <Details
            position="Frontend Developer"
            company="DASCalendar"
            companyLink="https://www.dascalendar.com/"
            time="oct. 2023 - mar. 2024"
            address="Remote - Argentina"
            work={` 
                Main tasks:
                    ● Working in a group, primarily focusing on the frontend development of the application. 
                    ● Design and development of a responsive and visually attractive website, ensuring an intuitive and pleasant user experience. 
                    ● Leadership as Scrum Master/Product Owner, facilitating meetings and ensuring the effective application of agile methodologies. 
                    ● Team collaboration with focus on frontend development of the application using React, Typescript and Tailwind CSS. 
                    ● Integration of APIs and backend services to efficiently fetch and send data, ensuring seamless communication between frontend and backend. 
            `}
          />
          <Details
            position="Odoo Developer"
            company="InkuA"
            companyLink="https://www.inkua.de/"
            time="may. 2023 - oct. 2023"
            address="Remote - Argentina"
            work={` 
                Main tasks:
                    ● Development of websites for NGOs and Odoo updates research for websites.
                    ● Constant updating and research to improve the usability and functionality of the websites.
                    ● Implementation of customized solutions in Odoo to optimize internal processes and improve efficiency.
                    ● Active participation in meetings and brainstorming sessions to generate new strategies and innovative approaches.
            `}
          />
          <Details
            position="Full-Stack Teaching Assistant"
            company="Henry"
            companyLink="https://www.soyhenry.com/"
            time="nov. 2022 - feb. 2023"
            address="Remote - Argentina"
            work={`
                Teaching Assistant (TA) for students at Henry Bootcamp.
                Main tasks:
                    ● Coordinate a group of new joining students throughout the whole bootcamp experience
                    ● Guide students in the first steps of the course and clarify their doubts
                    ● Provide assistance in solving exercises and encourage group teamwork (Pair Programming).
                    ● Suggest ideas to improve the Bootcamp processes.
                    ● Promote collaboration and build community within the students
                `}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
