// https://stackoverflow.com/a/65156200

import { browser } from '$app/environment';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig: any = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number => {
    return +fullConfig.theme.screens[value].slice(
    0,
    fullConfig.theme.screens[value].indexOf('px')
  );
};

export const getCurrentBreakpoint = (): string | undefined => {
  let currentBreakpoint: string | undefined = undefined;
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
        browser &&
        breakpointValue > biggestBreakpointValue &&
        window.innerWidth >= breakpointValue
    ) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};