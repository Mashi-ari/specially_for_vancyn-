function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === '02242006') {
        document.getElementById('passwordPage').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
function saveLetter() {
    const from = document.getElementById('fromName').value;
    const to = document.getElementById('toName').value;
    const content = document.getElementById('letterContent').value;
    const date = new Date().toLocaleString();
    const letter = `From: ${from}\nTo: ${to}\nDate: ${date}\n\n${content}`;
    localStorage.setItem(`letter_${date}`, letter);
    alert('Letter saved!');
    loadLetters();
}
function loadLetters() {
    let lettersContainer = document.getElementById('lettersList');
    lettersContainer.innerHTML = '';
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('letter_')) {
            let letter = localStorage.getItem(key);
            let letterDiv = document.createElement('div');
            letterDiv.textContent = letter;
            letterDiv.classList.add('letter');
            lettersContainer.appendChild(letterDiv);
        }
    });
}
