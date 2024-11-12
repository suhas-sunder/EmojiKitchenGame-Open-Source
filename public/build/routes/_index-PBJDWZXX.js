import {
  HandleDiceRoll_default,
  SearchBar_default,
  useBodyEventListeners_default,
  useIsLoading,
  useSearch_default,
  useWindowWidth
} from "/build/_shared/chunk-KQCYM2XO.js";
import {
  ComboImage_default
} from "/build/_shared/chunk-6TWFEGXZ.js";
import {
  Icon
} from "/build/_shared/chunk-T4MUNURI.js";
import {
  useManageCopiedMsg
} from "/build/_shared/chunk-P4CX52I2.js";
import {
  cloudflareR2API_default,
  require_localforage
} from "/build/_shared/chunk-AKFUC45F.js";
import "/build/_shared/chunk-ABUIXSQQ.js";
import {
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

// app/routes/_index.tsx
var import_react6 = __toESM(require_react(), 1);

// app/client/components/layout/FirstEmojiWindow.tsx
var import_react2 = __toESM(require_react(), 1);

// app/client/components/utils/requests/HandleCacheEmojiData.ts
var import_localforage = __toESM(require_localforage(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/utils/requests/HandleCacheEmojiData.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/utils/requests/HandleCacheEmojiData.ts"
  );
  import.meta.hot.lastModified = "1731046171312.873";
}
async function HandleCacheEmojiData(emojiUnicode) {
  try {
    const cachedEmojiData = await import_localforage.default.getItem(emojiUnicode);
    if (cachedEmojiData) {
      return cachedEmojiData;
    } else {
      const response = await cloudflareR2API_default.get(`/emojis/${emojiUnicode.length < 9 ? emojiUnicode.slice(1) : emojiUnicode}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response2) => response2.data);
      if (response) {
        await import_localforage.default.setItem(emojiUnicode, response);
        return response;
      }
    }
  } catch (error) {
    console.error("Error fetching emoji filenames:", error);
  }
}
_c = HandleCacheEmojiData;
var HandleCacheEmojiData_default = HandleCacheEmojiData;
var _c;
$RefreshReg$(_c, "HandleCacheEmojiData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/hooks/useLoadAnimation.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useLoadAnimation.ts"
  );
  import.meta.hot.lastModified = "1731046171308.2136";
}
function useLoadAnimation() {
  const [loadAnimation, setLoadAnimation] = (0, import_react.useState)(false);
  const fadeAnim = loadAnimation ? "opacity-100 transition-opacity duration-200 ease-in" : "opacity-0";
  (0, import_react.useEffect)(() => {
    setLoadAnimation(true);
  }, []);
  return {
    fadeAnim
  };
}

// app/client/components/layout/FirstEmojiWindow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/layout/FirstEmojiWindow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/layout/FirstEmojiWindow.tsx"
  );
  import.meta.hot.lastModified = "1731046171309.3179";
}
var FirstEmojiWindow = ({
  isLoading,
  filenames,
  emojiData,
  firstEmoji,
  setEmojiData,
  setFirstEmoji
}) => {
  _s();
  const {
    searchEmoji,
    setSearchEmoji
  } = useSearch_default();
  const windowWidth = useWindowWidth();
  const {
    fadeAnim
  } = useLoadAnimation();
  const [displayLimit, setDisplayLimit] = (0, import_react2.useState)(145);
  useBodyEventListeners_default({
    setDisplayLimit
  });
  (0, import_react2.useEffect)(() => {
    if (windowWidth !== void 0) {
      setDisplayLimit(windowWidth < 1022 ? 88 : 145);
    }
  }, [windowWidth]);
  const loadEmojiData = (0, import_react2.useCallback)(async (emojiUnicode) => {
    if (emojiData?.unicode === emojiUnicode)
      return;
    await HandleCacheEmojiData_default(emojiUnicode);
  }, [emojiData]);
  const handleDisplayCombos = (0, import_react2.useCallback)(async (emojiUnicode, emoji) => {
    const emojiData2 = await HandleCacheEmojiData_default(emojiUnicode);
    setFirstEmoji(`${emojiUnicode}~${emoji}`);
    setEmojiData(emojiData2);
  }, [setFirstEmoji, setEmojiData]);
  const filteredFilenames = (0, import_react2.useMemo)(() => {
    return filenames?.filter((filename) => filename?.id?.includes(searchEmoji) || filename?.keys?.includes(searchEmoji.trim()) || searchEmoji === "");
  }, [filenames, searchEmoji]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-[45vh] border-r-2 border-b-2 rounded-lg border-purple-100 lg:border-none md:h-[50vh] lg:h-[70.5vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchBar_default, { uniqueId: "first", setSearchEmoji, customStyle: "md:-translate-x-6 md:pl-5 pr-3 md:pr-0 mb-1", customSearchEmojiStyle: "translate-x-[1em]", placeholder: "Search first emoji", customLabelStyle: "pr-[0.55em] pl-0", searchEmoji, handleDiceRoll: () => {
      filenames && setSearchEmoji(HandleDiceRoll_default({
        filenames
      }));
    } }, void 0, false, {
      fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: `grid ${fadeAnim} grid-cols-4 pt-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 overflow-y-auto sm:py-6 px-1 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200 ${isLoading ? "opacity-30" : ""} pb-[4em] lg:pb-[13em]`, children: filteredFilenames?.map((filename, index) => {
      return index < displayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { title: `${filename.keys.split("~")[0]} ${filename.keys.split("~")[1]}`, "aria-label": `${filename.keys.split("~")[0]} ${filename.keys.split("~")[1]}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { tabIndex: -1, onMouseEnter: () => loadEmojiData(filename.id), onClick: () => handleDisplayCombos(filename.id, `${filename.keys.split("~")[0]}~${filename.keys.split("~")[1]}`), disabled: isLoading, className: `${filename.id === firstEmoji.split("~")[0] ? "border-purple-400 bg-purple-100" : ""} flex justify-center items-center w-full hover:scale-110 cursor-pointer p-1 border-2 rounded-lg border-transparent hover:border-purple-400`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { loading: "lazy", alt: `Emoji of ${filename.keys.split("~")[0]} ${filename.id}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${filename.id.length < 9 ? filename.id.slice(1) : filename.id.split("-").join("_")}/emoji.svg` }, void 0, false, {
        fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) }, filename.id, false, {
        fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
        lineNumber: 77,
        columnNumber: 39
      }, this) : null;
    }) }, void 0, false, {
      fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/layout/FirstEmojiWindow.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
};
_s(FirstEmojiWindow, "QxiqipTHedQL/MbEK+QlBB5+oS8=", false, function() {
  return [useSearch_default, useWindowWidth, useLoadAnimation, useBodyEventListeners_default];
});
_c2 = FirstEmojiWindow;
var FirstEmojiWindow_default = FirstEmojiWindow;
var _c2;
$RefreshReg$(_c2, "FirstEmojiWindow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/layout/SecondEmojiWindow.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/layout/SecondEmojiWindow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/layout/SecondEmojiWindow.tsx"
  );
  import.meta.hot.lastModified = "1731046171309.5034";
}
var SecondEmojiWindow = ({
  filenames,
  emojiData,
  firstEmoji,
  secondEmoji,
  setSecondEmoji
}) => {
  _s2();
  const {
    searchEmoji,
    setSearchEmoji
  } = useSearch_default();
  const {
    fadeAnim
  } = useLoadAnimation();
  const [displayLimit, setDisplayLimit] = (0, import_react3.useState)(145);
  useBodyEventListeners_default({
    setDisplayLimit
  });
  const handleLinkCode = (emojiUnicode) => {
    let code = emojiUnicode;
    if (emojiUnicode.length <= 13) {
      code = emojiUnicode.split("-")[0].slice(1);
      code = emojiUnicode.split("-").join("_").split("u").join("");
    }
    if (code.length == 2)
      code = "00" + code;
    return code;
  };
  const handleDiceRoll = (0, import_react3.useCallback)(() => {
    if (!filenames)
      return;
    const filteredFilenames2 = filenames.filter((filename) => emojiData?.combos.map((combo) => combo.baseUnicode).includes(filename.id));
    const randEmoji = HandleDiceRoll_default({
      filenames: filteredFilenames2
    });
    randEmoji && setSearchEmoji(randEmoji);
  }, [filenames, emojiData, setSearchEmoji]);
  const emojiCombos = (0, import_react3.useMemo)(() => {
    if (!emojiData?.combos)
      return [];
    const comboSet = new Set(emojiData.combos.map((combo) => combo.baseUnicode.split("-")[0] === firstEmoji.split("~")[0] ? combo.unicode.split("_")[1].split("-")[0] : combo.baseUnicode.split("-")[0]));
    return Array.from(comboSet).filter((combo) => combo !== firstEmoji.split("~")[0]);
  }, [emojiData, firstEmoji]);
  const filteredFilenames = (0, import_react3.useMemo)(() => {
    if (!searchEmoji.trim())
      return filenames || [];
    return filenames?.filter((filename) => filename?.id?.includes(searchEmoji) || filename.keys.includes(searchEmoji.trim())) || [];
  }, [filenames, searchEmoji]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col h-[45vh] md:h-[50vh] lg:h-[70.5vh] border-b-2 rounded-lg border-purple-100 lg:border-none border-l-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchBar_default, { uniqueId: "second", setSearchEmoji, customStyle: "pr-2 mb-1 md:-translate-x-4 sm:pl-3 -translate-x-2", customSearchEmojiStyle: "translate-x-[1em]", placeholder: "Search second emoji", customLabelStyle: "pr-[0.55em]", searchEmoji, handleDiceRoll }, void 0, false, {
      fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: `${fadeAnim} grid w-full grid-cols-4 pt-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 overflow-y-auto sm:py-6 px-1 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200 pb-[4em] lg:pb-[13em] `, children: [
      emojiCombos.map((secondEmojiFilename) => {
        const keywords = filenames?.find((filename) => filename.id === secondEmojiFilename)?.id + "~" + filenames?.find((filename) => filename.id === secondEmojiFilename)?.keys;
        if (!keywords)
          return null;
        if (searchEmoji && !keywords.split("~").join("").includes(searchEmoji))
          return null;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { title: `${keywords.split("~")[0]} ${keywords.split("~")[1]}`, "aria-label": `${keywords.split("~")[0]} ${keywords.split("~")[1]}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { tabIndex: -1, onClick: () => setSecondEmoji(`${secondEmojiFilename.length === 3 ? "u00" + secondEmojiFilename.slice(1) : secondEmojiFilename}~${keywords.split("~")[0]}~${keywords.split("~")[1]}`), className: `${secondEmojiFilename === secondEmoji.split("~")[0] ? "border-purple-400 bg-purple-100" : ""} flex justify-center items-center w-full hover:scale-110 cursor-pointer p-1 border-2 rounded-lg border-transparent hover:border-purple-400`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { loading: "lazy", alt: `Emoji of ${keywords.split("~")[0]} ${secondEmojiFilename}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${handleLinkCode(secondEmojiFilename)}/emoji.svg` }, void 0, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this) }, `${secondEmojiFilename}-combo-pair`, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 80,
          columnNumber: 16
        }, this);
      }),
      !firstEmoji && filteredFilenames.map((filename, index) => {
        return index < displayLimit ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { onMouseEnter: () => setDisplayLimit(1e3), onTouchStart: () => setDisplayLimit(1e3), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { disabled: true, className: "flex justify-center items-center w-full hover:scale-110 p-1 border-2 rounded-lg border-transparent opacity-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { loading: "lazy", alt: `Emoji of ${filename.keys.split("~")[0]} ${filename.id}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${filename.id.length < 9 ? filename.id.slice(1) : filename.id.split("-").join("_")}/emoji.svg` }, void 0, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this) }, filename.id, false, {
          fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
          lineNumber: 87,
          columnNumber: 39
        }, this) : null;
      })
    ] }, void 0, true, {
      fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/layout/SecondEmojiWindow.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s2(SecondEmojiWindow, "ZRGtKMzx6a4CkQUgkLNgOEEqXz0=", false, function() {
  return [useSearch_default, useLoadAnimation, useBodyEventListeners_default];
});
_c3 = SecondEmojiWindow;
var SecondEmojiWindow_default = SecondEmojiWindow;
var _c3;
$RefreshReg$(_c3, "SecondEmojiWindow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/layout/ThirdEmojiWindow.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/layout/ThirdEmojiWindow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/layout/ThirdEmojiWindow.tsx"
  );
  import.meta.hot.lastModified = "1731046171309.7234";
}
function ThirdEmojiWindow({
  emojiData,
  firstEmoji,
  setSecondEmoji,
  secondEmoji,
  thirdDiceRoll,
  filenames
}) {
  if (!filenames)
    return null;
  const handleComboClick = (comboCodes) => {
    const baseUnicodeId = comboCodes.baseUnicode.split("-")[0];
    const unicodeId = comboCodes.unicode.split("_")[1].split("-")[0];
    const newEmojiId = baseUnicodeId === firstEmoji.split("~")[0] ? unicodeId : baseUnicodeId;
    const selectedFilename = filenames.find((filename) => filename.id === newEmojiId);
    if (selectedFilename) {
      setSecondEmoji(`${newEmojiId}~${selectedFilename.keys.split("~")[0]}`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex relative items-center flex-col col-span-2 lg:col-span-1 min-w-20 h-[100vh] md:h-[66vh] lg:h-[70.5vh] border-l border-b sm:border-hidden", children: [
    emojiData?.combos && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `hidden lg:flex justify-center items-center border-dashed max-w-[30em] -translate-x-1 border-2 w-full border-rose-300 rounded-lg gap-2 py-1 my-2 text-md text-purple-800 font-nunito ${firstEmoji && secondEmoji ? "!hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${emojiData.combos.length <= 200 ? "flex" : "hidden"}`, children: "\u{1F643}" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${emojiData.combos.length > 200 && emojiData.combos.length < 500 ? "flex" : "hidden"}`, children: "\u{1F640}" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${emojiData.combos.length > 500 && emojiData.combos.length < 600 ? "flex" : "hidden"}`, children: "\u{1F635}" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${emojiData.combos.length > 600 ? "flex" : "hidden"}`, children: "\u{1F480}" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      "Total Combos ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "scale-75", children: "\u{1F7F0}" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 54,
        columnNumber: 24
      }, this),
      " ",
      emojiData.combos.length
    ] }, void 0, true, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 41,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: `${emojiData?.combos ? "grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-5" : "flex h-full"} overflow-y-auto w-full py-6 px-1 scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-rose-100 pb-[8em] ${emojiData?.combos ? "lg:pb-[13em]" : ""} ${firstEmoji && secondEmoji ? "!hidden" : ""}`, children: emojiData?.combos ? emojiData.combos.map((comboCodes) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { tabIndex: -1, disabled: !!(firstEmoji && secondEmoji), onClick: () => handleComboClick(comboCodes), className: `hover:scale-110 p-1 m-1 border-2 rounded-lg border-transparent ${!(firstEmoji && secondEmoji) ? "hover:border-rose-400" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { loading: "lazy", alt: `Combination of two emojis ${comboCodes.unicode}`, src: `https://www.gstatic.com/android/keyboard/emojikitchen/${comboCodes.code}/${comboCodes.baseUnicode}/${comboCodes.unicode}.png` }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, `${comboCodes.code}${comboCodes.baseUnicode}${comboCodes.unicode}`, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 58,
      columnNumber: 65
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "flex flex-col lg:pt-64 py-1 justify-start items-center w-full gap-2 sm:gap-12 font-nunito text-xl sm:text-2xl px-5 text-center tracking-widest leading-loose text-rose-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden lg:flex gap-6 scale-[3] md:scale-[2.5]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\u{1F448}\u{1F3FC}" }, void 0, false, {
          fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\u{1F9D1}\u{1F3FC}\u200D\u{1F373}" }, void 0, false, {
          fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "lg:hidden flex gap-10 scale-[3] md:scale-[2.5]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\u261D\u{1F3FC}" }, void 0, false, {
          fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\u{1F9D1}\u{1F3FC}\u200D\u{1F373}" }, void 0, false, {
          fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Select an emoji from the first column & start cookin'!" }, void 0, false, {
        fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 62,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    firstEmoji && secondEmoji && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex absolute justify-center items-center lg:top-32 p-12 scale-150", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "scale-[2.1] pt-10 lg:pt-0 md:scale-150 lg:scale-[2.5]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ComboImage_default, { firstEmoji, secondEmoji, emojiData, setSecondEmoji, containerStyle: "translate-y-1 lg:translate-y-8", menuStyle: "scale-50 -top-[1.55em] scale-[.80] gap-16", bottomMenuStyle: "scale-50 -bottom-[2.4em] scale-[.80] gap-16", thirdDiceRoll }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
      lineNumber: 77,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/layout/ThirdEmojiWindow.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c4 = ThirdEmojiWindow;
var _c4;
$RefreshReg$(_c4, "ThirdEmojiWindow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/hooks/useResponsive.ts
var import_react4 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useResponsive.ts"
  );
  import.meta.hot.lastModified = "1731046171308.5012";
}
var useResponsive = () => {
  const [isHidden, setIsHidden] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return {
    isHidden,
    setIsHidden
  };
};
var useResponsive_default = useResponsive;

// app/routes/_index.tsx
var import_localforage2 = __toESM(require_localforage(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1731046171313.5823";
}
function isRouteData(data) {
  return typeof data === "object" && data !== null && "filenames" in data;
}
var meta = () => {
  return [{
    title: "\u2728 Emoji Kitchen Game \u{1F958}\u{1F468}\u200D\u{1F373} Mix, Match, and Create Fun and Unique Emoji Combos for Creative Messaging! \u{1F480}\u{1F389}"
  }, {
    name: "description",
    content: "\u2B50 Get creative with our Emoji Kitchen Game! \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Explore thousands of unique emoji combinations based on Google Gboard's emoji kitchen \u2705. Mix and match emojis to craft fun and unique combinations \u{1F440}. Click and combine to discover endless emoji possibilities for your messages and social media posts \u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F. Start creating and share your favorite emoji combos today! \u{1F64F}\u{1F680}\u{1F929}"
  }];
};
function EmojiDisplay({
  firstEmoji,
  secondEmoji,
  setFirstEmoji,
  setSecondEmoji,
  setEmojiData,
  emojiData,
  firstDiceRoll,
  secondDiceRoll,
  thirdDiceRoll
}) {
  _s3();
  const {
    isCopied,
    setIsCopied
  } = useManageCopiedMsg();
  const {
    isHidden,
    setIsHidden
  } = useResponsive_default();
  const {
    fadeAnim
  } = useLoadAnimation();
  const [imageBlobs, setImageBlobs] = (0, import_react6.useState)(/* @__PURE__ */ new Map());
  const [imagesPrefetched, setImagesPrefetched] = (0, import_react6.useState)(false);
  const [isImageReady, setIsImageReady] = (0, import_react6.useState)(false);
  const normalizeUnicode = (emoji) => {
    let baseUnicode = emoji.split("~")[0];
    if (baseUnicode.startsWith("u")) {
      baseUnicode = baseUnicode.slice(1);
    }
    if (baseUnicode.length == 2)
      baseUnicode = "00" + baseUnicode;
    return baseUnicode;
  };
  const getImageFromLocalforage = async (url) => {
    try {
      const blob = await import_localforage2.default.getItem(url);
      return blob || void 0;
    } catch (error) {
      console.error("Error retrieving image from localforage:", error);
      return void 0;
    }
  };
  const storeImageInLocalforage = async (url, blob) => {
    try {
      await import_localforage2.default.setItem(url, blob);
    } catch (error) {
      console.error("Error storing image in localforage:", error);
    }
  };
  const prefetchImages = (0, import_react6.useCallback)(async () => {
    setImagesPrefetched(false);
    setIsImageReady(false);
    const firstEmojiUnicode = normalizeUnicode(firstEmoji);
    const secondEmojiUnicode = normalizeUnicode(secondEmoji);
    const firstImageUrl = firstEmojiUnicode ? `https://www.honeycombartist.com/emojis/base/${firstEmojiUnicode.split("-").join("_")}.png` : "";
    const secondImageUrl = secondEmojiUnicode ? `https://www.honeycombartist.com/emojis/base/${secondEmojiUnicode.split("-").join("_")}.png` : "";
    const fetchAndStoreImage = async (url) => {
      if (!url)
        return;
      let blob = imageBlobs.get(url);
      if (!blob) {
        blob = await getImageFromLocalforage(url);
      }
      if (!blob) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.error(`Failed to fetch image from URL: ${url}, Status: ${response.status}`);
            return;
          }
          blob = await response.blob();
          if (blob) {
            setImageBlobs((prev) => new Map(prev).set(url, blob));
            await storeImageInLocalforage(url, blob);
          }
        } catch (error) {
          console.error(`Error fetching image from URL: ${url}`, error);
        }
      } else {
        setImageBlobs((prev) => new Map(prev).set(url, blob));
      }
    };
    await Promise.all([fetchAndStoreImage(firstImageUrl), fetchAndStoreImage(secondImageUrl)]);
    setImagesPrefetched(true);
    setIsImageReady(true);
  }, [firstEmoji, secondEmoji, imageBlobs]);
  const handleCopyClick = async (unicode) => {
    if (!unicode)
      return;
    if (!isImageReady) {
      console.warn("Images are not ready to be copied yet. Please wait.");
      return;
    }
    const normalizedUnicode = normalizeUnicode(unicode);
    const imageUrl = `https://www.honeycombartist.com/emojis/base/${normalizedUnicode.split("-").join("_")}.png`;
    const blob = imageBlobs.get(imageUrl);
    if (blob) {
      try {
        if (navigator.clipboard && ClipboardItem) {
          const clipboardItem = new ClipboardItem({
            "image/png": blob
          });
          await navigator.clipboard.write([clipboardItem]);
        } else {
          console.error("Clipboard API or ClipboardItem is not supported");
        }
      } catch (error) {
        console.error("Failed to copy image to clipboard:", error);
      }
    } else {
      console.error(`Image blob not found for URL: ${imageUrl}`);
    }
  };
  (0, import_react6.useEffect)(() => {
    if (firstEmoji || secondEmoji) {
      prefetchImages();
    }
  }, [firstEmoji, secondEmoji]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: `flex ${fadeAnim} touch-none fixed border-t-2 border-t-purple-200 justify-center w-full gap-2 pt-1 pb-2 sm:gap-6 bg-white ${isHidden ? "h-0 translate-y-4 lg:translate-y-2 sm:translate-y-[1.2em] bottom-6 md:bottom-9 lg:bottom-6" : "h-auto bottom-6"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "absolute w-full bg-black max-w-[650px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => setIsHidden(!isHidden), title: isHidden ? "\u{1F440} Show Emoji Combo Menu" : "\u{1F576}\uFE0F Hide Emoji Combo Menu", className: "absolute -top-[3.6rem] -right-3 z-10 mr-7 hover:bg-rose-400 bg-rose-100 rounded-t-lg p-2 text-3xl", children: !isHidden ? "\u{1FAE3}" : "\u{1F609}" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { title: firstEmoji?.split("~")[1] + " " + firstEmoji?.split("~")[2], className: `${isHidden ? "hidden" : "flex"}  flex-col justify-center items-center `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${firstEmoji && "scale-110"} flex w-full sm:gap-11 gap-7  justify-center items-center pt-2 pb-4`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { disabled: !imagesPrefetched || !firstEmoji, onClick: () => {
          setIsCopied(firstEmoji?.split("~")[1]);
          handleCopyClick(firstEmoji.split("~")[0]);
        }, "aria-label": "Copy First Emoji as PNG", className: `flex cursor-pointer ${!imagesPrefetched || !firstEmoji ? "opacity-30" : "hover:scale-110"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "copyPhotoIcon", customStyle: "fill-purple-500 w-7", title: `Copy ${firstEmoji ? firstEmoji?.split("~")[1] : "First"} Emoji as PNG` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: firstDiceRoll, "aria-label": "Random Emoji", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "dice", customStyle: "fill-purple-500 w-7", title: "Random Second Emoji" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 211,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " border-2 rounded-2xl  p-4 border-dashed flex relative flex-col justify-center items-center border-purple-500 min-h-[5em] min-w-[5em]", children: [
        firstEmoji && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { loading: "lazy", className: `${isCopied && isCopied === firstEmoji?.split("~")[1] ? "opacity-0" : "opacity-1"} flex w-12 md:w-20`, alt: `Emoji of ${firstEmoji?.split("~")[1]} ${firstEmoji?.split("~")[2]}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${firstEmoji?.split("~")[0].length < 9 ? firstEmoji?.split("~")[0].slice(1) : firstEmoji?.split("~")[0].split("-").join("_")}/emoji.svg` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 215,
          columnNumber: 26
        }, this),
        firstEmoji && isCopied && isCopied === firstEmoji?.split("~")[1] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-purple-600 absolute  font-nunito text-lg py-[1em]", children: "Copied!" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 216,
          columnNumber: 80
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${firstEmoji && "scale-110"} flex w-full sm:gap-11 gap-7 justify-center items-center pb-2 pt-4`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => {
          setIsCopied(firstEmoji?.split("~")[1]);
          navigator.clipboard.writeText(`${firstEmoji?.split("~")[1]}`);
        }, "aria-label": "Copy First Emoji", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "copy", customStyle: "fill-purple-500 w-7", title: `Copy ${firstEmoji ? firstEmoji?.split("~")[1] : "First"} Emoji` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { "aria-label": "Deselect Emoji", className: "flex hover:scale-110", onClick: () => {
          setFirstEmoji("");
          setSecondEmoji("");
          setIsImageReady(false);
          setImagesPrefetched(false);
          setEmojiData(void 0);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "deselect", customStyle: "fill-purple-500 w-7", title: "Deselect Emoji" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: `${isHidden ? "hidden" : "flex"}  flex-col justify-center items-center `, children: "\u2795" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { title: secondEmoji ? secondEmoji?.split("~")[1] + " " + secondEmoji?.split("~")[2] : "Second Emoji", className: `${isHidden ? "hidden" : "flex"}  flex-col justify-center items-center `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${secondEmoji && "scale-110"} flex w-full sm:gap-11 gap-7 justify-center items-center pt-2 pb-4`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { disabled: !imagesPrefetched || !secondEmoji, onClick: () => {
          setIsCopied(secondEmoji?.split("~")[0]);
          handleCopyClick(secondEmoji.split("~")[0]);
        }, "aria-label": "Copy Second Emoji as PNG", className: `flex ${!imagesPrefetched || !secondEmoji ? "opacity-30" : "hover:scale-110"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "copyPhotoIcon", customStyle: "fill-purple-500 w-7", title: `Copy ${secondEmoji ? secondEmoji?.split("~")[2] : "Second"} Emoji as PNG` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => emojiData && secondDiceRoll({
          newEmojiData: emojiData
        }), "aria-label": "Random Emoji", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "dice", customStyle: "fill-purple-500 w-7", title: "Random Second Emoji" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " border-2 rounded-2xl  p-4 border-dashed flex relative flex-col justify-center items-center border-purple-500 min-h-[5em] min-w-[5em]", children: [
        secondEmoji && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { loading: "lazy", className: `${isCopied && isCopied === secondEmoji?.split("~")[1] ? "opacity-0" : "opacity-1"} w-12 md:w-20 flex`, alt: `Emoji of ${secondEmoji?.split("~")[1]} ${secondEmoji?.split("~")[2]}`, src: `https://fonts.gstatic.com/s/e/notoemoji/latest/${secondEmoji?.split("~")[0].length < 9 ? secondEmoji?.split("~")[0].slice(1) : secondEmoji?.split("~")[0].split("-").join("_")}/emoji.svg` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 257,
          columnNumber: 27
        }, this),
        secondEmoji && isCopied && isCopied === secondEmoji?.split("~")[1] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-purple-600 absolute font-nunito text-lg py-[1em]", children: "Copied!" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 258,
          columnNumber: 82
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 256,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${secondEmoji && "scale-110"} flex w-full sm:gap-11 gap-7 justify-center items-center pb-2 pt-4`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => {
          setIsCopied(secondEmoji?.split("~")[2]);
          navigator.clipboard.writeText(`${secondEmoji?.split("~")[2]}`);
        }, "aria-label": "Copy Second Emoji", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "copy", customStyle: "fill-purple-500 w-7", title: `Copy ${secondEmoji ? secondEmoji?.split("~")[2] : "Second"} Emoji` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { "aria-label": "Deselect Emoji", className: "flex hover:scale-110", onClick: () => {
          setSecondEmoji("");
          setIsImageReady(false);
          setImagesPrefetched(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "deselect", customStyle: "fill-purple-500 w-7", title: "Deselect Emoji" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 274,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: `${isHidden ? "hidden" : "flex"}  flex-col justify-center items-center `, children: "\u{1F7F0}" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: `flex border-2 rounded-2xl  justify-center items-center my-auto p-4 border-dashed border-rose-400 min-h-[5em] min-w-[5em] ${firstEmoji && secondEmoji && "lg:translate-x-5 md:scale-[1.4]"} ${isHidden ? "hidden" : "flex"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ComboImage_default, { firstEmoji, secondEmoji, emojiData, containerStyle: `-translate-y-1 `, menuStyle: `-top-[3.3em] sm:gap-11 gap-7 justify-center  items-center ${secondEmoji && "md:scale-[0.8] md:-top-[2.9em]"}`, bottomMenuStyle: `-bottom-[3.7em]  ${secondEmoji && "md:scale-[0.8] scale-110 md:-bottom-[3.37em] -bottom-[3.9em]"}`, setSecondEmoji, thirdDiceRoll }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 282,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 196,
    columnNumber: 10
  }, this);
}
_s3(EmojiDisplay, "3eFtzE5utHXY2Yg2f5HfEAHdrGQ=", false, function() {
  return [useManageCopiedMsg, useResponsive_default, useLoadAnimation];
});
_c5 = EmojiDisplay;
function Index() {
  _s22();
  const matches = useMatches();
  const filenames = (0, import_react6.useMemo)(() => isRouteData(matches[0]?.data) ? matches[0].data.filenames : [], [matches]);
  const {
    isLoading
  } = useIsLoading();
  const [emojiData, setEmojiData] = (0, import_react6.useState)();
  const [firstEmoji, setFirstEmoji] = (0, import_react6.useState)("");
  const [secondEmoji, setSecondEmoji] = (0, import_react6.useState)("");
  const handleDisplayCombos = async (emojiUnicode, emoji) => {
    const emojiData2 = await HandleCacheEmojiData_default(emojiUnicode);
    setFirstEmoji(emojiUnicode + "~" + emoji);
    setEmojiData(emojiData2);
  };
  const firstDiceRoll = () => {
    if (!filenames)
      return;
    const randEmoji = HandleDiceRoll_default({
      filenames
    });
    const filename = filenames.filter((filename2) => filename2.keys.includes(randEmoji))[0];
    handleDisplayCombos(filename.id, filename.keys.split("~")[0] + "~" + filename.keys.split("~")[1]);
    return filename.id;
  };
  const secondDiceRoll = ({
    newEmojiData
  }) => {
    if (!filenames)
      return;
    const randEmoji = HandleDiceRoll_default({
      filenames: filenames?.filter((filename) => newEmojiData?.combos.map((combo) => combo.baseUnicode).includes(filename.id))
    });
    const selectedFilename = filenames.filter((filename) => filename.keys.includes(randEmoji))[0];
    setSecondEmoji(selectedFilename.id + "~" + selectedFilename.id + "~" + selectedFilename.keys.split("~")[0]);
  };
  const thirdDiceRoll = async () => {
    setFirstEmoji("");
    setSecondEmoji("");
    const unicode = firstDiceRoll();
    if (!unicode)
      return;
    const newEmojiData = await HandleCacheEmojiData_default(unicode);
    secondDiceRoll({
      newEmojiData
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "w-full flex justify-center items-center text-sm sm:text-base -translate-y-[0.3em] sm:translate-y-0 sm:mt-2 sm:mb-1 text-purple-700  font-lora", children: "Emoji Kitchen Game" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 358,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid relative grid-cols-2 lg:grid-cols-3 justify-center -translate-y-1 sm:translate-y-0 items-center w-full max-w-[1500px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FirstEmojiWindow_default, { emojiData, isLoading, filenames, setEmojiData, setFirstEmoji, firstEmoji, setSecondEmoji, secondEmoji }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 364,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SecondEmojiWindow_default, { emojiData, isLoading, filenames, firstEmoji, secondEmoji, setSecondEmoji }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 365,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThirdEmojiWindow, { emojiData, firstEmoji, setSecondEmoji, secondEmoji, thirdDiceRoll, filenames }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 366,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 363,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EmojiDisplay, { emojiData, firstEmoji, secondEmoji, setFirstEmoji, setSecondEmoji, setEmojiData, firstDiceRoll, secondDiceRoll, thirdDiceRoll }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 369,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 362,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 356,
    columnNumber: 10
  }, this);
}
_s22(Index, "woF7iVyxS9VhwAwdqx8BgBlPCTY=", false, function() {
  return [useMatches, useIsLoading];
});
_c22 = Index;
var _c5;
var _c22;
$RefreshReg$(_c5, "EmojiDisplay");
$RefreshReg$(_c22, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-PBJDWZXX.js.map
