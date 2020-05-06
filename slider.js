var image = "one";
document.getElementById("one").style.backgroundColor = "#a695a5";
document.querySelector("#photo").setAttribute("src", "images/image1.png");

function changeImage(id){
    if(id == "next"){
        switch(image){
            case "one":
                document.getElementById("photo").setAttribute("src", "images/image2.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two";
                break;
            case "two":
                document.getElementById("photo").setAttribute("src", "images/image3.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "three";
                break;
            case "three":
                document.getElementById("photo").setAttribute("src", "images/image4.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
            case "four":
                document.getElementById("photo").setAttribute("src", "images/image5.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "five":
                document.getElementById("photo").setAttribute("src", "images/image1.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
        }
    }
    else{
        switch(image){
            case "one":
                document.getElementById("photo").setAttribute("src", "images/image5.png");
                document.getElementById("one").style.backgroundColor = "#fff8ef";
                document.getElementById("five").style.backgroundColor = "#a695a5";
                image = "five";
                break;
            case "two":
                document.getElementById("photo").setAttribute("src", "images/image1.png");
                document.getElementById("two").style.backgroundColor = "#fff8ef";
                document.getElementById("one").style.backgroundColor = "#a695a5";
                image = "one";
                break;
            case "three":
                document.getElementById("photo").setAttribute("src", "images/image2.png");
                document.getElementById("three").style.backgroundColor = "#fff8ef";
                document.getElementById("two").style.backgroundColor = "#a695a5";
                image = "two"
                break;
            case "four":
                document.getElementById("photo").setAttribute("src", "images/image3.png");
                document.getElementById("four").style.backgroundColor = "#fff8ef";
                document.getElementById("three").style.backgroundColor = "#a695a5";
                image = "three";
                break;
            case "five":
                document.getElementById("photo").setAttribute("src", "images/image4.png");
                document.getElementById("five").style.backgroundColor = "#fff8ef";
                document.getElementById("four").style.backgroundColor = "#a695a5";
                image = "four";
                break;
        }
    }
    
}

function clearDots(){
    switch(dot){
        case "one":
            document.querySelector("#two").style.backgroundColor = "#fff8ef";
            document.querySelector("#three").style.backgroundColor = "#fff8ef";
            document.querySelector("#four").style.backgroundColor = "#fff8ef";
            document.querySelector("#five").style.backgroundColor = "#fff8ef";
            break;
        case "two":
            document.querySelector("#one").style.backgroundColor = "#fff8ef";
            document.querySelector("#three").style.backgroundColor = "#fff8ef";
            document.querySelector("#four").style.backgroundColor = "#fff8ef";
            document.querySelector("#five").style.backgroundColor = "#fff8ef";
            break;
        case "three":
            document.querySelector("#one").style.backgroundColor = "#fff8ef";
            document.querySelector("#two").style.backgroundColor = "#fff8ef";
            document.querySelector("#four").style.backgroundColor = "#fff8ef";
            document.querySelector("#five").style.backgroundColor = "#fff8ef";
            break;
        case "four":
            document.querySelector("#one").style.backgroundColor = "#fff8ef";
            document.querySelector("#two").style.backgroundColor = "#fff8ef";
            document.querySelector("#three").style.backgroundColor = "#fff8ef";
            document.querySelector("#five").style.backgroundColor = "#fff8ef";
            break;
        case "five":
            document.querySelector("#one").style.backgroundColor = "#fff8ef";
            document.querySelector("#two").style.backgroundColor = "#fff8ef";
            document.querySelector("#three").style.backgroundColor = "#fff8ef";
            document.querySelector("#four").style.backgroundColor = "#fff8ef";
            break;
    }
}

function dotChange(id){
    dot = id.toString();
    switch(dot){
        case "one":
            document.getElementById("photo").setAttribute("src", "images/image1.png");
            document.querySelector("#one").style.backgroundColor = "#a695a5";
            clearDots();
            break;
        case "two":
            document.getElementById("photo").setAttribute("src", "images/image2.png");
            document.querySelector("#two").style.backgroundColor = "#a695a5";
            clearDots();
            break;
        case "three":
            document.getElementById("photo").setAttribute("src", "images/image3.png");
            document.querySelector("#three").style.backgroundColor = "#a695a5";
            clearDots();
            break;
        case "four":
            document.getElementById("photo").setAttribute("src", "images/image4.png");
            document.querySelector("#four").style.backgroundColor = "#a695a5";
            clearDots();
            break;
        case "five":
            document.getElementById("photo").setAttribute("src", "images/image5.png");
            document.querySelector("#five").style.backgroundColor = "#a695a5";
            clearDots();
            break;
    }
}

function autoChangeImage(){
    while(true){
        for(i=1; i<=5; i++){
            n = i.toString();
            console.log(`image${n}.png`);
            setTimeout(4000);
        }
    }
}