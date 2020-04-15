import React from "react";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import Brasil from "../../assets/brasil.jpg";
import EUA from "../../assets/eua.jpg";
import { setLanguage } from "../../actions/language";
import { Container, Image } from "./styles";

const ChangeLanguage = (props: PropsFromRedux) => {
  const { language, setLanguage: dispatchSetLanguage } = props;

  return (
    <Container>
      <Image
        onClick={() => dispatchSetLanguage("ptBR")}
        src={Brasil}
        alt="Brasil"
        selected={language === "ptBR"}
      />
      <Image
        onClick={() => dispatchSetLanguage("enUS")}
        src={EUA}
        alt="EUA"
        selected={language === "enUS"}
      />
    </Container>
  );
};

const mapStateToProps = (store: any) => ({
  language: store.languageState.language,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setLanguage,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ChangeLanguage);
