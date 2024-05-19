import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  Container,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Paper,
} from "@mui/material";
import { Create } from "@mui/icons-material";

const Data = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // take the Endpoint:http://localhost:8000/courses via fetch() api
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const hadnleDelete = async (id) => {
    await fetch("http://localhost:8000/courses" + id, {
      method: "DELETE",
    });

    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses);
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Courses:
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ minWidth: "320px" }}
            key={course.id}
          >
            <CourseCard course={course} hadnleDelete={hadnleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Data;
