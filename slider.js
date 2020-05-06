var image = "one";
document.getElementById("one").style.backgroundColor = "#a695a5";

function changeImage(id){
    if(id == "next"){
        switch(image){
            case "one":
                document.getElementById("photo").setAttribute("src", "image2.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two";
                break;
            case "two":
                document.getElementById("photo").setAttribute("src", "image3.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "three";
                break;
            case "three":
                document.getElementById("photo").setAttribute("src", "image4.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
            case "four":
                document.getElementById("photo").setAttribute("src", "image5.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "five":
                document.getElementById("photo").setAttribute("src", "image1.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
        }
    }
    else{
        switch(image){
            case "one":
                document.getElementById("photo").setAttribute("src", "image5.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "two":
                document.getElementById("photo").setAttribute("src", "image1.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
            case "three":
                document.getElementById("photo").setAttribute("src", "image2.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two"
                break;
            case "four":
                document.getElementById("photo").setAttribute("src", "image3.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "three";
                break;
            case "five":
                document.getElementById("photo").setAttribute("src", "image4.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
        }
    }
    
}

function dotChange(id){
    dot = id.toString();
    switch(dot){
        case "one":
            document.getElementById("photo").setAttribute("src", "image1.png");
            document.getElementsByClassName("dot").style.backgroundColor = "#fff8ef";
            document.getElementById("one").style.backgroundColor = "#a695a5";
            break;
        case "two":
            document.getElementById("photo").setAttribute("src", "image2.png");
            document.getElementsByClassName("dot").style.backgroundColor = "#fff8ef";
            document.getElementById("two").style.backgroundColor = "#a695a5";
            break;
        case "three":
            document.getElementById("photo").setAttribute("src", "image3.png");
            document.getElementsByClassName("dot").style.backgroundColor = "#fff8ef";
            document.getElementById("three").style.backgroundColor = "#a695a5";
            break;
        case "four":
            document.getElementById("photo").setAttribute("src", "image4.png");
            document.getElementsByClassName("dot").style.backgroundColor = "#fff8ef";
            document.getElementById("four").style.backgroundColor = "#a695a5";
            break;
        case "five":
            document.getElementById("photo").setAttribute("src", "image5.png");
            document.getElementsByClassName("dot").style.backgroundColor = "#fff8ef";
            document.getElementById("five").style.backgroundColor = "#a695a5";
            break;
    }
}