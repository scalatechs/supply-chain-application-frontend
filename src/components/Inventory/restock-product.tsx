import { Link, useParams } from 'react-router-dom'
import { Button } from '../ui/button'
import { ChevronLeft } from 'lucide-react'
import { InventoryContext } from '@/context/inventory-context.tsx'
import { useContext } from 'react'
import ProductSales from './product-sales.tsx'
import { Separator } from '../ui/separator.tsx'
import RestockVariants from './restock-variants.tsx'


const RestockProduct = () => {
    const { id } = useParams();
    const { inventory } = useContext(InventoryContext);
    const product = inventory.find(item => item.id === id);

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex flex-col md:flex-row md:items-center items-start md:gap-0 gap-4 justify-between">
                <h1 className="text-xl md:text-3xl font-medium">Restock Product</h1>
                <div className='flex items-center gap-4'>
                    <Link to="/inventory" className="flex items-center gap-2">
                        <Button variant="outline">
                            <ChevronLeft className="w-5 h-5" />
                            Back
                        </Button>
                    </Link>
                    <Link to={`/inventory/edit-product/${product.id}`} className="flex items-center gap-2">
                        <Button variant="default">
                            Edit Product
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='w-full flex flex-col xl:flex-row items-start justify-between gap-6'>
                <div className='w-full xl:w-1/2 flex flex-col items-start gap-6'>
                    <div className='border rounded-lg flex flex-col md:flex-row items-start gap-6 p-4 w-full'>
                        <div className='border rounded-lg w-1/5 p-2'>
                            <img src={product.image} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h1 className='text-xl md:text-3xl capitalize mb-4'>{product.name}</h1>
                            <div className='w-full flex items-center gap-12'>
                                <div className='flex flex-col items-start gap-2'>
                                    <p className='font-medium text-base text-neutral-500'>FKU</p>
                                    <p className='font-medium text-base text-neutral-500'>Category</p>
                                    <p className='font-medium text-base text-neutral-500'>Price</p>
                                    <p className='font-medium text-base text-neutral-500'>Stock</p>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <p className='text-base'>{product.id}</p>
                                    <p className='text-base'>{product.category}</p>
                                    <p className='text-base'>{product.price}</p>
                                    <p className='text-base'>{product.stock}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-lg flex flex-col items-start p-4 w-full'>
                        <h1 className='text-xl md:text-2xl capitalize mb-4 font-medium'>Product Description</h1>
                        <Separator />
                        <p className='text-xs md:text-base mt-4 text-neutral-700'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.

                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque iure, assumenda, nihil, explicabo nobis similique dolore accusamus nostrum non sequi perferendis rem numquam necessitatibus.
                        </p>
                    </div>
                    <Link to={`/inventory`} className="flex items-center gap-2">
                        <Button variant="default">
                            Save Product
                        </Button>
                    </Link>
                </div>
                <div className='w-full xl:w-1/2 flex flex-col items-start gap-6'>
                    <div className='border rounded-lg flex flex-col items-start w-full'>
                        <h1 className='text-xl md:text-2xl capitalize mb-4 font-medium px-4 mt-4'>Product Sales Statistics</h1>
                        <ProductSales units={product.stock} />
                    </div>
                    <div className='border rounded-lg flex flex-col items-start w-full p-4'>
                        <h1 className='text-xl md:text-2xl capitalize mb-4 font-medium'>Restock Variants</h1>
                        <Separator />
                        <RestockVariants />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestockProduct