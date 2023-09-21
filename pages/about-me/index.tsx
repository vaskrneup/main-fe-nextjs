import { GetStaticProps } from "next";
import AboutMePagesComponentPropsDataType from "../../components/PageComponents/AboutMePageComponent/dataType";
import AboutMeComponent from "../../components/PageComponents/HomeComponent/AboutMe";
import MetaManager from "../../components/utils/MetaManager";
import { META_IMAGES } from "../../data/constants";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../../data/technologiesWorkedWith";

const AboutMe = (props: AboutMePagesComponentPropsDataType) => {
    return (
        <>
            <MetaManager
                title="About Me"
                keywords={["about", "Bhaskar Neupane", "vaskrneup"]}
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: "👋 Hi there! I'm Bhaskar Neupane, a seasoned full-stack software developer specializing in Python for robust backend and automation solutions. I complement my Python skills with JavaScript, TypeScript, and Dart to craft user-friendly software experiences.",
                    title: "About Me",
                    imageUrl: META_IMAGES.aboutMeImage,
                    type: "blog",
                }}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <AboutMeComponent
                {...props}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            aboutMeData: TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST.map(data => data.data),
            isHomePage: false,
        }
    };
};

export default AboutMe;