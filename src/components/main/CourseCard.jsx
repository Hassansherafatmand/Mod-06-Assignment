import {
  Container,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const CourseCard = ({ course, hadnleDelete }) => {
  return (
    <Container>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => hadnleDelete(course.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" color="primary">
              {course.title}
            </Typography>
          }
          subheader={course.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {course.details}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CourseCard;
