import { Route, Routes } from "react-router-dom";
import MovieApp from "./components/MovieApp/MovieApp";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MovieApp />} />
            </Routes>
        </div>
    );
}

export default App;
