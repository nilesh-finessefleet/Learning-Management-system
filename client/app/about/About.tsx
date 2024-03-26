import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">FinesseFleet?</span>
      </h1>

      <br />
      <div className="text-[18px] w-[95%] 800px:w-[85%] m-auto">
        <p className="font-Poppins">
          FinesseFleet, India&apos;s leading educational platform, is on a
          mission to redefine education in a better way. They believe in
          unlocking the unique potential within every student by providing
          personalized guidance. Tailored to individual preferences, their
          guidance ensures students can excel confidently in their chosen
          fields. Whether it&apos;s K-12 education, IIT JEE, NEET, JAM, or other
          examinations, FinesseFleet aims to empower students on their journey
          to academic excellence.
          <br />
          <br />
          Here&apos;s what makes FinesseFleet special: Holistic Development at
          the Core: FinesseFleet focuses on more than just academics. They
          nurture holistic growth by providing personalized mentorship and
          excellent technological support. Dynamic Mentorships for Individuals:
          Leveraging the latest generation technology, FinesseFleet offers
          mentorship tailored to each student&apos;s unique approach to thinking
          and executing tasks. Weekly Doubt Clearing Sessions: Students can get
          their doubts clarified promptly, ensuring a smooth learning
          experience. Digitalized Mock Tests and Assignments: FinesseFleet
          provides regular assessments to help students gauge their progress.
          Parent-Faculty and Parent-Mentor Interaction: Regular communication
          ensures a supportive learning environment.
        </p>
          <br />
          <br />
          <div className="mx-10">
          <em className="text-blue-400">
            “As a parent, I firmly believe that education should be tailored to
            the unique needs of each child. The approach to teaching must be
            personalized, varying from one child to another. An ideal method
            involves mentoring, providing a more effective and individualized
            learning experience, and that&apos;s what FinesseFleet is aiming to
            provide.” 
            <p className="text-[20px] text-white text-center">— Arpita BA, Chairperson, FinesseFleet</p>
          </em>
          </div>
          <br />
          <br />
          <p>
            Join FinesseFleet today and unlock the world&apos;s future! Trusted by
            industries, academic institutions, and individual students, their
            commitment to quality education sets them apart.
          </p>
          <br />
          <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
