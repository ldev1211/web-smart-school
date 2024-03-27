import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <MDBContainer className="my-5 gradient-form">
      <ToastContainer />
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center" style={{ margin: "12" }}>
              <img
                src="../../../logo.png"
                style={{ width: "185px", margin: "0px 0px 12px 0px" }}
                alt="logo"
              />
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="f1"
              onInput={(e) => {
                setUsername(e.currentTarget.value);
              }}
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="p2"
              onInput={(e) => {
                setPassword(e.currentTarget.value);
              }}
              type="password"
              size="lg"
            />
            <button
              onClick={() => {
                axios({
                  url: "http://localhost:3000/teacher/login",
                  method: "POST",
                  data: { username: username, password: password },
                })
                  .then((response) => {
                    console.log(response);
                    if (!response.data["error"]) {
                      toast.success("Đăng nhập thành công.", {
                        position: "bottom-right",
                        autoClose: 2000,
                      });
                      navigate("/home", { replace: true });
                    } else {
                      toast.error("Đăng nhập thất bại.", {
                        position: "bottom-right",
                        autoClose: 2000,
                      });
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
              style={{
                backgroundColor: "#DE2219",
                color: "white",
                fontSize: "22px",
                borderRadius: "8px",
                border: "none",
                padding: "12px",
              }}
            >
              Sign in
            </button>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
