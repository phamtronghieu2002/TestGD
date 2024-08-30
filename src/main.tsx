import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthProvider from "./providers/authProvider.tsx";
import TodoProvider from "./providers/todoProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <TodoProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </TodoProvider>

);
