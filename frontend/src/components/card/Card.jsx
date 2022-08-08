import React from "react";
import { motion } from "framer-motion";
import "./card.css";
const Card = ({ data, color }) => {
  return (
    <motion.div
      className="card"
      style={{ backgroundColor: color }}
      animate={{ x: 100 }}
    >
      <div className="card-header">
        <img src={data.favicons && data.favicons[0]} width="32px" alt="" />
        <h1>{data.title}</h1>
      </div>
      <div className="card-body">
        <p>{data.description}</p>
      </div>
      <div className="card-footer">
        <a href={data.url} target="_blank">
          Visit
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
