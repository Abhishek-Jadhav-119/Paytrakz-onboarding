import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom"; // Imported as 'Router' for simplicity
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
