import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TodoList } from '@/components/Todo/TodoList';
import { AddTodoForm } from '@/components/Todo/AddTodoForm';
import { useTodoContext } from '@/contexts/TodoContext';


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
});



export default function TodosScreen() {
  const { activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo } = useTodoContext();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
        <Text style={styles.subtitle}>
          {activeTodos.length} active, {completedTodos.length} completed
        </Text>
      </View>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList 
        todos={activeTodos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo}
      />
    </SafeAreaView>
  );
}


