// --- One look for every text field: the request form's inputs and Pixel-Ercan's
// chat input, on the grey page and on a white section alike. The field is
// always white; its border carries the boundary, so it has to reach 3:1 against
// the colour around it (WCAG 1.4.11, Understanding: "a complete border … must
// meet 3:1"). gray-medium gives 3.35:1 on white and 3.04:1 on the grey page.
export const fieldClasses =
  "rounded-xl border-2 border-gray-medium bg-gray-min text-typo-high transition-colors placeholder:text-typo-placeholder hover:border-gray-high focus-visible:border-brand-green-high focus-visible:outline-offset-2"
