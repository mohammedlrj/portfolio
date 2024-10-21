import styles from "../style";
import AboutCard from "../widgets/AboutCard";
import {aboutData} from "../constants";
const About = () => (
    <section id="about" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>

        <div className="absolute z-[0] w-[35%] h-[35%] -right-[25%] rounded-full blue__gradient top-[-5%]"/>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm z-50">
            <h2 className={`${styles.heading2Center}`}>About me ? Let Me Introduce Myself</h2>
            <p className={`${styles.paragraphCenter}`}>
                I’m a <span className="text-gradient">Full Stack Developer</span> with a <span className="text-gradient">Master's</span>
                degree in <span className="text-gradient">Engineering </span> , specializing in building robust and user-centric <span className="text-gradient">Web Applications. </span>
                With a strong foundation in both <span className="text-gradient">Front-end</span> and <span className="text-gradient">Back-end
                </span> technologies, I have successfully delivered numerous <span className="text-gradient">Full-stack</span> projects. 
                I am passionate about clean code, modern design, and optimizing <span className="text-gradient">User Experience</span>. My curiosity drives me to continuously learn new 
                tools and frameworks to stay ahead in the ever-evolving tech landscape. Beyond solo <span className="text-gradient">Projects</span>, I have collaborated with cross-functional 
                teams, leveraging my <span className="text-gradient">Communication</span> and <span className="text-gradient">Project Management</span> skills to ensure seamless project delivery.
            </p>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-blue-gradient inline-flex"></div>
            </div>

        </div>

        <div
            className="grid lg:grid-cols-4 md:grid-cols-1 justify-center w-full feedback-container relative z-[1] gap-12">
            {aboutData.map((about, index) => (
                <AboutCard
                    key={index}
                    title={about.title}
                    icon={about.icon}
                    description={about.description}
                />
            ))}
        </div>

    </section>
);

export default About;
