import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-09-15')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 49.99,
        date: new Date('2021-01-30')
    },
    {
        id: 'e3',
        description: 'A pair of shirts',
        amount: 38.99,
        date: new Date('2022-08-18')
    },
    {
        id: 'e4',
        description: 'Two goats',
        amount: 199.99,
        date: new Date('2021-12-30')
    },
    {
        id: 'e5',
        description: 'A Book',
        amount: 9.99,
        date: new Date('2021-10-18')
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {

    return (
        <View style={styles.conatiner}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 24
    }
})