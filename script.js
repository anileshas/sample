const deposite = () => {
    let amount = document.getElementById("amid").value;
    let balance = document.getElementById("balid");
    balance.value = amount;
}
const withdraw = () => {
    let amount = document.getElementById("amid").value;
    let balance = document.getElementById("balid");
    let mainbalance = parseInt(balance.value);
    let main = mainbalance - amount;
    balance.value = main;
}
    
    
