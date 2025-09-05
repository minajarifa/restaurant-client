import React from "react";
import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Restaurant || Our Menu</title>
      </Helmet>
      <Cover title={`Pizza`}></Cover>
      <Cover title={`Burger`}></Cover>
      <Cover title={`kacci`}></Cover>
      <Cover title={`biriani`}></Cover>
      <div>menu</div>
    </div>
  );
}
