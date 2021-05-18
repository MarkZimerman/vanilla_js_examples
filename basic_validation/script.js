window.onload = function () {
    var inputs = document.querySelectorAll('.form .inputBox input[type=text]');
    var form = document.querySelector('.form');

    form.onsubmit = function (e) {
        if (!validate()) {
            e.preventDefault();
        }
    };

    function validate() {
        var isValid = true;
        console.log('Validation...');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('invalid');
            
            if (inputs[i].required && inputs[i].value.length < 2) {
                inputs[i].classList.add('invalid');
                isValid = false;
            }
        }
        return isValid;
    }
}
