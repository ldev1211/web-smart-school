import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();
  const usernameLogged = localStorage.getItem("username");
  useEffect(() => {
    if (usernameLogged != null) {
      navigate("/home", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  });

  return <h1>Hi</h1>;
}

export default SplashPage;
