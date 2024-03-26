import { TodoList } from "../features/todo-list";
import { createMachine, assign } from "xstate";
import { withSurrogate } from "./_withSurrogate";

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

const TodoSurrogate = withSurrogate(todoMachine);

export const STodoList = () => (
  <>
    <TodoSurrogate
      render={([state, send]) => (
        <>
          <TodoList
            list={state.context.list}
            onSubmit={(e) => send({ type: "ADD", value: e })}
            onRemove={(e) => send({ type: "RM", value: e })}
          />
          <br />
          <TodoList
            list={state.context.list}
            onSubmit={(e) => send({ type: "ADD", value: e })}
            onRemove={(e) => send({ type: "RM", value: e })}
          />
        </>
      )}
    />

    <hr />
    <hr />
    <hr />

    <TodoSurrogate
      render={([state, send]) => (
        <TodoList
          list={state.context.list}
          onSubmit={(e) => send({ type: "ADD", value: e })}
          onRemove={(e) => send({ type: "RM", value: e })}
        />
      )}
    />
  </>
);
