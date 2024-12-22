import Link from "next/link";


export default function Home() {
  return (
    <div className="p-4 flex justify-center">
        <Link href={'/recipelist'}><button className=" bg-blue-700 p-4 text-[14px] rounded-3xl">Go to Products Recipes</button></Link>
    </div>
  );
}
