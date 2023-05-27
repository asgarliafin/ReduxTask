import React, { useContext, useEffect } from "react";
import { Avatar, CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, createTheme, ThemeProvider, Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as Yup from "yup";
import Bg from '../../assets/loginBg.png';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(-1);
    }
  }, [navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      const locaStorageData = localStorage.getItem("users");
      if (locaStorageData) {
        const users = JSON.parse(locaStorageData);
        const user = users.find((e) => e.email === values.email);
        if (user) {
          if (user.password === values.password) {
            localStorage.setItem("token", user.firstName);
            setIsAuth(user.firstName);
            navigate("/Products");
          } 
        } else {
          alert("Sizin e-mail ünvanınız tapılmadı!");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Daxil Ol!
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={handleSubmit}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail ünvanınız"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Parol"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Xatırlanmaq istiyirsən?"
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Daxil Ol!
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container>
              <Grid item>
                <Link to="/Register" variant="body2">
                  {"Hesabın yoxdu? Hesab yarat!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
