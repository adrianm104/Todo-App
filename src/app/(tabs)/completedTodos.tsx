import { View, Text, StyleSheet } from 'react-native';
import { TodoList } from '@/components/todo/TodoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTodoContext } from '@/contexts/TodoContext';
import { isTodoListEmpty } from '@/components/ui/utils/todoDomain';

export default function CompletedTodosScreen() {
  const { completedTodos, toggleTodo, deleteTodo } = useTodoContext();
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Completed Todos</Text>
        <Text style={styles.subtitle}>{completedTodos.length} completed</Text>
      </View>
      {isTodoListEmpty(completedTodos) ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No completed todos yet!</Text>
          <Text style={styles.emptySubtext}>Check off some todos to see them here</Text>
        </View>
      ) : (
        <TodoList 
          todos={completedTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
  },
});