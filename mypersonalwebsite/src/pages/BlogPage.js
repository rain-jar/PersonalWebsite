import React from 'react';
import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const BlogPage = ({blogs}) => {

  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <Box
        sx={{
          width: '100%',
          maxWidth: 800, // Limit max width for better readability
          margin: '0 auto', // Center content
          padding: '5px',
          backgroundColor: '#121212', // Dark background like the example
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          2024
        </Typography>
        <Stack spacing={2}>
          {blogs.map((post) => (
            <Box
              key={post.id}
              onClick={() => handleBlogClick(post.id)}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#1e1e1e',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: '#333333', // Slight color change on hover
                },
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {post.description}
                </Typography>
                <Typography variant="caption" color="gray">
                  {post.date}
                </Typography>
              </Box>
              <IconButton edge="end" sx={{ color: 'white' }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>



    </div>
  );
};

export default BlogPage;