export const postObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      const newSrc = entry.isIntersecting ? entry.target.getAttribute('data-src') : ''
      entry.target.setAttribute('src', newSrc)
    }
  },
  { rootMargin: '1250px' }
)
