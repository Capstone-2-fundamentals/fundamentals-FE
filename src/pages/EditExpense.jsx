 export default function EditExpense(){
 
 async function handleEdit(expensedata, id){
    expensedata.preventDefault()
    const editedExpense={
        title: expensedata.target[0].value,
        category: expensedata.target[1].value,
        amount: expensedata.target[2].value,
        note: expensedata.target[3].value,
    }

            console.log("We are editing" + id)
            const res = await fetch(`http://localhost:8080/expense/${id}`,{
                method: "PATCH",
                headers: {"content-Type": "application/json"},
                body:JSON.stringify(editedExpense)
            })
            console.log(res)
            if(res.ok){
                const updatedExpenseData = await res.json();
                const updatedExpense = expenses.map(item =>{
                    if(item.id === updatedExpenseData.id){
                        return updatedExpenseData
                    } 
                    else{
                        return item
                    }

                })
                setExpenses(updatedExpense)
            }

        }
        return(
            <>
            <h2>Edit Expense</h2>
            <form onSubmit={(event) => handleEdit(event)}>
                <input 
                type="text"
                name="title"
                placeholder=`${expensedata.target}`

            </form>
            </>
        )
    }