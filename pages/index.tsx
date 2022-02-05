import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from "../components/PageComponents/HomeComponent";
import homeComponentsPropsDataType from "../components/PageComponents/HomeComponent/dataTypes";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../data/technologiesWorkedWith";

const Home = (props: homeComponentsPropsDataType) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Bhaskar Neupane</title>
        <meta name="description" content="Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent
        aboutMeData={props.aboutMeData}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      aboutMeData: TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST.map(data => data.data)
    }
  };
};

export default Home;
