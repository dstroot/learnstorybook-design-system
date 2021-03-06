import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

// this is for styled components
import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);

// this is for styled components
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
