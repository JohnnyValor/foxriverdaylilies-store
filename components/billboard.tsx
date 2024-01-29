import { Billboard as BillboardType } from "../types";

interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div 
            className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
                        {data.label}
                    </div>
                </div>
            </div>
            <div className="font-bold py-4 text-lg">
                <p>Seedlings & Cultivars only ship May-Sep. Seeds ship all year.</p>
                <p>S&H of 15.00 for Seedlings & Cultivars and 5.50 for seeds is included in displayed price.</p>
            </div>
        </div>
    )
}

export default Billboard;
