import { NextSeo } from "next-seo";
import { Layout } from "library/components/common/Layout";
import { Works } from "views/works";

const WorksPage = () => {
  return (
    <>
      <NextSeo
        title="Clément Muth - Freelance Développeur web - React/Nextjs/Typescript"
        description="I care a lot about using web development for positive impact and enjoy creating web applications and delightful interfaces."
      />
      <Works />
    </>
  );
};

WorksPage.Layout = Layout;

export default WorksPage;
