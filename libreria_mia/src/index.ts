import { App } from 'vue';
import { createAuth0, Auth0VueClientOptions } from '@auth0/auth0-vue';

// Exportamos el plugin para que se use con app.use()
export const MiAuthLib = {
  install: (app: App, options: Auth0VueClientOptions) => {
    const auth0 = createAuth0(options);
    app.use(auth0);
  }
};

// Exportamos también los hooks originales por si los necesitan
export { useAuth0 } from '@auth0/auth0-vue';