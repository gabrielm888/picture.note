import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Button, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation.types';
import type { AppTheme } from '../config/theme';

type NoteDetailScreenRouteProp = RouteProp<RootStackParamList, 'NoteDetail'>;
type NoteDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NoteDetail'>;

type Props = {
  route: NoteDetailScreenRouteProp;
  navigation: NoteDetailScreenNavigationProp;
};

interface Note {
  id: string;
  title: string;
  content: string;
}

const NoteDetailScreen: React.FC = () => {
  const theme = useTheme<AppTheme>();
  const route = useRoute<NoteDetailScreenRouteProp>();
  const { noteId } = route.params;
  const navigation = useNavigation<NoteDetailScreenNavigationProp>();
  
  // In a real app, you would fetch the note details using the noteId
  const [note, setNote] = React.useState<Note>({
    id: noteId,
    title: 'Note Title',
    content: 'This is the note content. You can edit it here.',
  });

  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState(note.title);
  const [editedContent, setEditedContent] = React.useState(note.content);

  const handleSave = () => {
    // In a real app, you would save the changes to your backend
    setNote({
      ...note,
      title: editedTitle,
      content: editedContent,
    });
    setIsEditing(false);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        {isEditing ? (
          <>
            <TextInput
              mode="outlined"
              label="Title"
              value={editedTitle}
              onChangeText={setEditedTitle}
              style={styles.input}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  background: theme.colors.surface,
                  text: theme.colors.onSurface,
                  placeholder: theme.colors.onSurfaceVariant,
                },
              }}
            />
            <TextInput
              mode="outlined"
              label="Content"
              value={editedContent}
              onChangeText={setEditedContent}
              multiline
              numberOfLines={10}
              style={[styles.input, styles.contentInput]}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  background: theme.colors.surface,
                  text: theme.colors.onSurface,
                  placeholder: theme.colors.onSurfaceVariant,
                },
              }}
            />
            <Button 
              mode="contained" 
              onPress={handleSave}
              style={styles.button}
              theme={{ colors: { primary: theme.colors.primary } }}
            >
              Save Changes
            </Button>
          </>
        ) : (
          <>
            <TextInput
              label="Title"
              value={note.title}
              editable={false}
              style={styles.input}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  background: theme.colors.surface,
                  text: theme.colors.onSurface,
                  placeholder: theme.colors.onSurfaceVariant,
                },
              }}
            />
            <TextInput
              label="Content"
              value={note.content}
              editable={false}
              multiline
              numberOfLines={10}
              style={[styles.input, styles.contentInput]}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  background: theme.colors.surface,
                  text: theme.colors.onSurface,
                  placeholder: theme.colors.onSurfaceVariant,
                },
              }}
            />
            <Button 
              mode="contained" 
              onPress={() => {
                setEditedTitle(note.title);
                setEditedContent(note.content);
                setIsEditing(true);
              }}
              style={styles.button}
              theme={{ colors: { primary: theme.colors.primary } }}
            >
              Edit Note
            </Button>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    paddingBottom: 32,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  contentInput: {
    minHeight: 200,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 8,
    borderRadius: 4,
  },
});

export default NoteDetailScreen;
