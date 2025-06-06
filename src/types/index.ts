// Navigation types
export type RootStackParamList = {
  Home: undefined;
  NoteDetail: { noteId: string };
};

// Note types
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  imageUri?: string;
  isPinned?: boolean;
  labels?: string[];
}

// Theme types
export interface AppTheme {
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    error: string;
    text: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
