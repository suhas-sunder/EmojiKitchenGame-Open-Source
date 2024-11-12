import {
  Link,
  useMatches
} from "/build/_shared/chunk-PDH4YUDG.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-4FKPXXDG.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/sitemap.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sitemap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sitemap.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.9983";
}
var meta = () => {
  return [{
    title: "\u{1F5FA}\uFE0F Emoji Kitchen Game Sitemap! \u2728\u{1F480}\u{1F389}"
  }, {
    name: "description",
    content: "\u{1F5FA}\uFE0F\u2B50 Meta Description: Explore our comprehensive sitemap to navigate through our website effortlessly. Find links to all our main sections, including content pages, features, and resources, to quickly access what you're looking for. \u{1F50D} \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Emoji Kitchen \u{1F440}\u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F\u{1F64F}\u{1F680}\u{1F929}"
  }];
};
function isRouteData(data) {
  return typeof data === "object" && data !== null && "filenames" in data;
}
function Sitemap() {
  _s();
  const matches = useMatches();
  const filenames = (0, import_react2.useMemo)(() => isRouteData(matches[0]?.data) ? matches[0].data.filenames : [], [matches]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center gap-10  leading-loose tracking-widest flex-col items-center mx-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " font-lora text-center text-purple-700 translate-y-10 text-2xl mx-5 sm:text-3xl", children: "Sitemap" }, void 0, false, {
      fileName: "app/routes/sitemap.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/sitemap.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-[1200px]  my-10 text-sky-600 text-lg flex gap-16 flex-col mb-64 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex  flex-col list-decimal font-nunito mr-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: " hover:text-sky-400 pb-4 flex mr-auto", children: "Emoji Kitchen Game (Home)" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/emoji-combos", className: " hover:text-sky-400 pb-4 flex mr-auto", children: "Emoji Combos" }, void 0, false, {
          fileName: "app/routes/sitemap.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex flex-col font-lato capitalize list-decimal pl-10 mr-auto", children: filenames?.map((filename) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/emoji-combos/${filename.id}`, className: "hover: hover:text-sky-400 pl-2 pb-5 flex gap-3 mr-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: filename.keys.split("~")[0] }, void 0, false, {
            fileName: "app/routes/sitemap.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this),
          " " + filename.keys.split("~")[1]
        ] }, void 0, true, {
          fileName: "app/routes/sitemap.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this) }, filename.id, false, {
          fileName: "app/routes/sitemap.tsx",
          lineNumber: 64,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/sitemap.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/copy-and-paste/text-faces", className: "hover: hover:text-sky-400", children: "Text Faces" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/copy-and-paste/emoji-copy-and-paste", className: "hover: hover:text-sky-400", children: "Emoji Copy and Paste" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms-of-service", className: "hover: hover:text-sky-400", children: "Terms of Service" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cookies-policy", className: "hover: hover:text-sky-400", children: "Cookies Policy" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy-policy", className: "hover: hover:text-sky-400", children: "Privacy Policy" }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/sitemap.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sitemap.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/sitemap.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sitemap.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Sitemap, "LUY4wBBXVl8Pesq1kSLgtIc9sBA=", false, function() {
  return [useMatches];
});
_c = Sitemap;
var _c;
$RefreshReg$(_c, "Sitemap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Sitemap as default,
  meta
};
//# sourceMappingURL=/build/routes/sitemap-CUZ4PEJV.js.map
