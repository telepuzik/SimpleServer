/**
 * Created by  on 09.09.2014.
 */
var words, currentWord;
//console.log ("loaded");

window.onload = function () {
    //var mainLabel = document.getElementById("mainLabel");
    //mainLabel.innerHTML = "Loaded";
    words = GetWordsClient();
    AddBindings();
    GetWord();
};

function AddBindings(){
    //var currentInput = document.getElementById("formOne");
    document.getElementById("formOne").addEventListener("keyup", function (){
        var currentInput = this;
        EnteredValue(currentInput);
    });
    document.getElementById("formOne").addEventListener("change", function(){
        var currentInput = this;
        ChangedValue(currentInput);
    });

    document.getElementById("formTwo").addEventListener("keyup", function (){
        var currentInput = this;
        EnteredValue(currentInput);
    });
    document.getElementById("formTwo").addEventListener("change", function(){
        var currentInput = this;
        ChangedValue(currentInput);
    });

    document.getElementById("formThree").addEventListener("keyup", function (){
        var currentInput = this;
        EnteredValue(currentInput);
    });
    document.getElementById("formThree").addEventListener("change", function(){
        var currentInput = this;
        ChangedValue(currentInput);
    });

    document.getElementById("formFour").addEventListener("keyup", function (){
        var currentInput = this;
        EnteredValue(currentInput);
    });
    document.getElementById("formFour").addEventListener("change", function(){
        var currentInput = this;
        ChangedValue(currentInput);
    });

    document.getElementById("formFive").addEventListener("keyup", function (){
        var currentInput = this;
        EnteredValue(currentInput);
    });
    document.getElementById("formFive").addEventListener("change", function(){
        var currentInput = this;
        ChangedValue(currentInput);
    });
}

function ChangedValue(currentInput){
    if (currentInput.value != currentWord[currentInput.id]){
        document.getElementById(currentInput.id + "Label").innerHTML = "Wrong! Correct:" + currentWord[currentInput.id];
        document.getElementById(currentInput.id + "Label").style.display = '';
        currentInput.focus();
    }
}

function EnteredValue (currentInput){
    if (currentInput.value === currentWord[currentInput.id]){
        document.getElementById(currentInput.id + "Label").innerHTML = "Correct!";
        document.getElementById(currentInput.id + "Label").style.display = '';
        switch (currentInput.id){
            case "formOne":
                document.getElementById("formTwo").focus();
                break;
            case "formTwo":
                document.getElementById("formThree").focus();
                break;
            case "formThree":
                document.getElementById("formFour").focus();
                break;
            case "formFour":
                document.getElementById("formFive").focus();
                break;
            case "formFive":
                GetWord();
                break;
        }
    }
}

function GetWord(){
    var index = Math.floor((Math.random() * words.length) - 1);
    currentWord = words[index];

    document.getElementById("formZeroLabel").innerHTML =  currentWord.formZero;
    //document.getElementById("formOneLabel").innerHTML =  currentWord.formOne;
    document.getElementById("formOneLabel").style.display = 'none';
    //document.getElementById("formTwoLabel").innerHTML =  currentWord.formTwo;
    document.getElementById("formTwoLabel").style.display = 'none';
    //document.getElementById("formThreeLabel").innerHTML =  currentWord.formThree;
    document.getElementById("formThreeLabel").style.display = 'none';
    //document.getElementById("formFourLabel").innerHTML =  currentWord.formFour;
    document.getElementById("formFourLabel").style.display = 'none';
    //document.getElementById("formFiveLabel").innerHTML =  currentWord.formFive;
    document.getElementById("formFiveLabel").style.display = 'none';


    document.getElementById("formOne").value = "";
    document.getElementById("formTwo").value = "";
    document.getElementById("formThree").value = "";
    document.getElementById("formFour").value = "";
    document.getElementById("formFive").value = "";
    document.getElementById("formOne").focus();
}
