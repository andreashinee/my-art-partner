import React from "react";
import { Section, UserList } from "../../components";

function DiscoverScreenUsers() {
  return (
    <>
      <Section title="For today" icon="watch" className="mb-3">
        <UserList />
      </Section>

      <Section title="Most popular" icon="fire" className="mb-3">
        <UserList />
      </Section>

      <Section title="Discover" icon="wexplorer" className="mb-3">
        <UserList />
      </Section>
    </>
  );
}

export default DiscoverScreenUsers;