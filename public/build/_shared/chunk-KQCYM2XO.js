import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-4FKPXXDG.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/client/components/hooks/useSearch.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useSearch.ts"
  );
  import.meta.hot.lastModified = "1731046171308.5964";
}
function useSearch() {
  const [searchEmoji, setSearchEmoji] = (0, import_react.useState)("");
  return { searchEmoji, setSearchEmoji };
}
var useSearch_default = useSearch;

// app/client/components/hooks/useIsLoading.ts
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useIsLoading.ts"
  );
  import.meta.hot.lastModified = "1731046171308.1113";
}
function useIsLoading() {
  const [isLoading, setIsLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    setIsLoading(false);
  }, []);
  return { isLoading };
}

// app/client/components/ui/SearchBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/ui/SearchBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/ui/SearchBar.tsx"
  );
  import.meta.hot.lastModified = "1731046171311.8643";
}
function SearchBar({
  setSearchEmoji,
  customStyle,
  customSearchEmojiStyle,
  placeholder,
  customLabelStyle,
  searchEmoji,
  uniqueId,
  handleDiceRoll
}) {
  _s();
  const {
    isLoading
  } = useIsLoading();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${customStyle} relative flex w-full justify-center items-center font-nunito mx-2`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "search-bar", className: "-translate-y-24" }, void 0, false, {
      fileName: "app/client/components/ui/SearchBar.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "search" + uniqueId, className: `flex absolute justify-end sm:justify-between w-full cursor-text text-purple-400 ${customLabelStyle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${customSearchEmojiStyle} hidden sm:flex py-3 translate-y-[0.05em] scale-75`, children: "\u{1F50D}" }, void 0, false, {
        fileName: "app/client/components/ui/SearchBar.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex ", children: [
        searchEmoji && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSearchEmoji(""), className: "flex p-[.46em] hover:scale-[1.15] text-xl hover:text-purple-700 text-purple-500", children: "x" }, void 0, false, {
          fileName: "app/client/components/ui/SearchBar.tsx",
          lineNumber: 45,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-3", children: "| " }, void 0, false, {
          fileName: "app/client/components/ui/SearchBar.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { title: "\u{1F3B2} Add Random Emoji To Search", onClick: handleDiceRoll, className: "flex ml-2 py-3 p-3 hover:scale-[1.15]", children: "\u{1F3B2}" }, void 0, false, {
          fileName: "app/client/components/ui/SearchBar.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/client/components/ui/SearchBar.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/SearchBar.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "search" + uniqueId, name: "search bar", type: "search", disabled: isLoading, onChange: (e) => setSearchEmoji(e.target.value.toLowerCase()), value: searchEmoji || "", placeholder: placeholder || "Search", className: `flex [&::-webkit-search-cancel-button]:hidden  placeholder:text-sm border-2 border-purple-300 rounded-md sm:pl-7 w-full my-2 text-sm sm:text-lg py-[0.5em] sm:py-[0.3em] text-purple-600 pl-2 sm:px-5 focus:border-purple-700 outline-none placeholder:text-purple-300` }, void 0, false, {
      fileName: "app/client/components/ui/SearchBar.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/ui/SearchBar.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(SearchBar, "Y3FmkVdnuUGWH7YW+Z8I2qj5Z30=", false, function() {
  return [useIsLoading];
});
_c = SearchBar;
var SearchBar_default = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/utils/generators/HandleDiceRoll.ts
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/utils/generators/HandleDiceRoll.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/utils/generators/HandleDiceRoll.ts"
  );
  import.meta.hot.lastModified = "1731046171312.2742";
}
function HandleDiceRoll({
  filenames
}) {
  const randomEmoji = Math.floor(Math.random() * filenames?.length);
  return filenames[randomEmoji]?.keys?.split("~")[0];
}
_c2 = HandleDiceRoll;
var HandleDiceRoll_default = HandleDiceRoll;
var _c2;
$RefreshReg$(_c2, "HandleDiceRoll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/hooks/useWindowWidth.ts
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useWindowWidth.ts"
  );
  import.meta.hot.lastModified = "1731046171308.7842";
}
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = (0, import_react3.useState)(void 0);
  (0, import_react3.useEffect)(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowWidth;
}

// app/client/components/hooks/useBodyEventListeners.ts
var import_react4 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useBodyEventListeners.ts"
  );
  import.meta.hot.lastModified = "1731046171307.9136";
}
var useBodyEventListeners = ({ setDisplayLimit }) => {
  (0, import_react4.useEffect)(() => {
    if (typeof window !== "undefined") {
      const handleMouseEnter = () => setDisplayLimit(1e3);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      return () => {
        document.body.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [setDisplayLimit]);
  (0, import_react4.useEffect)(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1022) {
      const timeoutId = setTimeout(() => setDisplayLimit(1e3), 1e3);
      return () => clearTimeout(timeoutId);
    }
  }, [setDisplayLimit]);
};
var useBodyEventListeners_default = useBodyEventListeners;

export {
  useSearch_default,
  useIsLoading,
  SearchBar_default,
  HandleDiceRoll_default,
  useWindowWidth,
  useBodyEventListeners_default
};
//# sourceMappingURL=/build/_shared/chunk-KQCYM2XO.js.map
