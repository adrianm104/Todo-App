import { createContext, useContext, ReactNode } from 'react';
import { useTodos } from '@/hooks/useTodos';
import type { Todo } from '@/hooks/useTodos';

interface TodoContextType {
  todos: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const todoData = useTodos();
  
  return (
    <TodoContext.Provider value={todoData}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within TodoProvider');
  }
  return context;
}