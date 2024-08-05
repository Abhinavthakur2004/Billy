// Function to show different sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Event listener for the form submission
document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemPrice = document.getElementById('itemPrice').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${itemName}, Quantity: ${itemQuantity}, Price: $${itemPrice}`;

    // Append the new list item to the items container
    document.getElementById('itemsContainer').appendChild(listItem);

    // Clear form fields
    document.getElementById('billForm').reset();
});

// Sample data for charts (unchanged)
const billData = {
    labels: ['Electricity', 'Water', 'Internet', 'Rent', 'Miscellaneous'],
    datasets: [{
        label: 'Amount Due',
        data: [150, 100, 75, 500, 120],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
    }]
};

const paymentData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Payments',
        data: [200, 300, 250, 400, 350, 500],
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 1
    }]
};

// Create charts
const billCtx = document.getElementById('billChart').getContext('2d');
const billChart = new Chart(billCtx, {
    type: 'bar',
    data: billData,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Bills Due by Category'
        }
    }
});

const paymentCtx = document.getElementById('paymentChart').getContext('2d');
const paymentChart = new Chart(paymentCtx, {
    type: 'line',
    data: paymentData,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Payments Over Time'
        }
    }
});
