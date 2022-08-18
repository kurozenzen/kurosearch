const VALID_ROUTES = Object.freeze(["search", "account", "settings", "help"]);

export const isValidRoute = (route) => {
  return VALID_ROUTES.includes(route);
};