import React from "react";
import { Menu, Segment, Header } from "semantic-ui-react";

export default function SiteHeader() {
  return (
    <Menu
      className="header"
      style={{
        margin: 0,
        boxShadow: "0px 0px 61px -10px rgba(0,0,0,0.75)",
        zIndex: 2,
      }}
    >
      <Menu.Item>HowUKTalks</Menu.Item>
    </Menu>
  );
}
