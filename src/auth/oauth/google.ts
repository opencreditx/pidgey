import { OAuthStrategy } from "@feathersjs/authentication-oauth";
import { Params } from "@feathersjs/feathers";

class GoogleStrategy extends OAuthStrategy {
    async getEntityData(profile: any, existing: any, params: Params) {
        console.log("Google strategy something happening:", profile);
        const baseData = await super.getEntityData(profile, existing, params);

        return {
            ...baseData,
            email: profile.email,
        };
    }
}

export default GoogleStrategy;
