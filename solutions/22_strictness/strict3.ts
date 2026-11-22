type Route = { path: string; auth: boolean };

// `satisfies` checks the object against the type, but `routes` keeps its inferred type
// `{ home: Route-like; profile: Route-like }`. Unknown keys are errors now.
const routes = {
  home: { path: "/", auth: false },
  profile: { path: "/profile", auth: true },
} satisfies Record<string, Route>;

console.log(routes.home.path);
console.log(routes.profile.auth);

// @ts-expect-error There is no such route.
console.log(routes.contact);

const invalid = {
  // @ts-expect-error `auth` must be a boolean.
  home: { path: "/", auth: "yes" },
} satisfies Record<string, Route>;
console.log(invalid);
