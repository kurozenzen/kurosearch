export const postObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if(entry.target["src"] === undefined) {
        console.warn("PostObserver is observing an invalid element", entry.target);
        continue;
      }

      entry.target.src = entry.isIntersecting
        ? entry.target.getAttribute("data-src")
        : "";
    }
  },
  { rootMargin: "1250px" }
);