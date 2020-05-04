import mongoose from "mongoose";
import { Application } from "./declarations";
import logger from "./logger";

export default function (app: Application): void {
    const config = app.get("mongodb");
    logger.info(`Connecting to mongodb: ${config}`);
    mongoose
        .connect(app.get("mongodb"), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: "admin",
            auth: {
                user: "admin",
                password: "localdb",
            },
        })
        .then(() => {
            // logger.info(`Connected to Response: ${JSON.stringify(response.connection)}`);
            // console.log("Response:", response);
            logger.info("Connected to mongoose");
        })
        .catch((err) => {
            logger.error(err);
            process.exit(1);
        });

    mongoose.Promise = global.Promise;
    mongoose.model

    app.set("mongooseClient", mongoose);
}
