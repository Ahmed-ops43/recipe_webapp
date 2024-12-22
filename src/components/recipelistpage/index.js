import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Recipelistpage({ returndata }) {
  return (
    <div>
      <div className="p-4 sm:max-w-full md:max-w-4xl lg:max-w-6xl mx-auto">
        <h1 className="text-[25px] text-center mb-16">Recipes</h1>
        <div className=" grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-8">
          {returndata.map((recipe, i) => (
            <Link href={`/recipelist/${recipe.id}`} key={i}>
              <Card className=" border border-white">
              <CardHeader>
        <CardTitle>Product No {`${recipe.id}`}</CardTitle>
        <CardDescription>Click to see the details.</CardDescription>
      </CardHeader>
                <CardContent className="rounded-md  ">
                  <div className=" w-full aspect-w-16 aspect-h-8 lg:h-80 ">
                    <img
                      src={recipe.image}
                      className=" w-full hover:scale-[1.1] transition-all h-full object-cover object-top "
                    />
                  </div>
                  <h1 className=" mt-2 font-semibold  text-[16px]">{recipe.name}</h1>
                  <div className=" flex justify-between items-center pt-2">
                        <p>Recipe Rating: {recipe.rating}</p>
                        <p>{recipe.cuisine}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
