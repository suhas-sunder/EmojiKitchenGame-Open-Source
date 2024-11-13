import {
  Link
} from "/build/_shared/chunk-46YC46ZY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/client/components/ui/CopyPasteTextbox.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/ui/CopyPasteTextbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/ui/CopyPasteTextbox.tsx"
  );
  import.meta.hot.lastModified = "1731046171311.5469";
}
function CopyPasteTextbox({
  displayCopyText,
  setDisplayCopyText,
  isHidden,
  setIsHidden
}) {
  _s();
  const editableRef = (0, import_react.useRef)(null);
  const fileInputRef = (0, import_react.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react.useState)(false);
  const [tooltipVisible, setTooltipVisible] = (0, import_react.useState)(false);
  const [hasText, setHasText] = (0, import_react.useState)(false);
  const [textBoxSize, setTextBoxSize] = (0, import_react.useState)("h-[10em]");
  (0, import_react.useEffect)(() => {
    if (editableRef.current && editableRef.current.innerHTML !== displayCopyText) {
      editableRef.current.innerHTML = displayCopyText;
    }
    setHasText(editableRef.current?.innerHTML.trim() !== "");
  }, [displayCopyText]);
  const handleInput = () => {
    if (editableRef.current) {
      setDisplayCopyText(editableRef.current.innerHTML);
      setHasText(editableRef.current.innerHTML.trim() !== "");
    }
  };
  const handlePaste = async (e) => {
    const clipboardData = e.clipboardData;
    const items = clipboardData.items;
    let pastedImage = false;
    for (const item of items) {
      if (item.type.startsWith("image")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const imgElement = document.createElement("img");
            imgElement.src = event.target?.result;
            imgElement.style.maxWidth = "100%";
            imgElement.style.height = "auto";
            imgElement.style.display = "block";
            const selection = window.getSelection();
            if (selection?.rangeCount) {
              const range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(imgElement);
            }
            setDisplayCopyText(editableRef.current?.innerHTML || "");
            setHasText(editableRef.current?.innerHTML.trim() !== "");
          };
          reader.readAsDataURL(file);
        }
        pastedImage = true;
        break;
      }
    }
    if (!pastedImage) {
      setTimeout(() => {
        setDisplayCopyText(editableRef.current?.innerHTML || "");
        setHasText(editableRef.current?.innerHTML.trim() !== "");
      }, 0);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgElement = document.createElement("img");
        imgElement.src = event.target?.result;
        imgElement.style.maxWidth = "100%";
        imgElement.style.height = "auto";
        imgElement.style.display = "block";
        const selection = window.getSelection();
        if (selection?.rangeCount) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(imgElement);
        }
        setDisplayCopyText(editableRef.current?.innerHTML || "");
        setHasText(editableRef.current?.innerHTML.trim() !== "");
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const copyToClipboard = async () => {
    if (editableRef.current) {
      const content = editableRef.current.innerHTML;
      try {
        const htmlBlob = new Blob([content], {
          type: "text/html"
        });
        await navigator.clipboard.write([new ClipboardItem({
          [htmlBlob.type]: htmlBlob
        })]);
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 2e3);
      } catch (err) {
        console.error("Failed to copy content: ", err);
      }
    }
  };
  const clearContent = () => {
    if (editableRef.current) {
      editableRef.current.innerHTML = "";
      setDisplayCopyText("");
      setHasText(false);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const items = e.dataTransfer.items;
    for (const item of items) {
      if (item.kind === "file" && item.type.startsWith("image")) {
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const imgElement = document.createElement("img");
            imgElement.src = event.target?.result;
            imgElement.style.maxWidth = "100%";
            imgElement.style.height = "auto";
            imgElement.style.display = "block";
            const selection = window.getSelection();
            if (selection?.rangeCount) {
              const range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(imgElement);
            }
            setDisplayCopyText(editableRef.current?.innerHTML || "");
            setHasText(editableRef.current?.innerHTML.trim() !== "");
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: `${isHidden ? "h-0 translate-y-[1.7em] sm:translate-y-[1.2em]" : `${textBoxSize}`} flex flex-col fixed bottom-6 font-nunito px-5 w-full bg-white justify-center border-t-2 border-t-purple-200 items-center`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-full max-w-[1200px] z-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsHidden(!isHidden), title: isHidden ? "\u{1F440} Show Textbox" : "\u{1F576}\uFE0F Hide Textbox", className: "absolute -top-[3.3rem] max-w-14 -right-3 hover:bg-rose-400 bg-rose-100 rounded-t-lg p-2 text-3xl", children: !isHidden ? "\u{1FAE3}" : "\u{1F609}" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      hasText && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: clearContent, title: "Clear Content", className: "absolute -bottom-[2.9em] right-[0.9em] p-2 text-xl text-white rounded-full hover:scale-125 focus:outline-none", children: "\u274C" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 175,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-full max-w-[1200px] z-10", children: [
      hasText && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: copyToClipboard, title: "Copy to Clipboard", className: "absolute -bottom-[4.6em] right-2 p-2 text-3xl text-white rounded-full hover:scale-125 focus:outline-none", children: "\u{1F4CB}" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 180,
        columnNumber: 21
      }, this),
      tooltipVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-[7.3em] -right-[0.4em] px-2 py-2 text-xs text-white bg-slate-700 rounded shadow-lg", children: "Copied! \u{1F389}" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 183,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => fileInputRef.current?.click(), className: `${textBoxSize === "h-[10em]" && "-bottom-[7em]"} ${textBoxSize === "h-[20em]" && "-bottom-[15em]"} ${textBoxSize === "h-[40em]" && "-bottom-[31em]"} absolute left-1 p-2 text-xl text-white rounded-full hover:scale-125 focus:outline-none`, title: "Upload Image", children: "\u{1F4F7}" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setTextBoxSize("h-[10em]"), className: `${textBoxSize === "h-[10em]" && "-bottom-[8.2em]"} ${textBoxSize === "h-[20em]" && "-bottom-[17em]"} ${textBoxSize === "h-[40em]" && "-bottom-[34.75em]"} absolute left-[2.4em] p-2 text-lg text-purple-700 rounded-full hover:scale-125 focus:outline-none`, title: "Default Textbox Size", children: "1X" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setTextBoxSize("h-[20em]"), className: `${textBoxSize === "h-[10em]" && "-bottom-[8.2em]"} ${textBoxSize === "h-[20em]" && "-bottom-[17em]"} ${textBoxSize === "h-[40em]" && "-bottom-[34.75em]"} absolute left-[4.4em] p-2 text-lg text-purple-700 rounded-full hover:scale-125 focus:outline-none`, title: "Double Textbox Size", children: "2X" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setTextBoxSize("h-[40em]"), className: `${textBoxSize === "h-[10em]" && "-bottom-[8.2em]"} ${textBoxSize === "h-[20em]" && "-bottom-[17em]"} ${textBoxSize === "h-[40em]" && "-bottom-[34.75em]"} absolute left-[6.4em] p-2 text-lg text-purple-700 rounded-full hover:scale-125 focus:outline-none`, title: "Quadruple Textbox Size", children: "4X" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", accept: "image/*", ref: fileInputRef, style: {
      display: "none"
    }, onChange: handleFileUpload }, void 0, false, {
      fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-full max-w-[1200px] text-xl border-2 border-purple-300 tracking-widest h-full mt-3 mb-5 leading-loose rounded-md scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200 px-1 sm:px-3 pt-1 text-purple-600 overflow-y-auto", onDragOver: handleDragOver, onDrop: handleDrop, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute left-0 right-0 top-1 flex items-center justify-center text-sm sm:text-lg tracking-widest leading-loose text-center text-purple-300 transition-opacity duration-300 ${!isFocused && displayCopyText.trim() === "" ? "opacity-100" : "opacity-0"} pointer-events-none`, children: "Copy, paste, edit, & save: Custom Text, emojis, & text faces. Paste your text here! Also, you can navigate to other pages without losing your progress! (^\u203F^ \u{1F338})" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: editableRef, contentEditable: true, onInput: handleInput, onPaste: handlePaste, onFocus: handleFocus, onBlur: handleBlur, "aria-label": "Copy, paste, edit, & save: Custom Text, emojis, & text faces. Paste your text here!", "aria-required": "true", "aria-invalid": "true", "aria-describedby": "copy-paste", spellCheck: "false", id: "copy-paste", className: "w-full h-full pb-[60em] focus:outline-none pt-1" }, void 0, false, {
        fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/ui/CopyPasteTextbox.tsx",
    lineNumber: 169,
    columnNumber: 10
  }, this);
}
_s(CopyPasteTextbox, "m1zn8IQtorM9YvUycrllbFSACMA=");
_c = CopyPasteTextbox;
var _c;
$RefreshReg$(_c, "CopyPasteTextbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/navigation/SectionMenu.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/navigation/SectionMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/navigation/SectionMenu.tsx"
  );
  import.meta.hot.lastModified = "1731046171310.2954";
}
function SectionMenu({
  object
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "grid grid-cols-2 font-nunito sm:grid-cols-3 md:grid-cols-4 mx-5 lg:grid-cols-6 gap-5 bg-purple-100 overflow-auto max-h-[19em] scrollbar-thin border-2 rounded-lg border-purple-50 py-5 px-5 scrollbar-thumb-purple-500 scrollbar-track-purple-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 flex justify-center items-center text-purple-600 text-lg sm:text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Menu" }, void 0, false, {
      fileName: "app/client/components/navigation/SectionMenu.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/SectionMenu.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    Object.keys(object).map((key, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { "aria-label": `Menu link that navigates to ${key} section`, className: "flex border-2 text-xs sm:text-sm rounded-lg text-purple-500 w-full hover:scale-110 border-purple-200 bg-white hover:border-purple-400 hover:text-purple-700  text-center justify-center items-center px-5 py-2", to: "#" + key, children: key.split("-").join(" ") }, void 0, false, {
      fileName: "app/client/components/navigation/SectionMenu.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, key + index + "menu", false, {
      fileName: "app/client/components/navigation/SectionMenu.tsx",
      lineNumber: 30,
      columnNumber: 50
    }, this))
  ] }, void 0, true, {
    fileName: "app/client/components/navigation/SectionMenu.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/client/components/navigation/SectionMenu.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = SectionMenu;
var SectionMenu_default = SectionMenu;
var _c2;
$RefreshReg$(_c2, "SectionMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/hooks/useDisplayLimitOnScroll.ts
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useDisplayLimitOnScroll.ts"
  );
  import.meta.hot.lastModified = "1731046171308.0132";
}
function useDisplayLimitOnScroll({ displayLimit, setDisplayLimit }) {
  (0, import_react3.useEffect)(() => {
    const handleScroll = () => {
      if (displayLimit < 1e3) {
        setDisplayLimit(1e3);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayLimit, setDisplayLimit]);
}
var useDisplayLimitOnScroll_default = useDisplayLimitOnScroll;

export {
  CopyPasteTextbox,
  SectionMenu_default,
  useDisplayLimitOnScroll_default
};
//# sourceMappingURL=/build/_shared/chunk-SH2632AA.js.map
