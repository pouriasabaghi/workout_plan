import MuiCard from "@mui/material/Card";
import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Card = styled(MuiCard)(({ theme }) => ({
  maxWidth: 350,
  margin: "auto",
  padding: theme.spacing(3),
}));

const Container = styled(MuiBox)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));

function AuthContainer({ children }) {
  return (
    <Container>
      <Card  >{children}</Card>
    </Container>
  );
}

export default AuthContainer;
