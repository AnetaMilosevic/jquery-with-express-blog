const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
const title = lorem.generateWords(3);
const intro = lorem.generateSentences(2);

const blogContent = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
];

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(blogContent));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
