const moneyElements = document.querySelectorAll('.money');

moneyElements.forEach(moneyElement => {
    moneyElement.addEventListener('click', function() {
        moneyElements.forEach(element => {
            element.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

