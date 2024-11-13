import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/client/components/hooks/useManageCopiedMsg.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/hooks/useManageCopiedMsg.ts"
  );
  import.meta.hot.lastModified = "1731046171308.3438";
}
function useManageCopiedMsg() {
  const [isCopied, setIsCopied] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const timeout = setTimeout(() => {
      isCopied && setIsCopied("");
    }, 400);
    return () => clearTimeout(timeout);
  }, [isCopied]);
  return {
    isCopied,
    setIsCopied
  };
}

export {
  useManageCopiedMsg
};
//# sourceMappingURL=/build/_shared/chunk-QT77JPFW.js.map
