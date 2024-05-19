import { Container, Typography, Button, ButtonGroup } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// Icons********************
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//Styles
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, pink, red } from "@mui/material/colors";

// **************************************************************
const theme = createTheme({
  palette: {
    primary: {
      main: "#0DB7F7",
      dark: "#069FD8",
    },
    secondary: pink,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const StyledButton = styled(Button)({
  border: "none",
  "& svg": {
    color: "#585858",
  },
  "&:hover": {
    border: "none",
    backgroundColor: "transparent",
    "& svg": {
      color: "#0DB7F7",
    },
  },
});
// Start the Function *****************************************
const HomeSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            alt="Hassan Sherafatmand"
            src="src/components/images/avatar/hassan.jpg"
          />
        </Stack>
      </Container>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color="textSecondary"
        >
          Hassan Sherafatmand
        </Typography>
      </Container>

      {/* Icons */}
      <Container sx={{ marginBottom: "25px" }}>
        <ButtonGroup>
          <StyledButton>
            <TwitterIcon color="primary" />
          </StyledButton>
          <StyledButton>
            <GitHubIcon color="primary" />
          </StyledButton>
          <StyledButton>
            <PinterestIcon color="primary" />
          </StyledButton>
          <StyledButton>
            <YouTubeIcon color="primary" />
          </StyledButton>
        </ButtonGroup>
      </Container>

      {/* Contact me Button */}
      <Container>
        <Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          sx={{ ml: 1 }}
        >
          Hired Me
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default HomeSection;
