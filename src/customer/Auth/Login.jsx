import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../State/StateAuth/Action";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError("All fields are required");
    } else {
      setError("");
      dispatch(login(formData));
      console.log("Registering with:", formData);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-4">
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              className="bg-[#190758]"
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <p className="text-center mt-4">
          Already an User ?{" "}
          <Button
            onClick={() => navigate("/register")}
            className="text-[#190758] cursor-pointer"
          >
            Register
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
