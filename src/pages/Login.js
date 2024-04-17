import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    console.log(navigate);
  return (
    <div>
      <h1>Login Page Goes here</h1>
      <Button variant="contained" onClick={()=> navigate("/home")}>Contained</Button>
    </div>
  );
}

export default Login;
