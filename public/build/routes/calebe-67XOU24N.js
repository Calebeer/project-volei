import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-FNWMAQCD.js";
import {
  require_db
} from "/build/_shared/chunk-KW6WLGT6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// browser-route-module:routes/calebe.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/calebe.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Example() {
  const data = { error: "Usu\xE1rio ou senha incorretos." };
  const usuario = { idade: 22, nome: "S\xF3stenes" };
  const notas = [
    { titulo: "nota 1", corpo: "nota 1 testesa" },
    { titulo: "nota 2", corpo: "nota 2 testesa" },
    { titulo: "nota 3", corpo: "nota 3 testesa" }
  ];
  const { remedios } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    "remedios: ",
    JSON.stringify(remedios),
    "Calebe",
    1,
    [123, 2, 2, 2][1],
    JSON.stringify({ nome: "calebe", idade: 18 }),
    { idade: 22, nome: "S\xF3stenes" }.nome,
    JSON.stringify(usuario),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: usuario.nome }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl", children: usuario.idade }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: JSON.stringify(notas, null, 2) }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 92,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: notas[0].titulo }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: notas[0].corpo }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 103,
      columnNumber: 5
    }, this),
    "......................",
    notas.map(
      (nota) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: nota.titulo }, void 0, false, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ),
    notas.map((nota, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      nota.corpo,
      " - ",
      index
    ] }, void 0, true, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "", id: "", children: remedios.map((remedio) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: remedio.nome_remedio }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 138,
      columnNumber: 5
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
            fileName: "app/routes/calebe.tsx",
            lineNumber: 162,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Acessar sistema" }, void 0, false, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "space-y-6", action: "", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome" }, void 0, false, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "name",
              autoComplete: "email",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 179,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, false, {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm" }, void 0, false, {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 195,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "password",
              name: "senha",
              type: "password",
              autoComplete: "current-password",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/calebe.tsx",
              lineNumber: 199,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Entrar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/calebe.tsx",
            lineNumber: 211,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/calebe.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/calebe.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/calebe.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/calebe.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
export {
  Example as default
};
//# sourceMappingURL=/build/routes/calebe-67XOU24N.js.map
