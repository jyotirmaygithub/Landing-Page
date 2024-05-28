import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const WhyChooseUs = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 14,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        fontWeight="bold"
        color="white"
        align="center"
        style={{fontWeight:900}}
      >
        Why Choose Us
      </Typography>
      <Typography variant="body1" color="white" align="center" gutterBottom>
        Looking for the perfect partner for your project? Look no further!
        Here's why you should choose us:
        <br />
        <br />
        Partner with us today and let's turn your vision into reality!
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Quality Solutions"
            primaryTypographyProps={{ color: "white", fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Expert Guidance"
            primaryTypographyProps={{ color: "white", fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Exceptional Support"
            primaryTypographyProps={{ color: "white", fontWeight: "bold" }}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default WhyChooseUs;
