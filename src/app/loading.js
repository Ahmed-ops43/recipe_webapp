import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <Skeleton className="font-bold text-white bg-black text-[25px]">Loading ...</Skeleton>
        </div>
    )
}