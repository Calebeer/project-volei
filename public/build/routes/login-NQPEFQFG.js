import {
  require_db
} from "/build/_shared/chunk-IP4PDM3B.js";
import {
  useLoaderData
} from "/build/_shared/chunk-6T5TBTKX.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/login.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/login.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Login" }];
function LoginPage() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: data.users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    user.password,
    " - ",
    user.email
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-NQPEFQFG.js.map
