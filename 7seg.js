html {
  scroll-behavior: smooth;
}
body {
  background-color: rgba(128, 128, 128, 0.411);
}

.nav-bar {
  height: auto;
  width: 100%;
  position: fixed;
  margin-top: -15vmin;
  color: rgb(11, 68, 49);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  height: 12vmin;
  width: 61vw;
  margin-left: 2vmin;
  background-image: url("white.png");
  margin-top: 0vmin;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
}

.try-it {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  font-size: 3vmax;
  margin-top: auto;
  margin-left: 48vw;
}
@media only screen and (max-width: 750px) {
  #title {
    font-size: 2.5vmax;
    color: red;
  }
  #try-it {
    font-size: 2.5vmax;
    color: red;
  }
}
@media only screen and (max-width: 400px) {
  #title {
    font-size: 2vmax;
    color: red;
  }
  #try-it {
    font-size: 2vmax;
    color: red;
  }
}
#section1 {
  height: 50vmin;
  width: 92vw;
  display: block;
  margin: auto;
  display: flex;
  border: 3px solid black;
  margin-top: 1vmin;
  border-radius: 10px 10px 0px 0px;
  border-style: solid solid none solid;
}
#image {
  height: inherit;
  width: 50%;
  background-image: url("crkt.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
#topic-section {
  height: inherit;
  width: 50%;
  background-color: rgb(187 193 56 / 98%);
  color: rgb(6 6 6);
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;

  justify-content: left;
  margin-left: 2vw;
  font-family: Arial, Helvetica, sans-serif;
}

.topicHead {
  margin-left: 3vw;
  font-size: 5vmin;
  margin-bottom: 2vmin;
  margin-top: 3.5vmin;
}
.topic {
  margin-right: 16vw;
  margin-left: 2vw;
  font-size: 3.5vmin;
  margin-top: 5vmin;
  margin-bottom: 0;
  width: 33vw;
  border-radius: 13px;
  background-color: beige;
  text-align: left;
  border: none;
  color: rgb(0, 0, 0);
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.4s;
}

#section2 {
  width: 92vw;
  display: block;
  margin: auto;
  font-size: 4.2vmin;
  border: 2px solid black;
  border-radius: 0px 0px 10px 10px;
  border-style: dashed solid solid solid;
  font-family: monospace;
  letter-spacing: 0.05vw;
  text-align: justify;
}
#theory {
  margin-top: 0px;
  padding-top: 1vh;
  height: inherit;
  width: 100%;
  color: rgb(0, 0, 0);
  margin-left: 1vw;
  margin-right: 1vw;
  font-family: Arial, Helvetica, sans-serif;
  text-justify: auto;
  display: block;
}
#topic1 {
  display: none;
}
#topic2 {
  display: none;
}
#topic3 {
  display: none;
}

#topic-section .topic:hover {
  color: white;
  background-color: black;
}
#section3 {
  display: flex;
  flex-direction: row-reverse;
  height: auto;
  scroll-behavior: smooth;
}
#tablecontainer {
  height: 83vmin;
  width: 46vw;
}
#section4 {
  display: flex;
  flex-direction: row-reverse;
  height: auto;
  scroll-behavior: smooth;
}
#tablecontainer2 {
  height: 63vh;
  width: 46vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border: 2px solid black;
}
#tableName {
  height: 5vmin;
  font-size: 5vmin;
  background-color: rgb(50 40 65 / 30%);
  border: 2px solid black;
  border: 2px solid black;
  text-align: center;
  font-weight: bolder;
}

.table-row{
  cursor: pointer;
}
#table {
  margin-top: 7vmin;
  height: inherit;
  width: inherit;
  font-size: 6vmin;
  background-color: rgb(198 206 18);
  text-align: center;
  border-collapse: collapse;
  position: absolute;
}
#digit {
  height: inherit;
  width: 51vw;
  background-color: red;
  background-color: grey;
  border: 3px solid black;
  margin-top: 7vmin;
}
#digit2 {
  height: 63vh;
  width: 51vw;
  background-color: red;
  background-color: grey;
  border: 3px solid black;
}

@media only screen and (max-width: 550px) {
  #section3 {
    display: flex;
    flex-direction: column-reverse;
  }
  #tablecontainer {
    height: inherit;
    width: 80vw;
    font-size: 6vmin;
    background-color: rgb(22, 168, 212);
    text-align: center;
    align-self: center;
  }
  #digit {
    height: 93vmin;
    width: 80vw;
    align-self: center;
    background-color: grey;
    border: 3px solid black;
  }
}
@media only screen and (max-width: 550px) {
  #section4 {
    display: flex;
    flex-direction: column-reverse;
  }
  #tablecontainer2 {
    height: inherit;
    width: 80vw;
    font-size: 6vmin;
    background-color: rgb(22, 168, 212);
    text-align: center;
    align-self: center;
  }
  #digit2 {
    height: 73vmin;
    width: 80vw;
    align-self: center;
    background-color: grey;
    border: 3px solid black;
  }
}
@media only screen and (max-width: 550px) {
  #section4 {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    top: 89vmin;
  }
  #tablecontainer2 {
    height: inherit;
    width: 80vw;
    font-size: 6vmin;
    background-color: rgb(22, 168, 212);
    text-align: center;
    align-self: center;
  }
  #digit2 {
    height: 73vmin;
    width: 80vw;
    align-self: center;
    background-color: grey;
    border: 3px solid black;
  }
}
#num {
  height: 100%;
  width: 100%;
  background-color: rgb(0 0 0);
}

#num a {
  cursor: pointer;
}
#aBit {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 5vmin;
  margin-left: 11vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#bBit {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 10vmin;
  margin-left: 31vw;
  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#cBit {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 32vmin;
  margin-left: 30vw;
  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#dBit {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 51vmin;
  margin-left: 9vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#eBit {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 32vmin;
  margin-left: 7vw;
  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#fBit {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 10vmin;
  margin-left: 8vw;
  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#gBit {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 28vmin;
  margin-left: 10vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#selectNum {
  display: flex;
  font-size: 7vmin;
  width: auto;
  margin-left: 3vw;
  margin: 2vh 2vw 2vh 4vw;
}

#divider1 {
  font-size: 5vmin;
  color: black;
  font-weight: bolder;
  height: 10vmin;
  width: 100vw;
  margin-top: 30vmin;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 80vw;
  text-align: center;
}
#divider2 {
  font-size: 6vmin;
  color: black;
  font-weight: bolder;
  height: 10vmin;
  width: 100vw;
  margin-top: 0vmin;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin-bottom: 3vh;
  /* position: relative; */
  /* top: 76vmin; */
}

.num-btn{
  cursor:pointer;
  margin-bottom: 2vh;
}
#N0 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table0 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N1 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table1 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N2 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table2 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N3 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table3 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N4 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table4 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N5 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table5 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N6 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table6 {
  color: black;
  background-color: grey;
  font-size: inherit;
}
#N7 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table7 {
  color: black;
  background-color: grey;
  font-size: inherit;
  width: 9vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
}
#N8 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table8 {
  color: black;
  background-color: grey;
  font-size: inherit;
  width: 9vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
}
#N9 {
  border-radius: 5px;
  width: 8vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
  background-color: grey;
}

#table9 {
  color: black;
  background-color: grey;
  font-size: inherit;
  width: 9vmin;
  border-radius: 5px;
  height: 8vmin;
  font-size: 6vmin;
}
#getCode {
  border-radius: 50px;
  height: 9vmin;
  width: 63%;
  background-color: red;
  display: block;
  margin: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-top: 2vmin;
  cursor: pointer;
}
#getCode:hover{
  box-shadow: 0px 0px 5px 5px red ;
}
#yourCode {
  border-radius: 50px;
  height: 18vmin;
  width: 63%;
  background-color: rgb(0, 255, 149);
  display: block;
  margin: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-top: 2vmin;
}
#reset {
  border-radius: 50px;
  height: 9vmin;
  width: 63%;
  background-color: rgb(60, 0, 255);
  display: block;
  margin: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-top: 2vmin;
  cursor: pointer;
}
#reset:hover{
  box-shadow: 0px 0px 3px 3px rgb(60, 0, 255) ;
}


#aBit2 {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 5vmin;
  margin-left: 11vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#bBit2 {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 10vmin;
  margin-left: 31vw;

  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#cBit2 {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 32vmin;
  margin-left: 30vw;

  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#dBit2 {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 51vmin;
  margin-left: 9vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#eBit2 {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 32vmin;
  margin-left: 7vw;

  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#fBit2 {
  height: 20vmin;
  width: 6vmin;
  background-color: #5551405e;
  position: absolute;
  margin-top: 10vmin;
  margin-left: 8vw;

  border-radius: 34%;
  transform: rotate(4deg);
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#gBit2 {
  height: 6vmin;
  width: 21vw;
  background-color: #5551405e;
  position: absolute;
  margin-top: 28vmin;
  margin-left: 10vw;
  border-radius: 34%;
  font-size: 3vmax;
  text-align: center;
  color: yellow;
}
#zeroOne {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 28vmin;
  opacity: 0;
}
#navlink1 {
  margin-top: 11vmin;
  height: 25vmin;
  width: 99vw;
  background-color: rgb(255, 0, 0);
  opacity: 0;
}
#navlink2 {
  height: 13vmin;
  width: 97vw;
  /* background-color: rgb(0, 247, 255); */
  background-image: url("char.png");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
  /* position: relative; */
  /* top: 83vmin; */
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 3vh;
  right: 2vw;
  border-radius: 10px;
  border: 2px solid black;
  z-index: 10;
}

.topnav #myLinks {
  height: inherit;
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  /* font-size: 2rem; */
  display: block;
}

.topnav a.icon {
  height: 1.8rem;
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: darkslategray;
  color: white;
  width: 25vw;
}

@media (max-width: 1050px) {
  .topnav {
    font-size: 2rem;
  }
}
@media (max-width: 500px) {
  .topnav {
    font-size: 1.6rem;
  }
}
@media (max-width: 1020px) {
  .topic {
    margin-top: 3vmin;
  }
}
@media (max-width: 2076px) {
  .topnav {
    font-size: 1.5rem;
  }
}
@media (max-width: 551px) {
  #section4 {
    position: relative;
    top: 86vmin;
  }
  #divider2 {
    position: relative;
    top: 76vmin;
  }
  #navlink2 {
    position: relative;
    top: 83vmin;
  }
}
#num3 {
  height: 70vh;
  width: 50vw;
  background-color: grey;
  margin-top: 20vh;
  display: grid;
  grid-template-areas:
    "digA digA digA"
    "digF digN digB"
    "digG digG digG"
    "digE digN digC"
    "digD digD digD";
}

#aBit3 {
  height: 10vh;
  width: 50vw;
  background-color: red;
  grid-area: digA;
}
#bBit3 {
  height: 20vh;
  width: 8vw;
  background-color: red;
  grid-area: digB;
}
#cBit3 {
  height: 20vh;
  width: 8vw;
  background-color: red;
  grid-area: digC;
}
#dBit3 {
  height: 10vh;
  width: 50vw;
  background-color: red;
  grid-area: digD;
}
#eBit3 {
  height: 20vh;
  width: 8vw;
  background-color: red;
  grid-area: digE;
}
#fBit3 {
  height: 20vh;
  width: 8vw;
  background-color: red;
  grid-area: digF;
}
#gBit3 {
  height: 10vh;
  width: 50vw;
  background-color: red;
  grid-area: digB;
}
