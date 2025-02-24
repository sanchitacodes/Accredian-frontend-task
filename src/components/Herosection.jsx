import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import ReferModal from "./ReferModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Invite your friends and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} style={{ marginTop: "20px" }}>
        Refer Now
      </Button>
      <ReferModal open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default HeroSection;
