// Halfmoon ui handlers
document.querySelector('.sidebar-overlay').addEventListener('click', () => { halfmoon.toggleSidebar() })
document.querySelector('.darkmode-btn').addEventListener('click', () => { halfmoon.toggleDarkMode() })
document.querySelectorAll('.toggle-sidebar-btn').forEach((el) => {
    el.addEventListener('click', () => { halfmoon.toggleSidebar() })
})
