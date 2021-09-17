// making the theory apper onclick to theory topic buttons
function topic1(){
    document.getElementById("theory").innerHTML="A seven-segment display is a form of electronic display device for displaying decimal numerals that is an alternative to the more complex dot matrix displays. Seven-segment displays are widely used in digital clocks, electronic meters, basic calculators, and other electronic devices that display numerical information";
}
function topic2(){
    document.getElementById("theory").innerHTML="The coded signal in the form of 0 and 1 is given to the 7 segment display IC terminals a , b , c , d , e , f , g    individually. If the signal is 0 it indicates “ Low signal” or “Off signal” & If the signal is 1 it indicates “High signal” or “On signal” . Corresponding to the coded signal 0 and 1 each LED segment of the IC can be lit On/Off and Alphanumeric characters can be displayed.";
}
function topic3(){
    document.getElementById("theory").innerHTML="0 signal indicates “ Low signal” or “Off signal” which keeps the  corresponding segment LEDs not in forward biased i.e Lit Off. Similarly 1 signal indicates “ High signal” or “On signal” which keeps the  corresponding segment LEDs in forward biased i.e Lit On  .To create an Alphanumeric character a set of 7 bit code of 0’s and 1’s  is applied to the 7segment display IC.";
}

// hamburger menu bar function
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".topnav");

    if (x.style.display === "block") {
        x.style.display = "none";
         y.style.height="12vmin";
         y.style.width="28vmin";
        } else {
          x.style.display = "block";
         y.style.height="48vmin";
         y.style.width="50vw";
     }
}   


function mouseOver0() {
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
} 
function mouseOut0() {
    document.getElementById("aBit").style.backgroundColor = "#827d695e";
    document.getElementById("bBit").style.backgroundColor = "#827d695e";
    document.getElementById("cBit").style.backgroundColor = "#827d695e";
    document.getElementById("dBit").style.backgroundColor = "#827d695e";
    document.getElementById("eBit").style.backgroundColor = "#827d695e";
    document.getElementById("fBit").style.backgroundColor = "#827d695e";
    document.getElementById("N0").style.backgroundColor = "grey"; 
    document.getElementById("N0").style.color = "black";
    document.getElementById("table0").style.color = "black"; 
    document.getElementById("table0").style.backgroundColor = "grey";
    document.getElementById("table0").style.fontSize = "inherit";
}

function digit0() {
    var x=document.getElementById("table0");
    if(x.style.color===("red")){
        document.getElementById("aBit").style.backgroundColor = "#827d695e";
        document.getElementById("bBit").style.backgroundColor = "#827d695e";
        document.getElementById("cBit").style.backgroundColor = "#827d695e";
        document.getElementById("dBit").style.backgroundColor = "#827d695e";
        document.getElementById("eBit").style.backgroundColor = "#827d695e";
        document.getElementById("fBit").style.backgroundColor = "#827d695e";
        document.getElementById("N0").style.backgroundColor = "grey"; 
        document.getElementById("N0").style.color = "black";
        document.getElementById("table0").style.color = "black"; 
        document.getElementById("table0").style.backgroundColor = "grey";
        document.getElementById("table0").style.fontSize = "inherit";
        }   
        else{  
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
      } 
    }

function mouseOver1() {
    document.getElementById("bBit").style.backgroundColor = "red";    
    document.getElementById("cBit").style.backgroundColor = "red";    
       
    document.getElementById("N1").style.backgroundColor = "black"; 
    document.getElementById("N1").style.color = "yellow";    
    document.getElementById("table1").style.color = "red"; 
    document.getElementById("table1").style.backgroundColor = "black";
    document.getElementById("table1").style.fontSize = "larger";    
} 
function mouseOut1() {
    
    document.getElementById("bBit").style.backgroundColor = "#827d695e";
    document.getElementById("cBit").style.backgroundColor = "#827d695e";
    
    document.getElementById("N1").style.backgroundColor = "grey"; 
    document.getElementById("N1").style.color = "black";
    document.getElementById("table1").style.color = "black"; 
    document.getElementById("table1").style.backgroundColor = "grey";
    document.getElementById("table1").style.fontSize = "inherit";
}

function digit1() {
    var y=document.getElementById("table1");
    if(y.style.color===("red")){
        
        document.getElementById("aBit").style.backgroundColor = "#827d695e";    
        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
        document.getElementById("dBit").style.backgroundColor = "#827d695e";    
        document.getElementById("eBit").style.backgroundColor = "#827d695e";
        document.getElementById("fBit").style.backgroundColor = "#827d695e";
        document.getElementById("gBit").style.backgroundColor = "#827d695e";

        document.getElementById("N1").style.backgroundColor = "grey"; 
        document.getElementById("N1").style.color = "black";
        document.getElementById("table1").style.color = "black"; 

        document.getElementById("table1").style.backgroundColor = "grey";
        document.getElementById("table1").style.fontSize = "inherit";
        }   
        else{  
            
            document.getElementById("bBit").style.backgroundColor = "red";    
            document.getElementById("cBit").style.backgroundColor = "red";    

            document.getElementById("N1").style.backgroundColor = "black"; 
            document.getElementById("N1").style.color = "yellow";    
            document.getElementById("table1").style.color = "red"; 
            document.getElementById("table1").style.backgroundColor = "black";
            document.getElementById("table1").style.fontSize = "larger";
      } 
    }


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
function mouseOut2() {
    
    document.getElementById("aBit").style.backgroundColor = "#827d695e";    
    document.getElementById("bBit").style.backgroundColor = "#827d695e";    
    document.getElementById("dBit").style.backgroundColor = "#827d695e"; 
    document.getElementById("eBit").style.backgroundColor = "#827d695e";    
    document.getElementById("gBit").style.backgroundColor = "#827d695e"; 
    
    document.getElementById("N2").style.backgroundColor = "grey"; 
    document.getElementById("N2").style.color = "black";
    document.getElementById("table2").style.color = "black"; 
    document.getElementById("table2").style.backgroundColor = "grey";
    document.getElementById("table2").style.fontSize = "inherit";
}
function digit2() {
    var z=document.getElementById("table2");
    if(z.style.color===("red")){      
        document.getElementById("aBit").style.backgroundColor = "#827d695e";    
        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
        document.getElementById("dBit").style.backgroundColor = "#827d695e";    
        document.getElementById("eBit").style.backgroundColor = "#827d695e";
        document.getElementById("fBit").style.backgroundColor = "#827d695e";
        document.getElementById("gBit").style.backgroundColor = "#827d695e";

        document.getElementById("N2").style.backgroundColor = "grey"; 
        document.getElementById("N2").style.color = "black";
        document.getElementById("table2").style.color = "black"; 

        document.getElementById("table2").style.backgroundColor = "grey";
        document.getElementById("table2").style.fontSize = "inherit";
        }   
        else{  
            
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
    function mouseOut3() {
        document.getElementById("aBit").style.backgroundColor = "#827d695e";    
        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
        document.getElementById("dBit").style.backgroundColor = "#827d695e";    
        document.getElementById("gBit").style.backgroundColor = "#827d695e";  
        
        document.getElementById("N3").style.backgroundColor = "grey"; 
        document.getElementById("N3").style.color = "black";

        document.getElementById("table3").style.color = "black"; 
        document.getElementById("table3").style.backgroundColor = "grey";
        document.getElementById("table3").style.fontSize = "inherit";
    }
    function digit3() {
        var m=document.getElementById("table3");
        if(m.style.color===("red")){      
        document.getElementById("aBit").style.backgroundColor = "#827d695e";    
        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
        document.getElementById("dBit").style.backgroundColor = "#827d695e";    
        document.getElementById("eBit").style.backgroundColor = "#827d695e";
        document.getElementById("fBit").style.backgroundColor = "#827d695e";
        document.getElementById("gBit").style.backgroundColor = "#827d695e";

            document.getElementById("N3").style.backgroundColor = "grey"; 
            document.getElementById("N3").style.color = "black";

            document.getElementById("table3").style.color = "black"; 
            document.getElementById("table3").style.backgroundColor = "grey";
            document.getElementById("table3").style.fontSize = "inherit";
            }   
            else{  
                
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
        function mouseOut4() {   
            document.getElementById("bBit").style.backgroundColor = "#827d695e";    
            document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
            document.getElementById("gBit").style.backgroundColor = "#827d695e";  
            document.getElementById("fBit").style.backgroundColor = "#827d695e"; 

            document.getElementById("N4").style.backgroundColor = "grey"; 
            document.getElementById("N4").style.color = "black";
    
            document.getElementById("table4").style.color = "black"; 
            document.getElementById("table4").style.backgroundColor = "grey";
            document.getElementById("table4").style.fontSize = "inherit";
        }
        function digit4() {
            var m=document.getElementById("table4");
            if(m.style.color===("red")){      
            document.getElementById("aBit").style.backgroundColor = "#827d695e";    
            document.getElementById("bBit").style.backgroundColor = "#827d695e";    
            document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
            document.getElementById("dBit").style.backgroundColor = "#827d695e";    
            document.getElementById("eBit").style.backgroundColor = "#827d695e";
            document.getElementById("fBit").style.backgroundColor = "#827d695e";
            document.getElementById("gBit").style.backgroundColor = "#827d695e";
    
                document.getElementById("N4").style.backgroundColor = "grey"; 
                document.getElementById("N4").style.color = "black";
    
                document.getElementById("table4").style.color = "black"; 
                document.getElementById("table4").style.backgroundColor = "grey";
                document.getElementById("table4").style.fontSize = "inherit";
                }   
                else{  
                    
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
            function mouseOut5() {     
                document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                document.getElementById("fBit").style.backgroundColor = "#827d695e"; 
                document.getElementById("gBit").style.backgroundColor = "#827d695e";    
    
                document.getElementById("N5").style.backgroundColor = "grey"; 
                document.getElementById("N5").style.color = "black";
        
                document.getElementById("table5").style.color = "black"; 
                document.getElementById("table5").style.backgroundColor = "grey";
                document.getElementById("table5").style.fontSize = "inherit";
            }
            function digit5() {
                var m=document.getElementById("table5");
                if(m.style.color===("red")){      
                document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                document.getElementById("eBit").style.backgroundColor = "#827d695e";
                document.getElementById("fBit").style.backgroundColor = "#827d695e";
                document.getElementById("gBit").style.backgroundColor = "#827d695e";
        
                    document.getElementById("N5").style.backgroundColor = "grey"; 
                    document.getElementById("N5").style.color = "black";
        
                    document.getElementById("table5").style.color = "black"; 
                    document.getElementById("table5").style.backgroundColor = "grey";
                    document.getElementById("table5").style.fontSize = "inherit";
                    }   
                    else{  
                        
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
                function mouseOut6() {     
                    document.getElementById("aBit").style.backgroundColor = "#827d695e";
                    document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                    document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                    document.getElementById("dBit").style.backgroundColor = "#827d695e";  
                    document.getElementById("eBit").style.backgroundColor = "#827d695e";  
                    document.getElementById("fBit").style.backgroundColor = "#827d695e"; 
                    document.getElementById("gBit").style.backgroundColor = "#827d695e";    
        
                    document.getElementById("N6").style.backgroundColor = "grey"; 
                    document.getElementById("N6").style.color = "black";
            
                    document.getElementById("table6").style.color = "black"; 
                    document.getElementById("table6").style.backgroundColor = "grey";
                    document.getElementById("table6").style.fontSize = "inherit";
                }
                function digit6() {
                    var m=document.getElementById("table6");
                    if(m.style.color===("red")){      
                    document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                    document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                    document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                    document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                    document.getElementById("eBit").style.backgroundColor = "#827d695e";
                    document.getElementById("fBit").style.backgroundColor = "#827d695e";
                    document.getElementById("gBit").style.backgroundColor = "#827d695e";
            
                        document.getElementById("N6").style.backgroundColor = "grey"; 
                        document.getElementById("N6").style.color = "black";
            
                        document.getElementById("table6").style.color = "black"; 
                        document.getElementById("table6").style.backgroundColor = "grey";
                        document.getElementById("table6").style.fontSize = "inherit";
                        }   
                        else{  
                            
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
                    function mouseOut7() {     
                        document.getElementById("aBit").style.backgroundColor = "#827d695e";
                        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                        document.getElementById("dBit").style.backgroundColor = "#827d695e";  
                        document.getElementById("eBit").style.backgroundColor = "#827d695e";  
                        document.getElementById("fBit").style.backgroundColor = "#827d695e"; 
                        document.getElementById("gBit").style.backgroundColor = "#827d695e";    
            
                        document.getElementById("N7").style.backgroundColor = "grey"; 
                        document.getElementById("N7").style.color = "black";
                
                        document.getElementById("table7").style.color = "black"; 
                        document.getElementById("table7").style.backgroundColor = "grey";
                        document.getElementById("table7").style.fontSize = "inherit";
                    }
                    function digit7() {
                        var m=document.getElementById("table7");
                        if(m.style.color===("red")){      
                        document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                        document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                        document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                        document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                        document.getElementById("eBit").style.backgroundColor = "#827d695e";
                        document.getElementById("fBit").style.backgroundColor = "#827d695e";
                        document.getElementById("gBit").style.backgroundColor = "#827d695e";
                
                            document.getElementById("N7").style.backgroundColor = "grey"; 
                            document.getElementById("N7").style.color = "black";
                
                            document.getElementById("table7").style.color = "black"; 
                            document.getElementById("table7").style.backgroundColor = "grey";
                            document.getElementById("table7").style.fontSize = "inherit";
                            }   
                            else{  
                                
                                document.getElementById("aBit").style.backgroundColor = "red";    
                        document.getElementById("bBit").style.backgroundColor = "red"; 
                        document.getElementById("cBit").style.backgroundColor = "red"; 
                         
                    
                                document.getElementById("N7").style.backgroundColor = "black"; 
                                document.getElementById("N7").style.color = "yellow"; 
                
                                document.getElementById("table7").style.color = "red"; 
                                document.getElementById("table7").style.backgroundColor = "black";
                                document.getElementById("table7").style.fontSize = "larger";
                          } 
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
                        function mouseOut8() {     
                            document.getElementById("aBit").style.backgroundColor = "#827d695e";
                            document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                            document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                            document.getElementById("dBit").style.backgroundColor = "#827d695e";  
                            document.getElementById("eBit").style.backgroundColor = "#827d695e";  
                            document.getElementById("fBit").style.backgroundColor = "#827d695e"; 
                            document.getElementById("gBit").style.backgroundColor = "#827d695e";    
                
                            document.getElementById("N8").style.backgroundColor = "grey"; 
                            document.getElementById("N8").style.color = "black";
                    
                            document.getElementById("table8").style.color = "black"; 
                            document.getElementById("table8").style.backgroundColor = "grey";
                            document.getElementById("table8").style.fontSize = "inherit";
                        }
                        function digit8() {
                            var m=document.getElementById("table8");
                            if(m.style.color===("red")){      
                            document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                            document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                            document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                            document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                            document.getElementById("eBit").style.backgroundColor = "#827d695e";
                            document.getElementById("fBit").style.backgroundColor = "#827d695e";
                            document.getElementById("gBit").style.backgroundColor = "#827d695e";
                    
                                document.getElementById("N8").style.backgroundColor = "grey"; 
                                document.getElementById("N8").style.color = "black";
                    
                                document.getElementById("table8").style.color = "black"; 
                                document.getElementById("table8").style.backgroundColor = "grey";
                                document.getElementById("table8").style.fontSize = "inherit";
                                }   
                                else{  
                                    
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
                            function mouseOut9() {     
                                document.getElementById("aBit").style.backgroundColor = "#827d695e";
                                document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                                document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                                document.getElementById("dBit").style.backgroundColor = "#827d695e";  
                                document.getElementById("eBit").style.backgroundColor = "#827d695e";  
                                document.getElementById("fBit").style.backgroundColor = "#827d695e"; 
                                document.getElementById("gBit").style.backgroundColor = "#827d695e";    
                    
                                document.getElementById("N9").style.backgroundColor = "grey"; 
                                document.getElementById("N9").style.color = "black";
                        
                                document.getElementById("table9").style.color = "black"; 
                                document.getElementById("table9").style.backgroundColor = "grey";
                                document.getElementById("table9").style.fontSize = "inherit";
                            }
                            function digit9() {
                                var m=document.getElementById("table9");
                                if(m.style.color===("red")){      
                                document.getElementById("aBit").style.backgroundColor = "#827d695e";    
                                document.getElementById("bBit").style.backgroundColor = "#827d695e";    
                                document.getElementById("cBit").style.backgroundColor = "#827d695e"; 
                                document.getElementById("dBit").style.backgroundColor = "#827d695e";    
                                document.getElementById("eBit").style.backgroundColor = "#827d695e";
                                document.getElementById("fBit").style.backgroundColor = "#827d695e";
                                document.getElementById("gBit").style.backgroundColor = "#827d695e";
                        
                                    document.getElementById("N9").style.backgroundColor = "grey"; 
                                    document.getElementById("N9").style.color = "black";
                        
                                    document.getElementById("table9").style.color = "black"; 
                                    document.getElementById("table9").style.backgroundColor = "grey";
                                    document.getElementById("table9").style.fontSize = "inherit";
                                    }   
                                    else{  
                                        
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
                                }

function amouseOverBit2(){
    var m=document.getElementById("aBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("aBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("aBit2").style.backgroundColor = "yellow"; 

    }
}

function amouseOutBit2(){
    var m=document.getElementById("aBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("aBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("aBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("aBit2").style.backgroundColor = "red";
    }
}

 function aBit2() { 
    var m=document.getElementById("aBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("aBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("aBit2").style.backgroundColor = "red";
    }

}




function bmouseOverBit2(){
    var m=document.getElementById("bBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("bBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("bBit2").style.backgroundColor = "yellow"; 

    }
}

function bmouseOutBit2(){
    var m=document.getElementById("bBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("bBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("bBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("bBit2").style.backgroundColor = "red";
    }
}

 function bBit2() { 
    var m=document.getElementById("bBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("bBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("bBit2").style.backgroundColor = "red";
    }

}



function cmouseOverBit2(){
    var m=document.getElementById("cBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("cBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("cBit2").style.backgroundColor = "yellow"; 

    }
}

function cmouseOutBit2(){
    var m=document.getElementById("cBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("cBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("cBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("cBit2").style.backgroundColor = "red";
    }
}

 function cBit2() { 
    var m=document.getElementById("cBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("cBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("cBit2").style.backgroundColor = "red";
    }

}




function dmouseOverBit2(){
    var m=document.getElementById("dBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("dBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("dBit2").style.backgroundColor = "yellow"; 

    }
}

function dmouseOutBit2(){
    var m=document.getElementById("dBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("dBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("dBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("dBit2").style.backgroundColor = "red";
    }
}

 function dBit2() { 
    var m=document.getElementById("dBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("dBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("dBit2").style.backgroundColor = "red";
    }

}


function emouseOverBit2(){
    var m=document.getElementById("eBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("eBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("eBit2").style.backgroundColor = "yellow"; 

    }
}

function emouseOutBit2(){
    var m=document.getElementById("eBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("eBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("eBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("eBit2").style.backgroundColor = "red";
    }
}

 function eBit2() { 
    var m=document.getElementById("eBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("eBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("eBit2").style.backgroundColor = "red";
    }

}

function fmouseOverBit2(){
    var m=document.getElementById("fBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("fBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("fBit2").style.backgroundColor = "yellow"; 

    }
}

function fmouseOutBit2(){
    var m=document.getElementById("fBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("fBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("fBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("fBit2").style.backgroundColor = "red";
    }
}

 function fBit2() { 
    var m=document.getElementById("fBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("fBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("fBit2").style.backgroundColor = "red";
    }

}


function gmouseOverBit2(){
    var m=document.getElementById("gBit2");
    if(m.style.backgroundColor===("red")){
    document.getElementById("gBit2").style.backgroundColor = "red"; 
    }  
    else{
        document.getElementById("gBit2").style.backgroundColor = "yellow"; 

    }
}

function gmouseOutBit2(){
    var m=document.getElementById("gBit2");
     if(m.style.backgroundColor===("yellow")){
        document.getElementById("gBit2").style.backgroundColor = "#827d695e";
     }
     
     else if(m.style.backgroundColor===("#827d695e")){
        document.getElementById("gBit2").style.backgroundColor = "#827d695e";
     }
     else{
    document.getElementById("gBit2").style.backgroundColor = "red";
    }
}

 function gBit2() { 
    var m=document.getElementById("gBit2");
    if(m.style.backgroundColor===("red")){
        document.getElementById("gBit2").style.backgroundColor = "yellow";

    }
    else{
            document.getElementById("gBit2").style.backgroundColor = "red";
    }

}

document.getElementById("getCode").onclick = function() {getCode()};

function getCode(){
    var a=document.getElementById("aBit2");
    if(a.style.backgroundColor===("red")){
    document.getElementById("aC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("aC").innerHTML = "0"; 
    }

    var b=document.getElementById("bBit2");
    if(b.style.backgroundColor===("red")){
    document.getElementById("bC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("bC").innerHTML = "0"; 
    }

    var c=document.getElementById("cBit2");
    if(c.style.backgroundColor===("red")){
    document.getElementById("cC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("cC").innerHTML = "0"; 
    }

    var d=document.getElementById("dBit2");
    if(d.style.backgroundColor===("red")){
    document.getElementById("dC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("dC").innerHTML = "0"; 
    }

    var e=document.getElementById("eBit2");
    if(e.style.backgroundColor===("red")){
    document.getElementById("eC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("eC").innerHTML = "0"; 
    }

    var f=document.getElementById("fBit2");
    if(f.style.backgroundColor===("red")){
    document.getElementById("fC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("fC").innerHTML = "0"; 
    }

    var g=document.getElementById("gBit2");
    if(g.style.backgroundColor===("red")){
    document.getElementById("gC").innerHTML = "1"; 
    }  
    else{
        document.getElementById("gC").innerHTML = "0"; 
    }
    document.getElementById("zeroOne").style.opacity = "1"; 


}



function getCodeHoverOn(){
        document.getElementById("getCode").style.boxShadow = "0px 0px 5px 5px red";
     }

function getCodeHoverOff(){
        document.getElementById("getCode").style.boxShadow = "0px 0px 0px 0px black";

}

document.getElementById("reset").onclick = function() {reset()};

function reset(){
    document.getElementById("aC").innerHTML = "0"; 
    document.getElementById("bC").innerHTML = "0"; 
    document.getElementById("cC").innerHTML = "0"; 
    document.getElementById("dC").innerHTML = "0"; 
    document.getElementById("eC").innerHTML = "0"; 
    document.getElementById("fC").innerHTML = "0"; 
    document.getElementById("gC").innerHTML = "0"; 

    document.getElementById("zeroOne").style.opacity = "0"; 

    document.getElementById("aBit2").style.backgroundColor = "#827d695e";
    document.getElementById("bBit2").style.backgroundColor = "#827d695e";
    document.getElementById("cBit2").style.backgroundColor = "#827d695e";
    document.getElementById("dBit2").style.backgroundColor = "#827d695e";
    document.getElementById("eBit2").style.backgroundColor = "#827d695e";
    document.getElementById("fBit2").style.backgroundColor = "#827d695e";
    document.getElementById("gBit2").style.backgroundColor = "#827d695e";



}

function resetHoverOn(){
        document.getElementById("reset").style.boxShadow = "0px 0px 3px 3px rgb(60, 0, 255)";
     }

function resetHoverOff(){
        document.getElementById("reset").style.boxShadow = "0px 0px 0px 0px black";

}



