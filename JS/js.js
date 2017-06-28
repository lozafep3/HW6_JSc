function timer() {

    var timeBlock = document.getElementById('time');
    var formatLong = true;

    function showTime() {

        (function () {

            var cDate = new Date(),
                cHours = cDate.getHours(),
                cMinutes = cDate.getMinutes(),
                cSeconds = cDate.getSeconds(),
                cTime;

            if (cDate.getHours() < 10) { cHours = '0' + cDate.getHours(); }
            if (cDate.getMinutes() < 10) { cMinutes = '0' + cDate.getMinutes(); }
            if (cDate.getSeconds() < 10) { cSeconds = '0' + cDate.getSeconds(); }

            switch (formatLong) {
                case true: cTime = cHours + ':' + cMinutes + ':' + cSeconds; break;
                case false: cTime = cHours + ':' + cMinutes; break;
            }

            timeBlock.innerHTML = cTime;

        })();

    }

    setInterval(function () { showTime() }, 1000);

    timeBlock.onclick = function () {
        formatLong = !formatLong;
    }

}

window.onload = timer();