import { createLazyFileRoute } from "@tanstack/react-router";
import { Todo } from "../surrogates/todo-list.surrogate";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <Todo />
    </div>
  );
}
