import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Sean O'Hara`, `contact`]} />

    <p className="text-center">
      I can be reached at{" "}
      <a
        href="mailto:sohara@sohara.com"
        className="text-grey-darkest font-bold no-underline"
      >
        sohara@sohara.com
      </a>
      .
    </p>
  </Layout>
);

export default ContactPage;
