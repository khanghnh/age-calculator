function refresh() {
  document.getElementsByClassName("error")[0].style.display = "none";
  document.getElementById("empty-day").style.display = "none";
  document.getElementById("invalid-day").style.display = "none";
  document.getElementById("empty-month").style.display = "none";
  document.getElementById("invalid-month").style.display = "none";
  document.getElementById("empty-year").style.display = "none";
  document.getElementById("invalid-year").style.display = "none";
  for (let a in [0, 1, 2]) {
    document.getElementsByClassName("label")[a].style.color = "hsl(0, 1%, 44%)";
  }
}

let speed = 5;
function incEltNbr(id) {
  //hàm chọn số để tăng
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}
function incNbrRec(i, endNbr, elt) {
  //hàm tăng số
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      incNbrRec(i + 1, endNbr, elt); //delay
    }, speed);
  }
}

function calc() {
  let d1 = document.forms["form"]["day"].value;
  let m1 = document.forms["form"]["month"].value;
  let y1 = document.forms["form"]["year"].value;
  let status = 0;
  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 == "") {
    document.getElementsByClassName("day-error")[0].style.display = "block";
    document.getElementById("empty-day").style.display = "block";
    document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
  } else if (d1 <= 0 || d1 > month[m1 - 1] || d1 % 1 != 0) {
    document.getElementsByClassName("day-error")[0].style.display = "block";
    document.getElementById("invalid-day").style.display = "block";
    document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
  } else {
    status++;
  }
  if (m1 == "") {
    document.getElementsByClassName("month-error")[0].style.display = "block";
    document.getElementById("empty-month").style.display = "block";
    document.getElementById("label-month").style.color = "hsl(0, 100%, 67%)";
  } else if (m1 <= 0 || m1 > 12 || m1 % 1 != 0) {
    document.getElementsByClassName("month-error")[0].style.display = "block";
    document.getElementById("invalid-month").style.display = "block";
    document.getElementById("label-month").style.color = "hsl(0, 100%, 67%)";
  } else {
    status++;
  }
  if (y1 == "") {
    document.getElementsByClassName("year-error")[0].style.display = "block";
    document.getElementById("empty-year").style.display = "block";
    document.getElementById("label-year").style.color = "hsl(0, 100%, 67%)";
  } else if (
    y1 > y2 ||
    y1 <= 0 ||
    (y1 == y2 && m1 > m2) ||
    (y1 == y2 && m1 == m2 && d1 > d2) ||
    y1 % 1 != 0
  ) {
    document.getElementsByClassName("year-error")[0].style.display = "block";
    document.getElementById("invalid-year").style.display = "block";
    document.getElementById("label-year").style.color = "hsl(0, 100%, 67%)";
  } else {
    status++;
  }

  if (status == 3) {
    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;
    document.getElementById("num-1").innerHTML = y;
    incEltNbr("num-1");
    document.getElementById("num-2").innerHTML = m;
    incEltNbr("num-2");
    document.getElementById("num-3").innerHTML = d;
    incEltNbr("num-3");
  }
}
