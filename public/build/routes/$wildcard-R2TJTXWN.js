import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import "/build/_shared/chunk-QT64XSGC.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import "/build/_shared/chunk-5GUXQVXG.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/$wildcard.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$wildcard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$wildcard.tsx"
  );
  import.meta.hot.lastModified = "1731046171313.4397";
}
var meta = () => {
  return [{
    title: "404 Page Not Found! \u{1F97A}"
  }, {
    name: "description",
    content: "Oops! The page you are looking for doesn't exist. Please check the URL or return to the homepage! \u{1F389}\u{1F4F2}"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl font-bold text-rose-500", children: "\u{1F97A} Uh Oh, 404" }, void 0, false, {
      fileName: "app/routes/$wildcard.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-4 text-2xl font-semibold text-gray-800", children: "Page Not Found..." }, void 0, false, {
      fileName: "app/routes/$wildcard.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-gray-600", children: "The page you are looking for does not exist." }, void 0, false, {
      fileName: "app/routes/$wildcard.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300", children: "Go Back Home" }, void 0, false, {
      fileName: "app/routes/$wildcard.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$wildcard.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c = ErrorBoundary;
var _c;
$RefreshReg$(_c, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary as default,
  meta
};
//# sourceMappingURL=/build/routes/$wildcard-R2TJTXWN.js.map
