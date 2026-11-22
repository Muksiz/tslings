type Route = { path: string; auth: boolean };

// The annotation checks that every route is valid, but it also throws away the information
// about *which* routes exist: `routes.contact` is allowed (and `undefined` at runtime!).
// TODO: Replace the type annotation with the `satisfies` operator. Keep the type `Record<string, Route>`.
const routes: Record<string, Route> = {
  home: { path: "/", auth: false },
  profile: { path: "/profile", auth: true },
};

// Don't change the lines below!
console.log(routes.home.path);
console.log(routes.profile.auth);

// @ts-expect-error There is no such route.
console.log(routes.contact);

const invalid = {
  // @ts-expect-error `auth` must be a boolean.
  home: { path: "/", auth: "yes" },
} satisfies Record<string, Route>;
console.log(invalid);
