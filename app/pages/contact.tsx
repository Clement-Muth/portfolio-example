import { NextSeo } from "next-seo";
import { Layout } from "library/components/common/Layout";
import { Contact } from "views/contact";

const ContactPage = () => {
  return (
    <>
      <NextSeo
        title="Clément Muth - Freelance Développeur web - React/Nextjs/Typescript"
        description="I care a lot about using web development for positive impact and enjoy creating web applications and delightful interfaces."
      />
      <Contact />
    </>
  );
};

ContactPage.Layout = Layout;

export default ContactPage;
