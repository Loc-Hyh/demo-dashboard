import { FaBell } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">React Dashboard</h1>
            <FaBell className="text-gray-600 w-6 h-6 cursor-pointer" />
        </div>
    );
}
