/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMachine } from "@xstate/react";
import { StateMachine } from "xstate";

// use render props pattern
export const withSurrogate =
  <
    T extends StateMachine<
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >,
  >(
    machine: T
  ) =>
  (props: {
    render: (args: ReturnType<typeof useMachine<T>>) => React.ReactNode;
  }) => {
    const _machine = useMachine<T>(machine);
    return props.render(_machine);
  };
