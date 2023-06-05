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
    assets_manifest_default = { version: "98e17283", entry: { module: "/build/entry.client-ZLEXJWXA.js", imports: ["/build/_shared/chunk-6T5TBTKX.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-434F2LJ2.js", imports: ["/build/_shared/chunk-LHETXEHU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro_reme": { id: "routes/cadastro_reme", parentId: "root", path: "cadastro_reme", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro_reme-CWV2MWIS.js", imports: ["/build/_shared/chunk-E5XOIHJH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/calebe": { id: "routes/calebe", parentId: "root", path: "calebe", index: void 0, caseSensitive: void 0, module: "/build/routes/calebe-L7TRMTLD.js", imports: ["/build/_shared/chunk-2GQEKUXJ.js", "/build/_shared/chunk-IP4PDM3B.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/createacount": { id: "routes/createacount", parentId: "root", path: "createacount", index: void 0, caseSensitive: void 0, module: "/build/routes/createacount-PTBXBNAZ.js", imports: ["/build/_shared/chunk-IP4PDM3B.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/email": { id: "routes/email", parentId: "root", path: "email", index: void 0, caseSensitive: void 0, module: "/build/routes/email-FMWGZTCL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/erro": { id: "routes/erro", parentId: "root", path: "erro", index: void 0, caseSensitive: void 0, module: "/build/routes/erro-KKXKTNAB.js", imports: ["/build/_shared/chunk-2GQEKUXJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-35J3Y2CS.js", imports: ["/build/_shared/chunk-R76S2TAR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-SE32JR32.js", imports: ["/build/_shared/chunk-2GQEKUXJ.js", "/build/_shared/chunk-IP4PDM3B.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login_cliente": { id: "routes/login_cliente", parentId: "root", path: "login_cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/login_cliente-IWGDC563.js", imports: ["/build/_shared/chunk-E5XOIHJH.js", "/build/_shared/chunk-IP4PDM3B.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/navbar": { id: "routes/navbar", parentId: "root", path: "navbar", index: void 0, caseSensitive: void 0, module: "/build/routes/navbar-I36XD6GR.js", imports: ["/build/_shared/chunk-E5XOIHJH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-D44P43UP.js", imports: ["/build/_shared/chunk-R76S2TAR.js", "/build/_shared/chunk-UP2WI3GP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-EQK54HM2.js", imports: ["/build/_shared/chunk-LHETXEHU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-7WPZE2FT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-FXNSZMHR.js", imports: ["/build/_shared/chunk-LHETXEHU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/venda": { id: "routes/venda", parentId: "root", path: "venda", index: void 0, caseSensitive: void 0, module: "/build/routes/venda-65MK2UKL.js", imports: ["/build/_shared/chunk-E5XOIHJH.js", "/build/_shared/chunk-IP4PDM3B.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-98E17283.js" };
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
  let user = await getUserById(userId);
  if (user)
    return user;
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
var tailwind_default = "/build/_assets/tailwind-34SJQTYH.css";

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
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro_reme.tsx
var cadastro_reme_exports = {};
__export(cadastro_reme_exports, {
  default: () => Example,
  loader: () => loader2
});

// app/routes/navbar.tsx
var navbar_exports = {};
__export(navbar_exports, {
  default: () => navbar_default
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Navbar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between h-16", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-10 flex items-baseline space-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "venda", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", children: "Realizar Venda" }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "cadastro_reme", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", children: "Cadastro Rem\xE9dio" }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "login_cliente", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", children: "Cadastrar Cliente" }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 9,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 7,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-4 flex items-center md:ml-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 18,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-3 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 25,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 23,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 16,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 35,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 33,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/navbar.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/routes/navbar.tsx",
  lineNumber: 5,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/navbar.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this), navbar_default = Navbar;

// app/routes/cadastro_reme.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let queryParams = new URL(request.url).searchParams, email = queryParams.get("email"), password = queryParams.get("password");
  return { sucess: !0 };
};
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navbar_default, {}, void 0, !1, {
      fileName: "app/routes/cadastro_reme.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Cadastro Rem\xE9dio" }, void 0, !1, {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro_reme.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "space-y-6", action: "#", method: "get", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Rem\xE9dio" }, void 0, !1, {
            fileName: "app/routes/cadastro_reme.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Pre\xE7o" }, void 0, !1, {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/cadastro_reme.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro_reme.tsx",
    lineNumber: 23,
    columnNumber: 7
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(navbar_default, {}, void 0, !1, {
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
var import_node4 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

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
  return (0, import_node4.json)({ note });
}, action = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node4.redirect)("/notes");
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
  default: () => CreateAcount,
  loader: () => loader5
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let queryParams = new URL(request.url).searchParams, name = queryParams.get("name"), address = queryParams.get("address"), email = queryParams.get("email"), password = queryParams.get("password");
  return await prisma.user.create({
    data: {
      email,
      password,
      name,
      address
    }
  }), { succes: !0 };
};
function CreateAcount() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
          lineNumber: 52,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Fa\xE7a seu cadastro" }, void 0, !1, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { className: "space-y-6", action: "#", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Completo" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite seu nome aqui",
              name: "name",
              type: "text",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 69,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Endere\xE7o" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "rua, n\xFAmero da casa e bairro",
              name: "address",
              type: "text",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 83,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Email" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite um email v\xE1lido",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 98,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              id: "password",
              placeholder: "Digite sua senha",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
            lineNumber: 145,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Voc\xEA j\xE1 tem uma conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/login", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "J\xE1 tenho uma conta" }, void 0, !1, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
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
  action: () => action2,
  default: () => NewNotePage
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_react6 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node5.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node5.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node5.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react5.useActionData)(), titleRef = (0, import_react6.useRef)(null), bodyRef = (0, import_react6.useRef)(null);
  return (0, import_react6.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react5.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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

// app/routes/calebe.tsx
var calebe_exports = {};
__export(calebe_exports, {
  action: () => action3,
  default: () => Example3
});
var import_react7 = require("@remix-run/react");
var import_node6 = require("@remix-run/node");

// app/routes/erro.tsx
var erro_exports = {};
__export(erro_exports, {
  default: () => ErrorMessage
});
var import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ErrorMessage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_solid.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Usu\xE1rio ou senha incorretos" }, void 0, !1, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 217,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 216,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/erro.tsx",
    lineNumber: 212,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/erro.tsx",
    lineNumber: 211,
    columnNumber: 5
  }, this);
}

// app/routes/calebe.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let formData = await request.formData(), user = formData.get("email"), password = formData.get("password"), usuarioEncontrado = await prisma.user.findFirst({
    where: {
      email: user,
      password
    }
  });
  return console.log(usuarioEncontrado), usuarioEncontrado ? (console.log("usu\xE1rio encontrado", usuarioEncontrado), (0, import_node6.redirect)("/venda")) : (console.log("usu\xE1rio n\xE3o encontrado"), {
    error: "Usu\xE1rio ou senha incorretos"
  });
};
function Example3() {
  let data = (0, import_react7.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    JSON.stringify(data),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Acessar sistema" }, void 0, !1, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react7.Form, { className: "space-y-6", action: "", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Usu\xE1rio" }, void 0, !1, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "name",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 71,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-sm" }, void 0, !1, {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              children: "Entrar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 103,
              columnNumber: 15
            },
            this
          ),
          data != null && data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ErrorMessage, {}, void 0, !1, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 110,
            columnNumber: 30
          }, this) : "",
          (data == null ? void 0 : data.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "Eba, loguei" }, void 0, !1, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 112,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/calebe.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/email.tsx
var email_exports = {};
__export(email_exports, {
  default: () => Index,
  loader: () => loader6
});
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader6 = async () => ({});
function Index() {
  let loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Link, { to: "/new-item" }, void 0, !1, {
    fileName: "app/routes/email.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/email.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

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
  }) ? (0, import_node7.redirect)("/navbar") : (console.log("N\xE3o encontrado"), {
    erro: "N\xE3o foi encontrado"
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
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { className: "space-y-6", action: "#", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 64,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "password",
              placeholder: "enha",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 88,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 76,
          columnNumber: 13
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
              lineNumber: 101,
              columnNumber: 15
            },
            this
          ),
          data != null && data.erro ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ErrorMessage, {}, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 107,
            columnNumber: 29
          }, this) : ""
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "N\xE3o tem uma conta? Crie agora a sua.",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "/createacount", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "Criar conta" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader7
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
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
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
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node8.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react12.useLoaderData)(), user = useUser();
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: user.email }, void 0, !1, {
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

// app/routes/venda.tsx
var venda_exports = {};
__export(venda_exports, {
  action: () => action5,
  default: () => Example4,
  loader: () => loader8
});
var import_react13 = require("@remix-run/react");
var import_server_runtime = require("@remix-run/server-runtime");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let formData = await request.formData(), cpf = formData.get("cpf_cliente"), nome_remedio = formData.get("nome_remedio"), quantidade = formData.get("quantidade");
  return await prisma.venda.create({
    data: {
      cpf,
      nome_remedio,
      quantidade
    }
  }), cpf;
};
async function loader8() {
  let remedio = await prisma.farmacia.findMany(), primeiraVenda = await prisma.venda.findFirst();
  return (0, import_server_runtime.json)({ remedio, primeiraVenda });
}
function Example4() {
  let { remedio, primeiraVenda } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(navbar_default, {}, void 0, !1, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 81,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/venda.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Realizar Venda" }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { className: "space-y-6", action: "", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Cpf do Cliente" }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "input",
            {
              name: "cpf_cliente",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome do Rem\xE9dio" }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("select", { name: "nome", id: "", children: remedio.map((cliente) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("option", { value: cliente.nome, children: cliente.nome }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 113,
          columnNumber: 27
        }, this)) }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Quantidade" }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "input",
            {
              name: "quantidade",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 129,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Salvar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/venda.tsx",
            lineNumber: 135,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/venda.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action6,
  default: () => Join,
  loader: () => loader9,
  meta: () => meta
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => await getUserId(request) ? (0, import_node9.redirect)("/") : (0, import_node9.json)({}), action6 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node9.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node9.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react14.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react14.useActionData)(), emailRef = (0, import_react15.useRef)(null), passwordRef = (0, import_react15.useRef)(null);
  return (0, import_react15.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_react14.Link,
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
  "routes/calebe": {
    id: "routes/calebe",
    parentId: "root",
    path: "calebe",
    index: void 0,
    caseSensitive: void 0,
    module: calebe_exports
  },
  "routes/navbar": {
    id: "routes/navbar",
    parentId: "root",
    path: "navbar",
    index: void 0,
    caseSensitive: void 0,
    module: navbar_exports
  },
  "routes/email": {
    id: "routes/email",
    parentId: "root",
    path: "email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports
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
  "routes/venda": {
    id: "routes/venda",
    parentId: "root",
    path: "venda",
    index: void 0,
    caseSensitive: void 0,
    module: venda_exports
  },
  "routes/erro": {
    id: "routes/erro",
    parentId: "root",
    path: "erro",
    index: void 0,
    caseSensitive: void 0,
    module: erro_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
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
