

const changePassword = () => {
    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg w-full">
            <h1 className="font-medium text-xl">Change Password</h1>

            {/* Current Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="currentPassword"
                    className="font-medium w-full flex justify-start">
                    Current Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                    <input
                        type="password" name="currentPassword"
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* New Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="newPassword"
                    className="font-medium w-full flex justify-start">
                    New Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                    <input
                        type="password" name="newPassword"
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* Confirm Password */}
            <div className="w-full md:text-base text-sm">
                <label
                    htmlFor="confirmPassword"
                    className="font-medium w-full flex justify-start">
                    Confirm Password
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                    <input
                        type="password" name="confirmPassword"
                        placeholder="*************"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg border border-blue-600 text-blue-600 md:text-base text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Change Password
                </button>
            </div>
        </div>
    )
}

export default changePassword