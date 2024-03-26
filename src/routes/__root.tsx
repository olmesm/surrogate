import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="container">
      <nav>
        <ul>
          <li>
            <strong>Surrogate</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
