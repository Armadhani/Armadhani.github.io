document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;

    if(name && phone && reason) {
        alert(`Terima kasih telah mendaftar, ${name}! Anda akan diarahkan ke halaman terima kasih.`);
        window.location.href = "TA2trimakasih.html";  
    } else {
        alert('Silakan isi semua field pada formulir.');
    }
});
