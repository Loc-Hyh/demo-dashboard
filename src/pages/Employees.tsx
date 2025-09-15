import { useState } from "react";

interface Employee {
    id: number;
    name: string;
    position: string;
}

export default function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([
        { id: 1, name: "Nguyen Van A", position: "Developer" },
        { id: 2, name: "Tran Thi B", position: "Designer" },
    ]);

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !position) return;

        if (editId) {
            setEmployees(
                employees.map((emp) =>
                    emp.id === editId ? { ...emp, name, position } : emp
                )
            );
            setEditId(null);
        } else {
            setEmployees([
                ...employees,
                { id: Date.now(), name, position },
            ]);
        }

        setName("");
        setPosition("");
    };

    const handleEdit = (id: number) => {
        const emp = employees.find((e) => e.id === id);
        if (emp) {
            setName(emp.name);
            setPosition(emp.position);
            setEditId(emp.id);
        }
    };

    const handleDelete = (id: number) => {
        setEmployees(employees.filter((e) => e.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Employee Management</h1>


            <form
                onSubmit={handleSubmit}
                className="flex gap-4 mb-6 items-center"
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="border rounded px-3 py-2 w-48"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Position"
                    className="border rounded px-3 py-2 w-48"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    {editId ? "Update" : "Add"}
                </button>
            </form>


            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Position</th>
                    <th className="border p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                        <td className="border p-2">{emp.id}</td>
                        <td className="border p-2">{emp.name}</td>
                        <td className="border p-2">{emp.position}</td>
                        <td className="border p-2 space-x-2">
                            <button
                                onClick={() => handleEdit(emp.id)}
                                className="px-2 py-1 bg-yellow-500 text-white rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(emp.id)}
                                className="px-2 py-1 bg-red-600 text-white rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {employees.length === 0 && (
                    <tr>
                        <td colSpan={4} className="text-center p-4 text-gray-500">
                            No employees found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
