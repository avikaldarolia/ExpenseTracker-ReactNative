import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }
    return (
        <View style={styles.conatiner}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 24,
        paddingBottom: 0,
        paddingTop: 24,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})