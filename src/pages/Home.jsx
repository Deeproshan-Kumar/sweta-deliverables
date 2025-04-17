import React from "react";
import { MasterForm } from "../components/forms";
import { Hero, Services } from "../components/sections";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <MasterForm />

      <section>
        <Services />
      </section>
    </>
  );
};

export default Home;
