import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import movieRoutes from "./Routes/movie.routes.js";
 import tvRoutes from "./Routes/tv.routes.js";
 import searchRoutes from "./Routes/search.routes.js";
 import cookieParser from "cookie-parser";
import { ENV_VARS } from "./configs/envVars.js";
import path, { join } from "path";
import { connectDB } from "./configs/db.js";
import cors from "cors";
import { protectRoute } from "./MiddleWare/protectRoute.js";

// app.get("/",(res,req)=>{
//   res.send("server is ready");
// });

// const cors = require('cors');

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname= path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);
app.use("/api/v1/search", searchRoutes);

// if(ENV_VARS.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname, "/Frontend/dist")));
//   app.get("*", (req,res)=>{
//     res.sendFile(path.resolve(__dirname, "Frontend", "dist","index.html"));
//   })
// };



app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);

  connectDB();
});

