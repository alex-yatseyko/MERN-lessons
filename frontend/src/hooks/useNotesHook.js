import { NotesContext } from "../context/NotesContext";
import { useContext } from "react";

export const useNotesHook = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw Error("useNotesHook must be used inside NotesContext Provider");
  }

  return context;
};
