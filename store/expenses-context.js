import { createContext, useReducer } from "react";


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


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updateItem = { ...updateExpense, ...action.payload.data }
        case 'DELETE':
        default:
            return state
    }
}

function ExpensesContextProvider() {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }
    function deleteExpense(expenseData) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }
    return (
        <ExpensesContext.Provider>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContextProvider