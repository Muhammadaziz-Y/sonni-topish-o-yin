// Tasodifiy son yaratish (0 dan 100 gacha)
const randomNumber = Math.floor(Math.random() * 101);

// Urinishlar soni
let attemptsLeft = 6;

function checkGuess() {
    // Foydalanuvchi kiritgan sonni olish
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Foydalanuvchiga javob qaytarish uchun elementlar
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    // Sonni tekshirish
    if (userGuess === randomNumber) {
        feedback.textContent = "Tabriklayman! Siz to'g'ri topdingiz!";
        feedback.style.color = "green";
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            if (userGuess > randomNumber) {
                feedback.textContent = "Kiritilgan son katta! Qayta urinib ko'ring.";
                feedback.style.color = "orange";
            } else {
                feedback.textContent = "Kiritilgan son kichik! Qayta urinib ko'ring.";
                feedback.style.color = "orange";
            }
            attemptsDisplay.textContent = `Qolgan urinishlar: ${attemptsLeft}`;
        } else {
            feedback.textContent = `Afususki, urinishlar tugadi. O'ylangan son ${randomNumber} edi.`;
            feedback.style.color = "red";
            attemptsDisplay.textContent = "Urininglar tugadi!";
        }
    }
}
