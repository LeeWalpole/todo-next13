import Link from "next/link";
import PocketBase from "pocketbase";

const client = new PocketBase("http://127.0.0.1:8090");

async function getTodo(todoId: string = "") {
  const res = todoId
    ? await client.records.getOne("todos", todoId)
    : { id: "", description: "", status: "" };

  return res;
}
export default async function TodoPage({ params }: any) {
  const todo = await getTodo(params.id);
  return (
    <div>
      <h1>Todo</h1>
      <div className="padding-bottom: 1em;">
        <Link href="/todos">Back to todos</Link>
      </div>

      <label htmlFor="id">Id</label>
      <input name="id" value={todo.id}></input>

      <label htmlFor="desc">Description</label>
      <input name="desc" value={todo.description}></input>

      <label htmlFor="status">Status</label>
      <input name="status" value={todo.status}></input>
    </div>
  );
}
