import { useState, useEffect } from "react";
import { useRealm } from "@/contexts/RealmContext";
import { TodoSchema } from "@/models/TodoSchema";
import { isValidTodoText, isTodoActive, isTodoCompleted } from "@/components/ui/utils/todoDomain";


export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export function useTodos(){
    const { realm, isRealmReady } = useRealm();
    const [todos, setTodos] = useState<Todo[]>([]);


    const addTodo = (text: string) => {
        if (!isValidTodoText(text) || !realm) return;

        realm.write(() => {
            realm.create('Todo', {
                id: Date.now().toString(),
                text: text.trim(),
                completed: false,
                createdAt: new Date(),
            });
        });
    };

    const toggleTodo = (id: string) => {
        if (!realm) return;

        realm.write(() => {
            const todo = realm.objectForPrimaryKey<TodoSchema>('Todo', id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        });
    };

    const deleteTodo = (id: string) => {
        if (!realm) return;

        realm.write(() => {
            const todo = realm.objectForPrimaryKey<TodoSchema>('Todo', id);
            if (todo) {
                realm.delete(todo);
            }
        });
    };

    const activeTodos = todos.filter(isTodoActive);
    const completedTodos = todos.filter(isTodoCompleted);

    useEffect(() => {
        if (!realm || !isRealmReady) return;

        const loadTodos = () => {
            const realmTodos = realm.objects<TodoSchema>('Todo').sorted('createdAt', true);
            const todosArray = Array.from(realmTodos).map(todo => ({
                id: todo.id,
                text: todo.text,
                completed: todo.completed,
                createdAt: todo.createdAt,
            }));
            setTodos(todosArray);
        };

        loadTodos();

        // Set up listener for real-time updates
        const listener = () => {
            loadTodos();
        };

        realm.addListener('change', listener);

        return () => {
            realm.removeListener('change', listener);
        };
    }, [realm, isRealmReady]);

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        activeTodos,
        completedTodos,
    };
}