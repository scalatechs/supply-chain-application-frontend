import { PencilLine } from "lucide-react";
import { ChangeEvent } from "react";

// Interface for the component props
interface BasicInformationProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
    confirmPassword: string;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
    updateField: (data: Partial<{
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        password: string;
        confirmPassword: string;
    }>) => void;
}

const BasicInformation = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
    confirmPassword,
    currentIndex,
    setCurrentIndex,
    updateField,
    setIsFormSubmitted
}: BasicInformationProps) => {

    // Helper function to handle input changes
    const handleInputChange = (field: keyof Omit<BasicInformationProps, 'currentIndex' | 'setCurrentIndex' | 'updateField' | 'setIsFormSubmitted'>) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            updateField({ [field]: e.target.value });
        };

    // Handle form submit
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!firstName.trim() || !lastName.trim() || !email.trim() ||
            !phoneNumber.trim() || !address.trim() || !password.trim() ||
            !confirmPassword.trim()) {
            alert("Please fill out all required fields.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // If all validations pass
        setIsFormSubmitted(prevState => ({
            ...prevState,
            [currentIndex]: true
        }));

        setCurrentIndex(currentIndex + 1);
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col items-start gap-4 border p-6 rounded-lg md:max-w-2xl w-full">
            {/* Profile Image Section */}
            <div className="relative w-full flex justify-center">
                <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-24 h-24 object-cover rounded-full" alt="" />
                <PencilLine
                    className="bg-white rounded-full shadow-lg p-1.5 absolute bottom-0 left-[52%]"
                    size={35}
                />
            </div>

            {/* First Name and Last Name Section */}
            <div className="flex md:flex-row flex-col items-start gap-6 mt-6 w-full md:text-sm text-xs">
                {/* First Name */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="firstName" className="font-medium w-full flex justify-start">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleInputChange('firstName')}
                        type="text"
                        placeholder="Suresh"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>

                {/* Last Name */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="lastName" className="font-medium w-full flex justify-start">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange('lastName')}
                        type="text"
                        placeholder="Shrestha"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>
            </div>

            {/* Email and Phone Number Section */}
            <div className="flex md:flex-row flex-col items-start gap-6 w-full md:text-sm text-xs">
                {/* Email */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="email" className="font-medium w-full flex justify-start">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange('email')}
                        type="email"
                        placeholder="sureshhr@gmail.com"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="phoneNumber" className="text-sm font-medium w-full flex justify-start">
                        Phone Number
                    </label>
                    <div className="flex md:flex-row flex-col items-start gap-2 mt-1">
                        <select className="border border-neutral-400 py-3.5 rounded-sm px-2 md:w-auto w-full">
                            <option value="977">+977</option>
                            <option value="920">+920</option>
                            <option value="100">+100</option>
                        </select>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleInputChange('phoneNumber')}
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <div className="w-full flex md:flex-row flex-col md:items-end items-start gap-1 mt-2 md:text-sm text-xs">
                {/* Address */}
                <div className="md:w-[72%] w-full">
                    <label htmlFor="address" className="font-medium w-full flex justify-start">
                        Address
                    </label>
                    <input
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleInputChange('address')}
                        type="text"
                        placeholder="John Doe, 456 Elm Street, Suite 3, Los Angeles"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>
                <button
                    className="md:w-[calc(100%-72%)] w-full px-3 py-3.5 text-blue-600 border border-blue-600 rounded-md font-medium"
                >
                    Change Address
                </button>
            </div>

            {/* Password Section */}
            <div className="flex md:flex-row flex-col items-start gap-6 w-full md:text-sm text-xs">
                {/* Password */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="password" className="font-medium w-full flex justify-start">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange('password')}
                        type="password"
                        placeholder="***********"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                        minLength={8}
                    />
                </div>

                {/* Confirm Password */}
                <div className="md:w-1/2 w-full">
                    <label htmlFor="confirmPassword" className="font-medium w-full flex justify-start">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange('confirmPassword')}
                        type="password"
                        placeholder="***********"
                        className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full mt-6 px-3 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors md:text-base text-sm"
            >
                Save Information
            </button>
        </form>
    );
};

export default BasicInformation;