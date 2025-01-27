import { createContext, useState } from "react";

interface InventoryContextType {
    inventory: any[];
    setInventory: (inventory: any[]) => void;
}

const initialState: InventoryContextType = {
    inventory: [],
    setInventory: () => { },
}

//create context
const InventoryContext = createContext<InventoryContextType>(initialState);

//create provider
const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [inventory, setInventory] = useState<any[]>([
        {
            id: "ABC24292",
            category: "Food & Beverages",
            name: "Wai wai noodles",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 200,
            stock: 100,
            image: "https://imgs.search.brave.com/qynkRPgLBr88v1q13i9vUhhU_LqBEadldHkwI7dlNsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVz/aGNlbnRyYWxncm9j/ZXJ5LmNvbS9jZG4v/c2hvcC9maWxlcy93/YWl3YWkud2VicD92/PTE3MjM4MjMwNjcm/d2lkdGg9MTQ0NQ",
            fee: "Free Shipping",
        },
        {
            id: "ALX0007P",
            category: "Electronics",
            name: "Coca cola",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 80,
            stock: 50,
            image: "https://imgs.search.brave.com/N3kz3YyqQ73ZxtIMC1yqojMp9GTZ8Qry_YVyUOkT7VU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjY5MzU3L3Bob3Rv/L2NvY2EtY29sYS1j/YW4uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW9ZQnRKRHpK/dThueGV3enlIRnMx/S3NoTUYzRTFWdGFN/aUlmak94QmFhN1U9",
            fee: "$ 80.00",
        },
        {
            id: "GRD55601",
            category: "Gardening",
            name: "Gardening Tools",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 120,
            stock: 75,
            image: "https://m.media-amazon.com/images/I/61itLoCAIlL._AC_SL1500_.jpg",
            fee: "Free Shipping",
        },
        {
            id: "BTK89003",
            category: "Books",
            name: "The Great Gatsby",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 15,
            stock: 200,
            image: "https://imgs.search.brave.com/UI9Ne5mZF-ugxXymtVaYp7nyOt6xHoumOknHGEmXcX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9ncmVh/dF9nYXRzYnlfa2V5/X2FydC5qcGc",
        },
        {
            id: "TYS22349",
            category: "Toys & Games",
            name: "Lego Star Wars",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 45,
            stock: 150,
            image: "https://imgs.search.brave.com/DNlRW76hyPtdiXCVprR-SIZ1XGwM66RjceSgpG02C5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFJek5EMDBXUUwu/anBn",
            fee: "Free Shipping",
        },
        {
            id: "HOM44122",
            category: "Home Decor",
            name: "Home Decor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 300,
            stock: 30,
            image: "https://imgs.search.brave.com/oUEyewHysKETrz3PU9svx8R0Pr0-4V15KAH_3tGSFm4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC81ZGU3MGhl/Nm9wMTAvMXk0VHp1/N1JnV3g1Z2dDNDRX/ejdaUi85NTBjNjZi/Y2U4MzE2NDlhMDVi/YTM2NzdlNGNjNDE0/Ny81ODE4NDY0MjEt/ZGVjb3JfZ2F0ZXdh/eV9sc18wMV9iLmpw/Zz93PTE3NTImcT04/MCZmbT1qcGcmZmw9/cHJvZ3Jlc3NpdmU",
            fee: "$ 20.00",
        },
        {
            id: "SPT90911",
            category: "Sports & Outdoors",
            name: "Basketball",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, deserunt minima omnis ex atque necessitatibus error ad dolorem voluptates laborum cumque asperiores sit dolorum neque quidem laudantium iusto beatae? Ad nemo deserunt error. Inventore provident mollitia blanditiis nesciunt ex quasi reprehenderit at maxime, deserunt eveniet consequatur asperiores vero quam, doloremque itaque! Illo aliquam commodi perspiciatis impedit enim quos sunt.",
            price: 60,
            stock: 40,
            image: "https://imgs.search.brave.com/uBXCadyFFwA-QPU36NL8YgsegODEK_clRnnAxXHPcew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTE0NTM1L3Bob3Rv/L2Jhc2tldGJhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVNoeEoyaWJDUzFu/dEkzUTZLVGt2MU83/VkQ2ejVUNXFnYmha/eVpDSG9NMUU9",
            fee: "Free Shipping",
        }

    ]);

    return (
        <InventoryContext.Provider value={{ inventory, setInventory }}>
            {children}
        </InventoryContext.Provider>
    )
}

export { InventoryContext, InventoryProvider }; 
