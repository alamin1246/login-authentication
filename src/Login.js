import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import swal from "sweetalert";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validate(event) {
    event.preventDefault();
    if (username == "javascript" && password == "react") {
      // alert("Login Successful");
      swal(
        "Login Successful",
        "Congratulations your login successful!",
        "success"
      );
    } else {
      // alert("Login is Failed");
      swal("Login is Failed", "Please check your details once more", "error");
    }
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>User Authentication</h1>
          <form onSubmit={validate}>
            <input
              type="text"
              placeholder="User Name"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
