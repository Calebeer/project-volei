var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "8ca25e4d", entry: { module: "/build/entry.client-DJU3NHQV.js", imports: ["/build/_shared/chunk-7434G52G.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AJ5HZC6C.js", imports: ["/build/_shared/chunk-5B6WUN7S.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/NavLink": { id: "routes/NavLink", parentId: "root", path: "NavLink", index: void 0, caseSensitive: void 0, module: "/build/routes/NavLink-SWLRKJV3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Navbar": { id: "routes/Navbar", parentId: "root", path: "Navbar", index: void 0, caseSensitive: void 0, module: "/build/routes/Navbar-N7Y5XNI4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/asd": { id: "routes/asd", parentId: "root", path: "asd", index: void 0, caseSensitive: void 0, module: "/build/routes/asd-6I6L2CLI.js", imports: ["/build/_shared/chunk-KW6WLGT6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro_reme": { id: "routes/cadastro_reme", parentId: "root", path: "cadastro_reme", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro_reme-DEO3VAKF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cookie.server": { id: "routes/cookie.server", parentId: "root", path: "cookie/server", index: void 0, caseSensitive: void 0, module: "/build/routes/cookie.server-DIVTWPGL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/createacount": { id: "routes/createacount", parentId: "root", path: "createacount", index: void 0, caseSensitive: void 0, module: "/build/routes/createacount-MASRCXAH.js", imports: ["/build/_shared/chunk-PZ44E3BI.js", "/build/_shared/chunk-SSMI3UTE.js", "/build/_shared/chunk-KW6WLGT6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/errorpassword": { id: "routes/errorpassword", parentId: "root", path: "errorpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/errorpassword-XHNI32TO.js", imports: ["/build/_shared/chunk-SSMI3UTE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-6HRXH42S.js", imports: ["/build/_shared/chunk-FFZXZXWH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-XXFT5PKZ.js", imports: ["/build/_shared/chunk-ESPMSM7J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-GRN7DM3J.js", imports: ["/build/_shared/chunk-PZ44E3BI.js", "/build/_shared/chunk-SSMI3UTE.js", "/build/_shared/chunk-KW6WLGT6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login_cliente": { id: "routes/login_cliente", parentId: "root", path: "login_cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/login_cliente-ZCX3TVX4.js", imports: ["/build/_shared/chunk-KW6WLGT6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-3V5CHUD5.js", imports: ["/build/_shared/chunk-ESPMSM7J.js", "/build/_shared/chunk-AC7UQQEL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-LO43XG3Z.js", imports: ["/build/_shared/chunk-5B6WUN7S.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-FO7FREUR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-64FQQFJ5.js", imports: ["/build/_shared/chunk-5B6WUN7S.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/root": { id: "routes/root", parentId: "root", path: "root", index: void 0, caseSensitive: void 0, module: "/build/routes/root-EZRNH4KT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/teste": { id: "routes/teste", parentId: "root", path: "teste", index: void 0, caseSensitive: void 0, module: "/build/routes/teste-M22V2QLQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/venda": { id: "routes/venda", parentId: "root", path: "venda", index: void 0, caseSensitive: void 0, module: "/build/routes/venda-APSWMAFP.js", imports: ["/build/_shared/chunk-FFZXZXWH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-8CA25E4D.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/routes/Navbar.tsx
var require_Navbar = __commonJS({
  "app/routes/Navbar.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_server()), import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user3 = await getUserById(userId);
  if (user3)
    return user3;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZV7QAIVS.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro_reme.tsx
var cadastro_reme_exports = {};
__export(cadastro_reme_exports, {
  default: () => Example,
  loader: () => loader2
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let queryParams = new URL(request.url).searchParams, email = queryParams.get("email"), password = queryParams.get("password");
  return { sucess: !0 };
};
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 36,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Cadastro Rem\xE9dio" }, void 0, !1, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro_reme.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "space-y-6", action: "#", method: "get", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Rem\xE9dio" }, void 0, !1, {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            name: "email",
            type: "text",
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadastro_reme.tsx",
            lineNumber: 53,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Pre\xE7o" }, void 0, !1, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          name: "password",
          type: "text",
          className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 62,
          columnNumber: 19
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          children: "Salvar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 72,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro_reme.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cadastro_reme.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro_reme.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadastro_reme.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this);
}

// app/routes/cookie.server.ts
var cookie_server_exports = {};
__export(cookie_server_exports, {
  userPrefs: () => userPrefs
});
var import_node4 = require("@remix-run/node"), userPrefs = (0, import_node4.createCookie)("user-prefs", {
  maxAge: 604800
  // one week
});

// app/routes/errorpassword.tsx
var errorpassword_exports = {};
__export(errorpassword_exports, {
  default: () => ErrorPassword
});
var import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ErrorPassword() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_solid.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/routes/errorpassword.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/errorpassword.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Senhas digitadas diferentes, tente novamente" }, void 0, !1, {
      fileName: "app/routes/errorpassword.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/errorpassword.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/errorpassword.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/errorpassword.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/login_cliente.tsx
var login_cliente_exports = {};
__export(login_cliente_exports, {
  default: () => Example2,
  loader: () => loader3
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let queryParams = new URL(request.url).searchParams, nome_cliente = queryParams.get("nome_cliente"), cpf = queryParams.get("cpf"), endereco = queryParams.get("endereco"), telefone = queryParams.get("telefone");
  return nome_cliente ? cpf ? endereco ? telefone ? (await prisma.cliente.create({
    data: {
      nome: nome_cliente,
      cpf,
      endereco,
      telefone
    }
  }), { sucess: !0 }) : { error: "N\xE3o foi fornecido um nome" } : { error: "N\xE3o foi fornecido um nome" } : { error: "N\xE3o foi fornecido uma idade" } : { error: "N\xE3o foi fornecido um nome" };
};
function Example2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/login_cliente.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Cadastro Cliente" }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login_cliente.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { className: "space-y-6", action: "#", method: "get", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Cliente" }, void 0, !1, {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              name: "nome_cliente",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login_cliente.tsx",
              lineNumber: 84,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "CPF" }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            name: "cpf",
            type: "text",
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 93,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Endere\xE7o" }, void 0, !1, {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              name: "endereco",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login_cliente.tsx",
              lineNumber: 105,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Telefone" }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            name: "telefone",
            type: "text",
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 114,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login_cliente.tsx",
            lineNumber: 119,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login_cliente.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login_cliente.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login_cliente.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login_cliente.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login_cliente.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => NoteDetailsPage,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.$noteId.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader4 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node5.json)({ note });
}, action = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node5.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes.$noteId.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react3.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 12
  }, this);
}

// app/routes/createacount.tsx
var createacount_exports = {};
__export(createacount_exports, {
  action: () => action2,
  default: () => CreateAcount
});
var import_react4 = require("@remix-run/react");

// app/layout/successemail.tsx
var import_solid2 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SuccessfullyEmail({ text }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid2.XCircleIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/layout/successemail.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layout/successemail.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-medium text-green-800", children: "asdad" }, void 0, !1, {
      fileName: "app/layout/successemail.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layout/successemail.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/successemail.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/layout/successemail.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/layout/ErrorMessage.tsx
var import_solid3 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ErrorMessage({ text }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid3.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/layout/ErrorMessage.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layout/ErrorMessage.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: text }, void 0, !1, {
      fileName: "app/layout/ErrorMessage.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layout/ErrorMessage.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout/ErrorMessage.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/layout/ErrorMessage.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/createacount.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), address = formData.get("address"), email = formData.get("email"), password = formData.get("password"), password2 = formData.get("password2");
  if (await prisma.user.findFirst({
    where: {
      email
    }
  }))
    return {
      error: "email j\xE1 cadastrado"
    };
  if (password !== password2)
    return console.log("senhas diferentes"), {
      password_equal: "senhas diferentes"
    };
  if (password.length && password.length < 5)
    return {
      errorr: "senha fraca, digite uma senha maior"
    };
  let cria = await prisma.user.create({
    data: {
      name,
      address,
      email,
      password
    }
  });
  return console.log(cria), { success: "email cadastrado com sucesso" };
};
function CreateAcount() {
  let data = (0, import_react4.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 71,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Fa\xE7a seu cadastro" }, void 0, !1, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Form, { className: "space-y-6", action: "#", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Completo" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite seu nome aqui",
              name: "name",
              type: "text",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 88,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Endere\xE7o" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "rua, n\xFAmero da casa e bairro",
              name: "address",
              type: "text",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 102,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Email" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite um email v\xE1lido",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 117,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "password",
              placeholder: "Digite sua senha",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 137,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Confirme sua senha" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite a senha novamente",
              name: "password2",
              type: "password",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading- p-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 151,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              children: "Cadastrar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 165,
              columnNumber: 17
            },
            this
          ),
          data != null && data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorMessage, { text: "Email j\xE1 cadastrado" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 171,
            columnNumber: 30
          }, this) : "",
          data != null && data.errorr ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorMessage, { text: "senha fraca, digite uma senha maior" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 172,
            columnNumber: 31
          }, this) : "",
          data != null && data.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SuccessfullyEmail, { text: "email cadastrado com sucesso" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 173,
            columnNumber: 32
          }, this) : "",
          data != null && data.password_equal ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorMessage, { text: "Senhas incorretas" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 174,
            columnNumber: 38
          }, this) : ""
        ] }, void 0, !0, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Voc\xEA j\xE1 tem uma conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "/login", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "J\xE1 tenho uma conta" }, void 0, !1, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react5.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action3,
  default: () => NewNotePage
});
var import_node6 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_react7 = require("react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node6.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node6.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node6.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react6.useActionData)(), titleRef = (0, import_react7.useRef)(null), bodyRef = (0, import_react7.useRef)(null);
  return (0, import_react7.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react6.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 100,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/routes/NavLink.tsx
var NavLink_exports = {}, import_react8 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");

// server-entry-module:@remix-run/dev/server-build
var route10 = __toESM(require_Navbar());

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  return await prisma.user.findFirst({
    where: {
      email,
      password
    }
  }) ? (0, import_node7.redirect)("/inicio") : (console.log("N\xE3o encontrado"), {
    error: "Usu\xE1rio ou senha incorretos"
  });
};
function Login() {
  let data = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 52,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Fa\xE7a seu login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react9.Form, { className: "space-y-6", action: "#", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            placeholder: "Digite seu email",
            required: !0,
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 69,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            placeholder: "Digite sua senha",
            required: !0,
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 "
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Entrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 107,
            columnNumber: 17
          },
          this
        ),
        data != null && data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ErrorMessage, { text: "Usu\xE1rio ou senha incorretos" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 113,
          columnNumber: 30
        }, this) : "",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
          "Voc\xEA j\xE1 tem uma conta?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "/createacount", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "Criar nova conta" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/utils.ts
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react10.useMatches)(), route = (0, import_react11.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user3) {
  return user3 && typeof user3 == "object" && typeof user3.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/notes.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node8.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react12.useLoaderData)(), user3 = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react12.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: user3.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react12.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react12.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react12.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/teste.tsx
var teste_exports = {};
__export(teste_exports, {
  action: () => action5,
  default: () => Home,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader) || {};
  return (0, import_node9.json)({ showBanner: cookie.showBanner });
}
async function action5({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader) || {};
  return (await request.formData()).get("bannerVisibility") === "hidden" && (cookie.showBanner = !1), (0, import_node9.redirect)("/", {
    headers: {
      "Set-Cookie": await userPrefs.serialize(cookie)
    }
  });
}
function Home() {
  let { showBanner } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    showBanner ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Link, { to: "/sale", children: "Don't miss our sale!" }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "bannerVisibility",
            value: "hidden"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/teste.tsx",
            lineNumber: 47,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { type: "submit", children: "Hide" }, void 0, !1, {
          fileName: "app/routes/teste.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Welcome!" }, void 0, !1, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/teste.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this);
}

// app/routes/venda.tsx
var venda_exports = {};
__export(venda_exports, {
  default: () => Example3
});
var import_react14 = require("react"), import_react15 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, navigation = [
  { name: "Dashboard", href: "#", current: !0 },
  { name: "Team", href: "#", current: !1 },
  { name: "Projects", href: "#", current: !1 },
  { name: "Calendar", href: "#", current: !1 }
], userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "min-h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Disclosure, { as: "nav", className: "border-b border-gray-200 bg-white", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex h-16 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-shrink-0 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "img",
              {
                className: "block h-8 w-auto lg:hidden",
                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                alt: "Your Company"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/venda.tsx",
                lineNumber: 46,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "img",
              {
                className: "hidden h-8 w-auto lg:block",
                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                alt: "Your Company"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/venda.tsx",
                lineNumber: 51,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "a",
            {
              href: item.href,
              className: classNames(
                item.current ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
              ),
              "aria-current": item.current ? "page" : void 0,
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 59,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "button",
            {
              type: "button",
              className: "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                  fileName: "app/routes/venda.tsx",
                  lineNumber: 80,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/venda.tsx",
                  lineNumber: 81,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 76,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Menu, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Menu.Button, { className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                fileName: "app/routes/venda.tsx",
                lineNumber: 88,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }, void 0, !1, {
                fileName: "app/routes/venda.tsx",
                lineNumber: 89,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/venda.tsx",
              lineNumber: 87,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/venda.tsx",
              lineNumber: 86,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              import_react15.Transition,
              {
                as: import_react14.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    ),
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/venda.tsx",
                    lineNumber: 105,
                    columnNumber: 33
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/venda.tsx",
                  lineNumber: 103,
                  columnNumber: 29
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/venda.tsx",
                  lineNumber: 101,
                  columnNumber: 25
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/venda.tsx",
                lineNumber: 92,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 85,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 124,
            columnNumber: 23
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 128,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 123,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Disclosure.Panel, { className: "sm:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "space-y-1 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          import_react15.Disclosure.Button,
          {
            as: "a",
            href: item.href,
            className: classNames(
              item.current ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
              "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
            ),
            "aria-current": item.current ? "page" : void 0,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/routes/venda.tsx",
            lineNumber: 138,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "border-t border-gray-200 pb-3 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0, !1, {
              fileName: "app/routes/venda.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/venda.tsx",
              lineNumber: 156,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ml-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-base font-medium text-gray-800", children: user.name }, void 0, !1, {
                fileName: "app/routes/venda.tsx",
                lineNumber: 160,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-sm font-medium text-gray-500", children: user.email }, void 0, !1, {
                fileName: "app/routes/venda.tsx",
                lineNumber: 161,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/venda.tsx",
              lineNumber: 159,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "button",
              {
                type: "button",
                className: "ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                    fileName: "app/routes/venda.tsx",
                    lineNumber: 167,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_outline.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/routes/venda.tsx",
                    lineNumber: 168,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/venda.tsx",
                lineNumber: 163,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-3 space-y-1", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_react15.Disclosure.Button,
            {
              as: "a",
              href: item.href,
              className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 173,
              columnNumber: 23
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 171,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-3xl font-bold leading-tight tracking-tight text-gray-900", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/venda.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/venda.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Example4
});
var import_react16 = require("react"), import_react17 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), user2 = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, navigation2 = [
  { name: "Dashboard", href: "#", current: !0 },
  { name: "Team", href: "#", current: !1 },
  { name: "Projects", href: "#", current: !1 },
  { name: "Calendar", href: "#", current: !1 },
  { name: "Reports", href: "#", current: !1 }
], userNavigation2 = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "min-h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Disclosure, { as: "nav", className: "bg-gray-800", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex h-16 items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "img",
            {
              className: "h-8 w-8",
              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
              alt: "Your Company"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 49,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 48,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-10 flex items-baseline space-x-4", children: navigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "a",
            {
              href: item.href,
              className: classNames2(
                item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              ),
              "aria-current": item.current ? "page" : void 0,
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 58,
              columnNumber: 27
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 56,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 55,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 47,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-4 flex items-center md:ml-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "button",
            {
              type: "button",
              className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 81,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 82,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline2.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 83,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 77,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Menu, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Menu.Button, { className: "relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 90,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 91,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user2.imageUrl, alt: "" }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 92,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.tsx",
              lineNumber: 89,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              import_react17.Transition,
              {
                as: import_react16.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: classNames2(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    ),
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 108,
                    columnNumber: 35
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 106,
                  columnNumber: 31
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 104,
                  columnNumber: 27
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home.tsx",
                lineNumber: 95,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 87,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 76,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Disclosure.Button, { className: "relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute -inset-0.5" }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 128,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 129,
            columnNumber: 23
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline2.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 131,
            columnNumber: 25
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline2.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 133,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 127,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 125,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Disclosure.Panel, { className: "md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react17.Disclosure.Button,
          {
            as: "a",
            href: item.href,
            className: classNames2(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            ),
            "aria-current": item.current ? "page" : void 0,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 143,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border-t border-gray-700 pb-3 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center px-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: user2.imageUrl, alt: "" }, void 0, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 159,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-base font-medium leading-none text-white", children: user2.name }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 163,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-sm font-medium leading-none text-gray-400", children: user2.email }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 164,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.tsx",
              lineNumber: 162,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "button",
              {
                type: "button",
                className: "relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 170,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline2.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 172,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/home.tsx",
                lineNumber: 166,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-3 space-y-1 px-2", children: userNavigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_react17.Disclosure.Button,
            {
              as: "a",
              href: item.href,
              className: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 177,
              columnNumber: 23
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 175,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 199,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action6,
  default: () => Join,
  loader: () => loader7,
  meta: () => meta
});
var import_node10 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => await getUserId(request) ? (0, import_node10.redirect)("/") : (0, import_node10.json)({}), action6 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node10.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node10.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user3 = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user3.id
  });
}, meta = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react18.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react18.useActionData)(), emailRef = (0, import_react19.useRef)(null), passwordRef = (0, import_react19.useRef)(null);
  return (0, import_react19.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react18.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react18.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 151,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/root.tsx
var root_exports2 = {};
__export(root_exports2, {
  default: () => Example5
});
var import_solid4 = require("@heroicons/react/24/solid"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Example5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("form", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "This information will be displayed publicly so be careful what you share." }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", children: "Username" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "flex select-none items-center pl-3 text-gray-500 sm:text-sm", children: "workcation.com/" }, void 0, !1, {
                fileName: "app/routes/root.tsx",
                lineNumber: 34,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "username",
                  id: "username",
                  autoComplete: "username",
                  className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
                  placeholder: "janesmith"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 35,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/root.tsx",
              lineNumber: 33,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 32,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "about", className: "block text-sm font-medium leading-6 text-gray-900", children: "About" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "textarea",
              {
                id: "about",
                name: "about",
                rows: 3,
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                defaultValue: ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 52,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-3 text-sm leading-6 text-gray-600", children: "Write a few sentences about yourself." }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "photo", className: "block text-sm font-medium leading-6 text-gray-900", children: "Photo" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2 flex items-center gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_solid4.UserCircleIcon, { className: "h-12 w-12 text-gray-300", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/routes/root.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                  children: "Change"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/root.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "cover-photo", className: "block text-sm font-medium leading-6 text-gray-900", children: "Cover photo" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_solid4.PhotoIcon, { className: "mx-auto h-12 w-12 text-gray-300", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/routes/root.tsx",
                lineNumber: 84,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "label",
                  {
                    htmlFor: "file-upload",
                    className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "Upload a file" }, void 0, !1, {
                        fileName: "app/routes/root.tsx",
                        lineNumber: 90,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { id: "file-upload", name: "file-upload", type: "file", className: "sr-only" }, void 0, !1, {
                        fileName: "app/routes/root.tsx",
                        lineNumber: 91,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 86,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 93,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-xs leading-5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" }, void 0, !1, {
                fileName: "app/routes/root.tsx",
                lineNumber: 95,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/root.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/root.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Personal Information" }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "Use a permanent address where you can receive mail." }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "First name" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 112,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email address" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 129,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 128,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "country", className: "block text-sm font-medium leading-6 text-gray-900", children: "Country" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "select",
              {
                id: "country",
                name: "country",
                autoComplete: "country-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { children: "United States" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 150,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { children: "Canada" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 151,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { children: "Mexico" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 152,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 144,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "street-address", className: "block text-sm font-medium leading-6 text-gray-900", children: "Street address" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "text",
                name: "street-address",
                id: "street-address",
                autoComplete: "street-address",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 162,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 161,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-2 sm:col-start-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium leading-6 text-gray-900", children: "City" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "text",
                name: "city",
                id: "city",
                autoComplete: "address-level2",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 177,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 176,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "region", className: "block text-sm font-medium leading-6 text-gray-900", children: "State / Province" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "text",
                name: "region",
                id: "region",
                autoComplete: "address-level1",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 192,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "postal-code", className: "block text-sm font-medium leading-6 text-gray-900", children: "ZIP / Postal code" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "text",
                name: "postal-code",
                id: "postal-code",
                autoComplete: "postal-code",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/root.tsx",
                lineNumber: 207,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/root.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Notifications" }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "We'll always let you know about important changes, but you pick what else you want to hear about." }, void 0, !1, {
          fileName: "app/routes/root.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-10 space-y-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("legend", { className: "text-sm font-semibold leading-6 text-gray-900", children: "By Email" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 227,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "comments",
                    name: "comments",
                    type: "checkbox",
                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 231,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 230,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-sm leading-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "comments", className: "font-medium text-gray-900", children: "Comments" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 239,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Get notified when someones posts a comment on a posting." }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 242,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 238,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 229,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "candidates",
                    name: "candidates",
                    type: "checkbox",
                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 247,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 246,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-sm leading-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "candidates", className: "font-medium text-gray-900", children: "Candidates" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 255,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Get notified when a candidate applies for a job." }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 258,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 254,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 245,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "offers",
                    name: "offers",
                    type: "checkbox",
                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 263,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 262,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-sm leading-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "offers", className: "font-medium text-gray-900", children: "Offers" }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 271,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-500", children: "Get notified when a candidate accepts or rejects an offer." }, void 0, !1, {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 270,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 261,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/root.tsx",
              lineNumber: 228,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("legend", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Push Notifications" }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 280,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "These are delivered via SMS to your mobile phone." }, void 0, !1, {
              fileName: "app/routes/root.tsx",
              lineNumber: 281,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "push-everything",
                    name: "push-notifications",
                    type: "radio",
                    className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 284,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "push-everything", className: "block text-sm font-medium leading-6 text-gray-900", children: "Everything" }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 290,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 283,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "push-email",
                    name: "push-notifications",
                    type: "radio",
                    className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 295,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "push-email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Same as email" }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 301,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 294,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                  "input",
                  {
                    id: "push-nothing",
                    name: "push-notifications",
                    type: "radio",
                    className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/root.tsx",
                    lineNumber: 306,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "push-nothing", className: "block text-sm font-medium leading-6 text-gray-900", children: "No push notifications" }, void 0, !1, {
                  fileName: "app/routes/root.tsx",
                  lineNumber: 312,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/root.tsx",
                lineNumber: 305,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/root.tsx",
              lineNumber: 282,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/root.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/root.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/root.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-6 flex items-center justify-end gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "text-sm font-semibold leading-6 text-gray-900", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/root.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          children: "Save"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/root.tsx",
          lineNumber: 326,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/root.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/asd.tsx
var asd_exports = {};
__export(asd_exports, {
  action: () => action7,
  default: () => CreateAcount2
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), action7 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), date = formData.get("date"), time = formData.get("time"), a = await prisma.scheduling.create({
    data: {
      name,
      date,
      time
    }
  });
  return console.log(a), "a";
};
function CreateAcount2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "img",
        {
          className: "mx-auto h-10 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/asd.tsx",
          lineNumber: 30,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Fa\xE7a seu cadastro" }, void 0, !1, {
        fileName: "app/routes/asd.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/asd.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("form", { className: "space-y-6", action: "", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Endere\xE7o" }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 44,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "rua, n\xFAmero da casa e bairro",
              name: "name",
              type: "text",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/asd.tsx",
              lineNumber: 48,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Email" }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 59,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite um email v\xE1lido",
              name: "date",
              type: "date",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/asd.tsx",
              lineNumber: 63,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/asd.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 78,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              id: "password",
              placeholder: "Digite sua senha",
              name: "time",
              type: "time",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/asd.tsx",
              lineNumber: 83,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/asd.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/asd.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/asd.tsx",
            lineNumber: 97,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/asd.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/asd.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Voc\xEA j\xE1 tem uma conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("a", { href: "/login", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "J\xE1 tenho uma conta" }, void 0, !1, {
          fileName: "app/routes/asd.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/asd.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/asd.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/asd.tsx",
    lineNumber: 28,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/asd.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/cadastro_reme": {
    id: "routes/cadastro_reme",
    parentId: "root",
    path: "cadastro_reme",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_reme_exports
  },
  "routes/cookie.server": {
    id: "routes/cookie.server",
    parentId: "root",
    path: "cookie/server",
    index: void 0,
    caseSensitive: void 0,
    module: cookie_server_exports
  },
  "routes/errorpassword": {
    id: "routes/errorpassword",
    parentId: "root",
    path: "errorpassword",
    index: void 0,
    caseSensitive: void 0,
    module: errorpassword_exports
  },
  "routes/login_cliente": {
    id: "routes/login_cliente",
    parentId: "root",
    path: "login_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: login_cliente_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/createacount": {
    id: "routes/createacount",
    parentId: "root",
    path: "createacount",
    index: void 0,
    caseSensitive: void 0,
    module: createacount_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/NavLink": {
    id: "routes/NavLink",
    parentId: "root",
    path: "NavLink",
    index: void 0,
    caseSensitive: void 0,
    module: NavLink_exports
  },
  "routes/Navbar": {
    id: "routes/Navbar",
    parentId: "root",
    path: "Navbar",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/teste": {
    id: "routes/teste",
    parentId: "root",
    path: "teste",
    index: void 0,
    caseSensitive: void 0,
    module: teste_exports
  },
  "routes/venda": {
    id: "routes/venda",
    parentId: "root",
    path: "venda",
    index: void 0,
    caseSensitive: void 0,
    module: venda_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/root": {
    id: "routes/root",
    parentId: "root",
    path: "root",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports2
  },
  "routes/asd": {
    id: "routes/asd",
    parentId: "root",
    path: "asd",
    index: void 0,
    caseSensitive: void 0,
    module: asd_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
