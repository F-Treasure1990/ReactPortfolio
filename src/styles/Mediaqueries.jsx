export const MediaQ = {
  mediaQ: {
    // down: breakpoint =>
    //   `@media screen and (max-width: ${palette?.breakpoints?.[breakpoint] - 1}px)`,
    // up: breakpoint => `@media screen and (min-width: ${palette?.breakpoints?.[breakpoint]}px)`,
    customDown: breakpoint => `@media screen and (max-width: ${breakpoint - 1}px)`,
    customUp: breakpoint => `@media screen and (min-width: ${breakpoint}px)`
  }
};
