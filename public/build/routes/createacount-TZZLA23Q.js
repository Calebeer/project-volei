import {
  SuccessfullyEmail
} from "/build/_shared/chunk-DRB32KNV.js";
import {
  ErrorEmail
} from "/build/_shared/chunk-TYIAAICA.js";
import {
  ErrorPassword
} from "/build/_shared/chunk-XSFBZHAQ.js";
import "/build/_shared/chunk-S3N74YNX.js";
import {
  require_db
} from "/build/_shared/chunk-KW6WLGT6.js";
import {
  useActionData
} from "/build/_shared/chunk-FNWMAQCD.js";
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

// browser-route-module:routes/createacount.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/createacount.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CreateAcount() {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
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
          fileName: "app/routes/createacount.tsx",
          lineNumber: 61,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Fa\xE7a seu cadastro" }, void 0, false, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-6", action: "", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome Completo" }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite seu nome aqui",
              name: "name",
              type: "text",
              autoComplete: "email",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 78,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Endere\xE7o" }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "rua, n\xFAmero da casa e bairro",
              name: "address",
              type: "text",
              autoComplete: "email",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 92,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Email" }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite um email v\xE1lido",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 107,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "password",
              placeholder: "Digite sua senha",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 127,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900 ", children: "Confirme sua senha" }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              placeholder: "Digite a senha novamente",
              name: "password2",
              type: "password",
              autoComplete: "email",
              required: true,
              className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 141,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              children: "Cadastrar"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createacount.tsx",
              lineNumber: 155,
              columnNumber: 17
            },
            this
          ),
          (data == null ? void 0 : data.error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorEmail, {}, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 161,
            columnNumber: 30
          }, this) : "",
          (data == null ? void 0 : data.success) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuccessfullyEmail, {}, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 162,
            columnNumber: 32
          }, this) : "",
          (data == null ? void 0 : data.password_error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorPassword, {}, void 0, false, {
            fileName: "app/routes/createacount.tsx",
            lineNumber: 163,
            columnNumber: 38
          }, this) : ""
        ] }, void 0, true, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Voc\xEA j\xE1 tem uma conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "J\xE1 tenho uma conta" }, void 0, false, {
          fileName: "app/routes/createacount.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createacount.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createacount.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/createacount.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this);
}
export {
  CreateAcount as default
};
//# sourceMappingURL=/build/routes/createacount-TZZLA23Q.js.map
