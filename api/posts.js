const express = require("express");
const postsRouter = express.Router();
const { getALLPosts } = require("../db");

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();
});

postsRouter.get("/", async (req, res) => {
  const posts = await getALLPosts();
  res.send({
    posts,
  });
});

module.exports = postsRouter;
