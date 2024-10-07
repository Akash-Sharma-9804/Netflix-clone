import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import movieRoutes from "./Routes/movie.routes.js";
 import tvRoutes from "./Routes/tv.routes.js";
 import searchRoutes from "./Routes/search.routes.js";
 import cookieParser from "cookie-parser";
import { ENV_VARS } from "./configs/envVars.js";

import { connectDB } from "./configs/db.js";
import cors from "cors";
import { protectRoute } from "./MiddleWare/protectRoute.js";



const app = express();
const PORT = ENV_VARS.PORT;


app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);





app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);

  connectDB();
});

