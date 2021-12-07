import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

function EstimatesEdit({ history }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  useEffect(() => {
    axios.get("/api/estimates_edit").then((res) => {
      setText1(res.data.estimates_lists[0].texts.join("?"));
      setText2(res.data.estimates_lists[1].texts.join("?"));
      setText3(res.data.estimates_lists[2].texts.join("?"));
      setText4(res.data.estimates_lists[3].texts.join("?"));
    });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/estimates_edit", {
        text1,
        text2,
        text3,
        text4,
      })
      .then((res) => {
        alert(res.data.success);
        history.push("/admin");
      });
  };
  return (
    <div className="estimate_edit">
      <form className="adminPage_form" onSubmit={onSubmit}>
        <p>주의사항</p>
        <p className="estimate_text">"?"를 기준으로 문단이 나눠집니다.</p>
        <br />
        <TextField
          label="베이직"
          value={text1 || ""}
          onChange={(e) => setText1(e.target.value)}
        />
        <TextField
          label="베이직플러스"
          value={text2 || ""}
          onChange={(e) => setText2(e.target.value)}
        />
        <TextField
          label="프리미엄"
          value={text3 || ""}
          onChange={(e) => setText3(e.target.value)}
        />
        <TextField
          label="프리미엄플러스"
          value={text4 || ""}
          onChange={(e) => setText4(e.target.value)}
        />

        <Button type="submit">저장</Button>
      </form>
    </div>
  );
}

export default EstimatesEdit;
