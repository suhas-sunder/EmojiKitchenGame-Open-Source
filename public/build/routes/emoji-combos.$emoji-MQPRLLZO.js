import {
  require_jsx_runtime
} from "/build/_shared/chunk-5NT3OUFA.js";
import {
  LikesAndViews_default,
  trackingAPI_default,
  useUpdateLikes_default
} from "/build/_shared/chunk-VA44DKH4.js";
import {
  ComboImage_default
} from "/build/_shared/chunk-PLL3SZMZ.js";
import "/build/_shared/chunk-LZIRYZBH.js";
import {
  Icon
} from "/build/_shared/chunk-H3INXWOL.js";
import "/build/_shared/chunk-QT77JPFW.js";
import {
  require_localforage
} from "/build/_shared/chunk-Q5ZNHFO4.js";
import "/build/_shared/chunk-34BQ7JAR.js";
import {
  Link,
  redirect,
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

// app/routes/emoji-combos.$emoji.tsx
var import_localforage = __toESM(require_localforage(), 1);

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
var i;
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// app/routes/emoji-combos.$emoji.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/emoji-combos.$emoji.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/emoji-combos.$emoji.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.536";
}
var meta = ({
  data
}) => {
  const {
    emojiData
  } = data;
  if (!emojiData)
    return [{
      title: "\u2728 Copy, Paste, & Share Fun Emojis & Symbols! \u2728\u{1F480}\u{1F389}"
    }, {
      name: "description",
      content: "\u{1F60E}\u{1F680}\u2B50 Explore our collection of vibrant emojis and unique symbols ready for you to copy, paste, and share! Whether you're adding flair to your messages or expressing emotions with ease, you'll find the perfect emoji or symbol here. \u{1F31F}\u2728 Dive in and let your creativity shine! \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Emoji Kitchen \u{1F440}\u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F\u{1F64F}\u{1F680}\u{1F929}"
    }];
  return [{
    title: `${emojiData.title} - Emoji Meaning: ${emojiData.name} - ${emojiData.unicode} `
  }, {
    name: "description",
    content: `${emojiData?.description}`
  }];
};
async function clientLoader({
  serverLoader,
  params
}) {
  if (!params.emoji)
    return redirect("/404");
  const cacheKey = params?.emoji?.split("_")[0];
  try {
    const cachedFilenames = await import_localforage.default.getItem(cacheKey);
    if (cachedFilenames) {
      return {
        emojiData: cachedFilenames
      };
    } else {
      const {
        emojiData
      } = await serverLoader();
      await import_localforage.default.setItem(cacheKey, emojiData);
      return {
        emojiData
      };
    }
  } catch (error) {
    console.error("Error fetching cached filenames:", error);
  }
}
function EmojiPreview({
  emoji
}) {
  _s();
  const [isCopied, setIsCopied] = (0, import_react2.useState)("");
  const {
    totalStats,
    setTotalStats
  } = useOutletContext();
  const {
    updateLikeCount
  } = useUpdateLikes_default({
    setTotalStats
  });
  (0, import_react2.useEffect)(() => {
    const timeout = setTimeout(() => {
      isCopied && setIsCopied("");
    }, 400);
    return () => clearTimeout(timeout);
  }, [isCopied]);
  (0, import_react2.useEffect)(() => {
    const updateViewCount = async () => {
      if (true)
        return;
      if (emoji.unicode) {
        try {
          const response = await trackingAPI_default.post("/update-view-count", {
            emoji_unicode: emoji.unicode
            // Ensure this matches the expected parameter name in your backend
          });
          if (response.status === 200) {
            setTotalStats((prevStats) => {
              const existingStat = prevStats.find((stat) => stat.emoji_unicode === emoji.unicode);
              if (existingStat) {
                return prevStats.map((stat) => stat.emoji_unicode === emoji.unicode ? {
                  ...stat,
                  total_views: Number(stat.total_views) + 1
                } : stat);
              } else {
                return [...prevStats, {
                  emoji_unicode: emoji.unicode,
                  total_likes: 0,
                  total_views: 1
                }];
              }
            });
          } else {
            console.error(`Failed to update view count: ${response.status}`);
          }
        } catch (err) {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else {
            message = String(err);
          }
          console.error("Update View Count Error:", message);
        }
      }
    };
    updateViewCount();
  }, [emoji.unicode, setTotalStats]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[1200px] mx-5 flex sm:block flex-col sm:flex-row gap-12 sm:gap-0 text-center justify-center items-center sm:text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "float-left border-2 font-nunito bg-purple-50 min-w-[16em] border-purple-200 pb-12 pt-6 -translate-y-2  px-10 sm:mr-8  flex flex-col rounded-lg ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LikesAndViews_default, { totalStats, unicode: emoji.unicode }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed uppercase font-lora flex justify-center items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: emoji.title }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        "(U+",
        emoji.unicode.slice(1),
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col  justify-center mt-5 items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { loading: "lazy", title: emoji?.title + " " + emoji?.unicode, "aria-label": emoji?.title + " " + emoji?.unicode, width: 50, height: 50, alt: `Emoji of ${emoji.title + " " + emoji.unicode}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji?.unicode?.length < 9 ? emoji?.unicode.slice(1) : emoji?.unicode.split("-").join("_")}/emoji.svg` }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 mt-5 gap-x-12 gap-y-6 text-lg font-nunito justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { title: `Like ${emoji?.unicode} emoji`, className: "flex justify-center items-center col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateLikeCount(emoji?.unicode), className: "flex gap-1 bg-white justify-between border-2 px-3 py-2 hover:scale-105 rounded-md border-purple-300 text-purple-500 cursor-pointer hover:border-purple-500 hover:text-purple-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Like" }, void 0, false, {
              fileName: "app/routes/emoji-combos.$emoji.tsx",
              lineNumber: 219,
              columnNumber: 17
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "heart", title: "\u{1F496} Heart Icon (like)", customStyle: "fill-rose-500 w-5 translate-y-[0.1rem]" }, void 0, false, {
              fileName: "app/routes/emoji-combos.$emoji.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/emoji-combos.$emoji.tsx",
              lineNumber: 220,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex col-span-2 justify-center items-center", title: `Copy ${emoji?.title} Emoji`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setIsCopied(emoji?.title);
            navigator.clipboard.writeText(emoji?.title);
          }, className: "flex bg-white w-40 justify-center items-center border-2 px-3 py-2 hover:scale-105 rounded-md border-purple-300 text-purple-500 cursor-pointer hover:border-purple-500 hover:text-purple-600", children: isCopied === emoji?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg min-w-[4.9em] flex text-center justify-center items-center", children: [
            " ",
            "Copied!"
          ] }, void 0, true, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 230,
            columnNumber: 46
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-1 px-2 justify-center items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap text-base", children: "Copy Emoji" }, void 0, false, {
              fileName: "app/routes/emoji-combos.$emoji.tsx",
              lineNumber: 234,
              columnNumber: 21
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: emoji?.title }, void 0, false, {
              fileName: "app/routes/emoji-combos.$emoji.tsx",
              lineNumber: 237,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 233,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/emoji-combos.$emoji.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: emoji.description }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 207,
    columnNumber: 10
  }, this);
}
_s(EmojiPreview, "RHZbnxwYo0NRBlOjD3NJnrYSzTg=", false, function() {
  return [useOutletContext, useUpdateLikes_default];
});
_c = EmojiPreview;
function ComboTable({
  emoji
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "flex flex-col w-full sm:gap-8 text-center items-center max-h-[40em] overflow-auto scrollbar-thin scrollbar-thumb-rose-700 scrollbar-track-rose-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "flex w-full mb-10 sm:mb-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "gap-2 sm:gap-10 grid grid-cols-8 text-lg text-center sm:text-xl underline decoration-[#fda4af] underline-offset-3 w-full justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-rose-500 col-span-2 font-nunito flex justify-center items-center w-full", children: "First Emoji" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 257,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "col-span-1" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-rose-500 col-span-2 font-nunito flex justify-center items-center w-full", children: "Second Emoji" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 261,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "col-span-1" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-rose-500 col-span-2 font-nunito flex justify-center items-center w-full", children: "Combo" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 256,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 255,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "flex gap-6 flex-col w-full", children: emoji?.combos?.map((combo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "grid w-full gap-2 sm:gap-10 grid-cols-8 justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex col-span-2 justify-center items-center w-full text-lg font-nunito text-rose-500  py-1 px-1 rounded-lg text-center capitalize", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { loading: "lazy", className: "flex w-12", alt: `Emoji of ${emoji.title} ${emoji.name}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.unicode?.length < 9 ? emoji.unicode.slice(1) : emoji.unicode.split("-").join("_")}/emoji.svg` }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 273,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 272,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "col-span-1 text-4xl text-rose-200", children: "+" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 275,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex justify-center col-span-2 items-center w-full text-lg font-nunito text-rose-500  py-1 px-1 rounded-lg text-center capitalize", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { loading: "lazy", className: "flex w-12", alt: `Emoji of ${emoji.title} ${emoji.name}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${combo.unicode.split("_")[1].split("-")[0] === emoji.unicode ? combo.unicode.split("_")[0].slice(1).split("-")[0] : combo.unicode.split("_")[1].slice(1).split("-")[0]}/emoji.svg` }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 277,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 276,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "col-span-1 text-4xl text-rose-200", children: "=" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 279,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex justify-center col-span-2 items-center w-full text-lg font-nunito text-rose-500  py-1 px-1 rounded-lg text-center capitalize", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboImage_default, { firstEmoji: combo.baseUnicode.length < 9 ? combo.baseUnicode : combo.baseUnicode.split("u").join(""), secondEmoji: combo.unicode.slice(1).split("-u").join("-"), emojiData: emoji, setSecondEmoji: () => {
      }, menuStyle: "hidden", bottomMenuStyle: "hidden" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 282,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 280,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-full col-span-4 col-start-3 border-b-2 border-rose-100 mb-3" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 285,
        columnNumber: 15
      }, this)
    ] }, v4_default(), true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 271,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 254,
    columnNumber: 10
  }, this);
}
_c2 = ComboTable;
function EmojiDetails({
  emoji
}) {
  _s2();
  const {
    loadCombos
  } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[1200px] my-10 flex gap-10 flex-col  text-lg leading-loose tracking-widest bg-white bg-opacity-[0.8] p-16 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed  font-lora capitalize text-2xl text-center", children: [
      "Learn the meaning of ",
      emoji.title,
      " emoji",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "(Includes synonyms)" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 301,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 299,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex gap-5 flex-col", children: [
      " ",
      emoji?.meanings?.map((meaning) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 font-nunito", children: [
          meaning?.split(":")[0],
          ":",
          " "
        ] }, void 0, true, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: meaning?.split(":")[1] }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 309,
          columnNumber: 13
        }, this)
      ] }, v4_default(), true, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 305,
        columnNumber: 42
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-b-2 border-rose-100 mt-2" }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed font-lora capitalize text-2xl mt-5 text-center", children: [
      "How to use ",
      emoji.title,
      " emoji",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "in a sentence" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-5 text-center", children: [
      " ",
      emoji?.sentences?.map((sentences) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: sentences }, v4_default(), false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 319,
        columnNumber: 45
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-b-2 border-rose-100 mt-2" }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 321,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed font-lora capitalize text-2xl mt-5 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "Fun Short Story" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this),
      " using",
      " ",
      emoji.title,
      " emoji"
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-5 text-center", children: emoji?.story.split("/n").map((paragraph) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: paragraph }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 328,
      columnNumber: 13
    }, this) }, v4_default(), false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 327,
      columnNumber: 52
    }, this)) }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-b-2 border-rose-100 mt-2" }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed font-lora capitalize text-2xl mt-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "Related Emoji Keyboard Combinations" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, this),
      " ",
      "From Gboard's Emoji Kitchen on Android"
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-sky-600 hover:text-sky-500 w-full justify-center text-center items-center flex font-nunito mb-1", to: "/", children: "Looking for a specific combination? Click here to search!" }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 339,
      columnNumber: 7
    }, this),
    loadCombos && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboTable, { emoji }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 342,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-b-2 border-rose-100 mt-2" }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 343,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "tracking-widest leading-relaxed font-lora capitalize text-2xl mt-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "Related Keywords" }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, this),
      " to understand the emoji meanings of ",
      emoji.title
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 344,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid sm:grid-cols-3 overflow-auto max-h-[40em] scrollbar-thin scrollbar-thumb-rose-700 scrollbar-track-rose-300 sm:max-h-none gap-4 justify-center items-center", children: [
      " ",
      emoji?.keywords?.map((keywords) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex justify-center items-center text-lg font-nunito text-rose-500  py-1 px-1 rounded-lg text-center capitalize", children: keywords }, v4_default(), false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 350,
        columnNumber: 43
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 348,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 298,
    columnNumber: 10
  }, this);
}
_s2(EmojiDetails, "EpFtHDY5gIwQFVHb0mi8i7/28e8=", false, function() {
  return [useOutletContext];
});
_c3 = EmojiDetails;
function LanguageTable({
  emoji
}) {
  const languages = {
    afghanistan: "pashto",
    albania: "albanian",
    algeria: "arabic",
    andorra: "catalan",
    angola: "portuguese",
    argentina: "spanish",
    armenia: "armenian",
    australia: "english",
    austria: "german",
    azerbaijan: "azerbaijani",
    bahamas: "english",
    bahrain: "arabic",
    bangladesh: "bengali",
    barbados: "english",
    belarus: "belarusian",
    belgium: "dutch",
    belize: "english",
    benin: "french",
    bhutan: "dzongkha",
    bolivia: "spanish",
    "bosnia and herzegovina": "bosnian",
    botswana: "english",
    brazil: "portuguese",
    brunei: "malay",
    bulgaria: "bulgarian",
    "burkina faso": "french",
    burundi: "kirundi",
    "cabo verde": "portuguese",
    cambodia: "khmer",
    cameroon: "french",
    canada: "english",
    "central african republic": "french",
    chad: "french",
    chile: "spanish",
    china: "mandarin",
    colombia: "spanish",
    comoros: "french",
    "congo (congo-brazzaville)": "french",
    "costa rica": "spanish",
    croatia: "croatian",
    cuba: "spanish",
    cyprus: "greek",
    "czech republic (czechia)": "czech",
    denmark: "danish",
    djibouti: "french",
    dominica: "english",
    "dominican republic": "spanish",
    ecuador: "spanish",
    egypt: "arabic",
    "el salvador": "spanish",
    "equatorial guinea": "spanish",
    eritrea: "tigrinya",
    estonia: "estonian",
    "eswatini (formerly swaziland)": "swati",
    ethiopia: "amharic",
    fiji: "english",
    finland: "finnish",
    france: "french",
    gabon: "french",
    gambia: "english",
    georgia: "georgian",
    germany: "german",
    ghana: "english",
    greece: "greek",
    grenada: "english",
    guatemala: "spanish",
    guinea: "french",
    "guinea-bissau": "portuguese",
    guyana: "english",
    haiti: "haitian creole",
    honduras: "spanish",
    hungary: "hungarian",
    iceland: "icelandic",
    india: "hindi",
    indonesia: "indonesian",
    iran: "persian",
    iraq: "arabic",
    ireland: "english",
    israel: "hebrew",
    italy: "italian",
    jamaica: "english",
    japan: "japanese",
    jordan: "arabic",
    kazakhstan: "kazakh",
    kenya: "swahili",
    kiribati: "english",
    kuwait: "arabic",
    kyrgyzstan: "kyrgyz",
    laos: "lao",
    latvia: "latvian",
    lebanon: "arabic",
    lesotho: "sesotho",
    liberia: "english",
    libya: "arabic",
    liechtenstein: "german",
    lithuania: "lithuanian",
    luxembourg: "luxembourgish",
    madagascar: "malagasy",
    malawi: "english",
    malaysia: "malay",
    maldives: "dhivehi",
    mali: "french",
    malta: "maltese",
    "marshall islands": "marshallese",
    mauritania: "arabic",
    mauritius: "english",
    mexico: "spanish",
    micronesia: "english",
    moldova: "romanian",
    monaco: "french",
    mongolia: "mongolian",
    montenegro: "montenegrin",
    morocco: "arabic",
    mozambique: "portuguese",
    "myanmar (formerly burma)": "burmese",
    namibia: "english",
    nauru: "nauruan",
    nepal: "nepali",
    netherlands: "dutch",
    "new zealand": "english",
    nicaragua: "spanish",
    niger: "french",
    nigeria: "english",
    "north korea": "korean",
    "north macedonia": "macedonian",
    norway: "norwegian",
    oman: "arabic",
    pakistan: "urdu",
    palau: "palauan",
    "palestine state": "arabic",
    panama: "spanish",
    "papua new guinea": "tok pisin",
    paraguay: "spanish",
    peru: "spanish",
    philippines: "filipino",
    poland: "polish",
    portugal: "portuguese",
    qatar: "arabic",
    romania: "romanian",
    russia: "russian",
    rwanda: "kinyarwanda",
    "saint kitts and nevis": "english",
    "saint lucia": "english",
    "saint vincent and the grenadines": "english",
    samoa: "samoan",
    "san marino": "italian",
    "sao tome and principe": "portuguese",
    "saudi arabia": "arabic",
    senegal: "french",
    serbia: "serbian",
    seychelles: "french",
    "sierra leone": "english",
    singapore: "malay",
    slovakia: "slovak",
    slovenia: "slovene",
    "solomon islands": "english",
    somalia: "somali",
    "south africa": "zulu",
    "south korea": "korean",
    "south sudan": "english",
    spain: "spanish",
    "sri lanka": "sinhala",
    sudan: "arabic",
    suriname: "dutch",
    sweden: "swedish",
    switzerland: "german",
    syria: "arabic",
    taiwan: "mandarin",
    tajikistan: "tajik",
    tanzania: "swahili",
    thailand: "thai",
    "timor-leste": "portuguese",
    togo: "french",
    tonga: "tongan",
    "trinidad and tobago": "english",
    tunisia: "arabic",
    turkey: "turkish",
    turkmenistan: "turkmen",
    tuvalu: "tuvaluan",
    uganda: "english",
    ukraine: "ukrainian",
    "arab countries": "arabic",
    "united arab emirates": "arabic",
    "united kingdom": "english",
    "united states of america": "english",
    uruguay: "spanish",
    uzbekistan: "uzbek",
    vanuatu: "bislama",
    "vatican city": "italian",
    venezuela: "spanish",
    vietnam: "vietnamese",
    yemen: "arabic",
    arabic: "arabic",
    zambia: "english",
    zimbabwe: "english"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mb-2 justify-center items-center gap-10 text-purple-600", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl justify-center items-center flex w-full text-center sm:text-2xl font-lora ", children: [
      emoji.title,
      " ",
      emoji.name,
      " Emoji Name In Other Languages"
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 561,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "flex gap-3 w-full flex-col text-xs sm:text-sm  max-w-[1200px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "grid grid-cols-3 sm:grid-cols-4 sm:gap-x-10 mb-1 underline underline-offset-2 decoration-[#94a3b8] w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hidden sm:flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-slate-700 font-nunito flex justify-center items-center w-full", children: "Country Code" }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 567,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 566,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-slate-700 font-nunito flex justify-center items-center w-full", children: "Country" }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 572,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 571,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-slate-700 font-nunito flex justify-center items-center w-full", children: "Language" }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 577,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 576,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-slate-700 font-nunito flex justify-center items-center w-full", children: "Name" }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 582,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 581,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 565,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "flex  w-full flex-col gap-3", children: emoji.languages.map((language) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "grid grid-cols-3 sm:grid-cols-4 sm:gap-x-10 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "hidden sm:flex justify-center items-center w-full font-nunito text-slate-500  py-1 px-1 rounded-lg text-center capitalize", children: [
          " ",
          language.countryAbb
        ] }, void 0, true, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 589,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex justify-center items-center w-full font-nunito text-slate-500  py-1 px-1 rounded-lg text-center capitalize", children: language.country.toLowerCase().includes("arab") ? "Arab Countries" : language.country }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 593,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex justify-center items-center w-full font-nunito text-slate-500  py-1 px-1 rounded-lg text-center capitalize", children: language.country.toLowerCase().includes("arab") ? "Arabic" : languages[`${language?.country.toLowerCase()}`] }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 596,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "flex justify-center items-center w-full font-nunito text-slate-500  py-1 px-1 rounded-lg text-center capitalize", children: language.name }, void 0, false, {
          fileName: "app/routes/emoji-combos.$emoji.tsx",
          lineNumber: 599,
          columnNumber: 17
        }, this)
      ] }, v4_default(), true, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 588,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/emoji-combos.$emoji.tsx",
        lineNumber: 587,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 564,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 560,
    columnNumber: 10
  }, this);
}
_c4 = LanguageTable;
function Emoji() {
  _s3();
  const {
    emojiData
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full font-lato justify-center items-center tracking-widest mt-12 leading-loose text-slate-600 text-lg gap-20", children: [emojiData].map((emoji) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmojiPreview, { emoji }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 615,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-rose-50 w-full justify-center items-center py-10  flex ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmojiDetails, { emoji }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 617,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 616,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageTable, { emoji }, void 0, false, {
      fileName: "app/routes/emoji-combos.$emoji.tsx",
      lineNumber: 619,
      columnNumber: 11
    }, this)
  ] }, v4_default(), true, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 614,
    columnNumber: 33
  }, this)) }, void 0, false, {
    fileName: "app/routes/emoji-combos.$emoji.tsx",
    lineNumber: 613,
    columnNumber: 10
  }, this);
}
_s3(Emoji, "fQDIsXyGR7meDpIHnAFu8OtiANo=", false, function() {
  return [useLoaderData];
});
_c5 = Emoji;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "EmojiPreview");
$RefreshReg$(_c2, "ComboTable");
$RefreshReg$(_c3, "EmojiDetails");
$RefreshReg$(_c4, "LanguageTable");
$RefreshReg$(_c5, "Emoji");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  clientLoader,
  Emoji as default,
  meta
};
//# sourceMappingURL=/build/routes/emoji-combos.$emoji-MQPRLLZO.js.map
