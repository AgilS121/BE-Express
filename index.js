import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

const start = async function(a, b) {
  try {
    await db.authenticate()
    console.log('Database Connected')
  } catch (e) {
      console.log(e)
  }
}

app.use(cors({ credentials: true, origin: 'https://vite-react-donor-oop782wwz-agilsaps-projects.vercel.app/' }))
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))

app.options('*', cors());

app.use(router);

start();

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

export default app