import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TodoItem } from './TodoItem';
import { Todo } from '@/hooks/useTodos';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, text: string) => void;
}

export function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No todos yet!</Text>
                <Text style={styles.emptySubtext}>Add one above to get started</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TodoItem 
                    todo={item} 
                    onToggle={onToggle} 
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            )}
            style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
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

