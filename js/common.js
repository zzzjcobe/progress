$(document).ready(function () {
    
    



    setInterval(function() {
        let date = new Date();
        let start = new Date(date.getFullYear(), 0, 0);
        let diff = date - start;
        let oneDay = 1000 * 60 * 60 * 24;
        let dayOfTheYear = Math.floor(diff / oneDay);
        let decadeStart = new Date(2011, 0, 0);
        let decadeDiff = date - decadeStart;
        let dayOfTheDecade = Math.floor(decadeDiff / oneDay);
        $('.year .title span').html(date.getFullYear());
        $('.month .title span').html(date.getMonth() + 1);
        $('.day .title span').html(date.getDate());
        $('.hour .title span').html(date.getHours());
        $('.minute .title span').html(date.getMinutes());
        $('.second .title span').html(date.getSeconds());
        $('.milisecond .title span').html(date.getMilliseconds());


        let secondWidth = Math.floor((date.getMilliseconds() * 100) / 1000);
        let secondProgress = document.getElementById('secondProgress');
        secondProgress.style.width = secondWidth + '%';

        let minuteWidth = Math.floor((date.getSeconds() * 100) / 60);
        let minuteProgress = document.getElementById('minuteProgress');
        minuteProgress.style.width = minuteWidth + '%';

        let hourWidth = Math.floor((date.getMinutes() * 100) / 60);
        let hourProgress = document.getElementById('hourProgress');
        hourProgress.style.width = hourWidth + '%';

        let dayWidth = Math.floor((date.getHours() * 100) / 24);
        let dayProgress = document.getElementById('dayProgress');
        dayProgress.style.width = dayWidth + '%';

        let monthWidth = Math.floor((date.getDate() * 100) / 31);
        let monthProgress = document.getElementById('monthProgress');
        monthProgress.style.width = monthWidth + '%';

        let yearWidth = Math.floor((dayOfTheYear * 100) / 365);
        let yearProgress = document.getElementById('yearProgress');
        yearProgress.style.width = yearWidth + '%';

        let decadeWidth = Math.floor((dayOfTheDecade * 100) / 3652);
        let decadeProgress = document.getElementById('decadeProgress');
        decadeProgress.style.width = decadeWidth + '%';

        let centuryWidth = Math.floor(date.getFullYear() % 100);
        let centuryProgress = document.getElementById('centuryProgress');
        centuryProgress.style.width = centuryWidth + '%';

        let millenniumWidth = Math.floor((date.getFullYear() % 100) / 10);
        let millenniumProgress = document.getElementById('millenniumProgress');
        millenniumProgress.style.width = millenniumWidth + '%';




        // console.log(2019 % 1000);

    }, 50);

});