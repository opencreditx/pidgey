import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import { Params, NullableId } from '@feathersjs/feathers';
import logger from '../../logger';


interface UserData {
    _id?:string,
    email:string,
    password:string,
    auth0Id: string,
    googleId: string,
    facebookId: string,
    twitterId: string,
    githubId: string
}

export class Users extends Service {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }

    find (params?: Params) {
        logger.info("Finding User with params: %j", params);
        return super.find(params);
    }

    create (data:UserData, params?: Params) {
        logger.info('Creating user with \ndata==', data, '\nparams==',params)
        return super.create(data, params);
    }

    remove (id:NullableId, params?: Params) {
        return super.remove(id, params);
    }
}
