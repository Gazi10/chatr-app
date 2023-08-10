import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Conversation = ({ list, data, currentUser }) => {
  return (
    <>
      <div
        className="follower conversation"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <div
            className="followerImage"
            style={{
              backgroundColor: "#45a29e",
              fontSize: "1rem",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {list.replace(/<[^>]+>/g, "")[0]}
          </div>
        </div>
        <div className="name" style={{ fontSize: "1rem", marginLeft: "10px" }}>
          <span>{list.replace(/<[^>]+>/g, "")}</span>
        </div>
      </div>

      <hr style={{ width: "95%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
