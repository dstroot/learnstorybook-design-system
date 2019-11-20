import React from "react";

import { Meta, Story, Props, Preview } from "@storybook/addon-docs/blocks";
import {
  withKnobs,
  //   select,
  //   boolean,
  text,
  number
} from "@storybook/addon-knobs";

import { Loader } from ".";

export default {
  title: "Design System|Loader",
  component: Loader
};

export const Default = () => (
  <div>
    <Loader />
  </div>
);

Default.story = {
  name: "default"
};

export const Loaders = () => (
  <div>
    <Loader color="#1089ff" height={100} width={100} />
    <Loader color="orange" height={100} width={100} />
    <Loader color="red" height={100} width={100} />
  </div>
);

Loaders.story = {
  name: "colors"
};

export const LoaderSizes = () => (
  <div>
    <Loader color="#1089ff" height={100} width={100} />
    <Loader color="#1089ff" height={50} width={50} />
    <Loader color="#1089ff" height={25} width={25} />
    <Loader color="#1089ff" height={10} width={10} />
  </div>
);

LoaderSizes.story = {
  name: "loader sizes"
};

{
  /* <Story name="knobs" decorators="withKnobs">
  <Loader color={text("blue")} height={number(50)} width={number(50)} />
</Story>; */
}
