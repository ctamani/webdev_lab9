function init() {
    const button = document.getElementById('entrybutton');
    const textbox = document.getElementById('entryinput');
    const textOutput = document.getElementById('textoutput');

    button.addEventListener('click', () => {
        const inputValue = textbox.value.trim();
        alert("Amani Chikh-Touhami: " + inputValue);
        textOutput.textContent = inputValue; 
    });
}

window.addEventListener('load', init);