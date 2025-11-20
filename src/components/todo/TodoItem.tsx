import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '@/hooks/useTodos';
import { isTodoCompleted } from '@/components/ui/utils/todoDomain';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    checkboxContainer: {
        marginRight: 12,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#007AFF',
    },
    checkmark: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    textCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    deleteButton: {
        padding: 8,
    },
    deleteText: {
        color: '#ff3b30',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    const completed = isTodoCompleted(todo);
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.checkboxContainer} 
                onPress={() => onToggle(todo.id)}
            >
                <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
                    {todo.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
            </TouchableOpacity>

            <Text style={[styles.text, completed && styles.textCompleted]}>
                {todo.text}
            </Text>

            <TouchableOpacity 
                onPress={() => onDelete(todo.id)} 
                style={styles.deleteButton}
            >
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>
    );
}
