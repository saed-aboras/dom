function addClass() {
    var className = document.getElementById("classInput").value;
    var paragraph = document.getElementById("sampleParagraph");
    paragraph.className = "";  // Reset class names
    if (className === 'highlight' || className === 'underline' || className === 'bold') {
        paragraph.classList.add(className);
    }
}

function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } else {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }
}

function changeButtonText(button) {
    button.innerHTML = "Clicked!";
    button.classList.add('disabled');
    button.style.pointerEvents = "none";
}


   