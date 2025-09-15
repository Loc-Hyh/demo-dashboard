import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Employees from "./pages/Employees";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    <div className="p-6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/settings" element={<Settings />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
