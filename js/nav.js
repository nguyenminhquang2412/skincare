var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    // Lấy vị trí cuộn của trang web
    var scrollPosition = window.scrollY;

    // Kiểm tra vị trí cuộn và thêm/xóa class 'scrolled' để thay đổi màu nền của thanh navigation
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });