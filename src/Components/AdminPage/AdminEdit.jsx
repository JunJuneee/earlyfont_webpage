import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { PublishRounded } from "@material-ui/icons";

function AdminEdit({ location, match }) {
  const [fontInfo, setFontInfo] = useState({});
  useEffect(() => {
    axios
      .post("/loadFontData", { id: match.params.id })
      .then((res) => setFontInfo(res.data.font));
  }, []);
  return (
    <div className="adminPage">
      <form className="adminPage_form">
        <TextField
          label="Title"
          value={fontInfo.title || ""}
          onChange={(e) => setFontInfo({ ...fontInfo, title: e.target.value })}
        />

        <TextField
          label="Description"
          value={fontInfo.description || ""}
          onChange={(e) =>
            setFontInfo({ ...fontInfo, description: e.target.value })
          }
        />
        <label className="form_label">
          썸네일 이미지 파일
          <PublishRounded />
          <input
            type="file"
            name="file1"
            accept=".png,.jpg"
            required
            onChange={(e) =>
              setFontInfo({ ...fontInfo, thumnail: e.target.files[0] })
            }
          />
          <p>{fontInfo?.thumnail}</p>
        </label>
        <label className="form_label">
          상세이미지 파일
          <PublishRounded />
          <input
            type="file"
            accept=".png,.jpg"
            required
            // value={fontInfo.detail_image}
            onChange={(e) =>
              setFontInfo({ ...fontInfo, detail_image: e.target.files[0] })
            }
          />
          <p>{fontInfo?.detail_image}</p>
        </label>
        <Button>저장</Button>
      </form>
    </div>
  );
}

export default AdminEdit;
