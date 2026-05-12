document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const decorations = document.getElementById('decorations');
    
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            decorations.style.opacity = '0';
        } else {
            decorations.style.opacity = '1';
        }
    });
});
