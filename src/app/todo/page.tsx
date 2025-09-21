import { addTodo} from "./actions";
import { Todo } from "@/app/types";

export default async function TodosPage() {
    const todos: Todo[] = await fetch("http://localhost:3000/api/todo").then((res) =>
        res.json()
    );

    return (
        <div className="p-5 mt-20">
            <h1 className="text-2xl text-center mb-5">✅ Todo List</h1>

            <ul className="mb-10 w-1/2 mx-auto gap-3 flex flex-col">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={"p-3 rounded bg-red-200"}
                    >
                        {todo.task}
                        
                    </li>
                ))}
            </ul>

            <form action={addTodo} className="flex gap-2 w-1/2 mx-auto">
                <input
                    type="text"
                    name="task"
                    placeholder="New task..."
                    required
                    className="border px-3 py-2 rounded flex-1"
                />
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </div>
    );
}
