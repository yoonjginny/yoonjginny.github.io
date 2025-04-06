document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
    const greetings = ["만나서 반갑습니다!", "오늘 하루도 긍정적으로!", "항상 응원합니다!", "좋은 에너지 가득한 하루 되세요!"];
    let greetingIndex = 0;

    greetButton.addEventListener('click', function() {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingMessage.textContent = greetings[greetingIndex];
    });
});