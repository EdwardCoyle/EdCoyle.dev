import { getCurrentBreakpoint } from "../utils/breakpoints";

/**
 * Wraps a ResizeObserver API inside a Svelte Action that reports the current breakpoint
 */
export function resizeDetector(node: HTMLElement) {
    const resizeObserver = new ResizeObserver(() => {
        node.setAttribute('data-breakpoint', getCurrentBreakpoint() ?? 'xs');
    });

    resizeObserver.observe(node);

    return {
        destroy() {
            resizeObserver.disconnect();
        }
    }
}