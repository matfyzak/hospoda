window.onload = function() {
    var banner = document.getElementById('banner');
    banner.style.display = 'block';
  
    var closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
};