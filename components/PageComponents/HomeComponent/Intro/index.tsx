import { ANALYTICS_CATEGORIES_ACTIVATOR, ANALYTICS_CATEGORY_TYPES } from "../../../../data/constants";
import utilsStyle from "../../../../styles/Utils.module.scss";
import layoutStyle from "../../../Layout/Layout.module.scss";
import Section from "../Section";
import infoStyle from "./Intro.module.scss";

const Intro = () => {
    return (
        <Section>
            <div className={`${infoStyle.intro_section} ${layoutStyle.section}`}>
                <div className={utilsStyle.container}>
                    <div className={infoStyle.intro_container}>
                        <h4 className={infoStyle.name_title}>Hi! my name is</h4>
                        <h1 className={infoStyle.name}>Bhaskar Neupane</h1>
                        <h2 className={infoStyle.promise}>
                            I build software solutions for your problems.
                        </h2>
                        <p className={infoStyle.brief_intro}>
                            👋 Hi there! I&apos;m Bhaskar, a seasoned full-stack software developer specializing in Python for robust backend and automation solutions. I complement my Python skills with JavaScript, TypeScript, and Dart to craft user-friendly software experiences.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1T5ylRVGZAIy6kfaZViSfaj1ePzqCu2RX/view?usp=sharing"
                            target={"_blank"}
                            rel="noreferrer"
                            className={`${infoStyle.resume_btn} btn btn-link`}
                            onClick={ANALYTICS_CATEGORIES_ACTIVATOR.activator(ANALYTICS_CATEGORY_TYPES.resumeLinkClick, "https://drive.google.com/file/d/1516EXritCUF9ReQJXspGLepwF6mNbaaz/view?usp=sharing")}
                        >
                            RESUME
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Intro;