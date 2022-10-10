import React from "react";
import { Section, Users } from "../components";

function FindUser() {
  return (
    <>
      <Section title="My Partners" icon="heart" className="mb-3">
        <Users />
      </Section>

      <Section title="Most popular partners" icon="fire" className="mb-3">
        <Users />
      </Section>

      <Section title="Find new Partners" icon="explorer" className="mb-3">
        <Users />
      </Section>
    </>
  );
}

export default FindUser;
