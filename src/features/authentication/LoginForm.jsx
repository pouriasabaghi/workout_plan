import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AuthContainer from "./AuthContainer";
import Logo from "../../ui/Logo";

function LoginForm() {
  return (
    <AuthContainer>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Logo />
        <FormControl sx={{ width: "100%" }}>
          <FormLabel sx={{ marginBottom: 1 }} htmlFor="email">
            Email
          </FormLabel>
          <TextField
            autoComplete="email"
            name="email"
            required
            fullWidth
            id="email"
            placeholder="Enter your email address"
            size="small"
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <FormLabel sx={{ marginBottom: 1 }} htmlFor="password">
            Password
          </FormLabel>
          <TextField
            autoComplete="password"
            name="password"
            required
            fullWidth
            id="password"
            placeholder="Enter your password"
            size="small"
          />
        </FormControl>

        <Button type="submit" fullWidth variant="contained">
          Login
        </Button>
      </Box>
    </AuthContainer>
  );
}

export default LoginForm;
