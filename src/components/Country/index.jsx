import React from "react";
import { ItemContainer } from "./styles";
import Button from "../Button";
import Input from "../EditInPlace";

const Country = ({ country, ...props }) => {
  const deleteCountry = () => {
    props.deleteCountry(country.code);
  };
  const updateCountry = value => {
    props.updateCountry(country.code, value);
  };
  return (
    <ItemContainer>
      <div>
        País:
        <span>{country.name}</span>
      </div>
      <div>
        População:
        <Input
          viewAs="span"
          value={country.population}
          alterar={updateCountry}
        />
      </div>
      <div>
        <Button label="Deletar" color="" onClick={deleteCountry}></Button>
      </div>
    </ItemContainer>
  );
};

export default Country;
