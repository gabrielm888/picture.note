import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation.types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Define the NoteItem interface
  interface NoteItem {
    id: string;
    title: string;
    content: string;
    date: string;
  }

  // Mock data for notes
  const notes: NoteItem[] = [
    { 
      id: '1', 
      title: 'First Note', 
      content: 'This is my first note',
      date: new Date().toISOString() 
    },
    { 
      id: '2', 
      title: 'Shopping List', 
      content: 'Milk, Eggs, Bread',
      date: new Date().toISOString() 
    },
    { 
      id: '3', 
      title: 'Ideas', 
      content: 'Some random thoughts...',
      date: new Date().toISOString() 
    },
  ];

  const renderItem = ({ item }: { item: NoteItem }) => (
    <TouchableOpacity
      style={[styles.noteItem, { backgroundColor: theme.colors.surface }]}
      onPress={() => navigation.navigate('NoteDetail', { noteId: item.id })}
    >
      <Text style={[styles.noteTitle, { color: theme.colors.onSurface }]}>{item.title}</Text>
      <Text 
        style={[styles.notePreview, { color: theme.colors.onSurfaceVariant }]}
        numberOfLines={2}
      >
        {item.content}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item: NoteItem) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  noteItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notePreview: {
    fontSize: 14,
    opacity: 0.7,
  },
});

export default HomeScreen;
