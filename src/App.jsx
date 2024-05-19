import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Create from "./components/main/Create";
import {
  Container,
  Typography,
  Button,
  ButtonGroup,
  Grid,
} from "@mui/material";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={8} md={10}>
          <Main />
          <Create />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
