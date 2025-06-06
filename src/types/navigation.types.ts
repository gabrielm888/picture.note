// Define the parameter list for the root stack navigator
export type RootStackParamList = {
  Home: undefined;
  NoteDetail: { noteId: string; title?: string; content?: string };
};

// This helps with type checking navigation props
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
