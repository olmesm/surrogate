export const TodoItem = (props: { onSubmit: (s: string) => void }) => (
  <form
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit={(e: any) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      props.onSubmit(formData.get("new-item") as string);
      e.target.reset();
    }}
  >
    <input name="new-item" placeholder="Add a new item"></input>
  </form>
);
