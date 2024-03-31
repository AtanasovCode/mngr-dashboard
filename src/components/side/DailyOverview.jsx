import iconUp from '../../assets/icon-up.svg'
import iconDown from '../../assets/icon-down.svg'

const DailyOverview = ({
    icon,
    count,
    isIncreasing,
    increaseAmount,
    label,
}) => {
    return (
        <div className="flex flex-col bg-card dark:bg-card-dark w-full p-6 rounded-md lg:p-8">
            <div className="flex items-center justify-between mb-6">
                <div className="text-textAccent dark:text-textAccent-dark">{label}</div>
                <img src={icon} alt="social media icon" />
            </div>

            <div className="flex items-end justify-between">
                <div className="font-bold text-3xl"> {count} </div>
                {
                    isIncreasing ?
                        <div className="flex items-center justify-center">
                            <img src={iconUp} alt="icon up" className="mr-1" />
                            <div className="text-lime text-sm"> {increaseAmount} </div>
                        </div>
                        :
                        <div className="flex items-center justify-center">
                            <img src={iconDown} alt="icon up" className="mr-1" />
                            <div className="text-brightRed text-sm"> {increaseAmount} </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default DailyOverview;