import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./AdminLogin.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Module/user";

function AdminLogin() {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (id === "admin" && password === "euxeux88") {
      dispatch(login({ user: "eux" }));
      history.push("/adminpage");
    } else {
      setid("");
      setPassword("");
      alert("아이디 혹은 비밀번호를 확인해 주세요.");
    }
  };
  return (
    <div className="admin">
      <form onSubmit={onSubmit}>
        <TextField
          id="standard-basic"
          label="ID"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="PASSWORD"
          inputProps={{ type: "password" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          onClick={onSubmit}
        >
          로그인
        </Button>
      </form>
    </div>
  );
}

export default AdminLogin;
