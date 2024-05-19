import HomeSection from "./HomeSection";
import Data from "./Data";
import { Container } from "@mui/material";
import { Create } from "@mui/icons-material";

const Main = () => {
  return (
    <Container>
      <HomeSection />
      <br />

      <Data />
      <br />
    </Container>
  );
};

export default Main;
