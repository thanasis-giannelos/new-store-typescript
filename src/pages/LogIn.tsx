import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signedInUser, registerUser, logInUser, logOutUser } = useContext(AuthContext);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    registerUser(email, password);
  }

  function handleSignOut() {
    logOutUser()
  }

  function handleLogIn() {
    logInUser(email, password);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2>Log In / Register</h2>
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        variant="outlined"
        type="email"
        sx={{ mt: 3 }}
        fullWidth
        value={email}
      />
      <TextField
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        variant="outlined"
        type="password"
        value={password}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button variant="outlined" color="secondary" onClick={handleLogIn}>
        Log in
      </Button>
      <Button variant="outlined" color="primary" type="submit">
        Register
      </Button>
      <Button variant="outlined" color="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
      <h2>
        {signedInUser ? signedInUser.uid : "no user connected"}
      </h2>
    </form>
  );
};

export default LogIn;