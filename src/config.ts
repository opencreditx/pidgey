import configuration from "@feathersjs/configuration";
import { resolve } from "path";
import { config } from "dotenv";

const feathersConfig = configuration();

console.log(`node_env = ${process.env.NODE_ENV}`);

config({
    path: resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

export default feathersConfig;
