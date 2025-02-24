import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const ReferModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Referral submitted successfully!");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Your Name" name="referrerName" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Your Email" name="referrerEmail" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Friend's Name" name="refereeName" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Friend's Email" name="refereeEmail" onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
