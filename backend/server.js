const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/users", require("./routes/userRoutes"));
