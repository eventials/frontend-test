import React from "react";
import {
  OptionContent,
  PopulationCount,
  PopulationData,
} from "../AutoComplete";
import { TeamOutlined } from "@ant-design/icons";
import { ICountry } from "../../configs/country";

const PopulationOption = ({ name, population }: ICountry) => (
  <OptionContent>
    <span>{name}</span>
    <PopulationData>
      <TeamOutlined />
      <PopulationCount>{population || "unknown"}</PopulationCount>
    </PopulationData>
  </OptionContent>
);

export default PopulationOption;
