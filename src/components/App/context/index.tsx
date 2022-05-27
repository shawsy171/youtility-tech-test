import { createContext } from "react";
import { Library } from "../../../features/Library/types";

interface AppContextDefault {
  libraries: Library[];
  createLibrary: () => Promise<void>;
}

export default createContext<AppContextDefault>({ libraries: [], createLibrary: () => Promise.resolve() });