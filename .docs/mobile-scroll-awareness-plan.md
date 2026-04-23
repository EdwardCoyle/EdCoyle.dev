## Plan: Mobile Scroll Awareness

Add a mobile-only scroll awareness layer to the existing single-page layout without restructuring the content: a thin overall progress bar, sticky versions of the existing section headers, and a scroll-to-top control that appears after the user has moved meaningfully down the page. Keep desktop behavior unchanged, reuse the existing section structure in `src/routes/+page.svelte`, and isolate new behavior into small Svelte components.

**Steps**
1. Define the mobile scroll state contract in `src/routes/+page.svelte`: identify the three primary sections (`about`, `work`, `projects`), add stable bindings or metadata for them, and decide on a single source of truth for mobile scroll state (current section, progress percentage, and whether the page is far enough down to show the button). This step blocks the new components because they need either section metadata via props or a shared container reference.
2. Create a small mobile-only scroll progress component, likely `src/components/MobileScrollProgress.svelte`, responsible only for rendering the thin progress bar from a numeric progress prop. Keep it presentational so the page owns scroll measurement logic. This can run in parallel with step 3 once the prop shape from step 1 is fixed.
3. Create a small mobile-only scroll-to-top component, likely `src/components/ScrollToTopButton.svelte`, that accepts a `visible` prop and emits a click action to scroll smoothly to the top anchor. Keep scroll behavior client-only with `onMount` usage or event handlers in the page layer so prerendering remains safe. This can run in parallel with step 2 after step 1.
4. Wire the new components into `src/routes/+page.svelte`: add client-side scroll listeners, compute scroll progress from the document on mobile, and keep the desktop experience untouched. Since the user wants mobile-only affordances, the implementation should measure against `window`/document scroll under the `lg` breakpoint and avoid adding a second mobile-only section label above the real content headers.
5. Make the existing `AccentHeader` section headings sticky on mobile by wrapping them locally in `src/routes/+page.svelte` rather than introducing a duplicate mobile header component. Use CSS that applies only below `lg` so each heading pins to the top and yields when the next section reaches it.
6. Add the minimal styling required in `src/app.css` for sticky layering, top spacing, and a vertical gradient-masked blur treatment behind the sticky headers so the blur is strongest at the top of the header and fades toward the page text below.
7. Verify behavior with the repo’s existing commands and manual mobile checks: run `npm run check`, then `npm run build`, then manually confirm in a mobile viewport that the progress bar advances smoothly, the existing section headers alone provide section context, the gradient-masked blur reads softly instead of as a hard panel, and the scroll-to-top button appears only after scrolling down and returns to the top smoothly.

**Relevant files**
- `c:\Dev\EdwardCoyle.dev.next\EdwardCoyle.dev\src\routes\+page.svelte` — owns the single-page section structure, current `AccentHeader` instances, and the correct place to compute scroll state and mount mobile-only UI.
- `c:\Dev\EdwardCoyle.dev.next\EdwardCoyle.dev\src\components\AccentHeader.svelte` — reference component for heading styling while the mobile sticky treatment stays on the existing headings instead of introducing duplicates.
- `c:\Dev\EdwardCoyle.dev.next\EdwardCoyle.dev\src\app.css` — global typography/styles and the best place for the gradient-masked mobile blur treatment and sticky layering rules.
- `c:\Dev\EdwardCoyle.dev.next\EdwardCoyle.dev\src\components\MobileScrollProgress.svelte` — presentational component for overall page progress.
- `c:\Dev\EdwardCoyle.dev.next\EdwardCoyle.dev\src\components\ScrollToTopButton.svelte` — reusable button component for returning to the top smoothly.

**Verification**
1. Run `npm run check` to validate Svelte/TypeScript correctness after adding new components and reactive scroll state.
2. Run `npm run build` to confirm the prerendered static site still compiles cleanly with client-only scroll code.
3. In a mobile viewport, scroll through `About Me`, `Work Experience`, and `Past Projects` to confirm the existing sticky headers pin only until the next section takes over, with no extra duplicate header above them.
4. In the same mobile viewport, confirm the thin progress bar reflects overall page position and reaches full width near the footer.
5. Confirm the sticky header blur is visibly stronger near the top edge and fades toward the lower edge, allowing the content below to emerge cleanly.
6. Confirm the scroll-to-top button stays hidden near the top, appears after meaningful downward scroll, and performs smooth scrolling back to the top without shifting desktop layout.
7. In a desktop viewport, confirm the existing fixed-left / scrollable-right experience remains visually and behaviorally unchanged.

**Decisions**
- Include only mobile affordances below the `lg` breakpoint; desktop remains unchanged unless implementation reveals a shared low-risk improvement.
- Use the existing section headers themselves for mobile section context instead of introducing a second sticky label.
- Favor new small components for rendering concerns while keeping scroll measurement and section detection close to `src/routes/+page.svelte`, where the section structure already exists.
- Keep scope limited to the three major content sections and the top-level page scroll experience; do not add a new mobile navigation system or restructure the cards/content hierarchy.
- Keep the sticky blur soft and atmospheric by using a vertical gradient mask, with the strongest blur nearest the header and the least blur nearest the content.

**Further Considerations**
1. The simplest version avoids a second mobile section label entirely and lets the existing sticky `AccentHeader` elements carry section context on their own.
2. The masked blur should be implemented on the sticky wrapper rather than on the text itself, so the header remains crisp while the background behind it softens.
3. If the sticky header obscures anchor navigation after tapping an in-page link, add mobile-only scroll margin or top padding to the sections as a follow-up within the same implementation slice.