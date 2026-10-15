# Owner directive — Ad placeholder overlap prevention (PROTECTED)

**Recorded:** October 14, 2026  
**Status:** INTENTIONAL PRODUCT / AD-ACCOUNT SAFETY BEHAVIOR; **not a cosmetic bug or unfinished UI**.  
**Applies to:** This repository wherever Google ads, reserved advertisement slots, placeholders, fallbacks or creative-loading transitions are used. This note also applies when ad infrastructure is planned but not yet active.

## Why this rule exists

The owner personally observed **production ad placeholders rendering on top of real, loaded ads**. Earlier coding-agent reports repeatedly claimed the overlap was fixed, but actual production was still buggy. The owner regards any placeholder obscuring or overlapping an ad as an unacceptable risk to the advertising account.

The owner deliberately chose a conservative workaround: **once the first real ad has rendered, hide ALL placeholders across the site for that page session**. The remaining blank spaces or less-polished placeholder UX are an **accepted tradeoff** for preventing placeholders from covering any filled ad. Do not classify this protective behavior as a regression, implementation gap, or routine styling cleanup.

## Hard requirements for future AI agents and developers

1. **DO NOT “FIX” the global suppression rule** by restoring individual placeholders after another ad loads, by showing per-slot skeletons after the first filled ad, or by adding an overlay over a loaded ad. Do not attempt a cosmetic refactor of this policy just because unfilled slots look less polished.
2. **NEVER allow an advertisement placeholder, loading label, transparent layer, pseudo-element, fallback, backdrop, or adjacent floating control to overlap or conceal a real rendered ad.** Keeping ads distinct from actionable tools is mandatory.
3. **Do not change ad fill detection or lifecycle during unrelated work** (SEO, styling, responsive layout, navigation, ad spacing, conversions, performance, component consolidation). Do not unintentionally revert the owner's conservative suppression with new CSS or wrapper changes.
4. **Check the actual implementation before stating that the rule already exists.** Some repositories have only `ads.txt`, static reserved slots, or older ad components and may not implement global first-filled-ad suppression. This file documents the owner's desired safety invariant, **not proof of the current code state**. Do not independently introduce a new ad lifecycle as an incidental “fix”; flag divergence and obtain explicit owner approval.
5. **A replacement behavior requires explicit owner permission first**, a concrete explanation of how overlays are prevented, and production-representative verification with genuine ad-network rendering. No coding agent should claim policy safety from mocked unit tests or a superficial local PASS alone.
6. Required acceptance for any owner-approved ad UI change: blocked/disabled scripts; delayed ad loads; unfilled ads; first filled ad; later fills in other slots; page navigation; responsive resizing; desktop and mobile; light/dark where present; network variability. Capture **actual DOM stacking/layering plus screenshot/video evidence** that no placeholder can cover a creative, and document rollback.
7. **Account safety beats minor UX improvements.** Avoid speculative changes that could create invalid layout, misleading tap targets, accidental ad clicks, or ads visually mixed with interactive content. Compliance with Google policies must be independently verified when relevant; this workaround is not an AdSense compliance guarantee.

## Execution reminder

- Treat the current protected behavior as **KEEP**, not a defect.
- Don't change production advertising logic under the authority of a general SEO/UI audit.
- If a desired layout improvement conflicts with this invariant, leave the ad system untouched and report the conflict for an owner decision.
- Preserve existing `ai-issues/README.md` and prior owner items. This is a separate high-priority correction/safety directive.
