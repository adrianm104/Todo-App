import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface AddTodoFormProps {
    onAddTodo: (text: string) => void;
}

export function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            onAddTodo(text);
            setText('');
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Add a new todo..." 
                    value={text} 
                    onChangeText={setText} 
                    onSubmitEditing={handleAddTodo}
                    returnKeyType="done"
                />
                <TouchableOpacity 
                    style={[styles.addButton, !text.trim() && styles.addButtonDisabled]}
                    onPress={handleAddTodo}
                    disabled={!text.trim()}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    input: {
        flex: 1,
        height: 44,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonDisabled: {
        backgroundColor: '#ccc',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});