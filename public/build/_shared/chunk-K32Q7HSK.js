import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// node_modules/@heroicons/react/20/solid/esm/XCircleIcon.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var React = __toESM(require_react(), 1);
function XCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(XCircleIcon);
var XCircleIcon_default = ForwardRef;

// node_modules/@heroicons/react/20/solid/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

export {
  XCircleIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-K32Q7HSK.js.map
