import { Box, IconButton, Slide } from "@mui/material";
import "./index.css";
import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function SkillsCarousel() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const duplicateCards = Array.from({ length: 10 }, (_, i) => <h2>{i}</h2>);
  //   console.log(duplicateCards);
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(duplicateCards);
  }, []);
  return (
    <div className="skills-carousel">
      <div className="">This is text</div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <IconButton onClick={handlePrevPage} sx={{ margin: 5 }}>
          <NavigateBeforeIcon />
        </IconButton>

        {cards.map((card, index) => {
          console.log(cards.length);
          <Slide direction={slideDirection} in={currentPage === index}>
            {/* <Box
              key={`card-${index}`}
              sx={{
                width: "100%",
                height: "100%",
                display: currentPage === index ? "block" : "none",
              }}
            >
              card
            </Box> */}
            console.log(cards.length);
            <div>
              <h1>Hi</h1>
            </div>
          </Slide>;
        })}

        <IconButton onClick={handleNextPage} sx={{ margin: 5 }}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </div>
  );
}
