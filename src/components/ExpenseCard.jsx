export default function ExpenseCard({expense}){

    return(
        <div className= "Card">
            <h2>{expense.title}</h2>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <p>{expense.note}</p>
            <p>{expense.paid}</p>


        </div>
    )
}