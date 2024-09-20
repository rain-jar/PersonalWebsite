import React from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const projects = [
  {
    title: "JOB PORTAL",
    technologies: ["HTML/CSS", "React", "NodeJS", "Vercel"],
    image: "/JobPortal-Project.png", // You can replace this with actual images or icons later
    description:
      "A job portal website that allows users to post jobs and search for jobs based on their skills.",
  },

  {
    title: "Lavie514",
    technologies: ["HTML/CSS", "React/Redux", "NodeJS/Express", "PostgreSQL"],
    image: "/MTL.png",
    description: "This is a description of the project.",
  },
  {
    title: "Coming Soon",
    technologies: ["React", "Django", "MySQL"],
    image: "logo512.png",
    description: "This is a description of the project.",
  },
  {
    title: "Coming Soon",
    technologies: ["React", "Socket.io", "NodeJS", "PostgreSQL"],
    image: "logo512.png",
    description: "This is a description of the project.",
  },

  {
    title: "Coming Soon",
    technologies: ["React", "Socket.io", "NodeJS", "PostgreSQL"],
    image: "logo512.png",
    description: "This is a description of the project.",
  },

  // Add more projects here
];

const ProjectsPage = () => {
  const [isFlipped, setIsFlipped] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const handleMouseEnter = (index) => {
    console.log("Mouse Enter");
    setIsFlipped(index); // Set the flipped card index
  };

  const handleMouseLeave = () => {
    console.log("MouseLeave");
    setIsFlipped(null); // Reset the flip on mouse leave
  };

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        sx={{
          width: "100%", // Ensure Stack takes full width
          boxSizing: "border-box",
          marginLeft: "auto", // Adjust margin to auto-center
          marginRight: "auto", // Adjust margin to auto-center
          gap: 3, // Add gap between items
        }}
      >
        {projects.map((project, index) => (
          <Stack item xs={12} sm={6} md={4} key={index}>
            <div
              className="flip-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ flexBasis: "calc(300 - 24px)" }}
            >
              <div
                className={`flip-card-inner ${isFlipped === index ? "flipped" : ""}`}
                style={{
                  width: 276 /* Width for the tile */,
                  height: 340 /* Height for the tile */,
                  marginBottom: 3,
                }}
              >
                <div className="flip-card-front">
                  <Card
                    sx={{
                      //  flex: "1 1 calc(300px - 24px)", // Adjust width for 3 items per row with spacing
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                      boxShadow: 3,
                      backgroundImage:
                        "linear-gradient(to right bottom, #ffffff, #808080)",
                      backgroundColor: "rgba(255, 255, 255, 1)", // Off-white background
                      position: "absolute", // For positioning title over image
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image} // Replace with actual image paths
                      alt={project.title}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 120,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
                        color: "#fff", // White text color for contrast

                        padding: "8px 16px",
                        borderRadius: "10px 0px 0px 10px", // Rounded bottom-left corner
                        textAlign: "right", // Right-align the text
                      }}
                    >
                      <Typography variant="h6">{project.title}</Typography>
                    </Box>
                    <CardContent>
                      {project.technologies.map((tech, techIndex) => (
                        <Typography
                          key={techIndex}
                          variant="body2"
                          color="rgba(0, 0, 0)"
                          sx={{
                            margin: 0,
                            textEmphasis: "bold",
                            borderBottom:
                              techIndex !== project.technologies.length - 1
                                ? "1px solid #ddd"
                                : "none", // Add border except for the last item
                            paddingBottom: "8px",
                            textAlign: "center",
                            marginBottom: "8px",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage:
                        "linear-gradient(to right bottom, #838383, #2e2e2e)",
                      color: "white",
                      display: "flex",
                      textAlign: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Button
                      onClick={() => handleOpenDialog(project)}
                      variant="contained"
                      style={{ backgroundColor: "grey" }}
                    >
                      Demo
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </Stack>

      {/* Dialog for displaying more information */}
      {selectedProject && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedProject.title}</DialogTitle>
          <DialogContent>
            <Typography>{selectedProject.description}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Technologies used:
            </Typography>
            <ul>
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>
                  <Typography variant="body2">{tech}</Typography>
                </li>
              ))}
            </ul>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectsPage;
