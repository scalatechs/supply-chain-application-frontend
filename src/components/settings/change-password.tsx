import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token")
    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage("All fields are required.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        try {
            const response = await axios.patch(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/setting/change-password?autho",
                {
                    currentPassword: currentPassword,
                    new_password: newPassword,
                    confirm_password: confirmPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data)
            // Handle success
            setMessage("Password updated successfully!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error: any) {
            // Handle errors
            setMessage(error.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg w-full">
            <h1 className="font-medium text-xl">Change Password</h1>

            {message && (
                <p
                    className={`${message.includes("successfully") ? "text-green-600" : "text-red-600"
                        } text-sm`}
                >
                    {message}
                </p>
            )}

            {/* Current Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="currentPassword"
                    className="font-medium w-full flex justify-start"
                >
                    Current Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none">
                    <input
                        type="password"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* New Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="newPassword"
                    className="font-medium w-full flex justify-start"
                >
                    New Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none">
                    <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* Confirm Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="confirmPassword"
                    className="font-medium w-full flex justify-start"
                >
                    Confirm Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none">
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    onClick={handleChangePassword}
                    type="submit"
                    className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg border border-blue-600 text-blue-600 md:text-base text-sm font-medium hover:bg-blue-700 hover:text-white transition-colors"
                >
                    Change Password
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
