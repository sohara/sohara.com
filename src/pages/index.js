import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import selfie from "../images/IMG_2590.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
      <p className="lg:w-1/2 lg:mx-auto mb-4">
        I'm a web developer with over a decade of front and back end experience.
        I currently specialize in single page javascript applications.
      </p>

      <img
        src={selfie}
        className="block mx-auto lg:w-1/2 mb-4"
        alt="Sean O'Hara"
      />

      <p className="lg:w-1/2 lg:mx-auto mb-4">
        Current location: Melbourne, AUS
      </p>
    </div>
  </Layout>
);

export default IndexPage;
