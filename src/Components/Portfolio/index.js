import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  Imag,
  Overlay,
  OverlaySpan,
  BoxDiv
} from "./style.js";

const Portfolio = () => {

  const [imagesStat, setImages] = useState([])

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, [])

  const PortfolioImages = imagesStat.map((image) => {
    return (
      <BoxDiv key={image.id}>
          <Imag src={image.image} alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </BoxDiv>
    )
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      <div className="box">
        {PortfolioImages}
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
