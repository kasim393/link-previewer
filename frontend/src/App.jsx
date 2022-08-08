import { useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/card/Card";
import { motion } from "framer-motion";
import validator from "validator";
function App() {
  const [datas, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [disable, setDisable] = useState(true);
  const colors = [
    "#d8eef2",
    "#b8deb6",
    "#ffffff",
    "#fcdb66",
    "#f6895a",
    "#f5bfcb",
    "#5ba291",
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (validator.isURL(e.target.value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const postData = async () => {
    try {
      const result = await axios.post("http://localhost:1337/new", {
        search,
      });
      setData([result.data, ...datas]);
      setSearch("");
      setDisable(true);
    } catch (error) {
      console.log(error);
      setDisable(true);
    }
  };

  return (
    <div className="App">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>Get a Free </span>Link Preview
      </motion.h1>
      <div className="search-container">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          type="text"
          placeholder="Enter link"
          onChange={handleChange}
          value={search}
        />
        <motion.button
          onClick={postData}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileTap={{ scale: 0.9 }}
          disabled={disable ? true : false}
        >
          View
        </motion.button>
      </div>
      <div className="card-container">
        {!datas ? (
          <p>loading...</p>
        ) : (
          datas.map((data) => {
            return (
              <Card
                key={data.id}
                data={data}
                color={colors[Math.floor(Math.random() * colors.length)]}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
