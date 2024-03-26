import { useMachine } from "@xstate/react";
import { TodoList } from "../features/todo-list";
import { createMachine, assign } from "xstate";

const todoMachine = createMachine({
  id: "todo",
  context: {
    list: ["pay bills", "walk dog", "go shopping"],
  },
  on: {
    ADD: {
      actions: assign({
        list: ({ context, event }) => [...context.list, event.value],
      }),
    },
    RM: {
      actions: assign({
        list: ({ context, event }) =>
          context.list.filter((_, i) => i !== event.value),
      }),
    },
  },
});

export const STodoList = () => {
  const [state, send] = useMachine(todoMachine);

  return (
    <TodoList
      list={state.context.list}
      onSubmit={(e) => send({ type: "ADD", value: e })}
      onRemove={(e) => send({ type: "RM", value: e })}
    />
  );
};
