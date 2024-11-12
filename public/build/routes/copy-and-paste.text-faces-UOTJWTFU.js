import {
  CopyPasteTextbox,
  SectionMenu_default,
  useDisplayLimitOnScroll_default
} from "/build/_shared/chunk-2DLYOVLP.js";
import {
  useManageCopiedMsg
} from "/build/_shared/chunk-P4CX52I2.js";
import {
  require_localforage
} from "/build/_shared/chunk-AKFUC45F.js";
import "/build/_shared/chunk-ABUIXSQQ.js";
import {
  Link,
  useLoaderData,
  useOutletContext
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

// app/routes/copy-and-paste.text-faces.tsx
var import_localforage = __toESM(require_localforage(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/copy-and-paste.text-faces.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/copy-and-paste.text-faces.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.2798";
}
var meta = () => {
  return [{
    title: "\u2728 Text Faces (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727 - Copy and Paste Cute and Creative Text Emoticons! \u{1F480}\u{1F389}"
  }, {
    name: "description",
    content: "\u2B50 (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727 Discover and share the cutest and most creative text faces! \u0CA5_\u0CA5 Easily copy and paste a variety of unique emoticons for all your messages and social media posts. Express yourself with our extensive collection of fun text faces! \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Emoji Kitchen \u{1F440}\u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F\u{1F64F}\u{1F680}\u{1F929}"
  }];
};
async function clientLoader({
  serverLoader
}) {
  const cacheKey = "textFaces";
  const cacheKey1 = "facesInfo";
  try {
    const textFaces = await import_localforage.default.getItem(cacheKey);
    const facesInfo = await import_localforage.default.getItem(cacheKey1);
    if (textFaces && facesInfo) {
      return {
        textFaces,
        facesInfo
      };
    } else {
      const {
        textFaces: textFaces2,
        facesInfo: facesInfo2
      } = await serverLoader();
      await import_localforage.default.setItem(cacheKey, textFaces2);
      await import_localforage.default.setItem(cacheKey1, facesInfo2);
      return {
        textFaces: textFaces2,
        facesInfo: facesInfo2
      };
    }
  } catch (error) {
    console.error("Error fetching cached data:", error);
  }
}
function TextFaces() {
  _s();
  const {
    textFaces,
    facesInfo
  } = useLoaderData();
  const {
    isCopied,
    setIsCopied
  } = useManageCopiedMsg();
  const [displayLimit, setDisplayLimit] = (0, import_react2.useState)(2);
  useDisplayLimitOnScroll_default({
    displayLimit,
    setDisplayLimit
  });
  const {
    setCopyText,
    displayCopyText,
    setDisplayCopyText,
    textareaIsHidden,
    setTextareaIsHidden
  } = useOutletContext();
  const textFacesEntries = (0, import_react2.useMemo)(() => Object.entries(textFaces), [textFaces]);
  const facesInfoEntries = (0, import_react2.useMemo)(() => Object.entries(facesInfo), [facesInfo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-5 justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-10 font-lora text-center leading-loose text-purple-700 mb-5 text-2xl mx-5 sm:text-3xl", children: [
      "Copy and Paste Text Faces",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap", children: "(\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727" }, void 0, false, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "text-faces", className: "-translate-y-32" }, void 0, false, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/copy-and-paste.text-faces.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/copy-and-paste.text-faces.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { onMouseEnter: () => setDisplayLimit(1e3), onTouchStart: () => setDisplayLimit(1e3), className: "flex flex-col max-w-[1200px] gap-20 font-nunito justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionMenu_default, { object: textFaces }, void 0, false, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-14", children: textFacesEntries.map(([key, value], index) => {
        return index < displayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-translate-y-6 flex flex-col  lg:overflow-hidden pt-10 sm:px-10 scrollbar-thin xl:border-2 rounded-lg border-slate-100 scrollbar-thumb-rose-700 scrollbar-track-rose-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex capitalize mb-8 w-full text-rose-400 justify-center items-center text-center text-2xl", children: [
            key.split("-").join(" "),
            " Faces"
          ] }, void 0, true, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 text-2xl justify-center items-center", children: [
            value.map((face, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex sm:whitespace-nowrap justify-center items-center", title: face, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": `Copy ${face} face to clipboard`, onClick: () => {
                setIsCopied(face);
                setCopyText(face);
              }, className: `hover:text-slate-800 max-w-[13em] sm:max-w-auto flex text-center hover:scale-110 sm:overflow-visible text-slate-600 border-slate-300 hover:border-slate-400 w-full justify-center items-center border-2 sm:px-5 py-4 rounded-md`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: isCopied === face.replace(/\s*\n\s*/g, "") ? "\u2727\uFF65\uFF9F Copied! \uFF65\uFF9F\u2727" : face.split("  ").join("") }, void 0, false, {
                fileName: "app/routes/copy-and-paste.text-faces.tsx",
                lineNumber: 148,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/copy-and-paste.text-faces.tsx",
                lineNumber: 144,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: key, className: "-translate-y-44" }, void 0, false, {
                fileName: "app/routes/copy-and-paste.text-faces.tsx",
                lineNumber: 152,
                columnNumber: 23
              }, this)
            ] }, `${key}-${face}-${index2}`, true, {
              fileName: "app/routes/copy-and-paste.text-faces.tsx",
              lineNumber: 143,
              columnNumber: 47
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "sm:col-span-2 md:col-span-3 xl:col-span-5 w-full justify-center items-center flex mt-10 mb-20 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "aria-label": "Scroll To Menu", className: "text-sky-600 translate-y-8 text-center hover:text-sky-500 flex gap-1 sm:gap-5", to: "#text-faces", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "scale-x-[-1]", children: "\u261D\uFE0F\u261D\u{1F3FB}\u261D\u{1F3FC}" }, void 0, false, {
                fileName: "app/routes/copy-and-paste.text-faces.tsx",
                lineNumber: 157,
                columnNumber: 23
              }, this),
              "Scroll To Menu",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u261D\u{1F3FD}\u261D\u{1F3FE}\u261D\u{1F3FF}" }, void 0, false, {
                fileName: "app/routes/copy-and-paste.text-faces.tsx",
                lineNumber: 158,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/copy-and-paste.text-faces.tsx",
              lineNumber: 156,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/copy-and-paste.text-faces.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this)
        ] }, `${key}-${index}`, true, {
          fileName: "app/routes/copy-and-paste.text-faces.tsx",
          lineNumber: 138,
          columnNumber: 41
        }, this) : null;
      }) }, void 0, false, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex gap-10 mb-40 flex-col mx-5", children: [
        facesInfoEntries.map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-col gap-8 text-center text-lg text-purple-800 justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-lora capitalize text-2xl text-purple-800", children: key }, void 0, false, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-lato text-xl leading-loose tracking-widest", children: value }, void 0, false, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, `${key}-${index}`, true, {
          fileName: "app/routes/copy-and-paste.text-faces.tsx",
          lineNumber: 166,
          columnNumber: 58
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "sm:col-span-2 md:col-span-3 xl:col-span-5 w-full justify-center items-center flex mt-10 mb-20 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-sky-600 text-center hover:text-sky-500 flex gap-1 sm:gap-5", to: "#text-faces", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "scale-x-[-1]", children: "\u261D\uFE0F\u261D\u{1F3FB}\u261D\u{1F3FC}" }, void 0, false, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          "Scroll To Menu",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u261D\u{1F3FD}\u261D\u{1F3FE}\u261D\u{1F3FF}" }, void 0, false, {
            fileName: "app/routes/copy-and-paste.text-faces.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/copy-and-paste.text-faces.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/copy-and-paste.text-faces.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyPasteTextbox, { isHidden: textareaIsHidden, setIsHidden: setTextareaIsHidden, displayCopyText, setDisplayCopyText }, void 0, false, {
        fileName: "app/routes/copy-and-paste.text-faces.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/copy-and-paste.text-faces.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/copy-and-paste.text-faces.tsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_s(TextFaces, "VHLbRVQ71TYoZXz47vshPyAApw0=", false, function() {
  return [useLoaderData, useManageCopiedMsg, useDisplayLimitOnScroll_default, useOutletContext];
});
_c = TextFaces;
var _c;
$RefreshReg$(_c, "TextFaces");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  clientLoader,
  TextFaces as default,
  meta
};
//# sourceMappingURL=/build/routes/copy-and-paste.text-faces-UOTJWTFU.js.map
