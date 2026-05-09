import { createAuth0 as e, useAuth0 as t } from "@auth0/auth0-vue";
//#region src/index.ts
var n = { install: (t, n) => {
	let r = e(n);
	t.use(r);
} };
//#endregion
export { n as MiAuthLib, t as useAuth0 };
