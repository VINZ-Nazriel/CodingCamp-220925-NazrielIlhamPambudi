document.addEventListener("DOMContentLoaded", () => {
  
    const greetingSpan = document.getElementById("greeting");
    if (greetingSpan) {
        const username = prompt("Masukkan nama Anda untuk pesan sambutan:");
        if (username && username.trim() !== "") {
            // Ubah teks 'Hi Harfi' menjadi 'Hi [Nama]'
            greetingSpan.textContent = `Hi ${username}`;
        } else {
            // Jika user membatalkan atau tidak memasukkan nama, gunakan nama default
            greetingSpan.textContent = "Hi User";
        }
    }

    // 2. Fungsi untuk menampilkan waktu saat ini
    function updateCurrentTime() {
        const currentTimeSpan = document.getElementById("current-time");
        if (currentTimeSpan) {
            const now = new Date();
            // Format waktu sesuai contoh (misal: Jumat, 26 September 2025 09.28.15 GMT+07:00)
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                timeZoneName: 'short' 
            };
            currentTimeSpan.textContent = now.toLocaleString('id-ID', options);
        }
    }

    // Panggil saat halaman dimuat untuk inisialisasi waktu
    updateCurrentTime();

    // 3. Validasi dan menampilkan data formulir "Message Us"
    const messageForm = document.getElementById("messageForm");
    if (messageForm) {
        messageForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir default

            // Ambil semua nilai dari form
            const name = document.getElementById("name").value;
            const dob = document.getElementById("dob").value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById("message").value;

            // Validasi
            if (name === "" || dob === "" || !gender || message === "") {
                alert("ERROR! Silakan isi semua kolom formulir.");
                return;
            }

            // Jika validasi sukses:
            
            // a. Update waktu saat submission
            updateCurrentTime();

            // b. Tampilkan data yang di-submit di panel kanan
            document.getElementById("output-name").textContent = name;
            document.getElementById("output-dob").textContent = dob;
            document.getElementById("output-gender").textContent = gender.value;
            document.getElementById("output-message").textContent = message;

            alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
            
            // Opsional: reset form setelah submit
            messageForm.reset();
        });
    }
});