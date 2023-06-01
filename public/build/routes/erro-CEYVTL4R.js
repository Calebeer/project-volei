import {
  XCircleIcon_default
} from "/build/_shared/chunk-K32Q7HSK.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/erro.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/erro.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MeuComponente() {
  const [texto, setTexto] = (0, import_react.useState)("");
  const handleEnviar = (event) => {
    event.preventDefault();
    const novoTexto = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/erro.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/erro.tsx",
        lineNumber: 216,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Usu\xE1rio ou senha incorretos" }, void 0, false, {
        fileName: "app/routes/erro.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/erro.tsx",
        lineNumber: 219,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 215,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 214,
      columnNumber: 23
    }, this);
    setTexto(novoTexto);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleEnviar, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Enviar" }, void 0, false, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: texto }, void 0, false, {
      fileName: "app/routes/erro.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/erro.tsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}
var erro_default = MeuComponente;
export {
  erro_default as default
};
//# sourceMappingURL=/build/routes/erro-CEYVTL4R.js.map
