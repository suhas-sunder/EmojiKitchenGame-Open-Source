import {
  axios_default
} from "/build/_shared/chunk-34BQ7JAR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/client/components/api/trackingAPI.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/api/trackingAPI.ts"
  );
  import.meta.hot.lastModified = "1731046171307.7637";
}
var baseURL = import.meta.env.MODE === "production" ? `https://www.emojikitchengame.com/v1/api/tracking` : `http://localhost:${import.meta.env.VITE_PORT || 3200}/v1/api/tracking`;
var instance = axios_default.create({
  baseURL,
  timeout: 3e4
});
var trackingAPI_default = instance;

// app/client/components/hooks/useUpdateLikes.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useUpdateLikes.tsx"
  );
  import.meta.hot.lastModified = "1731046171308.6924";
}
function useUpdateLikes({ setTotalStats }) {
  const updateLikeCount = async (emoji_unicode) => {
    if (true)
      return;
    const likedKey = `liked_${emoji_unicode}`;
    if (localStorage.getItem(likedKey)) {
      return;
    }
    try {
      const response = await trackingAPI_default.post("/update-like-count", {
        emoji_unicode
      });
      if (response.status === 200) {
        setTotalStats((prevStats) => {
          const statIndex = prevStats.findIndex(
            (stat) => stat.emoji_unicode === emoji_unicode
          );
          if (statIndex !== -1) {
            const newLikes = Number(prevStats[statIndex].total_likes) + 1;
            const newStats = [...prevStats];
            newStats[statIndex] = {
              ...newStats[statIndex],
              total_likes: newLikes
            };
            return newStats;
          } else {
            return [
              ...prevStats,
              { emoji_unicode, total_likes: 1, total_views: 0 }
            ];
          }
        });
        localStorage.setItem(likedKey, "true");
      } else {
        console.error(`Failed to update like count: ${response.status}`);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) {
        message = err.message;
      } else {
        message = String(err);
      }
      console.error(message);
    }
  };
  return { updateLikeCount };
}
var useUpdateLikes_default = useUpdateLikes;

// app/client/components/ui/LikesAndViews.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/ui/LikesAndViews.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/ui/LikesAndViews.tsx"
  );
  import.meta.hot.lastModified = "1731046171311.6501";
}
function LikesAndViews({
  unicode,
  totalStats
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 underline underline-offset-2 text-sm text-purple-400 justify-center w-full items-center gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  justify-center items-center w-full", children: "Likes" }, void 0, false, {
        fileName: "app/client/components/ui/LikesAndViews.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  justify-center items-center w-full", children: "Views" }, void 0, false, {
        fileName: "app/client/components/ui/LikesAndViews.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/LikesAndViews.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 justify-center mb-2 text-purple-500 w-full items-center gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "\u{1F496}",
        " ",
        totalStats?.filter((total) => total?.emoji_unicode === unicode)[0]?.total_likes.toLocaleString("en-US") || 0
      ] }, void 0, true, {
        fileName: "app/client/components/ui/LikesAndViews.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "\u{1F441}\uFE0F",
        " ",
        totalStats?.filter((total) => total?.emoji_unicode === unicode)[0]?.total_views.toLocaleString("en-US") || 0
      ] }, void 0, true, {
        fileName: "app/client/components/ui/LikesAndViews.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/LikesAndViews.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/ui/LikesAndViews.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = LikesAndViews;
var LikesAndViews_default = LikesAndViews;
var _c;
$RefreshReg$(_c, "LikesAndViews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  trackingAPI_default,
  useUpdateLikes_default,
  LikesAndViews_default
};
//# sourceMappingURL=/build/_shared/chunk-VA44DKH4.js.map
