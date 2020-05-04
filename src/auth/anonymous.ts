import { Params } from "@feathersjs/feathers";
import {
    AuthenticationBaseStrategy,
    AuthenticationResult,
} from "@feathersjs/authentication";

class AnonymousStrategy extends AuthenticationBaseStrategy {
    async authenticate(
        authentication: AuthenticationResult,
        params: Params
    ): Promise<{ anonymous: boolean }> {
        console.log("Anonymous strategy called", authentication, params);
        return {
            anonymous: true,
        };
    }
}

export default AnonymousStrategy;
