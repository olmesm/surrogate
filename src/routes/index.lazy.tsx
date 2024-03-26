import { createLazyFileRoute } from "@tanstack/react-router";
import { STodoList } from "../surrogates/todo-list";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <STodoList />
    </div>
  );
}
