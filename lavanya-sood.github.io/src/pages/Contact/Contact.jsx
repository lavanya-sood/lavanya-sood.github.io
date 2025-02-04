import React, { useState, useEffect } from "react";
import "../Contact/Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import chatbotIcon from "../../assets/chatboticon.png";

const Contact = ({ setContactBot }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Lavi Bot.", sender: "bot" },
    { text: "Thank you for visiting my website", sender: "bot" },
    { text: "How can I help you today?", sender: "bot" },
  ]);
  const [options, setOptions] = useState([
    "Looking for your resume.",
    "How do I contact you?",
    "Just saying hello. 😀",
  ]); // Initial options
  const [showOptions, setShowOptions] = useState(true);

  const handleOptionClick = (option) => {
    setMessages([...messages, { text: option, sender: "user" }]);
    setShowOptions(false); // Hide options immediately

    // Simulate bot response (customize as needed)
    setTimeout(() => {
      let botReply = [];
      switch (option) {
        case "Looking for your resume.":
          botReply.push("My resume is available as a PDF here");
          botReply.push(
            <a href="someLink" target="_blank">
              Resume
            </a>
          );
          break;
        case "How do I contact you?":
          botReply.push("You can contact me using LinkedIn");
          botReply.push("You can also email me on lavanyasood09@gmail.com");
          break;
        case "Just saying hello. 😀":
          botReply.push("Hello! 😁");
          botReply.push("Thank you for visiting my website");
          break;
        default:
          botReply = "Something went wrong";
      }

      const replyValues = [];

      botReply.map((br) => {
        replyValues.push({ text: br, sender: "bot" })
      })

      setMessages((prevMessages) => [
        ...prevMessages,
        ...replyValues,
        { text: "Can I help you with anything else", sender: "bot" },
      ]);

      setShowOptions(true); // Show options after bot reply
    }, 500);
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container" id="chat-container">
      <div className="chat-header">
        <div className="chat-header-name">
          <img src={chatbotIcon} className="chat-header-logo" />
          <div className="chat-header-text">
            <h4> Lavi Bot </h4>
            <p> Ask me a question </p>
          </div>
        </div>
        <button
          onClick={() => setContactBot(false)}
          className="chat-header-button"
        >
          X
        </button>
      </div>

      <AnimatePresence>
        <div className="messages-section">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`message-container ${message.sender}`} // Container for message and icon
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            >
              {message.sender === "bot" &&
              (index === 0 ||
                (index > 0 && messages[index - 1].sender === "user")) ? ( // Icon only for bot messages
                <motion.div
                  className="bot-icon-container"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={chatbotIcon} className="bot-icon" />
                </motion.div>
              ) : (
                <motion.div
                  className="bot-icon-container"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={chatbotIcon} className="bot-icon-hidden" />
                </motion.div>
              )}
              <div className="message">
                {" "}
                {/* Separate div for the message text */}
                {message.text}
              </div>
            </motion.div>
          ))}

          {showOptions &&
              <div className="options">
                {options.map((option) => (
                  <>
               
                    <button
                      key={option}
                      className="option-button"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  </>
                ))}
              </div>
            }
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Contact;
