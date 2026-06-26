require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("All env keys:", Object.keys(process.env).filter(k => k.includes("MONGO")));
