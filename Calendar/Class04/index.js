const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
});

document.querySelector('.dates').innerHTML = dates.join('');

var img01 = document.getElementById("img01");
var img02 = document.getElementById("img02");
var img03 = document.getElementById("img03");
var img04 = document.getElementById("img04");
var img05 = document.getElementById("img05");

var before = document.getElementById("beforeBtn");
var after = document.getElementById("afterBtn");


var count = 0;

img01.style.display = "none";
img02.style.display = "none";
img03.style.display = "none";
img04.style.display = "none";
img05.style.display = "none";

function clickAfterEvent(){
  count++;
      if(count == 1)
      {
        img01.style.display = "block";
        img02.style.display = "none";
        img03.style.display = "none";
        img04.style.display = "none";
        img05.style.display = "none";
      }
      else if (count == 2) {
        img01.style.display = "none";
        img02.style.display = "block";
        img03.style.display = "none";
        img04.style.display = "none";
        img05.style.display = "none";
      }
      else if(count == 3)
      {
        img01.style.display = "none";
        img02.style.display = "none";
        img03.style.display = "block";
        img04.style.display = "none";
        img05.style.display = "none";
      }
      else if(count == 4)
      {
        img01.style.display = "none";
        img02.style.display = "none";
        img03.style.display = "none";
        img04.style.display = "block";
        img05.style.display = "none";
      }
      else if(count == 5)
      {
        img01.style.display = "none";
        img02.style.display = "none";
        img03.style.display = "none";
        img04.style.display = "none";
        img05.style.display = "block";
      }
      else if(count > 5)
      {
        count = 5;
      }
    }

function clickBeforeEvent(){
  count--;
  if(count == 1)
  {
    img01.style.display = "block";
    img02.style.display = "none";
    img03.style.display = "none";
    img04.style.display = "none";
    img05.style.display = "none";
  }
  else if (count == 2) {
    img01.style.display = "none";
    img02.style.display = "block";
    img03.style.display = "none";
    img04.style.display = "none";
    img05.style.display = "none";
  }
  else if(count == 3)
  {
    img01.style.display = "none";
    img02.style.display = "none";
    img03.style.display = "block";
    img04.style.display = "none";
    img05.style.display = "none";
  }
  else if(count == 4)
  {
    img01.style.display = "none";
    img02.style.display = "none";
    img03.style.display = "none";
    img04.style.display = "block";
    img05.style.display = "none";
  }
  else if(count == 5)
  {
    img01.style.display = "none";
    img02.style.display = "none";
    img03.style.display = "none";
    img04.style.display = "none";
    img05.style.display = "block";
  }
  else if(count < 1)
  {
    count = 1;
  }
}
