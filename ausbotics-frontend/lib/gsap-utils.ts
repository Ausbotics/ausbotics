import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register plugins once at module level — gsap.registerPlugin gracefully no-ops during SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export { gsap, ScrollTrigger, ScrollToPlugin }

/**
 * Animate a section's children in on scroll entry.
 * Call inside useEffect with a ref or selector to the section container.
 */
export function animateSection(
  container: Element | string,
  childSelector: string = '[data-animate]',
  stagger: number = 0.1
): gsap.core.Tween {
  return gsap.fromTo(
    typeof container === 'string'
      ? `${container} ${childSelector}`
      : container.querySelectorAll(childSelector),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      },
    }
  )
}

/**
 * Animate characters of a heading element.
 * Splits textContent into individual <span> elements and animates each.
 */
export function animateHeadingChars(
  el: HTMLElement,
  delay: number = 0
): gsap.core.Timeline {
  const text = el.textContent ?? ''
  el.innerHTML = text
    .split('')
    .map((char) =>
      char === ' '
        ? '<span class="char" style="display:inline-block">&nbsp;</span>'
        : `<span class="char" style="display:inline-block">${char}</span>`
    )
    .join('')

  const chars = el.querySelectorAll('.char')
  const tl = gsap.timeline({ delay })
  tl.fromTo(
    chars,
    { opacity: 0, y: 20, rotateX: -40 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.5,
      stagger: 0.025,
      ease: 'power3.out',
    }
  )
  return tl
}

/**
 * GSAP infinite horizontal marquee.
 * Requires the track element to have content duplicated (rendered twice in HTML).
 */
export function createMarquee(
  track: HTMLElement,
  speed: number = 40 // px per second
): gsap.core.Tween {
  const totalWidth = track.scrollWidth / 2

  return gsap.to(track, {
    x: -totalWidth,
    duration: totalWidth / speed,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % totalWidth),
    },
  })
}

/**
 * Animate counting a number from 0 to target when element enters viewport.
 */
export function animateCountTo(
  el: HTMLElement,
  target: number,
  duration: number = 1.5
): gsap.core.Tween {
  const obj = { val: 0 }
  return gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      once: true,
    },
    onUpdate: () => {
      el.textContent = Math.round(obj.val).toLocaleString()
    },
  })
}

/**
 * Draw/animate an SVG path element using strokeDashoffset.
 * Path must have strokeDasharray set already.
 */
export function drawConnectingLine(
  path: SVGPathElement,
  trigger: Element
): gsap.core.Tween {
  const length = path.getTotalLength()
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
  return gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger,
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 1,
    },
  })
}

/**
 * Initialize scroll progress bar — animates scaleX 0→1 based on page scroll.
 * Attach to a thin fixed element at top with `transform-origin: left`.
 */
export function initScrollProgressBar(barEl: HTMLElement): void {
  gsap.to(barEl, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  })
}

/**
 * Fade + blur entrance for section children. More polished than plain y-offset.
 */
export function animateSectionBlur(
  container: Element | string,
  childSelector: string = '[data-animate]',
  stagger: number = 0.1
): gsap.core.Tween {
  return gsap.fromTo(
    typeof container === 'string'
      ? `${container} ${childSelector}`
      : container.querySelectorAll(childSelector),
    { opacity: 0, y: 28, filter: 'blur(8px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.85,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        once: true,
      },
    }
  )
}

/**
 * Slide in from left with blur — for sticky/hero left columns.
 */
export function animateFromLeft(
  el: Element | string,
  triggerEl?: Element | string
): gsap.core.Tween {
  return gsap.fromTo(
    el,
    { opacity: 0, x: -56, filter: 'blur(8px)' },
    {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: triggerEl ?? el,
        start: 'top 82%',
        once: true,
      },
    }
  )
}

/**
 * Scale + fade entrance — great for card grids.
 * Each card pops into view with a subtle spring.
 */
export function animateScaleIn(
  container: Element | string,
  childSelector: string = '[data-animate]',
  stagger: number = 0.09
): gsap.core.Tween {
  return gsap.fromTo(
    typeof container === 'string'
      ? `${container} ${childSelector}`
      : container.querySelectorAll(childSelector),
    { opacity: 0, scale: 0.88, y: 22 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.7,
      stagger,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      },
    }
  )
}
