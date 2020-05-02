import { ServiceAddons } from '@feathersjs/feathers';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOauth, OAuthStrategy } from '@feathersjs/authentication-oauth';

import { Application } from './declarations';
import { GoogleStrategy } from './auth';

declare module './declarations' {
  interface ServiceTypes {
    'authentication': AuthenticationService & ServiceAddons<any>;
  }
}

export default function(app: Application) {
    const authConfig = app.get('authentication');
    
    const authentication = new AuthenticationService(app);

    authentication.register('jwt', new JWTStrategy());
    authentication.register('local', new LocalStrategy());
    authentication.register('google', new GoogleStrategy());

    app.use('/authentication', authentication);
    app.configure(expressOauth());
}
