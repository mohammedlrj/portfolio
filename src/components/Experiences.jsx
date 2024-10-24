import styles from "../style";
import ExperienceCard from "../widgets/ExperienceCard.jsx";
import { experiences } from "../constants";

const Experiences = () => (
    <section id="experiences" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>
        <div className="absolute z-[0] w-[25%] h-[25%] -left-[25%] rounded-full blue__gradient top-[-5%]" />

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm z-50">
            <h2 className={`${styles.heading2Center}`}>Insights from My Education and Experiences</h2>
            <p className={`${styles.paragraphCenter}`}>
            Explore my professional journey, from early career beginnings to recent ventures. Discover how these experiences 
            have equipped me with the skills and insights necessary to tackle new challenges and drive success.
            </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    index={index + 1}
                    date={experience.date}
                    title={experience.title}
                    text={experience.text}
                    technologies={experience.technologies}
                    linkText={experience.linkText}
                    linkUrl={experience.linkUrl}
                />
            ))}
        </div>
    </section>
);

export default Experiences;
