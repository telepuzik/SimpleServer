/**
 * Created by  on 09.09.2014.
 */
console.log ("loaded");
window.onload = function () {
    var mainLabel = document.getElementById("mainLabel");
    mainLabel.innerHTML = "Loaded";
    //console.log ("loaded");
    var words = GetWordsClient();
    console.log(words);
};

function GetWords(){

}
