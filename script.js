function changeTheme() {
    var body = document.body;
    var button = document.getElementById('themeToggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        button.textContent = '🌙 Switch to Dark Mode';
        
    } else {
        body.classList.add('dark-mode');
        button.textContent = '☀️ Switch to Light Mode';
    }
}

