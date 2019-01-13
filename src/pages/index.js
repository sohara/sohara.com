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
      <img src={selfie} className="block mx-auto w-3/4" alt="Sean O'Hara" />

      <h2 className="inline-block my-8 p-3">Sean O'Hara</h2>

      <p>
        I'm a web developer with over a decade of experience specializing in
        single page applications.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
