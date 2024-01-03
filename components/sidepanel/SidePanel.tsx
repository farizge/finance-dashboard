import ExpenseAndIncome from "./ExpenseAndIncome";
import GoToPremium from "./GoToPremium";
import LastSpending from "./LastSpending";

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
