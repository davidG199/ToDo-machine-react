import React from "react";
import { AppInterface } from "./AppInterface";
import { TodoProvider } from "../Components/TodoContext";
// import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  return (
    <TodoProvider>
      <AppInterface/>
    </TodoProvider>
  );
}

export default App;
