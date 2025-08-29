import useMutation from "../api/useMutation";

export default function Form() {
  const { mutate } = useMutation("POST", "/activities", "activity");
  const addActivity = (FormData) => {
    const name = FormData.get("name");
    const description = FormData.get("description");
    mutate({ name, description });
  };

  return (
    <form action={addActivity}>
      <h3>Add an activity</h3>
      <label>Name:</label>
      <input type="text" name="name" />
      <label>Description:</label>
      <input type="text" name="description" />
      <button type="submit">Submit</button>
    </form>
  );
}
