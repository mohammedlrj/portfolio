import styles from "../style";
import ProjectCard from "../widgets/ProjectCard";
import React from "react";
import {projects} from "../constants";
const Projects = () => (
    <section id="projects" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>
        <div className="absolute z-[0] w-[22%] h-[22%] -right-[25%] rounded-full blue__gradient top-[-14%]"/>

        <div className="mx-auto max-w-screen-sm px-4 z-50">
            <h2 className={`${styles.heading2Center}`}>Explore My Recent Projects</h2>
            <p className={`${styles.paragraphCenter}`}>
            Discover the innovative solutions in my latest work. From concept to execution, 
            these projects showcase my ability to deliver value and tackle complex challenges.
            </p>
        </div>

        <div
            className="grid lg:grid-cols-2 md:grid-cols-1 justify-center w-full feedback-container relative z-[1] gap-6">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    name={project.name}
                    duration={project.duration}
                    methodology={project.methodology}
                    content={project.content}
                    img={project.img}
                    technologies={project.technologies}
                    href={project.href}
                />
            ))}
        </div>

    </section>
);

export default Projects;
