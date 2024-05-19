import { Container, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useNavigate } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// import { useHistory, useNavigate } from "react-router-dom";

import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const navigate = useNavigate;
  const [category, setCategory] = useState("Web Development");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setTitleError(false);

    if (title == "") setTitleError(true);
    if (details == "") setTitleError(true);

    if (title && details) {
      console.log(title, details);
      fetch("http://localhost:8000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create course!");
          }
          return response.json(); // Parse the response as JSON if successful
        })
        .then((data) => {
          console.log("Course created successfully:", data);
          //Clear the fields
          setTitle("");
          setDetails("");
          setCategory("Web Development");
          navigate("/"); // Redirect to the root path
        });

      // Clear the form after successful creation
      e.target.reset();
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Course
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Course Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          error={detailsError}
        />

        {/* Radio Buttons */}
        <Container>
          <FormControl>
            <FormLabel>Course Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="Web Development"
                control={<Radio />}
                label="Web Development"
              />
              <FormControlLabel
                value="Programming"
                control={<Radio />}
                label="Programming"
              />
              <FormControlLabel
                value="Front-end Design"
                control={<Radio />}
                label="Front-end Design"
              />
              <FormControlLabel
                value="Back-end Programing"
                control={<Radio />}
                label="Back-end Programing"
              />
            </RadioGroup>
          </FormControl>
        </Container>

        <Container>
          <Button
            onClick={() => console.log("You clicked me")}
            type="submit"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default Create;
