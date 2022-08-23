// Selected-V card functionality 

const list = document.querySelector("ul")
const selectedList = []



function addToList(element){
    if(selectedList.length == 5){
        alert("Max player Selected!!!")    
    }
    else{
        const selected = element.parentNode.children[0].innerText
        
        const newLi = document.createElement("li")
        
        selectedList.push(selected)

        newLi.innerText = selected;
        console.log(newLi);
        console.log(selectedList);

        list.appendChild(newLi)
        element.classList.add('disabled');
    }

}

// Budget functionality 
const playerExpense = document.querySelector('#playerExpense')
const managerExpense = document.querySelector('#managerExpense')
const coachExpense = document.querySelector('#coachExpense')
const budgetExpense = document.querySelector('#budgetExpense')

const TotalPlayersExpense = document.querySelector('#TotalPlayersExpense')
const Calculate = document.querySelector('.expenseBtn')

Calculate.addEventListener('click', function(){
        console.log(typeof playerExpense.value);
        TotalPlayersExpense.innerText = playerExpense.value * selectedList.length;
    
})

const TotalExpenseBtn = document.querySelector('.TotalExpenseBtn');

TotalExpenseBtn.addEventListener('click', function(){
    
    const TotalExpense = parseFloat(TotalPlayersExpense.innerText)
    const managerTotal = parseFloat(managerExpense.value)
    const coachTotal = parseFloat(coachExpense.value)
    budgetExpense.innerText = TotalExpense + managerTotal + coachTotal; 
})


// validation 

function validation(element){ 
    if(isNaN(element.value) == true)
    {
        alert("Please Input Number Only!")
        element.value = ""
    }
}