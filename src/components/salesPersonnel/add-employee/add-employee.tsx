import BasicInformation from "./basic-information"
import RolesResponsibilites from "./roles-responsibilites"
import Confirmation from "./confirmation"
import { useEffect, useState } from "react"
import AccountCreated from "./account-created"

const addEmployee = () => {

    //managing indexes
    const [currentIndex, setCurrentIndex] = useState(1);
    const [changeStyles, setChangeStyles] = useState(false);

    useEffect(() => {
        setCurrentIndex(1) //set current index to 1 initially
    }, [])

    useEffect(() => {
        if (currentIndex == 3) {
            setChangeStyles(changeStyles)
        }
    }, [currentIndex])

    //managing data across forms
    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        password: string;
        confirmPassword: string;
        assignRole: string;
        assignRegion: string;
        takeOrders: boolean;
        collectPayments: boolean;
        trackShipmentPerformance: boolean;
        viewInventory: boolean;
    }

    const INITIAL_DATA: FormData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        confirmPassword: "",
        assignRole: "",
        assignRegion: "",
        takeOrders: false,
        collectPayments: false,
        trackShipmentPerformance: false,
        viewInventory: false
    }

    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
    });

    const [data, setData] = useState(INITIAL_DATA)
    const updateField = (fields: Partial<FormData>) => {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    useEffect(() => {
        console.log(data)
        console.log(isFormSubmitted)
    }, [currentIndex])

    return (
        <div className="text-center w-full">

            {currentIndex != 4 &&
                <>
                    <h1 className="font-medium md:text-4xl text-2xl">Create Employee Account</h1>
                    <p className="md:text-base text-sm text-neutral-600 mt-2">
                        It has survived not only five centuries, but also leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                </>
            }

            {/* Form */}
            <div className="w-full rounded-lg p-4 flex flex-col items-center gap-6 mt-6">

                {/* Form Header */}
                <div className={`w-full ${currentIndex == 4 ? "hidden" : "flex"} justify-center gap-6`}>

                    <div
                        className={`px-6 text-lg ${currentIndex == 1 ? "text-blue-600" : "text-zinc-400"}`}>
                        1. Basic Information
                        <div className={`w-[120%] -ml-4 ${currentIndex == 1 ? "bg-blue-600" : "bg-zinc-200"} rounded-lg h-2`}></div>
                    </div>

                    <div
                        className={`${currentIndex == 2 ? "text-blue-600" : "text-zinc-400"} px-6 text-xl`}>
                        2. Roles & Responsibilites
                        <div className={`w-[120%] -ml-4 ${currentIndex == 2 ? "bg-blue-600" : "bg-zinc-200"} rounded-lg h-2`}></div>
                    </div>

                    <div
                        className={`${currentIndex == 3 ? "text-blue-600" : "text-zinc-400"} px-6 text-xl`}>
                        3. Confirmation
                        <div className={`w-[120%] -ml-4 ${currentIndex == 3 ? "bg-blue-600" : "bg-zinc-200"} rounded-lg h-2`}></div>
                    </div>
                </div>

                {/* Actual Forms */}
                {
                    currentIndex == 1 ?
                        <BasicInformation
                            setIsFormSubmitted={setIsFormSubmitted}
                            {...data}
                            updateField={updateField}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex} /> :

                        currentIndex == 2 ?
                            <RolesResponsibilites
                                setIsFormSubmitted={setIsFormSubmitted}
                                {...data}
                                updateField={updateField}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex} /> :

                            currentIndex == 3 ?
                                <Confirmation
                                    {...data}
                                    currentIndex={currentIndex}
                                    setCurrentIndex={setCurrentIndex} /> :

                                currentIndex == 4 ?
                                    <AccountCreated /> :

                                    <BasicInformation
                                        setIsFormSubmitted={setIsFormSubmitted}
                                        {...data}
                                        updateField={updateField}
                                        currentIndex={currentIndex}
                                        setCurrentIndex={setCurrentIndex} />
                }

            </div>
        </div >
    )
}

export default addEmployee