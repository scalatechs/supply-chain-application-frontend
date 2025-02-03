import { InventoryContext } from "@/context/inventory-context"
import { useContext } from "react"
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";

const orderReceipt = () => {
    const { id } = useParams();
    const { inventory } = useContext(InventoryContext);
    const product = inventory.find(item => item.id === id);

    if (!product) {
        return <div>Product not found</div>
    }


    return (
        <div className="xl:w-2/3 w-full flex flex-col items-start gap-6">
            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex md:flex-row flex-col md:items-center items-start">
                    Order Receipt&nbsp;&nbsp;
                    <span className="bg-[#fadbdb] mr-2 text-red-600 py-1 px-4 rounded-lg text-sm">
                        Damaged Goods
                    </span>
                </h1>

                <div className="mt-4 flex flex-col items-start gap-2 md:text-base text-sm">
                    <h3 className="text-neutral-600">Order ID:&nbsp;
                        <span className="text-black">#{product.id}</span>
                    </h3>
                    <h3 className="text-neutral-600">Date:&nbsp;
                        <span className="text-black">{new Date().toLocaleDateString()}</span>
                    </h3>
                    <h3 className="text-neutral-600">Customer ID:&nbsp;
                        <span className="text-black">#{product.id}</span>
                    </h3>
                    <h3 className="text-neutral-600">Sales Representative:&nbsp;
                        <span className="text-black">John Doe</span>
                    </h3>
                    <h3 className="text-neutral-600">Billing Address:&nbsp;
                        <span className="text-black">123 Main Street, Kathmandu Nepal</span>
                    </h3>
                </div>

                <Separator className="my-4" />

                <div className="mt-4 flex flex-wrap gap-6 items-start md:justify-between w-full">
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Product</li>
                        <li>Sunscreen</li>
                        <li>Wai Wai Noodles</li>
                        <li>Packaged Beans</li>
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Price</li>
                        <li>Rs 4.00</li>
                        <li>Rs 35.00</li>
                        <li>Rs 25.00</li>
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Quantity</li>
                        <li>x 12</li>
                        <li>x 15</li>
                        <li>x 15</li>
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Total</li>
                        <li>Rs 48.00</li>
                        <li>Rs 498.75</li>
                        <li>Rs 375.00</li>
                    </ul>
                </div>
            </div>

            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex md:flex-row flex-col md:items-center items-start">
                    Payment Receipt&nbsp;&nbsp;
                    <span className="bg-green-100 mr-2 text-green-600 py-1 px-4 rounded-lg text-sm">
                        Paid
                    </span>
                </h1>

                <div className="flex items-start justify-between w-full">
                    <ul className="mt-4 text-neutral-600 font-medium text-sm flex flex-col items-start gap-2">
                        <li>Sub-total</li>
                        <li>Shipping charge</li>
                        <li>Discount</li>
                        <li>Tax</li>
                        <li className="text-base font-medium text-black">Total</li>
                        <li className="mt-4 text-black text-lg">Paid by the customer</li>
                    </ul>

                    <ul className="mt-4 text-sm font-medium flex flex-col items-start gap-2">
                        <li>Rs 13,200.00</li>
                        <li>Rs 35.00</li>
                        <li className="text-green-600">5%</li>
                        <li className="text-red-600">12%</li>
                        <li className="text-base font-medium">Rs 13,000.00</li>
                        <li className="mt-4 text-green-600 text-lg">
                            Rs 13,000.00
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default orderReceipt