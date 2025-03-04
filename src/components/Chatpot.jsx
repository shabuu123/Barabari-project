
import React, { useState } from "react";
import "../style.css/Chatpot.css";

export const Chatpot = () => {
  const [showChatPage, setShowChatPage] = useState(false);

  const handleChatClick = () => {
    setShowChatPage(true);
  };

  const handleBackClick = () => {
    setShowChatPage(false);
  };

  return (
    <div>
      {!showChatPage ? (
        <div>
          <div className="logoDiv">
            <img src="barabari.jpeg" alt="Barabari logo" />
            <p>The Barabari Project</p>
          </div>
          <div className="publicImgDiv">
            <div className="logoDivPara">
              <h1>
                Let our students <br /> build your <span>ChatBots</span>
              </h1>
              <p>
                We are Section 8 Non-Profit upskilling candidates <br />
                from low-income families democratizing access <br />
                to tech design employment opportunities
              </p>
              <button>Hire from us</button>
            </div>
            <div>
              <img className="publicImg" src="team.jpeg" alt="A public Image" />
              <button className="chatButton" onClick={handleChatClick}>
                Chat with us
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chatPage">
          <button className="backButton" onClick={handleBackClick}>
            Back
          </button>
          <div className="chatContainer">
            <img src="search.jpeg" alt="search img" />
            <h1>Hi There!</h1>
            <p>Want to work with us?</p>
            <p>
              We are happy to discuss any potential projects. If you have a
              couple of minutes, we would love to hear more.
            </p>
            <button className="startChatButton">Start Chat</button>
            <p>Got any other queries?</p>
            <p>Please drop us an email at barabaricollective@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  );
};