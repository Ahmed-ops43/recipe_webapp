import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export default function Recipedetailpage({data}){

    return (


        
        <div className="min-h-screen flex justify-center items-center ">
                <div className=" flex md:flex-row flex-col  bg-white  ">
                        <div className="w-[450px] ">
                        <Card className="border-none outline-none">
                            <CardContent>
                                <div className="">
                                    <img
                                    src={data.image}
                                    className="pt-2  w-full hover:scale-[1.1] transition-all h-full object-cover object-top "
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                        <div className="w-[300px]  ">
                            <Card className="bg-white border-none outline-none">
                                <CardHeader >
                                    <CardTitle>{data.name}</CardTitle>
                                    <div className="pt-6 flex justify-between font-bold">
                                    <CardDescription>{data.cuisine}</CardDescription>
                                    <CardDescription>{data.mealType}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-3 pl-[12px]">
                                    <h2 className=" mb-2 font-bold">Ingredients</h2>
                                    <div>
                                    {
                                        data.ingredients.map((each,i) => (
                                                <li key={i}>
                                                    {each}
                                                </li>
                                        ))
                                    }
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                </div>
        </div>
    );
    
}