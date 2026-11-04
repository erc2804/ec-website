// --- Which step of a scrolled list is being read: the last one whose top has
// passed the middle of the viewport. Worked out from the positions on every
// frame of scrolling rather than from intersection events, so it is the same
// answer in both directions and at any speed. Used by the start page's roles,
// the offer pages' process (ProcessSnap, the accessibility page) and the
// development page's vibe coding situations.
//
// onChange runs when the step changes, and once more with isInstant on load and
// after a resize, where a scene should just be there instead of travelling.
// Nothing runs while the media query does not match.
export function watchActiveStep(
  steps: HTMLElement[],
  media: MediaQueryList,
  onChange: (index: number, isInstant: boolean) => void
) {
  let activeIndex = -1

  const update = (isInstant: boolean) => {
    if (!steps.length || !media.matches) return
    const centre = window.innerHeight / 2
    let index = 0
    steps.forEach((step, stepIndex) => {
      if (step.getBoundingClientRect().top <= centre) index = stepIndex
    })
    if (index === activeIndex && !isInstant) return
    activeIndex = index
    onChange(index, isInstant)
  }

  let isFramePending = false
  const requestUpdate = () => {
    if (isFramePending) return
    isFramePending = true
    requestAnimationFrame(() => {
      isFramePending = false
      update(false)
    })
  }

  update(true)
  window.addEventListener("scroll", requestUpdate, { passive: true })
  // --- Sizes change with the layout, so the position is measured afresh
  window.addEventListener("resize", () => update(true), { passive: true })
  // --- Crossing into the media query starts from the current position
  media.addEventListener("change", () => update(true))
}
