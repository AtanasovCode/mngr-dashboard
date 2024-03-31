const Toggle = ({ toggleTheme, theme }) => {

    const position = theme === "light" ? "translate-x-6" : "translate-x-1";

    return (
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-center">
            <div className="text-text dark:text-text-dark mr-2">Dark Mode</div>
            <div
                className="
                w-12 h-6 bg-textAccent dark:bg-textAccent-dark rounded-2xl cursor-pointer 
                relative flex items-center
            "
                onClick={() => toggleTheme()}
            >
                <div 
                className={`h-[90%] w-[40%] rounded-full bg-background dark:bg-background-dark 
                ${position} transition-all duration-500 `}
                >
                </div>
            </div>
        </div>
    );
}

export default Toggle;
