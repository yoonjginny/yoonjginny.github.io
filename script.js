document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
    const greetings = ["만나서 반갑습니다!", "오늘 하루도 즐거우세요!", "좋은 시간 보내세요!"];
    let greetingIndex = 0;

    greetButton.addEventListener('click', function() {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingMessage.textContent = greetings[greetingIndex];
    });
});