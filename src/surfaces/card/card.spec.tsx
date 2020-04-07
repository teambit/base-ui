import React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";

import { Card } from "./card";

it("should render default card", () => {
  const { getByText } = render(<Card>base Card</Card>);
  const rendered = getByText("base Card");
  expect(rendered).to.exist;
});

// it("should render card with high elevation", () => {
//   const { getByText } = render(<Card elevation="high">base Card</Card>);
//   const rendered = getByText("base Card");
//   expect(rendered.classList.contains('elevation-high')).to.equal(true);
// });




