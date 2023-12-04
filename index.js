import express from "express";
const app = express();
const port = process.env.PORT || 3000;

 app.use('/', (req, res) => {
    res.json({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
  });

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});