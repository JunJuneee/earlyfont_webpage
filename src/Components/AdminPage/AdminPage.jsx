import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./AdminPage.css";
import AdminSingleList from "./AdminSingleList";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fontlists, setfontList } from "../../Module/user";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function AdminPage(props) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const fontlist = useSelector(fontlists);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    axios
      .get("/api/fontList")
      .then((res) => dispatch(setfontList(res.data.uploaded_list)));
  }, []);

  return (
    <div className="adminpage">
      <div className="estimate_buttons">
        <Button>
          <Link to="/estimates_upload">견적서 업로드</Link>{" "}
        </Button>
        <Button>
          <Link to="/estimates_edit">견적 수정</Link>{" "}
        </Button>
      </div>

      <div className="adminpage_listTitle">
        <ul className="adminpage_table">
          <li className="adminpage_table_no">No</li>
          <li className="adminpage_table_title">제목</li>
          <li className="adminpage_table_date">등록일</li>
          <li className="adminpage_table_edit">관리</li>
        </ul>
      </div>
      {fontlist.slice((page - 1) * 10, page * 10).map((item, index) => (
        <AdminSingleList
          key={index}
          id={item.id}
          title={item.title}
          date={item.date}
        />
      ))}
      <div className="adminpage_bottom">
        <Button>
          <Link to="/admin_upload">추가</Link>{" "}
        </Button>
        <Pagination
          className="adminpage_pagination"
          count={Math.ceil(fontlist.length / 10)}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default AdminPage;
