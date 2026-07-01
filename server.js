require("dotenv").config();
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));

app.use("/api/opportunities", require("./routes/opportunityRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/employers", require("./routes/employerRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to the server", err.message);
  });
