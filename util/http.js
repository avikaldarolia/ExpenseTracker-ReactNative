import axios from "axios"

export function storeExpense(expenseData) {
    axios.post('https://expensetracker-reactnati-ee708-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json',
        expenseData
    )
}