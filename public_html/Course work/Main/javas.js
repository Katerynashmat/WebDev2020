var boxElements = document.getElementsByClassName('Stravy'),
    boxElementsLength = boxElements.length,
    i;

for (i = 0; i < boxElementsLength; i++) {
    boxElements[i].classList.add('move');
}