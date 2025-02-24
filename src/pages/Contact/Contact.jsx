import React, { useState, useEffect } from "react";
import "../Contact/Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import chatbotIcon from "../../assets/chatboticon.png";
import pdfIcon from "../../assets/pdfLogo.png";

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
            <a className="pdfLinkInfo" href="./Resume-Online.pdf" target="_blank">
             <img src={pdfIcon} className="pdfIcon"/> Resume
            </a>
          );
          break;
        case "How do I contact you?":
          botReply.push(
           <div className="messageWithLink"> <p> You can contact me on </p> <a className="linkInfo" href="https://www.linkedin.com/in/lavanya-sood/" target="_blank">
           LinkedIn
         </a> </div>
          );
          botReply.push(
            <div className="messageWithLink emailLink"> <p> You can also email me on  </p>  <a className="linkInfo" href="mailto:lavanyasood09@gmail.com">
            lavanyasood09@gmail.com
          </a> </div>
           );
          break;
        case "Just saying hello. 😀":
          botReply.push("Hello! 😁");
          botReply.push("Thank you so much for visiting my website");
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
        { text: "Can I help you with anything else?", sender: "bot" },
      ]);

      setShowOptions(true); // Show options after bot reply
    }, 500);
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatContainer" id="chatContainer">
      <div className="chatHeader">
        <div className="chatHeaderName">
          <img src={chatbotIcon} className="chatHeaderLogo" />
          <div className="chatHeaderText">
            <h4> Lavi Bot </h4>
            <p> Ask me a question </p>
          </div>
        </div>
        <button
          onClick={() => setContactBot(false)}
          className="chatHeaderButton"
        >
          ✖
        </button>
      </div>

      <AnimatePresence>
        <div className="messagesSection">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`messageContainer ${message.sender}`} // Container for message and icon
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            >
              {message.sender === "bot" &&
              (index === 0 ||
                (index > 0 && messages[index - 1].sender === "user")) ? ( // Icon only for bot messages
                <motion.div
                  className="botIconContainer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={chatbotIcon} className="botIcon" />
                </motion.div>
              ) : (
                <motion.div
                  className="botIconContainer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={chatbotIcon} className="botIconHidden" />
                </motion.div>
              )}
              <div className={`message mes${message.sender}`}>
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
                      className="optionButton"
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
