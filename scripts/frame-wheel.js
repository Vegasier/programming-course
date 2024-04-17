document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.frame');
    let currentFrameIndex = 0;

    function handleMouseWheel(event) {
        const delta = Math.sign(event.deltaY);

        if (delta > 0) {
            currentFrameIndex = Math.min(currentFrameIndex + 1, frames.length - 1);
        } else {
            currentFrameIndex = Math.max(currentFrameIndex - 1, 0);
        }

        frames.forEach((frame, index) => {
            if (index === currentFrameIndex) {
                frame.classList.add('active');
            } else {
                frame.classList.remove('active');
            }
        });
    }

    window.addEventListener('wheel', handleMouseWheel);
});
