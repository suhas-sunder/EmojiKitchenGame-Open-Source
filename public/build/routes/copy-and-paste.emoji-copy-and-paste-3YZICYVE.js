import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  CopyPasteTextbox,
  SectionMenu_default,
  useDisplayLimitOnScroll_default
} from "/build/_shared/chunk-SH2632AA.js";
import {
  useManageCopiedMsg
} from "/build/_shared/chunk-QT77JPFW.js";
import {
  require_localforage
} from "/build/_shared/chunk-Q5ZNHFO4.js";
import "/build/_shared/chunk-34BQ7JAR.js";
import {
  Link,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-46YC46ZY.js";
import "/build/_shared/chunk-74BWT7FI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import "/build/_shared/chunk-5GUXQVXG.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/copy-and-paste.emoji-copy-and-paste.tsx
var import_node = __toESM(require_node(), 1);
var import_localforage = __toESM(require_localforage(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/copy-and-paste.emoji-copy-and-paste.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/copy-and-paste.emoji-copy-and-paste.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.043";
}
var meta = () => {
  return [{
    title: "\u2702\uFE0F Emoji Copy And Paste - Cool Symbols & Cool Fonts & Cool Text for iOS, Android, Browsers, iPhone, and more!"
  }, {
    name: "description",
    content: "Discover and easily copy a wide range of cool emojis, symbols, fonts, and text styles for use on iOS, Android, browsers, iPhones, and more! Enhance your messages, social media posts, and creative projects with our extensive collection of unique and fun characters."
  }];
};
async function clientLoader({
  serverLoader
}) {
  const cacheKey = "symbols";
  try {
    const symbols = await import_localforage.default.getItem(cacheKey);
    if (symbols) {
      return {
        symbols
      };
    } else {
      const {
        symbols: symbols2
      } = await serverLoader();
      await import_localforage.default.setItem(cacheKey, symbols2);
      return {
        symbols: symbols2
      };
    }
  } catch (error) {
    console.error("Error fetching cached filenames:", error);
  }
}
function EmojiCopyAndPaste() {
  _s();
  const {
    symbols
  } = useLoaderData();
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
  const {
    isCopied,
    setIsCopied
  } = useManageCopiedMsg();
  const symbolMenuObject = {
    Smileys: "",
    People: "",
    Objects: "",
    Nature: "",
    Symbols: "",
    Food: "",
    Transportation: "",
    Animals: "",
    Hands: "",
    Arrows: "",
    Buildings: "",
    Sports: "",
    Flags: "",
    Stars: "",
    Legal: "",
    Money: "",
    Brackets: "",
    "Chess & Cards": "",
    Music: "",
    Weather: "",
    "Arrow Lines": "",
    Astrology: "",
    Hearts: "",
    "Check mark": "",
    "People & Smiley": "",
    Punctuation: "",
    Math: "",
    Numbers: "",
    Fractions: "",
    Comparisons: "",
    Technical: "",
    "Rectangle & Square": "",
    Triangles: "",
    Lines: "",
    Corners: "",
    Circles: "",
    Phonetics: "",
    "Latin Letters": "",
    "Greek Letters": "",
    "Chinese Symbols": "",
    "Japanese Symbols": "",
    "Korean Symbols": ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-10 justify-center leading-loose tracking-widest items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " font-lora text-center leading-loose text-purple-700 translate-y-10 text-2xl mx-5 sm:text-3xl", children: [
      "\u2702\uFE0F Symbols, Emoji Copy And Paste",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "symbols", className: "-translate-y-[100em]" }, void 0, false, {
        fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { onMouseEnter: () => setDisplayLimit(1e3), onTouchStart: () => setDisplayLimit(1e3), className: "max-w-[1200px] my-10 flex gap-16 flex-col mb-64 justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionMenu_default, { object: symbolMenuObject }, void 0, false, {
        fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      Object.keys(symbols).map((key, mainIndex) => {
        return mainIndex < displayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-auto lg:overflow-hidden  pt-10 sm:px-10 scrollbar-thin border-2 rounded-lg border-rose-100 scrollbar-thumb-rose-700 scrollbar-track-rose-300 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex capitalize mb-8 font-lora w-full text-rose-400 justify-center items-center text-center text-lg sm:text-2xl", children: key }, void 0, false, {
            fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-2xl grid font-nunito grid-cols-4 sm:grid-cols-7 px-5 lg:grid-cols-12 xl:grid-cols-14 gap-5 w-full justify-center items-center", children: [
            symbols[key].map((symbol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { title: symbol, className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": `Copy ${symbol} emoji to clipboard`, onClick: () => {
              setCopyText(symbol);
              setIsCopied(symbol);
            }, className: `${isCopied === symbol ? "text-xs" : "text-4xl"} border-2 px-3 py-3 rounded-md max-w-[5.4em] hover:scale-110 border-rose-200 text-rose-500 cursor-pointer justify-center items-center flex w-full hover:border-rose-400 hover:text-rose-500`, children: [
              isCopied === symbol ? "Copied!" : symbol,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: Object.keys(symbolMenuObject)[mainIndex], className: "-translate-y-64" }, void 0, false, {
                fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
                lineNumber: 188,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this) }, symbol + index, false, {
              fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
              lineNumber: 182,
              columnNumber: 54
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-4 sm:col-span-7 lg:col-span-12 xl:col-span-14 w-full justify-center items-center flex mt-20 mb-10 text-xl", children: [
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "area-label": "Scroll To Menu", className: " text-sky-600 text-center hover:text-sky-500 flex gap-1 sm:gap-5", to: "#symbols", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "scale-x-[-1]", children: "\u261D\uFE0F\u261D\u{1F3FB}\u261D\u{1F3FC}" }, void 0, false, {
                  fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
                  lineNumber: 194,
                  columnNumber: 21
                }, this),
                "Scroll To Menu",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u261D\u{1F3FD}\u261D\u{1F3FE}\u261D\u{1F3FF}" }, void 0, false, {
                  fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
                  lineNumber: 195,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
                lineNumber: 193,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, key, true, {
          fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
          lineNumber: 177,
          columnNumber: 43
        }, this) : null;
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyPasteTextbox, { isHidden: textareaIsHidden, setIsHidden: setTextareaIsHidden, displayCopyText, setDisplayCopyText }, void 0, false, {
        fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/copy-and-paste.emoji-copy-and-paste.tsx",
    lineNumber: 167,
    columnNumber: 10
  }, this);
}
_s(EmojiCopyAndPaste, "VAAjmbqHL4NNKiniv6u+fgKgCJk=", false, function() {
  return [useLoaderData, useDisplayLimitOnScroll_default, useOutletContext, useManageCopiedMsg];
});
_c = EmojiCopyAndPaste;
var _c;
$RefreshReg$(_c, "EmojiCopyAndPaste");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  clientLoader,
  EmojiCopyAndPaste as default,
  meta
};
//# sourceMappingURL=/build/routes/copy-and-paste.emoji-copy-and-paste-3YZICYVE.js.map
