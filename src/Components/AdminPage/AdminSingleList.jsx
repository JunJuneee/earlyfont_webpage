import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteFont } from "../../Module/user";
import { Link } from "react-router-dom";

function AdminSingleList({ id, title, date }) {
  const dispatch = useDispatch();
  const deleteList = () => {
    axios.post("/api/delete", { id }).then((res) => {
      alert(res.data.success);
      dispatch(deleteFont(id));
    });
  };
  return (
    <div className="adminSingleList">
      <ul className="adminpage_table">
        <li className="adminpage_table_no">{id}</li>
        <li className="adminpage_table_title">{title}</li>
        <li className="adminpage_table_date ">{date} </li>
        <li className="adminpage_table_editing">
          <Button color="primary">
            <Link to={`admin_edit/${id}`}>수정</Link>{" "}
          </Button>{" "}
        </li>
        <li className="adminpage_table_delete">
          <Button color="secondary" onClick={deleteList}>
            삭제
          </Button>{" "}
        </li>
      </ul>
    </div>
  );
}

export default AdminSingleList;
