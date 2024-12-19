document.addEventListener("DOMContentLoaded", () => 
    {
    const cartItemsStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cart-items');
    const totalgeneral = document.getElementById('total');
    let total = 0;

 
    cartItemsStorage.forEach(item => 
    {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.title;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price}`;
        row.appendChild(priceCell);

        const cantidadCell = document.createElement('td');
        cantidadCell.textContent = 1;
        row.appendChild(cantidadCell);

        const subtotal = item.price; 
        const subtotalCell= document.createElement('td');
        subtotalCell.textContent = `$${subtotal}`;
        row.appendChild(subtotalCell);


        cartTableBody.appendChild(row);

        total += subtotal;
    });

    totalgeneral.textContent = total.toFixed(2);

    document.getElementById('cart-clear').addEventListener('click', () => 
    {
        localStorage.removeItem('cart'); 
        window.location.href = 'index.html'; 
    });

    document.getElementById('complete-purchase').addEventListener('click', () => 
    {
        Swal.fire({
            title: 'Compra Procesada',
            text: 'Se ha procesado la compra',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        localStorage.removeItem('cart'); 
        
        setTimeout(() => {
        window.location.href = 'index.html'; 
        }, 4000);     
    });
});