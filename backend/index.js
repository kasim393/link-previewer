const express = require("express");
const app = express();
const cors = require("cors");
const { getLinkPreview } = require("link-preview-js");
const PORT = process.env.PORT || 1337;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/new", (req, res) => {
  getLinkPreview(req.body.search).then((data) => res.json(data));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
