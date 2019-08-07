import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import selfie from "../images/avatar-square.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="mx-auto max-w-md text-center ">
      <p className=" mb-8">
        I'm a web developer with over two decades of front and back end
        experience. I currently specialize in single page javascript
        applications.
      </p>

      <img
        src={selfie}
        className="block mx-auto mb-8 rounded-full border-4 border-grey-darker"
        alt="Sean O'Hara"
      />

      <p className="mx-auto mb-8">Current location: Montréal, Canada</p>
    </div>
  </Layout>
);

export default IndexPage;
