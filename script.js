document.addEventListener('DOMContentLoaded', function() {
    const followButton = document.getElementById('followButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalButton = document.getElementById('closeModal');

    if (followButton && modalOverlay && closeModalButton) {
        followButton.addEventListener('click', function() {
            modalOverlay.style.display = 'flex'; // 팔로우 모달 보이기
        });

        closeModalButton.addEventListener('click', function() {
            modalOverlay.style.display = 'none'; // 팔로우 모달 숨기기
        });

        // 팔로우 모달 외부 클릭 시 닫기 (선택 사항)
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }
    // 사진 모달 관련 JavaScript는 index.html에 직접 추가했습니다.
});