import {
  HandleDiceRoll_default,
  SearchBar_default,
  useBodyEventListeners_default,
  useSearch_default,
  useWindowWidth
} from "/build/_shared/chunk-KQCYM2XO.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  LikesAndViews_default,
  useUpdateLikes_default
} from "/build/_shared/chunk-VNJDO3SI.js";
import {
  Icon
} from "/build/_shared/chunk-T4MUNURI.js";
import "/build/_shared/chunk-ABUIXSQQ.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
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

// app/routes/emoji-combos.tsx
var import_react2 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/emoji-combos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/emoji-combos.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.6863";
}
var meta = () => {
  return [{
    title: "\u2728 All emojis with combos \u{1F7F0} emoji kitchen, emoji copy and paste, emoji meanings, emoji combos, and more! \u{1F958}\u{1F60B} \u{1F480}\u{1F389}"
  }, {
    name: "description",
    content: "\u2B50 Explore the emojipedia of emoji kitchen combinations! Discover endless emoji combos like \u{1F958}\u{1F60B}, copy and paste your favorites, explore detailed emoji meanings, and find unique combinations for every occasion. Perfect for social media, messaging, and creative expression! \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Emoji Kitchen \u{1F440}\u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F\u{1F64F}\u{1F680}\u{1F929}"
  }];
};
function isRouteData(data) {
  return typeof data === "object" && data !== null && "filenames" in data;
}
function Buttons({
  filename,
  setSearchEmoji,
  setTotalStats,
  totalStats
}) {
  _s();
  const [isCopied, setIsCopied] = (0, import_react2.useState)("");
  const {
    totals
  } = useLoaderData();
  (0, import_react2.useEffect)(() => {
    if (totals.length > 0 && totalStats.length === 0) {
      setTotalStats(totals);
    }
  }, [setTotalStats, totalStats.length, totals]);
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
  const emoji = filename.keys.split("~")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-4 gap-x-10 w-full gap-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { title: `Like ${emoji} emoji`, className: "flex justify-center items-center col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateLikeCount(filename.id), className: "flex gap-2 ml-auto col-span-2 justify-center border-2 px-3 py-2 hover:scale-105 rounded-md border-purple-300 text-purple-500 cursor-pointer hover:border-purple-500 hover:text-purple-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Like" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "heart", title: "\u{1F496} Heart Icon (like)", customStyle: "fill-rose-500 w-5 translate-y-[0.1rem]" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { title: `${emoji} Emoji meaning`, className: "col-span-2 gap-4 mr-auto justify-center flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/emoji-combos/${filename.id + "_\u2728" + emoji + "\u2728_" + filename.keys.split("~")[1].split(" ").join("-") + "-emoji"}`, onClick: () => setTimeout(() => setSearchEmoji(""), 1e3), className: "flex justify-center sm:justify-between border-2 px-3 gap-1 py-2 hover:scale-105 rounded-md border-rose-300 text-rose-500 cursor-pointer hover:border-rose-500 hover:text-rose-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "viewPage", title: "New Tab Icon", customStyle: "fill-rose-500 w-5" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex col-span-4 justify-center items-center", title: `Copy ${emoji} Emoji`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      setIsCopied(emoji);
      navigator.clipboard.writeText(emoji);
    }, className: "flex justify-center items-center border-2 px-3 py-2 w-40 hover:scale-105 rounded-md border-purple-300 text-purple-500 cursor-pointer hover:border-purple-500 hover:text-purple-600", children: isCopied === emoji ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm py-[0.14em]", children: "Copied!" }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 128,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Copy Emoji" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 129,
        columnNumber: 15
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex", children: emoji }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 129,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 128,
      columnNumber: 88
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_s(Buttons, "i4yWZrvE2JqVSxdJMp2EI/Tmjqc=", false, function() {
  return [useLoaderData, useUpdateLikes_default];
});
_c = Buttons;
function EmojiCombos() {
  _s2();
  const matches = useMatches();
  const windowWidth = useWindowWidth();
  const [displayLimit, setDisplayLimit] = (0, import_react2.useState)(18);
  const [searchDisplayLimit, setSearchDisplayLimit] = (0, import_react2.useState)(73);
  const [totalStats, setTotalStats] = (0, import_react2.useState)([]);
  const [loadCombos, setLoadCombos] = (0, import_react2.useState)(false);
  useBodyEventListeners_default({
    setDisplayLimit: setSearchDisplayLimit
  });
  (0, import_react2.useEffect)(() => {
    if (windowWidth !== void 0) {
      setSearchDisplayLimit(windowWidth < 1022 ? 49 : 73);
    }
  }, [windowWidth]);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      if (displayLimit < 1e3) {
        setDisplayLimit(1e3);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayLimit]);
  const filenames = (0, import_react2.useMemo)(() => isRouteData(matches[0]?.data) ? matches[0].data.filenames : [], [matches]);
  const {
    searchEmoji,
    setSearchEmoji
  } = useSearch_default();
  const pathname = useLocation().pathname?.split("/")?.at(-1)?.split("_")[0] || "";
  const filteredFilenames = (0, import_react2.useMemo)(() => {
    if (!filenames)
      return [];
    return filenames.filter((filename) => filename.id !== pathname && (searchEmoji === "" || filename.keys.includes(searchEmoji.trim())));
  }, [filenames, searchEmoji, pathname]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "#emoji-combo-header", className: "flex flex-col justify-center items-center tracking-wider text-slate-800 font-nunito mx-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "capitalize font-lora text-2xl leading-relaxed text-center md:text-3xl lg:text-4xl mt-10 text-purple-700 flex justify-center items-center gap-3", children: [
      pathname === "emoji-combos" ? "\u{1F958} All Emojis With Combos \u{1F60B}" : filenames?.find((filename) => filename.id === pathname)?.keys.split("~")[1] + " Emoji",
      " ",
      pathname !== "emoji-combos" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { title: "\u{1F50D} Scroll To Search Bar", to: "#search-bar", className: "flex text-3xl hover:scale-110", children: "\u{1F50D}" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 181,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { onMouseEnter: () => {
      setDisplayLimit(1e3);
      setLoadCombos(true);
    }, onTouchStart: () => {
      setDisplayLimit(1e3);
      setLoadCombos(true);
    }, className: "flex flex-col justify-center items-center tracking-wider text-slate-800 font-nunito", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
        totalStats,
        setTotalStats,
        loadCombos
      } }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sky-600 mt-10 hover:text-sky-500 text-center mx-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/copy-and-paste/emoji-copy-and-paste", children: "Click here to view a list of all copy and paste emojis!" }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mx-5 w-full justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchBar_default, { uniqueId: "combos", setSearchEmoji, customStyle: "mt-11 w-full max-w-[1200px]", customSearchEmojiStyle: "-translate-x-[0.38em]", placeholder: "search emojis", customLabelStyle: "pl-3", searchEmoji, handleDiceRoll: () => {
        filenames && setSearchEmoji(HandleDiceRoll_default({
          filenames
        }));
      } }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-6 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 xl:grid-cols-24 gap-2 overflow-y-auto pt-2 rounded-md mx-5 max-h-[9em] mt-3 bg-purple-50 scrollbar-thumb-purple-500 px-2 scrollbar-track-purple-200 scrollbar-thin", children: filenames?.map((filename, index) => {
        return index < searchDisplayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { title: `${filename.keys.split("~")[0]} ${filename.keys.split("~")[1]}`, tabIndex: -1, onClick: () => setSearchEmoji(filename.keys.split("~")[0]), className: "text-2xl w-10 h-10 border-2 rounded-md hover:scale-110 bg-white border-purple-200 hover:border-purple-500", children: filename.keys.split("~")[0] }, void 0, false, {
          fileName: "app/routes/emoji-combos.tsx",
          lineNumber: 213,
          columnNumber: 17
        }, this) }, filename.id + "emoji-search-preview", false, {
          fileName: "app/routes/emoji-combos.tsx",
          lineNumber: 212,
          columnNumber: 47
        }, this) : null;
      }) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-9 mt-10 md:w-full max-w-[1150px] px-5", children: filteredFilenames.map((filename, index) => {
        return index < displayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-col gap-2 justify-center items-center border-2 border-purple-300 p-5 rounded-lg w-full min-h-[15em] text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LikesAndViews_default, { unicode: filename.id, totalStats }, void 0, false, {
            fileName: "app/routes/emoji-combos.tsx",
            lineNumber: 222,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "uppercase font-lora", children: [
            filename.keys.split("~")[0],
            " (U+",
            filename.id.slice(1),
            ")"
          ] }, void 0, true, {
            fileName: "app/routes/emoji-combos.tsx",
            lineNumber: 223,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { loading: "lazy", title: `${filename.keys.split("~")[0]} ${filename.keys.split("~")[1]}`, width: 50, height: 50, alt: `Emoji of ${filename.keys.split("~")[0]} ${filename.id}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${filename.id.length < 9 ? filename.id.slice(1) : filename.id.split("-").join("_")}/emoji.svg` }, void 0, false, {
            fileName: "app/routes/emoji-combos.tsx",
            lineNumber: 226,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "capitalize font-lora mb-2", children: filename.keys.split("~")[1] }, void 0, false, {
            fileName: "app/routes/emoji-combos.tsx",
            lineNumber: 227,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Buttons, { totalStats, setTotalStats, filename, setSearchEmoji }, void 0, false, {
            fileName: "app/routes/emoji-combos.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this)
        ] }, filename.id, true, {
          fileName: "app/routes/emoji-combos.tsx",
          lineNumber: 221,
          columnNumber: 41
        }, this) : null;
      }) }, void 0, false, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#emoji-combo-header", className: "font-nunito text-2xl translate-y-24 flex gap-4 justify-center items-center text-sky-600 hover:text-sky-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "scale-x-[-1]", children: "\u261D\uFE0F\u261D\u{1F3FB}\u261D\u{1F3FC}" }, void 0, false, {
          fileName: "app/routes/emoji-combos.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        "Scroll To Top",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u261D\u{1F3FD}\u261D\u{1F3FE}\u261D\u{1F3FF}" }, void 0, false, {
          fileName: "app/routes/emoji-combos.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/emoji-combos.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/emoji-combos.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/emoji-combos.tsx",
    lineNumber: 177,
    columnNumber: 10
  }, this);
}
_s2(EmojiCombos, "RvLRfuX9EH9WFM6l97oPl4H8ZRg=", false, function() {
  return [useMatches, useWindowWidth, useBodyEventListeners_default, useSearch_default, useLocation];
});
_c2 = EmojiCombos;
var _c;
var _c2;
$RefreshReg$(_c, "Buttons");
$RefreshReg$(_c2, "EmojiCombos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EmojiCombos as default,
  meta
};
//# sourceMappingURL=/build/routes/emoji-combos-E3TLCBH6.js.map
