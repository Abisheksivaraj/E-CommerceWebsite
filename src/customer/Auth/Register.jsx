import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, getUser } from "../../State/StateAuth/Action";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const { auth } = useSelector((store) => store);
  const [error, setError] = useState(""); // Define error state
  const [loading, setLoading] = useState(false); // Define loading state

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required");
    } else {
      setLoading(true);
      try {
        dispatch(register(formData));
        navigate("/login"); // Redirect to login page on successful registration
      } catch (err) {
        setError("Registration failed. Please try again."); // Handle registration error
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
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

          {/* Show error message */}
          {error && (
            <Grid item xs={12}>
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Grid>
          )}

          {/* Submit button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#190758",
                "&:hover": {
                  backgroundColor: "#150642",
                },
              }}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <Typography variant="body2" align="center" className="mt-4">
          Already a User?{" "}
          <Button
            onClick={() => navigate("/login")}
            sx={{ color: "#190758", textTransform: "none" }}
          >
            Login
          </Button>
        </Typography>
      </div>
    </div>
  );
};

export default Register;
