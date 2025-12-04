import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  connection_str: process.env.NODE_EXPRESS_EXPERT_CONNECTION_STR,
  port: process.env.NODE_EXPRESS_EXPERT_PORT,
};

export default config;
