import { Switch } from "@/components/ui/switch"
import { ChangeEvent } from "react";

// Interface for the component props
interface RolesProps {
    assignRole: string;
    assignRegion: string;
    takeOrders: boolean;
    collectPayments: boolean;
    trackShipmentPerformance: boolean;
    viewInventory: boolean;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
    updateField: (data: Partial<{
        assignRole: string;
        assignRegion: string;
        takeOrders: boolean;
        collectPayments: boolean;
        trackShipmentPerformance: boolean;
        viewInventory: boolean;
    }>) => void;
}

// Fixed component name to start with capital letter
const RolesResponsibilities = ({
    assignRole,
    assignRegion,
    takeOrders,
    collectPayments,
    trackShipmentPerformance,
    viewInventory,
    currentIndex,
    setCurrentIndex,
    updateField,
    setIsFormSubmitted
}: RolesProps) => {

    // Helper function to handle input changes
    const handleInputChange = (field: keyof Omit<RolesProps, 'currentIndex' | 'setCurrentIndex' | 'updateField'>) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            updateField({ [field]: e.target.value });
        };

    // Helper function to handle switch changes
    const handleSwitchChange = (field: keyof Omit<RolesProps, 'currentIndex' | 'setCurrentIndex' | 'updateField' | 'assignRole' | 'assignRegion'>) =>
        (checked: boolean) => {
            updateField({ [field]: checked });
        };

    //Handle form submit
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!assignRegion.trim() || !assignRole.trim()) {
            alert("Please fill out all required fields.");
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
        <form onSubmit={handleFormSubmit} className="flex flex-col items-start gap-4 border p-6 rounded-lg w-[36rem]">

            {/* Assign Role */}
            <div className="w-full">
                <label
                    htmlFor="assignRole"
                    className="text-sm font-medium w-full flex justify-start">
                    Assign Role
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm p-3 border border-neutral-400 outline-none" >
                    <input
                        id="assignRole"
                        value={assignRole}
                        onChange={handleInputChange('assignRole')}
                        type="text"
                        name="assignRole"
                        placeholder="Assign Role"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            <div className="w-full flex items-end gap-1 mt-2">

                {/* Assign Region */}
                <div className="w-[72%]">
                    <label
                        htmlFor="assignRegion"
                        className="text-sm font-medium w-full flex justify-start">
                        Assign Region
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm p-3 border border-neutral-400 outline-none" >
                        <input
                            id="assignRegion"
                            value={assignRegion}
                            onChange={handleInputChange('assignRegion')}
                            type="text"
                            name="assignRegion"
                            placeholder="John Doe, 456 Elm Street, Suite 3, Los Angeles"
                            className="border-none outline-none w-full"
                        />
                    </div>
                </div>

                <button className="px-3 py-[0.9rem] text-[#003dff] border border-[#003dff] rounded-md font-medium text-sm">
                    Change Address
                </button>
            </div>

            <div className="w-full flex flex-col items-start gap-1 mt-2">
                <h3 className="font-medium text-sm">Assign Permissions</h3>
                <div className="border rounded-lg p-4 flex flex-col items-start gap-4 w-full">

                    {/* Take Orders */}
                    <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                            <h4 className="text-base font-medium">Take Orders</h4>
                            <p className="text-neutral-600 text-xs">
                                Set permissions for employees to take orders
                            </p>
                        </div>
                        <Switch
                            checked={takeOrders}
                            onCheckedChange={handleSwitchChange('takeOrders')}
                        />
                    </div>

                    {/* Take Orders */}
                    <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                            <h4 className="text-base font-medium">Collect Payments</h4>
                            <p className="text-neutral-600 text-xs">
                                Allow user to collect payments
                            </p>
                        </div>
                        <Switch
                            checked={collectPayments}
                            onCheckedChange={handleSwitchChange('collectPayments')}
                        />
                    </div>

                    {/* Take Orders */}
                    <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                            <h4 className="text-base font-medium">Track Shipment Performance</h4>
                            <p className="text-neutral-600 text-xs">
                                Allow user to track shipment performance
                            </p>
                        </div>
                        <Switch
                            checked={trackShipmentPerformance}
                            onCheckedChange={handleSwitchChange('trackShipmentPerformance')}
                        />
                    </div>

                    {/* Take Orders */}
                    <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                            <h4 className="text-base font-medium">View Inventory</h4>
                            <p className="text-neutral-600 text-xs">
                                Allow user to view inventory items
                            </p>
                        </div>
                        <Switch
                            checked={viewInventory}
                            onCheckedChange={handleSwitchChange('viewInventory')}
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="mt-6 px-3 py-4 rounded-lg bg-[#003dff] text-white text-base font-medium">
                Save Information
            </button>

        </form>
    )
}

export default RolesResponsibilities;