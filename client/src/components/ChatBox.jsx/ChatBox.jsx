import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./ChatBox.css";
// import { format } from "timeago.js";
// import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, data, currentUser }) => {
  const handleEmails = (emails) => {
    let messages = [];
    emails.forEach((email) => {
      let snippet = email.snippet || "";
      const sent = email.labelIds.includes("SENT");

      let sender;
      if (sent) {
        sender = "Sent";
      } else {
        sender = "Received";
      }

      if (
        email.payload.headers.find((header) => header.name === "In-Reply-To")
      ) {
        const pattern = /wrote:\s*(.*)/g;
        const matches = snippet.matchAll(pattern);

        for (const match of matches) {
          snippet = match[1].trim();
        }
      }

      messages.push([sender, snippet]);
    });
    return messages;
  };

  const scroll = useRef();
  const imageRef = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  {/* <img
                    src={
                      userData?.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER +
                          userData.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  /> */}
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>{currentUser.name}</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body">
              {handleEmails(data[chat]).map((message) => (
                <>
                  {console.log(data[chat])}
                  <div
                    ref={scroll}
                    className={
                      message[0] === "Sent" ? "message own" : "message"
                    }
                  >
                    <span>{message[1]}</span>{" "}
                    {/* <span>{message.createdAt}</span> */}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <div className="send-button button">Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
