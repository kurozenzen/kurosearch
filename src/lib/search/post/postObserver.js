export const postObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      //@ts-expect-error target is not strictly an image
      if (entry.target.src === undefined) {
        continue
      }

      //@ts-expect-error target is not strictly an image
      entry.target.src = entry.isIntersecting ? entry.target.getAttribute('data-src') : ''
    }
  },
  { rootMargin: '1250px' }
)
