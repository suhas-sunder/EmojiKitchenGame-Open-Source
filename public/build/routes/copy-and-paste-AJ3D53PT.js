import {
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-46YC46ZY.js";
import "/build/_shared/chunk-74BWT7FI.js";
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

// app/routes/copy-and-paste.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/copy-and-paste.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/copy-and-paste.tsx"
  );
  import.meta.hot.lastModified = "1731046171314.3684";
}
var meta = () => {
  return [{
    title: "\u2728 Copy and paste Cute and Creative Text Emoticons! - Text Faces (\uFF89\u25D5\u30EE\u25D5) \u2026 \u{1F480}\u{1F389}"
  }, {
    name: "description",
    content: "\u{1F60A}\u2B50 Discover a variety of cute and creative text emoticons and text faces to express yourself in unique ways! From happy smiles (\u2565\uFE4F\u2565) to powerful flexes (\u0E07'\u0300-'\u0301)\u0E07, our collection has something for every mood. Explore and copy your favorites! \u{1F525}\u{1F373}\u{1F469}\u200D\u{1F373} Emoji Kitchen \u{1F440}\u{1F44D}\u{1FAF6}\u{1F3FB}\u2714\uFE0F\u{1F64F}\u{1F680}\u{1F929}"
  }];
};
function CopyPaste() {
  _s();
  const {
    copyText,
    setCopyText,
    displayCopyText,
    setDisplayCopyText,
    textareaIsHidden,
    setTextareaIsHidden
  } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
    copyText,
    setCopyText,
    displayCopyText,
    setDisplayCopyText,
    textareaIsHidden,
    setTextareaIsHidden
  } }, void 0, false, {
    fileName: "app/routes/copy-and-paste.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(CopyPaste, "PLgLjvbeZWS0rHN5gLP7pqfikTE=", false, function() {
  return [useOutletContext];
});
_c = CopyPaste;
var _c;
$RefreshReg$(_c, "CopyPaste");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CopyPaste as default,
  meta
};
//# sourceMappingURL=/build/routes/copy-and-paste-AJ3D53PT.js.map
