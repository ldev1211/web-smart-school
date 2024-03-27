import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/teacher/login",
      method: "POST",
      data: { username: "pthy.edu", password: "123" },
    })
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <h1>{isLoading ? "Loading..." : "Loaded"}</h1>;
}

export default HomePage;
