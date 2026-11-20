import {useEffect, useState} from "react"
import ExpenseCard from "../components/ExpenseCard"


function ExpenseList(){
    const [expenses, setExpenses] = useState([])

    useEffect(()=>{
        async function load(){
            const res = await fetch("http://localhost:8080/expenses")
            const data = await res.json();
            setExpenses(data)
            console.log("Im updating the expenses now!")
        }
        load()
    },[])

    async function handleDelete(id){
        console.log("We are deleting " + id)
        const res = await fetch(`http://localhost:8080/expenses/${id}`,{
            method: "DELETE"
        })
        console.log(res)
        if(res.ok){
            const updatedExpenses = expenses.filter(item=>{
                if(item.id !== id) return item
            })
            setExpenses(updatedExpenses)
        }
        
        }
       
    
   
    return(
        <div>
            <h1>Expense List</h1>
            {expenses.map((expense) =>
            <div key={expense.id}>
                <ExpenseCard  expense={expense} />
                <button onClick={() => handleDelete(expense.id)}>Pay Expense</button>
            </div>
            )}

            {/* <ul>
                <li>Groceries - $50</li>
                <li>Transportation - $20</li>
                <li>Netflix - $15</li>
                 <button> +Add expense</button>
                  <button> edit expense</button>
            </ul>
            */}
        </div>
    );
}
export default ExpenseList