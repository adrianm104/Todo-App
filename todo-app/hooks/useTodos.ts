import { useState } from "react";

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export function useTodos(){
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        if (text.trim() === '') return;

        const newTodo: Todo = {
            id: Date.now().toString(),
            text: text.trim(),
            completed: false,
            createdAt: new Date(),
        };

        setTodos(prevTodo => [newTodo, ...prevTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prevTodo => 
            prevTodo.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
    };


    const activeTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        activeTodos,
        completedTodos,
    };
}