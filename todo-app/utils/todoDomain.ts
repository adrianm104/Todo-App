import { Todo } from '@/hooks/useTodos';

export function isTodoCompleted(todo: Todo): boolean {
  return todo.completed;
}

export function isTodoActive(todo: Todo): boolean {
  return !todo.completed;
}

export function isTodoListEmpty(todos: Todo[]): boolean {
  return todos.length === 0;
}

export function isValidTodoText(text: string): boolean {
  return text.trim() !== '';
}