const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/art-partners";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`Connected to the database ${MONGODB_URI}`))
  .catch((error) =>
    console.error(`An error ocurred trying to connect to ${MONGODB_URI}`, error)
  );
