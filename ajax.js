
document
.getElementById("nameBtn")
.addEventListener('click',function  (e) {e.preventDefault()}
);
document
.getElementById("nameBtn")
.addEventListener('click',sentRequest
);

var is_debugging = true;

function debug(result) {
    if(is_debugging) console.log(result);

    return result;
}

console.clear();

function sentRequest() {
    
    var xhr = new XMLHttpRequest;
    var key ='trnsl.1.1.20181108T113030Z.ae2987ad813d2c91.9f2475ed51dfcbbe42878727b644716ee9c5c522';
    var api = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    var textTo = (document.getElementById('text-for-translation').value);
    // debug(textTo);
    var poesi = textTo;
    poesi  = encodeURIComponent(poesi);
    // debug(textTo);
    // debug(poesi);
    
    var language ='&lang=';


    var dictionary_translate = [
        "ru-en",
        "en-ru",
        "en-ru",
        "en-ru",
        "en-ru",
        "en-ru"
    ]
    for(var i = 0; i < 6; i++){
        // debug("exampleRadios" + i.toString())
        var radio_box = document.getElementById("exampleRadios" + i.toString());
        if(radio_box.checked){ //.hasAttribute("checked")) {
            var checked_lang = radio_box.value;//document.querySelectorAll('[name="lingva"]');
          
         
           
           console.log(checked_lang);
            language += checked_lang;
            break;
        }
    }
    
    var url = api+'?';
    url += 'key=' + key;
    url += '&text='+ poesi;
    url += language;
    debug(url)
    xhr.open('GET',url,true);
    xhr.onreadystatechange= function(){
        console.log("Yander returns :" + xhr.status);
        if(xhr.readyState == 4){
            if(xhr.status == 200){
     
    
            }
           var  result =  JSON.parse(this.responseText);
            debug(result);
         var texte = "";
        texte +=  '<p>'+result.text +'</p>'; 
     
        document.getElementById('result').innerHTML = texte;
}
    }
   
     xhr.send();
};
document
.getElementById("nameBtn")
.addEventListener('dblclick',getReset
);
function getReset(){
    document.getElementById('text-for-translation').value="";
};