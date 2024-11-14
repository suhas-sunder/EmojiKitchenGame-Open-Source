import "/build/_shared/chunk-LZIRYZBH.js";
import {
  Icon
} from "/build/_shared/chunk-H3INXWOL.js";
import {
  require_localforage
} from "/build/_shared/chunk-Q5ZNHFO4.js";
import "/build/_shared/chunk-34BQ7JAR.js";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_dist,
  useLocation
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

// app/client/components/navigation/NavBar.tsx
var import_react = __toESM(require_react(), 1);
init_dist();

// app/client/components/navigation/styles/NavBar.module.css
var NavBar_module_default = { "nav": "NavBar-module__nav__6Gb-3", "logo": "NavBar-module__logo__omeM7", "profile": "NavBar-module__profile__s1XyP", "icon": "NavBar-module__icon__hOeQK", "btn": "NavBar-module__btn__dQm-J", "logo-com": "NavBar-module__logo-com__g5mx2", "img": "NavBar-module__img__F-SFw", "logo-long": "NavBar-module__logo-long__l-f5e", "fadeIn": "NavBar-module__fadeIn__HInQF", "burger-open": "NavBar-module__burger-open__xkQGv", "logo-text-short": "NavBar-module__logo-text-short__J12vH", "main-nav": "NavBar-module__main-nav__h1Hes", "login-menu": "NavBar-module__login-menu__METIQ", "fade-in-nav": "NavBar-module__fade-in-nav__0PnSj", "nav-bar": "NavBar-module__nav-bar__fhrt2", "profile-stats": "NavBar-module__profile-stats__vGgg1", "burger-close": "NavBar-module__burger-close__giAMD", "mobile-nav": "NavBar-module__mobile-nav__t5jJs", "burger-label": "NavBar-module__burger-label__hMWNI", "fadeTransform": "NavBar-module__fadeTransform__7YGvf" };

// app/client/components/navigation/Logo.tsx
init_dist();

// app/client/assets/images/logo_img.png
var logo_img_default = "/build/_assets/logo_img-3M2LTVIK.png";

// app/client/components/navigation/Logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/navigation/Logo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/navigation/Logo.tsx"
  );
}
function Logo({
  setShowMobileMenu
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { "data-testid": "logo-naviation-link", onClick: () => setShowMobileMenu(false), "aria-label": "freetypingcamp.com logo as navigation link with highlight when hovered or clicked", to: "/", className: `${NavBar_module_default.logo} relative flex items-center  font-overlock text-[1.25rem] font-black italic tracking-wider gap-3`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 50, height: 50, src: logo_img_default, alt: "logo depicting a chef cooking with emoji as ingredients" }, void 0, false, {
      fileName: "app/client/components/navigation/Logo.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `font-overlock text-sm sm:text-xl italic font-bold  ${NavBar_module_default["logo-long"]}`, children: "EmojiKitchenGame" }, void 0, false, {
        fileName: "app/client/components/navigation/Logo.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `font-overlock text-sm sm:text-xl italic font-bold ${NavBar_module_default["logo-com"]}`, children: ".com" }, void 0, false, {
        fileName: "app/client/components/navigation/Logo.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/navigation/Logo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/navigation/Logo.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Logo;
var Logo_default = Logo;
var _c;
$RefreshReg$(_c, "Logo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/navigation/NavBar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/navigation/NavBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/navigation/NavBar.tsx"
  );
}
function MainLinks({
  showMobileMenu,
  setShowMobileMenu
}) {
  const handleLinkClick = () => setShowMobileMenu(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { id: showMobileMenu ? "mobile-links" : "main-links", className: `text-white text-xs justify-center items-center text-center ${showMobileMenu ? NavBar_module_default["mobile-nav"] : NavBar_module_default["main-nav"]}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex w-full lg:w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { onClick: handleLinkClick, to: "/emoji-combos", className: "relative flex items-center justify-center w-full lg:w-auto py-4 hover:bg-purple-500 lg:hover:bg-transparent lg:py-3 tracking-[0.1em]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xl", children: "\u{1F600}" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `${NavBar_module_default.icon} hidden xl:flex`, children: " Emoji Combos" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `${NavBar_module_default.icon} xl:hidden`, children: "Combos" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex w-full lg:w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { onClick: handleLinkClick, to: "/copy-and-paste/text-faces", className: "relative flex items-center justify-center w-full lg:w-auto py-4 hover:bg-purple-500 lg:hover:bg-transparent lg:py-3 tracking-[0.1em]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `${NavBar_module_default.icon}`, children: "\u0CA5_\u0CA5 Text Faces" }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex w-full lg:w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { onClick: handleLinkClick, to: "/copy-and-paste/emoji-copy-and-paste", className: "relative flex items-center justify-center w-full lg:w-auto py-4 hover:bg-purple-500 lg:hover:bg-transparent lg:py-3 tracking-[0.1em]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xl", children: "\u2702\uFE0F" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `${NavBar_module_default.icon} hidden xl:flex`, children: " Emoji Copy and Paste" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `${NavBar_module_default.icon} xl:hidden`, children: "Copy & Paste" }, void 0, false, {
        fileName: "app/client/components/navigation/NavBar.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/navigation/NavBar.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c2 = MainLinks;
function NavBar() {
  _s();
  const [showMobileMenu, setShowMobileMenu] = (0, import_react.useState)(false);
  const handleResize = (0, import_react.useCallback)(() => {
    setShowMobileMenu(false);
  }, []);
  (0, import_react.useEffect)(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  (0, import_react.useEffect)(() => {
    document.body.classList.toggle("overflow-y-hidden", showMobileMenu);
  }, [showMobileMenu]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: `${NavBar_module_default.nav} fixed left-0 right-0 top-0 bg-purple-800 font-nunito text-base tracking-widest z-20 text-white`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${NavBar_module_default["fade-in-nav"]} m-auto flex max-w-[1400px] px-5 items-center justify-between`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo_default, { setShowMobileMenu }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainLinks, { showMobileMenu, setShowMobileMenu }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    showMobileMenu && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setShowMobileMenu(false), className: "absolute bottom-0 left-0 right-0 top-[3.15em] min-h-[100vh] min-w-[100vw] bg-purple-950 bg-opacity-30" }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 79,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "burger", type: "checkbox", checked: showMobileMenu, readOnly: true, className: "relative hidden" }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "burger", "data-testid": "burger-icons", onClick: () => setShowMobileMenu((prev) => !prev), className: `${NavBar_module_default["burger-label"]} relative hover:cursor-pointer`, children: showMobileMenu ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { title: "burger-open-icon", customStyle: `flex relative fill-white justify-center items-center w-7 scale-125 mr-2 ${NavBar_module_default["burger-close"]}`, icon: "burgerOpen" }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 83,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { title: "burger-closed-icon", customStyle: `flex fill-white relative justify-center items-center w-7 scale-125 mr-2 ${NavBar_module_default["burger-open"]}`, icon: "burgerClosed" }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 83,
      columnNumber: 197
    }, this) }, void 0, false, {
      fileName: "app/client/components/navigation/NavBar.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/navigation/NavBar.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/client/components/navigation/NavBar.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s(NavBar, "rUR0uT59CdtabRUe42U5476ykLg=");
_c22 = NavBar;
var _c2;
var _c22;
$RefreshReg$(_c2, "MainLinks");
$RefreshReg$(_c22, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/client/components/navigation/Footer.tsx
init_dist();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/client/components/navigation/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/client/components/navigation/Footer.tsx"
  );
}
function Footer() {
  _s2();
  const pathname = useLocation().pathname;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: `${NavBar_module_default.nav} w-full ${(pathname === "/" || pathname === "/copy-and-paste/text-faces" || pathname === "/copy-and-paste/emoji-copy-and-paste") && "fixed"} mt-[16em] bottom-0 flex gap-5 sm:gap-20 justify-center items-center py-1 sm:py-2 text-xs font-nunito  bg-purple-500 `, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex text-purple-200 gap-1 font-bold tracking-widest", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\xA9 2024" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden md:flex", children: " | " }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 32,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-overlock hidden sm:flex", children: "EmojiKitchenGame" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-overlock sm:hidden flex", children: "EKG" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden md:flex", children: " - All Rights Reserved." }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/navigation/Footer.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex max-w-[500px] items-center justify-around text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "hidden sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/sitemap", className: "flex px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${NavBar_module_default.icon}`, children: "Sitemap" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/privacy-policy", className: "flex px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${NavBar_module_default.icon}`, children: "Privacy" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/cookies-policy", className: "flex px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${NavBar_module_default.icon}`, children: "Cookie" }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/terms-of-service", className: "flex px-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${NavBar_module_default.icon} hidden sm:flex`, children: "Terms Of Service" }, void 0, false, {
          fileName: "app/client/components/navigation/Footer.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${NavBar_module_default.icon} flex sm:hidden`, children: "Terms" }, void 0, false, {
          fileName: "app/client/components/navigation/Footer.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/client/components/navigation/Footer.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/client/components/navigation/Footer.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/client/components/navigation/Footer.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s2(Footer, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function() {
  return [useLocation];
});
_c3 = Footer;
var Footer_default = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_localforage = __toESM(require_localforage(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
async function clientLoader({
  serverLoader
}) {
  const cacheKey = "filenames";
  try {
    const cachedFilenames = await import_localforage.default.getItem(cacheKey);
    if (cachedFilenames) {
      return {
        filenames: cachedFilenames
      };
    } else {
      const {
        filenames
      } = await serverLoader();
      await import_localforage.default.setItem(cacheKey, filenames);
      const fetchAndStoreImage = async (url) => {
        if (!url) {
          return;
        }
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.error(`Failed to fetch image from URL: ${url}, Status: ${response.status}`);
            return;
          }
          const blob = await response.blob();
          if (blob) {
            await import_localforage.default.setItem(url, blob);
          } else {
            console.error(`No blob received for URL: ${url}`);
          }
        } catch (error) {
          console.error(`Error fetching image from URL: ${url}`, error);
        }
      };
      filenames.forEach((filename) => {
        fetchAndStoreImage(`https://www.honeycombartist.com/emojis/base/${filename.id.slice(1)}.png`);
      });
      return {
        filenames
      };
    }
  } catch (error) {
    console.error("Error fetching cached filenames:", error);
    return {
      filenames: []
    };
  }
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "pt-14", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavBar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-svh", children }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_c4 = Layout;
function App() {
  _s3();
  const [copyText, setCopyText] = (0, import_react4.useState)("");
  const [displayCopyText, setDisplayCopyText] = (0, import_react4.useState)("");
  const [textareaIsHidden, setTextareaIsHidden] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    if (copyText) {
      const cleanedText = copyText.replace(/\s*\n\s*/g, "");
      navigator.clipboard.writeText(cleanedText).then(() => {
        setDisplayCopyText((prevDisplayCopyText) => `${prevDisplayCopyText} ${cleanedText}`);
        setCopyText("");
      }).catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    }
  }, [copyText]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, { context: {
    copyText,
    setCopyText,
    displayCopyText,
    setDisplayCopyText,
    textareaIsHidden,
    setTextareaIsHidden
  } }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}
_s3(App, "vXwtd1nFzL4dWeXA9Tur8+qfu+w=");
_c23 = App;
var _c4;
var _c23;
$RefreshReg$(_c4, "Layout");
$RefreshReg$(_c23, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  clientLoader,
  App as default
};
//# sourceMappingURL=/build/root-QCWT7IR3.js.map
