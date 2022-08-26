import React from "react";

import { StatsMenu } from "./StatsMenu";
import { MainNavigation } from "./MainNavigation";
import { SideNavigation } from "./SideNavigation";

export const Header = () => {
  return (
    <header>
      <StatsMenu />
      <MainNavigation />
      <SideNavigation />
    </header>
  );
};
