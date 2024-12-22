import Recipelistpage from "@/components/recipelistpage";

const apilist = async() => {
    try {
        const listdata = await fetch('https://dummyjson.com/recipes');
        const jsondata = await listdata.json();
        return jsondata.recipes;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function RecipeList(){

    const returndata = await apilist();

    return <Recipelistpage returndata={returndata} />
}