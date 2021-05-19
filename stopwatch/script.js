function Stopwatch() {
    let isCounting = false;
    let timerStart = 0;
    let timerStop = 0;
    let duration = 0;

    // Start Stopwatch
    this.start = function () {
        if (isCounting) throw new Error('Already started');
        isCounting = true;
        timerStart = new Date().getTime();
    };

    // Pause Stopwatch
    this.stop = function () {
        if (!isCounting) throw new Error('Already stopped');
        isCounting = false;
        timerStop = new Date().getTime();
        duration += (timerStop - timerStart) / 1000;
        timerStart = timerStop = 0;
        isCounting = false;
    }

    // Reset Stopwatch
    this.reset = function () {
        timerStart = timerStop = duration = 0;
    }

    // Getter
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

const sw = new Stopwatch();

// Use: in the console type sw.start(), sw.stop(). sw.duration, etc...