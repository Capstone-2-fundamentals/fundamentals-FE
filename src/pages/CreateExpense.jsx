export default function CreateExpense() {
  async function handleCreate(expensedata) {
    expensedata.preventDefault();
    // console.log(expensedata)
    const newExpense = {
        title: expensedata.target[0].value ,
        category: expensedata.target[1].value , 
        amount: expensedata.target[2].value ,
        note: expensedata.target[3].value 
    }
    console.log(expensedata.target)
    // console.log(expensedata.target[0].value);
    // console.log(expensedata.target[1].value);

    const res = await fetch("http://localhost:8080/expenses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(newExpense)

    })
    if(res.ok){
        expensedata.target.reset() 
    }
    
    console.log(res)
  }
  return (
    <>
      <h2>Create Expense</h2>
      <form onSubmit={(event) => handleCreate(event)}>
        <input type="text" name="title" placeholder="Create a new expense" />
        <br />
        <input
          type="text"
          name="category"
          placeholder="What category is this expense?"
        />
        <br/>
        <input
        type= "text"
        name= "amount"
        placeholder= "what is the amount of this expense?"
        />
        <br />
         <input
        type= "text"
        name= "note"
        placeholder= "you can add a note"
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
