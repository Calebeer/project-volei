import {
  navbar_default
} from "/build/_shared/chunk-E5XOIHJH.js";
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

// browser-route-module:routes/venda.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/venda.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Example() {
  const { remedio, primeiraVenda } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navbar_default, {}, void 0, false, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 81,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          },
          void 0,
          false,
          {
            fileName: "app/routes/venda.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Realizar Venda" }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-6", action: "", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Cpf do Cliente" }, void 0, false, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              name: "cpf_cliente",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome do Rem\xE9dio" }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "nome", id: "", children: remedio.map((cliente) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: cliente.nome, children: cliente.nome }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 113,
          columnNumber: 27
        }, this)) }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Quantidade" }, void 0, false, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              name: "quantidade",
              type: "text",
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/venda.tsx",
              lineNumber: 129,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/venda.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Salvar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/venda.tsx",
            lineNumber: 135,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/venda.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/venda.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/venda.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/venda.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this);
}
export {
  Example as default
};
//# sourceMappingURL=/build/routes/venda-65MK2UKL.js.map