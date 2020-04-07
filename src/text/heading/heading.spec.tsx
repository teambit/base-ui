import React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";

import { Heading } from "./heading";

it("should render correct text in Heading", () => {
  const { getByText } = render(<Heading>Heading</Heading>);
  const rendered = getByText("Heading");
  expect(rendered).to.exist;
});

it("should render as h1 by default", () => {
  const { getByText } = render(<Heading>h1 heading</Heading>);
  const rendered = getByText("h1 heading");
  expect(rendered.tagName).to.be.equal("H1");
});

it("should render as h3 when defined", () => {
  const { getByText } = render(<Heading element="h3">h3 heading</Heading>);
  const rendered = getByText("h3 heading");
  expect(rendered.tagName).to.be.equal("H3");
});
