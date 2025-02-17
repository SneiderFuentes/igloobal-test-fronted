import React from "react";
import "../styles/Title.css"; 

interface Props {
  title: string;
  width?: string;
  fontSize?: string;
}

const Title: React.FC<Props> = ({ title, width = "95%", fontSize = "17px" }) => {
  return (
    <div className="title-container" style={{ width, fontSize }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;