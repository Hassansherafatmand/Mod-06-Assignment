import Main_Nav from "./Main_Nav";
import Logo from "./Logo";
import {
  Container,
  Typography,
  Button,
  ButtonGroup,
  Drawer,
} from "@mui/material";
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
import { purple, pink } from "@mui/material/colors";

const Header = () => {
  return (
    <header className="left">
      <Logo />
      <Main_Nav />
    </header>
  );
};

export default Header;
