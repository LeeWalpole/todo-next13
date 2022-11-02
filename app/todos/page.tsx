export const fetchCache = false;
import Link from "next/link";
import PocketBase from "pocketbase";
import CreateTodo from "./CreateTodo";

const client = new PocketBase("http://127.0.0.1:8090");

async function getTodos(fromRec: number = 1, filter = "") {
  const res = await client.records.getList("todos", fromRec, 20, {
    filter: filter,
  });

  return res?.items as any[];
}
export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>

      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
      <div className="padding-top: 1em;padding-bottom: 1em;">
        <CreateTodo></CreateTodo>
      </div>
    </div>
  );
}

function Todo({ todo }: any) {
  return (
    <Link href={`/todos/${todo.id}`}>
      <div className="grid">
        <div className="todo-status">
          <input
            type="checkbox"
            name="status"
            id="status"
            checked={todo.status == "Complete"}
            value="Complete"
          />
        </div>

        <div className="todo-desc">{todo.description} </div>
        <div className="todo-date">
          <input
            name="todo-date"
            id="todo-date"
            className="todo-date-input"
            value={todo.planned_date}
            readOnly={todo.status == "Complete"}
          />
        </div>
      </div>
    </Link>
  );
}
