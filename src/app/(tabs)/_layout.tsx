import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/core/ui/components/icon-symbol';
import { Colors } from '@/core/ui/theme/theme';
import { useColorScheme } from '@/core/ui/hooks/use-color-scheme';
import { TodoProvider } from '@/core/ui/providers/TodoContext';
import { RealmProvider } from '@/core/ui/providers/RealmContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <RealmProvider>
    <TodoProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Todos',
            tabBarLabel: 'Todos',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet.rectangle.portrait.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="completedTodos"
          options={{
            title: 'Completed',
            tabBarLabel: 'Completed',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="checkmark.circle.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
      </Tabs>
    </TodoProvider>
    </RealmProvider>
  );
}
