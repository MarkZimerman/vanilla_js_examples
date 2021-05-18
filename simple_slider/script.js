window.onload = function () {

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        automatic: true,
        changeInterval: 5000
    });

    console.log(slider);

}

function Slider(config) {
    var images = document.querySelectorAll(config.images);
    var btnPrev = document.querySelector(config.btnPrev);
    var btnNext = document.querySelector(config.btnNext);
    var changeInterval = config.changeInterval || 0;
    var i = 0;

    this.next = function () {
        showNext();
    }

    this.previous = function () {
        showPrevious();
    }

    if (config.automatic) {
        if (!isNaN(changeInterval) && changeInterval > 0) {
            setInterval(function () { showNext() }, changeInterval);
        } else {
            console.error('Incorrect slider interval');
        }
    }

    var showPrevious = function () {
        images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = images.length - 1;
        }

        images[i].classList.add('showed');
    }

    var showNext = function () {
        images[i].classList.remove('showed');
        i++;

        if (i >= images.length) {
            i = 0;
        }

        images[i].classList.add('showed');
    }

    btnNext.onclick = function () {
        showNext();
    };

    btnPrev.onclick = function () {
        showPrevious();
    };

}