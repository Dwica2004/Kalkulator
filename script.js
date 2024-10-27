// Mengambil semua elemen dengan kelas "button" dan menyimpannya dalam variabel 'buttons'
const buttons = document.querySelectorAll(".button");

// Mengambil elemen dengan id "value" untuk menampilkan hasil
const display = document.getElementById("value");

// Mengambil elemen dengan id "clear" untuk tombol clear
const clearButton = document.getElementById("clear");

// Fungsi untuk evaluasi ekspresi matematika
function evaluateExpression(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return "Maaf Error";
    }
}

// Menambahkan event listener untuk setiap tombol
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Jika tombol yang ditekan adalah "equal"
        if (button.classList.contains("equal")) {
            display.innerHTML = evaluateExpression(display.innerHTML);
        } else if (button.classList.contains("clear")) {
            // Jika tombol yang ditekan adalah "clear", set display ke "0"
            display.innerHTML = "0";
        } else {
            // Jika display menunjukkan "0" atau "Error", ganti dengan nilai tombol
            if (display.innerHTML === "0" || display.innerHTML === "Maaf Error") {
                display.innerHTML = button.innerHTML;
            } else {
                // Tambahkan nilai tombol ke display
                display.innerHTML += button.innerHTML;
            }
        }
    });
});

// Menambahkan event listener untuk tombol clear
clearButton.addEventListener("click", () => {
    display.innerHTML = "0";
});
