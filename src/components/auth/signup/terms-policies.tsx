import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSignupContext } from "../../../hooks/useSignupContext";
import { useState } from "react";
import axios from "axios"
import diddy from "../../../assets/diddy.jpg"

const termsPolicies = ({
    data, termsPolicies, updateField
}: {
    data: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
        companyName: string;
        registrationNumber: string;
        location: string;
        termsPolicies: boolean;
    },
    termsPolicies: boolean, updateField: (data: any) => void
}) => {
    const { currentStep, setCurrentStep, setIsFormSubmitted } = useSignupContext()
    const [isChecked, setIsChecked] = useState(termsPolicies || false);
    const token = localStorage.getItem("token");

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Checks if checkbox is checked or not
        const isFormValid = (isChecked == true)
        updateField({ termsPolicies: isChecked })

        if (isFormValid) {
            setIsFormSubmitted(prevState => {
                const newState = {
                    ...prevState,
                    [currentStep]: true
                };
                console.log('Updated form state:', newState);
                return newState;
            });
        } else {
            alert("Please fill out all required fields.");
        }

        try {

            const fileResponse = await fetch(diddy);
            const blob = await fileResponse.blob();
            const file = new File([blob], 'diddy.png', { type: blob.type })

            const formData = new FormData();
            formData.append('firstname', data.firstName);
            formData.append('lastname', data.lastName);
            formData.append('phone', data.phoneNumber);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('companyName', data.companyName);
            formData.append('regNo', data.registrationNumber);
            formData.append('location', data.location);
            formData.append('image', file);

            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }

            const response = await axios.post(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/signup/",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            if (response.status == 200 || response.status == 201) {
                alert("Sent Otp")
                setCurrentStep(currentStep + 1);
            }

        } catch (error: any) {
            console.log(`Error: ${error.message}`)
            if (error.response) {
                console.log('Error response:', error.response.data);
            }
        };
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1 className="md:text-5xl text-3xl font-semibold">Terms and Policies</h1>
            <p className="md:text-sm text-xs text-gray-800 my-6 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur eos mollitia fuga reprehenderit quasi vero asperiores nisi nam, magnam iure excepturi ex, perferendis voluptate sint perspiciatis velit? Obcaecati, adipisci sint? Possimus animi assumenda id nihil sint suscipit eum dolor doloremque odit voluptas! Quos ad dignissimos, itaque quod labore facere voluptate quas corrupti mollitia quasi amet nemo doloremque corporis culpa laborum adipisci ratione atque omnis architecto eum ea aspernatur tempora sapiente? Recusandae eum cupiditate quis.

                <br />
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum amet harum ullam ducimus saepe dicta perspiciatis optio minus reprehenderit suscipit odit beatae architecto possimus tempore incidunt nesciunt qui deserunt, eligendi nam? Tempora atque et tempore mollitia magni fugit. Iusto eos quos voluptates dignissimos perferendis. Cupiditate et ab eaque amet porro reprehenderit, enim dolore assumenda odio, nihil voluptatem quis rerum quasi velit temporibus. Placeat deserunt reprehenderit ipsa soluta saepe cum similique dolore doloribus in tempore!

                <br />
                <br />

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat vitae sequi aliquid illo, provident officia quam voluptate, est magni maxime iste voluptatum error! Officiis, odit adipisci cumque temporibus, aliquam cum ad nulla perferendis cupiditate quidem nostrum ratione modi veritatis, ipsa nisi deleniti ducimus quae dicta mollitia libero optio dolorem consectetur! Nulla velit quasi assumenda ratione asperiores dolores suscipit voluptatibus magni nam, perferendis hic sed nemo vitae, praesentium veniam sit minus similique at. Itaque, quas voluptate obcaecati ad perferendis quod.
            </p>

            <div className="md:text-base text-sm flex items-center gap-4">
                <Checkbox onClick={() => setIsChecked(!isChecked)} />
                <h3>
                    I agree to the&nbsp;
                    <span className="underline text-blue-700 cursor-pointer">Terms & Conditions</span>
                </h3>
            </div>

            {/* Navigation Buttons */}
            <div className="w-full flex justify-between mb-6 my-12">
                <div className="border border-neutral-600 text-neutral-600 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2">
                    <ChevronLeft />
                    <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        type="submit">
                        Previous Step
                    </button>
                </div>

                <button
                    type="submit"
                    className="bg-[#003dff] text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2">
                    Next Step
                    <ChevronRight />
                </button>
            </div >
        </form>
    )
}

export default termsPolicies