import DailyOverview from "../side/DailyOverview";

const Overview = ({ data }) => {
    return (
        <div className="flex flex-col w-[90%] mb-8">
            <div className="text-2xl font-bold mb-6">Overview - Today</div>

            <div className="grid grid-cols-1 gap-4 w-full
            sm:grid-cols-2 lg:grid-cols-4
            ">
                {
                    data.map((item) => {
                        return (
                            <DailyOverview 
                                key={item.id}
                                icon={item.icon}
                                count={item.count}
                                isIncreasing={item.isIncreasing}
                                increaseAmount={item.increaseAmount}
                                label={item.label}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Overview;