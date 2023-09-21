import { ANALYTICS_CATEGORIES_ACTIVATOR, ANALYTICS_CATEGORY_TYPES, MY_PICTURE_URL } from "../../../../data/constants";
import { technologiesWorkedWithPropsDataType } from "../../../../data/technologiesWorkedWith/dataTypes";
import utilsStyles from "../../../../styles/Utils.module.scss";
import TechnologyViewCard from "../../../cards/TechnologyViewCard";
import layoutStyles from "../../../Layout/Layout.module.scss";
import AboutMePagesComponentPropsDataType from "../../AboutMePageComponent/dataType";
import homeComponentsPropsDataType from "../dataTypes";
import Section from "../Section";
import aboutMeStyles from "./AboutMe.module.scss";

const AboutMe = (props: homeComponentsPropsDataType | AboutMePagesComponentPropsDataType) => {
    return (
        <Section>
            <div className={`${aboutMeStyles.about_me_section} ${layoutStyles.section}`} id="about-me">
                <div className={utilsStyles.container}>
                    <div className={layoutStyles.section_body}>
                        {
                            props.isHomePage ? (
                                <h3 className={layoutStyles.section_title}>
                                    About Me
                                </h3>
                            ) : (
                                <h1
                                    className={layoutStyles.section_title}
                                    style={{
                                        fontSize: "2.5rem",
                                        marginBottom: "1rem"
                                    }}
                                >
                                    About Me
                                </h1>
                            )
                        }

                        <div className={`${aboutMeStyles.section_body}`}>
                            <div className={aboutMeStyles.image_top}>
                                <div className={`${aboutMeStyles.image_section}`}>
                                    <img
                                        src={MY_PICTURE_URL}
                                        alt="Picture of Bhaskar Neupane"
                                    />
                                </div>
                            </div>

                            <div className={aboutMeStyles.section_body_main}>
                                <div className={aboutMeStyles.data_section}>
                                    <p>
                                        👋 Hi there! I&apos;m Bhaskar Neupane, a seasoned full-stack software developer specializing in Python for robust backend and automation solutions. I complement my Python skills with JavaScript, TypeScript, and Dart to craft user-friendly software experiences. My journey has also seen me venture into GoLang, Java, C, and C# to explore diverse design patterns and create unique experiences, leveraging platforms like Unity and Arduino.
                                    </p>
                                    <p>
                                        🌐 My journey in software development has taken me to various corners of the globe, including the United States, Australia, and the United Kingdom, allowing me to develop a diverse skill set and a global perspective. Recently, I began a new learning journey by enrolling in the Computer Engineering Technology program at Seneca College. This has allowed me to expand my understanding beyond just software. Additionally, I&apos;m diving into the exciting world of Machine Learning and Deep Learning, aiming to grasp the fundamental concepts and create modern systems. Let&apos;s connect and explore the endless possibilities in the ever-evolving landscape of software and technology!
                                    </p>
                                    <p>
                                        I love to capture memories, it helps to break pattern and helps me stay creative and have a fresh mind. I have few images that I have captured in my <a href="https://instagram.com/vaskrneup" target={"_blank"} className={utilsStyles.link} rel="noreferrer" onClick={ANALYTICS_CATEGORIES_ACTIVATOR.activator(ANALYTICS_CATEGORY_TYPES.socialSiteLinkClick, "https://instagram.com/vaskrneup")}>instagram</a>.
                                    </p>

                                    <p className={aboutMeStyles.technologies_title}>
                                        Here are few Technologies I&apos;ve worked with:
                                    </p>

                                    <div className={aboutMeStyles.technologies_grid}>
                                        {
                                            props.aboutMeData
                                                .map((data: technologiesWorkedWithPropsDataType) => {
                                                    return (
                                                        <a
                                                            href={data.url}
                                                            key={data.url}
                                                            target={"_blank"}
                                                            rel="noreferrer"
                                                            onClick={ANALYTICS_CATEGORIES_ACTIVATOR.activator(ANALYTICS_CATEGORY_TYPES.technologiesUsedClick, data.url)}
                                                        >
                                                            <TechnologyViewCard
                                                                image={data.icon}
                                                                imageAltText={`${data.name} Icon`}
                                                                name={data.name}
                                                            />
                                                        </a>
                                                    );
                                                })
                                        }
                                    </div>
                                </div>

                                <div className={`${aboutMeStyles.image_section} ${aboutMeStyles.image_bottom}`}>
                                    <img
                                        src={MY_PICTURE_URL}
                                        alt="Picture of Bhaskar Neupane"
                                    />
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </Section >
    );
};

export default AboutMe;