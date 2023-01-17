import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ToastContainer, Flip } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./redux-store/store";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

/**
 * Axios Global Config
 * @type {string}
 */
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter basename="/">
                    <PersistGate loading={null} persistor={persistor}>
                        <Routes />
                    </PersistGate>
                    <ToastContainer transition={Flip} />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
