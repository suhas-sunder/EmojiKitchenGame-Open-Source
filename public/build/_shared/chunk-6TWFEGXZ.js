import {
  Icon
} from "/build/_shared/chunk-T4MUNURI.js";
import {
  useManageCopiedMsg
} from "/build/_shared/chunk-P4CX52I2.js";
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

// app/client/components/layout/ComboImage.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/layout/ComboImage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/layout/ComboImage.tsx"
  );
  import.meta.hot.lastModified = "1731046171309.1116";
}
var copyImgToClipboard = async (imageBlob, setIsCopied) => {
  try {
    if (navigator.clipboard && ClipboardItem) {
      const clipboardItem = new ClipboardItem({
        "image/png": imageBlob
      });
      await navigator.clipboard.write([clipboardItem]);
      setIsCopied("true");
      setTimeout(() => setIsCopied(""), 2e3);
    } else {
      throw new Error("Clipboard API or ClipboardItem is not supported");
    }
  } catch (clipboardError) {
    if (clipboardError instanceof Error) {
      console.error("Failed to write to clipboard:", clipboardError.message);
    } else {
      console.error("Failed to write to clipboard: Unknown error");
    }
    setIsCopied("");
  }
};
function ComboImage({
  firstEmoji,
  secondEmoji,
  emojiData,
  thirdDiceRoll,
  setSecondEmoji,
  menuStyle,
  bottomMenuStyle,
  containerStyle
}) {
  _s();
  const [filteredCombos, setFilteredCombos] = (0, import_react.useState)([]);
  const [imageBlobs, setImageBlobs] = (0, import_react.useState)(/* @__PURE__ */ new Map());
  const {
    isCopied,
    setIsCopied
  } = useManageCopiedMsg();
  (0, import_react.useEffect)(() => {
    if (!firstEmoji || !secondEmoji) {
      setFilteredCombos([]);
      setImageBlobs(/* @__PURE__ */ new Map());
      return;
    }
    const fetchAndStoreImage = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        if (blob) {
          setImageBlobs((prev) => new Map(prev).set(url, blob));
        }
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };
    const filterComboSet = (firstUnicode, secondUnicode) => {
      return emojiData?.combos?.filter((combo) => combo.baseUnicode === firstUnicode && combo.unicode.endsWith(secondUnicode) || combo.baseUnicode === secondUnicode && combo.unicode.endsWith(firstUnicode));
    };
    const normalizeUnicode = (emoji) => {
      let baseUnicode = emoji.split("~")[0];
      if (baseUnicode.length >= 9) {
        baseUnicode = "u" + baseUnicode.split("-").join("-u");
      }
      return baseUnicode;
    };
    let firstEmojiBaseUnicode = normalizeUnicode(firstEmoji);
    let secondEmojiBaseUnicode = normalizeUnicode(secondEmoji);
    const updateCombos = (firstUnicode, secondUnicode) => {
      const combos2 = filterComboSet(firstUnicode, secondUnicode);
      setFilteredCombos([...new Set(combos2)]);
      return combos2;
    };
    const tryCombos = () => {
      let combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode += "-ufe0f";
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode = firstEmojiBaseUnicode.slice(0, -6);
        secondEmojiBaseUnicode += "-ufe0f";
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode += "-ufe0f";
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode = firstEmojiBaseUnicode.slice(0, -6);
        const temp = secondEmojiBaseUnicode.split("-")[0];
        secondEmojiBaseUnicode = `${temp}_${firstEmojiBaseUnicode}-ufe0f`;
        firstEmojiBaseUnicode = temp;
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        const temp = firstEmojiBaseUnicode;
        firstEmojiBaseUnicode = secondEmojiBaseUnicode.split("_")[1];
        secondEmojiBaseUnicode = `${firstEmojiBaseUnicode}_${temp}`;
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode = firstEmojiBaseUnicode.slice(0, -6);
        secondEmojiBaseUnicode = `${firstEmojiBaseUnicode}_${secondEmojiBaseUnicode.split("_")[1]}-ufe0f`;
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
      if (combos2?.length === 0) {
        firstEmojiBaseUnicode += "-ufe0f";
        secondEmojiBaseUnicode = `${firstEmojiBaseUnicode}_${secondEmojiBaseUnicode.split("_")[1]}`;
        combos2 = updateCombos(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
      }
    };
    tryCombos();
    let combos = filterComboSet(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
    if (combos?.length === 0) {
      firstEmojiBaseUnicode = normalizeUnicode(secondEmoji);
      secondEmojiBaseUnicode = normalizeUnicode(firstEmoji);
      tryCombos();
    }
    combos = filterComboSet(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
    if (combos?.length === 0) {
      firstEmojiBaseUnicode = normalizeUnicode(secondEmoji).replace(/u00/g, "u");
      secondEmojiBaseUnicode = normalizeUnicode(firstEmoji).replace(/u00/g, "u");
      tryCombos();
    }
    combos = filterComboSet(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
    if (combos?.length === 0) {
      firstEmojiBaseUnicode = normalizeUnicode(firstEmoji).replace(/u00/g, "u");
      secondEmojiBaseUnicode = normalizeUnicode(secondEmoji).replace(/u00/g, "u");
      tryCombos();
    }
    combos = filterComboSet(firstEmojiBaseUnicode, secondEmojiBaseUnicode);
    if (combos && combos?.length > 0) {
      const imageUrl = `https://www.gstatic.com/android/keyboard/emojikitchen/${combos[0]?.code}/${combos[0]?.baseUnicode}/${combos[0]?.unicode}.png`;
      fetchAndStoreImage(imageUrl);
    }
    if (combos && combos?.length > 2 || combos?.length === 0) {
      setTimeout(() => setSecondEmoji(""), 500);
    }
  }, [firstEmoji, secondEmoji, setSecondEmoji, setFilteredCombos, emojiData, setImageBlobs]);
  const handleCopyClick = async () => {
    if (filteredCombos.length > 0 && Object.values(filteredCombos[0]).length > 0) {
      const imageUrl = `https://www.gstatic.com/android/keyboard/emojikitchen/${filteredCombos[0]?.code}/${filteredCombos[0]?.baseUnicode}/${filteredCombos[0]?.unicode}.png`;
      const blob = imageBlobs.get(imageUrl);
      if (blob) {
        await copyImgToClipboard(blob, setIsCopied);
      } else {
        console.error("Image blob not found");
      }
    } else {
      console.error("No combo available to copy");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex relative justify-center  items-center ${containerStyle}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12", children: filteredCombos.length > 0 && Object.values(filteredCombos[0]).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: `${isCopied ? "opacity-0" : "opacity-1"} flex w-12 md:w-20 mt-1 `, loading: "lazy", alt: `Combination of two emojis ${filteredCombos[0]?.unicode}`, src: `https://www.gstatic.com/android/keyboard/emojikitchen/${filteredCombos[0]?.code}/${filteredCombos[0]?.baseUnicode}/${filteredCombos[0]?.unicode}.png` }, `${filteredCombos[0]?.unicode}-${filteredCombos[0]?.baseUnicode}-${filteredCombos[0]?.code}-combo-img`, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 208,
        columnNumber: 15
      }, this),
      isCopied && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-rose-500 absolute font-nunito text-lg py-[1em] -translate-y-14 -translate-x-2", children: "Copied!" }, void 0, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 209,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 207,
      columnNumber: 86
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute flex  ${menuStyle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleCopyClick, "aria-label": "Copy Emoji Combo", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "copyPhotoIcon", customStyle: "fill-rose-400 w-7", title: "Copy Emoji As PNG Image" }, void 0, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: thirdDiceRoll, "aria-label": "Random Emoji", className: "flex hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "dice", customStyle: "fill-rose-400 w-7", title: "Random Second Emoji" }, void 0, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/layout/ComboImage.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute  flex  ${bottomMenuStyle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": "Deselect Emoji", className: "flex hover:scale-110", onClick: () => setSecondEmoji(""), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "deselect", customStyle: "fill-rose-400 w-7", title: "Deselect Emoji" }, void 0, false, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 224,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/client/components/layout/ComboImage.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/layout/ComboImage.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(ComboImage, "6AXVOnIkRNAMmpS6d7P/mYKUv+0=", false, function() {
  return [useManageCopiedMsg];
});
_c = ComboImage;
var ComboImage_default = ComboImage;
var _c;
$RefreshReg$(_c, "ComboImage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ComboImage_default
};
//# sourceMappingURL=/build/_shared/chunk-6TWFEGXZ.js.map
