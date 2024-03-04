import React from "react";
import Layout from "../components/layout/Layout";

export default function Home({q}) {
  return (<Layout>
    <div className="container">
      <div className="content">
         {q} news article
      </div>
    </div>
  </Layout>);
}
