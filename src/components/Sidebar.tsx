import { Link } from "react-router-dom";
import { FaHouse, FaGear } from "react-icons/fa6";
import {FaUsers} from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="bg-gray-800 text-white h-screen w-64 p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <nav className="space-y-3">
                <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
                    <FaHouse /> <span>Dashboard</span>
                </Link>
                <Link to="/employees" className="flex items-center space-x-2 hover:text-gray-300">
                    <FaUsers className="w-5 h-5" /><span>Employees</span>
                </Link>
                <Link to="/settings" className="flex items-center space-x-2 hover:text-gray-300">
                    <FaGear /> <span>Settings</span>
                </Link>
            </nav>
        </div>
    );
}
