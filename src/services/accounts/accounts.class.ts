import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";
import { Id } from "@feathersjs/feathers";
import logger from "../../logger";

export class Accounts extends Service {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }

    get(id: Id): Promise<Account> {
        logger.info("Finding Account with id: %s", id);
        return super.get(id);
    }
}
