//  hamburger menu bar function

const a = document.querySelectorAll(".menu-btns");
a.forEach((element) => {
  element.addEventListener("click", myFunction);
});

function myFunction() {
  let x = document.getElementById("myLinks");
  let y = document.querySelector(".topnav");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "4rem";
    y.style.width = "16vw";
  } else {
    x.style.display = "block";
    y.style.height = "auto";
    y.style.width = "auto";
  }
}



// making the theory apper onclick to theory topic buttons
topic1 = () => {
  document.getElementById("theory").style.display = "none";
  document.getElementById("topic1").style.display = "block";
  document.getElementById("topic2").style.display = "none";
  document.getElementById("topic3").style.display = "none";
};
topic2 = () => {
  document.getElementById("theory").style.display = "none";
  document.getElementById("topic1").style.display = "none";
  document.getElementById("topic2").style.display = "block";
  document.getElementById("topic3").style.display = "none";
};
topic3 = () => {
  document.getElementById("theory").style.display = "none";
  document.getElementById("topic1").style.display = "none";
  document.getElementById("topic2").style.display = "none";
  document.getElementById("topic3").style.display = "block";
};











// reset table rows / 7 segment display
reset = () => {
  let x = document.querySelectorAll(".segment");
  let y = document.querySelectorAll(".num-btn");
  let z = document.querySelectorAll(".table-row");
  x.forEach((element) => {
    element.style.backgroundColor = "#5551405e";
    element.style.color = "yellow";
  });
  y.forEach((element) => {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
  });
  z.forEach((element) => {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
    element.style.fontSize = "inherit";
  });
};





// onclick corresponding ( bit 0 to bit 9 )
digit0 = () => {
  reset();
  var x = document.getElementById("table0");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver0();
  }
};
digit1 = () => {
  reset();
  var x = document.getElementById("table1");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver1();
  }
};
digit2 = () => {
  reset();
  var x = document.getElementById("table2");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver2();
  }
};
digit3 = () => {
  reset();
  var x = document.getElementById("table3");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver3();
  }
};
digit4 = () => {
  reset();
  var x = document.getElementById("table4");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver4();
  }
};
digit5 = () => {
  reset();
  var x = document.getElementById("table5");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver5();
  }
};
digit6 = () => {
  reset();
  var x = document.getElementById("table6");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver6();
  }
};
digit7 = () => {
  reset();
  var x = document.getElementById("table7");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver7();
  }
};
digit8 = () => {
  reset();
  var x = document.getElementById("table8");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver8();
  }
};
digit9 = () => {
  reset();
  var x = document.getElementById("table9");
  if (x.style.color === "red") {
    reset();
  } else {
    mouseOver9();
  }
};

// hover over table rows ( bit 0 to bit 9 )
mouseOver0 = () => {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("eBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";
  document.getElementById("N0").style.backgroundColor = "black";
  document.getElementById("N0").style.color = "yellow";
  document.getElementById("table0").style.color = "red";
  document.getElementById("table0").style.backgroundColor = "black";
  document.getElementById("table0").style.fontSize = "larger";
};
mouseOver1 = () => {
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("N1").style.backgroundColor = "black";
  document.getElementById("N1").style.color = "yellow";
  document.getElementById("table1").style.color = "red";
  document.getElementById("table1").style.backgroundColor = "black";
  document.getElementById("table1").style.fontSize = "larger";
};
function mouseOver2() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("eBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";
  document.getElementById("N2").style.backgroundColor = "black";
  document.getElementById("N2").style.color = "yellow";
  document.getElementById("table2").style.color = "red";
  document.getElementById("table2").style.backgroundColor = "black";
  document.getElementById("table2").style.fontSize = "larger";
}
function mouseOver3() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";

  document.getElementById("N3").style.backgroundColor = "black";
  document.getElementById("N3").style.color = "yellow";

  document.getElementById("table3").style.color = "red";
  document.getElementById("table3").style.backgroundColor = "black";
  document.getElementById("table3").style.fontSize = "larger";
}
function mouseOver4() {
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";

  document.getElementById("N4").style.backgroundColor = "black";
  document.getElementById("N4").style.color = "yellow";

  document.getElementById("table4").style.color = "red";
  document.getElementById("table4").style.backgroundColor = "black";
  document.getElementById("table4").style.fontSize = "larger";
}
function mouseOver5() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";

  document.getElementById("N5").style.backgroundColor = "black";
  document.getElementById("N5").style.color = "yellow";

  document.getElementById("table5").style.color = "red";
  document.getElementById("table5").style.backgroundColor = "black";
  document.getElementById("table5").style.fontSize = "larger";
}
function mouseOver6() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("eBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";

  document.getElementById("N6").style.backgroundColor = "black";
  document.getElementById("N6").style.color = "yellow";

  document.getElementById("table6").style.color = "red";
  document.getElementById("table6").style.backgroundColor = "black";
  document.getElementById("table6").style.fontSize = "larger";
}
function mouseOver7() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";

  document.getElementById("N7").style.backgroundColor = "black";
  document.getElementById("N7").style.color = "yellow";

  document.getElementById("table7").style.color = "red";
  document.getElementById("table7").style.backgroundColor = "black";
  document.getElementById("table7").style.fontSize = "larger";
}
function mouseOver8() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("eBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";

  document.getElementById("N8").style.backgroundColor = "black";
  document.getElementById("N8").style.color = "yellow";

  document.getElementById("table8").style.color = "red";
  document.getElementById("table8").style.backgroundColor = "black";
  document.getElementById("table8").style.fontSize = "larger";
}
function mouseOver9() {
  document.getElementById("aBit").style.backgroundColor = "red";
  document.getElementById("bBit").style.backgroundColor = "red";
  document.getElementById("cBit").style.backgroundColor = "red";
  document.getElementById("dBit").style.backgroundColor = "red";
  document.getElementById("fBit").style.backgroundColor = "red";
  document.getElementById("gBit").style.backgroundColor = "red";

  document.getElementById("N9").style.backgroundColor = "black";
  document.getElementById("N9").style.color = "yellow";

  document.getElementById("table9").style.color = "red";
  document.getElementById("table9").style.backgroundColor = "black";
  document.getElementById("table9").style.fontSize = "larger";
}










// Click 'n' Create your Alphanumeric &  click on get code

const array = document.querySelectorAll(".segment2");

bitsOnMouseOver = (i) => {
  let bit = array[i];
  if (bit.style.backgroundColor === "red") {
    bit.style.backgroundColor = "red";
  } else {
    bit.style.backgroundColor = "yellow";
  }
};
bitsOnMouseOut = (i) => {
  let bit = array[i];
  if (bit.style.backgroundColor === "yellow") {
    bit.style.backgroundColor = "#5551405e";
  }
  else {
    bit.style.backgroundColor = "red";
  }
};
bitsOnClick = (i) => {
  let bit = array[i];
  if (bit.style.backgroundColor === "red") {
    bit.style.backgroundColor = "yellow";
  } else {
    bit.style.backgroundColor = "red";
  }
};

// mouseOver , mouseOut , onclick for individual bit
amouseOverBit = () => bitsOnMouseOver(0) ;
amouseOutBit = () => bitsOnMouseOut(0) ;
aBit2 = () => bitsOnClick(0) ;
bmouseOverBit = () => bitsOnMouseOver(1) ;
bmouseOutBit = () => bitsOnMouseOut(1) ;
bBit2 = () => bitsOnClick(1) ;
cmouseOverBit = () => bitsOnMouseOver(2) ;
cmouseOutBit = () => bitsOnMouseOut(2) ;
cBit2 = () => bitsOnClick(2) ;
dmouseOverBit = () => bitsOnMouseOver(3) ;
dmouseOutBit = () => bitsOnMouseOut(3) ;
dBit2 = () => bitsOnClick(3) ;
emouseOverBit = () => bitsOnMouseOver(4) ;
emouseOutBit = () => bitsOnMouseOut(4) ;
eBit2 = () => bitsOnClick(4) ;
fmouseOverBit = () => bitsOnMouseOver(5) ;
fmouseOutBit = () => bitsOnMouseOut(5) ;
fBit2 = () => bitsOnClick(5) ;
gmouseOverBit = () => bitsOnMouseOver(6) ;
gmouseOutBit = () => bitsOnMouseOut(6) ;
gBit2 = () => bitsOnClick(6) ;


// getting code sections

const gC = document.getElementById("getCode");
gC.addEventListener('click', getCode );

const rst = document.getElementById("reset");
rst.addEventListener('click', reset );


function getCode() {
  array.forEach( (element,i) => {
    let status = document.getElementById(i) ;
    if (element.style.backgroundColor === "red") {
        status.innerHTML = "1";
    } else {
      status.innerHTML ="0";
    }
  }
)
  document.getElementById("zeroOne").style.opacity = "1";
}


function reset() {
  array.forEach((element) => {
    element.style.backgroundColor = "#5551405e";
  })
  document.getElementById("zeroOne").style.opacity = "0";
}

