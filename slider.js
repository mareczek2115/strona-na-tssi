var image = "one";
hoveredDot = document.getElementsByClassName("dot");

hoveredDot.addEventListener('mouseenter', e =>{
    hoveredDot.style.backgroundColor = "#a695a5";
});
hoveredDot.addEventListener('mouseleave', e =>{
    hoveredDot.style.backgroundColor = "#fff8ef";
});

function setDotColor(){  
    document.getElementById("one").style.backgroundColor = "#a695a5";
}

function changeImage(id){
    if(id == "next"){
        switch(image){
            case "one":
                document.getElementById("slider").setAttribute("src", "image2.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two";
                break;
            case "two":
                document.getElementById("slider").setAttribute("src", "image3.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "three";
                break;
            case "three":
                document.getElementById("slider").setAttribute("src", "image4.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
            case "four":
                document.getElementById("slider").setAttribute("src", "image5.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "five":
                document.getElementById("slider").setAttribute("src", "image1.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
        }
    }
    else{
        switch(image){
            case "one":
                document.getElementById("slider").setAttribute("src", "image5.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "two":
                document.getElementById("slider").setAttribute("src", "image1.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
            case "three":
                document.getElementById("slider").setAttribute("src", "image2.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two"
                break;
            case "four":
                document.getElementById("slider").setAttribute("src", "image3.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "free";
                break;
            case "five":
                document.getElementById("slider").setAttribute("src", "image4.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
        }
    }
    
}

function dotChange(id){
    
}