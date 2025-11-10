import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <Spinner />
                <p className="text-muted-foreground font-medium">
                    Se încarcă...
                </p>
            </div>
        </div>
    );
}
