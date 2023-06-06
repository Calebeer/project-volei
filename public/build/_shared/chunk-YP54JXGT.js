import {
  Bars3Icon_default,
  BellIcon_default,
  XMarkIcon_default,
  ot,
  tt,
  ve
} from "/build/_shared/chunk-FFZXZXWH.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// app/routes/navbar.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};
var navigation = [
  { name: "Agendar agora", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Meus Agendamentos", href: "#", current: false },
  { name: "Calendar", href: "#", current: false }
];
var userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "nav", className: "border-b border-gray-200 bg-white", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "block h-8 w-auto lg:hidden",
                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                alt: "Your Company"
              },
              void 0,
              false,
              {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 46,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "hidden h-8 w-auto lg:block",
                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                alt: "Your Company"
              },
              void 0,
              false,
              {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 51,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            false,
            {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 59,
              columnNumber: 25
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                  fileName: "app/routes/navbar.tsx",
                  lineNumber: 80,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/navbar.tsx",
                  lineNumber: 81,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 76,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ot, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ot.Button, { className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 88,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }, void 0, false, {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 89,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 87,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 86,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              tt,
              {
                as: import_react.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ot.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ot.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                  false,
                  {
                    fileName: "app/routes/navbar.tsx",
                    lineNumber: 105,
                    columnNumber: 33
                  },
                  this
                ) }, item.name, false, {
                  fileName: "app/routes/navbar.tsx",
                  lineNumber: 103,
                  columnNumber: 29
                }, this)) }, void 0, false, {
                  fileName: "app/routes/navbar.tsx",
                  lineNumber: 101,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 92,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 85,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 124,
            columnNumber: 23
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 128,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 123,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "sm:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ve.Button,
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
          false,
          {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 138,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pb-3 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0, false, {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 156,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base font-medium text-gray-800", children: user.name }, void 0, false, {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 160,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-500", children: user.email }, void 0, false, {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 161,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 159,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                    fileName: "app/routes/navbar.tsx",
                    lineNumber: 167,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/navbar.tsx",
                    lineNumber: 168,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/navbar.tsx",
                lineNumber: 163,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 space-y-1", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ve.Button,
            {
              as: "a",
              href: item.href,
              className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
              children: item.name
            },
            item.name,
            false,
            {
              fileName: "app/routes/navbar.tsx",
              lineNumber: 173,
              columnNumber: 23
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 171,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold leading-tight tracking-tight text-gray-900", children: "Fa\xE7a seu agendamento aqui" }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome" }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "last-name",
            id: "last-name",
            autoComplete: "family-name",
            className: "block w- rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          },
          void 0,
          false,
          {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 201,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "Dia" }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 209,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "datetime-local",
            name: "last-name",
            id: "last-name",
            autoComplete: "family-name",
            className: "block w- rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          },
          void 0,
          false,
          {
            fileName: "app/routes/navbar.tsx",
            lineNumber: 213,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/navbar.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 196,
        columnNumber: 64
      }, this) }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/navbar.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/navbar.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/navbar.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

export {
  Example
};
//# sourceMappingURL=/build/_shared/chunk-YP54JXGT.js.map
