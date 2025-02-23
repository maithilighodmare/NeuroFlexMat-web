import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [stepCount, setStepCount] = useState(30);
    const [level, setLevel] = useState(1);
    const [recoveryPercentage, setRecoveryPercentage] = useState(11);
    const totalCircumference = 251.2;

    const handleSearch = () => {
        if (searchQuery.trim()) {
            alert(`Searching for: ${searchQuery}`);
        }
    };

    const increaseSteps = () => {
        setStepCount((prev) => prev + 1);
    };

    useEffect(() => {
        setLevel(Math.floor(stepCount / 50) + 1);
        setRecoveryPercentage((prev) => Math.min(prev + 1, 100));
    }, [stepCount]);

    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="bg-purple-700 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="https://cdn-icons-png.freepik.com/256/6997/6997676.png?semt=ais_hybrid"
                        alt="User profile"
                        className="rounded-full w-10 h-10"
                    />
                    <span className="text-white ml-2 font-semibold">Sahilatrain123@gmail.com</span>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center border rounded-md bg-white p-1 gap-2">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="p-2 border-none focus:outline-none flex-grow"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-grow"></div>

            {/* Steps Counting */}
            <div className="p-6 flex justify-center">
                <div className="bg-white p-6 rounded-md shadow-md w-full max-w-[600px] border-2 border-black text-center">
                    <h2 className="text-lg font-bold mb-4">Steps Counting</h2>
                    <div className="flex items-center justify-between border-2 border-purple-500 rounded-lg p-3 mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3400/3400767.png"
                            alt="Steps Icon"
                            className="w-8"
                        />
                        <span className="text-sm font-medium">Total Steps</span>
                        <span className="text-lg font-bold">{stepCount}</span>
                    </div>
                    <div className="text-green-600 text-3xl mb-4 animate-bounce">🚶‍♂️</div>
                    <div className="mt-4 flex items-center">
                        <div className="flex-grow bg-gray-300 h-2 rounded-full overflow-hidden">
                            <div
                                className="progress bg-green-500 h-full transition-all duration-500 ease-in-out"
                                style={{ width: `${Math.min(stepCount, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="text-right mt-2 font-semibold">Level {level}</div>
                    <button
                        className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                        onClick={increaseSteps}
                    >
                        Take a Step
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;