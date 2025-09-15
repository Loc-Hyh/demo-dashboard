import { useState, useEffect } from "react";

export default function Dashboard() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Current Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Increase
            </button>
        </div>
    );
}
