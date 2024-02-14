var morgan = require("morgan");
const logger = async (req, res, next) => {
  // console.log(`Request:
  //  ${req.method}
  // ${req.originalUrl}
  // at ${new Date().toISOString()}`);
  // console.log(`Request query: ${JSON.stringify(req.query)}`);
  // console.log(`Request params: ${JSON.stringify(req.params)}`);
  // next();

  // create a write stream (in append mode)
//   const accessLogStream = fs.createWriteStream(
//     path.join(__dirname, "access.log"),
//     { flags: "a" }
//   );

  // setup the logger
//   morgan("combined", { stream: accessLogStream });
    morgan("combined");
    next();
};

module.exports = logger;
