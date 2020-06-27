import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";
import { Params, NullableId, Id } from "@feathersjs/feathers";
import logger from "../../logger";

export interface User {
    _id: string;
    email: string;
    password: string;
    auth0Id: string;
    googleId: string;
    facebookId: string;
    twitterId: string;
    githubId: string;
}

export class Users extends Service {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }

    get(id: Id): Promise<User> {
        logger.info("Finding User with id: %s", id);
        return super.get(id);
    }

    create(data: Partial<User>, params?: Params): Promise<User> {
        logger.info("Creating user with \ndata==", data, "\nparams==", params);
        return super.create(data, params);
    }

    update(id: Id, data: User, params?: Params): Promise<User> {
        logger.info("Updating user with \n data==", data, "\nparams==", params);
        return super.update(id, data, params);
    }

    patch(id: NullableId, data: Partial<User>, params?: Params): Promise<User> {
        logger.info("Patching user with \n data==", data, "\nparams==", params);
        return super.patch(id, data, params);
    }

    remove(id: NullableId, params?: Params): Promise<User> {
        logger.info("Removing user with \nparams==", params);
        return super.remove(id, params);
    }
}
