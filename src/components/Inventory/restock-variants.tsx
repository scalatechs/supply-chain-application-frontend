import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input.tsx'

const RestockVariants = () => {
    return (
        <div className='w-full flex flex-col items-start gap-4 mt-6'>
            <div className="w-full flex items-center gap-4">
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="Almond" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="avocado">Avocado</SelectItem>
                            <SelectItem value="mango">Mango</SelectItem>
                            <SelectItem value="strawberry">Strawberry</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="15 kg" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="lbs">lbs</SelectItem>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="g">g</SelectItem>
                            <SelectItem value="oz">oz</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder='30 Units' className='w-1/3 border-none' />
            </div>
            <div className="w-full flex items-center gap-4">
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="Aloevera" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="avocado">Avocado</SelectItem>
                            <SelectItem value="mango">Mango</SelectItem>
                            <SelectItem value="strawberry">Strawberry</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="15 oz" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="lbs">lbs</SelectItem>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="g">g</SelectItem>
                            <SelectItem value="oz">oz</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder='30 Units' className='w-1/3 border-none' />
            </div>
            <div className="w-full flex items-center gap-4">
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="Variant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="avocado">Avocado</SelectItem>
                            <SelectItem value="mango">Mango</SelectItem>
                            <SelectItem value="strawberry">Strawberry</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="Variant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="lbs">lbs</SelectItem>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="g">g</SelectItem>
                            <SelectItem value="oz">oz</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder='Units' className='w-1/3 border-none' />
            </div>
        </div>
    )
}

export default RestockVariants