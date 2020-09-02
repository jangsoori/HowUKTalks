import React from "react";
import { Menu, Segment } from "semantic-ui-react";

export default function Header() {
  return (
    <header className="header">
      <Segment>
        <Menu secondary>
          <Menu.Item name="logo">HowUKTalks</Menu.Item>
        </Menu>
      </Segment>
    </header>
  );
}
