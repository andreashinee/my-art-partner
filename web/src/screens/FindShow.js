import React from "react";
import { Section, Shows } from "../components";

function FindShow() {
  return (
    <>
      <Section title="For today" icon="watch" className="mb-3">
        <Shows />
      </Section>

      <Section title="Most popular" icon="fire" className="mb-3">
        <Shows />
      </Section>

      <Section title="Discover" icon="explorer" className="mb-3">
        <Shows />
      </Section>
    </>
  );
}

export default FindShow;


//57:38