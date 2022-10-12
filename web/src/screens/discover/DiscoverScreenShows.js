import React from "react";
import Section from "../../components/sections/section";
import Shows from "../../components/shows/Shows";


function DiscoverScreenShows() {
  return (
    <>
      <Section title="For today" icon="watch" className="mb-3">
        <Shows />
      </Section>

      <Section title="Most popular" icon="fire" className="mb-3">
        <Shows />
      </Section>

      <Section title="Discover" icon="wexplorer" className="mb-3">
        <Shows />
      </Section>
    </>
  );
}

export default DiscoverScreenShows;
