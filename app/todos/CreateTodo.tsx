"use client";

import Link from "next/link";
import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const client = new PocketBase("http://127.0.0.1:8090");

export default function CreateNote() {
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [plannedDate, setPlannedDate] = useState("");

  const router = useRouter();

  const createTodo = async () => {
    await client.records.create("todos", {
      description: desc,
      status: status,
    });
    setStatus("");
    setDesc("");
    router.refresh();
  };
  return (
    <div>
      <form onSubmit={createTodo}>
        <div>
          <i className="margin-bottom: 1em;">Create New Todo..</i>

          <label htmlFor="desc">Description</label>
          <input
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}></input>

          <label htmlFor="status">Status</label>
          <input
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}></input>
          <button type="submit">Create Todo</button>
        </div>
      </form>
    </div>
  );
}
