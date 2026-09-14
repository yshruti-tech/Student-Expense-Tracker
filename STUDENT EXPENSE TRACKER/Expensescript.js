// STUDENT EXPENSE TRACKER
// ---------- Input Fields ----------
let expenseName = document.getElementById("expenseName");
let amount = document.getElementById("amount");
let date = document.getElementById("date");
let category = document.getElementById("category");
let description = document.getElementById("description");
let paymentMode = document.getElementById("paymentMode");
// ---------- Radio Buttons ----------
let expenseRadio = document.getElementById("expenseRadio");
let incomeRadio = document.getElementById("incomeRadio");
// ---------- Buttons ----------
let addBtn=document.getElementById("addBtn");
let backBtn=document.getElementById("backBtn");
backBtn.addEventListener("click", function() {
    window.location.href = "Dashboard.html";
});

// ---------- Transactions Array ----------
let transactions = [];
// ---------- Load Saved Data ----------
let savedData = localStorage.getItem("transactions");
if (savedData) {
    transactions = JSON.parse(savedData);
}
// ---------- Add Transaction ----------
addBtn.addEventListener("click", function () {
    let name = expenseName.value.trim();
    let money = parseFloat(amount.value);
    let selectedDate = date.value;
    let selectedCategory = category.value;
    let notes = description.value.trim();
    let mode = paymentMode.value;
    // ---------- Transaction Type ----------
    let type = "";
    if (expenseRadio.checked) {
        type = "Expense";
    }
    if (incomeRadio.checked) {
        type = "Income";
    }
    // ---------- Validation ----------
    if (
        name === "" ||
        isNaN(money) ||
        selectedDate === "" ||
        type === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }
    // ---------- Create Transaction Object ----------
    let transaction = {
        id: Date.now(),
        name: name,
        amount: money,
        date: selectedDate,
        category: selectedCategory,
        description: notes,
        paymentMode: mode,
        type: type
    };
    // ---------- Add Transaction ----------
    transactions.push(transaction);
    // ---------- Save to Local Storage ----------
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
    // ---------- Confirmation ----------
    alert("Transaction added successfully!");

    });
