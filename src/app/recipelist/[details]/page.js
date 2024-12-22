import Recipedetailpage from "@/components/recipedetailpage";

const paramdatafetch = async(id) => {
    try {
        const paramdata = await fetch(`https://dummyjson.com/recipes/${id}`);
        const jsonparam = paramdata.json();
        return jsonparam;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function RecipeDetail( { params }){
    const {details} = await params;
    const data = await paramdatafetch(details)
    return <Recipedetailpage data={data}/>
}