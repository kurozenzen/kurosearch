import { writable } from "svelte/store";
import { isValidRoute } from "./route";

const createNavigation = () => {
  const { subscribe, set } = writable("search");

  return {
    subscribe,
    navigateTo(route) {
      if (!isValidRoute(route)) {
        throw new TypeError("Invalid route passed to navigateTo");
      }

      set(route);
    },
  };
};

export default createNavigation();

