var Text_input=document.querySelector("#txtinput");
var Button_translate=document.querySelector("#Translate");
var Text_output=document.querySelector("#txtoutput");
var url="https://api.funtranslations.com/translate/pirate.json";

function Urlget(text)
{
    return url+"?"+"text="+text;
}

function Translate()
{
    var inputval=Text_input.value
    fetch(Urlget(inputval))
    .then(response=>response.json())
    .then(json=>
    {
        var translate=json.contents.translated;
        Text_output.innerText=translate;
    
})
.catch(ErrorHandler);
}
function ErrorHandler(error)
{
    console.log("error occured",error);
    alert("something went wrong");
}





Button_translate.addEventListener("click",Translate);