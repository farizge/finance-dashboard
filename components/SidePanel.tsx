import ExpenseAndIncome from "./sidepanel/ExpenseAndIncome";
import GoToPremium from "./sidepanel/GoToPremium";
import LastSpending from "./sidepanel/LastSpending";

const SidePanel = () => {
    return (
        <div className="side-panel p-4 flex flex-col gap-4 items-center">
            <ExpenseAndIncome />
            <LastSpending />
            <GoToPremium />
        </div>
    );
};

export default SidePanel;
