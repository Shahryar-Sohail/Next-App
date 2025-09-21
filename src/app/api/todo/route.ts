import { Todo } from "@/app/types";

const todos: Todo[] = [
  { id: 1, task: "Learn Next.js", done: false },
  { id: 2, task: "Build a Todo App", done: false },
];

export async function GET() {
  return new Response(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { task } = await req.json();

  if (!task) {
    return new Response(JSON.stringify({ message: "Task is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newTodo: Todo = {
    id: todos.length + 1,
    task,
    done: false,
  };

  todos.push(newTodo);

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}


