require("../config/db.config");

const Partner = require("../models/partners.model");

Partner.deleteMany({})
  .then(() => {




    
  })
  .catch((error) => {
    console.error(error);
  });
