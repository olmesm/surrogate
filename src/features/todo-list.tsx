import { TodoItem } from "./todo-item";

export const TodoList = (props: {
  list: string[];
  onSubmit: (s: string) => void;
  onRemove: (s: number) => void;
}) => (
  <>
    <ul>
      {props.list.map((content, i) => (
        <li key={i}>
          {content} |{" "}
          <a href="#" onClick={() => props.onRemove(i)}>
            remove
          </a>
        </li>
      ))}
    </ul>

    <TodoItem onSubmit={props.onSubmit} />
  </>
);
