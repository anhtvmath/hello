    function startClock() {
    var seconds = 60;
      setInterval(function() {
        var minutes = Math.round((seconds - 30)/60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;  
        }
        document.getElementById("countdown").innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            document.getElementById("countdown").innerHTML = "đã hết!";
            document.getElementById("buttonxemketqua").click();
            for (var i=1; i<=document.getElementById("show").children.length; i++) {
            document.getElementById("show"+String(i)).style.display="block";
            }
        } else {
            seconds--;
        }
        }, 1000);
        }