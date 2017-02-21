 var x = 'Hi, Stack Overflow.';

    alert(caseAlter(x));

    function caseAlter(txt){
        var output = "";

        for(var i = 0; i < txt.length; i++){
            if(txt[i] == txt[i].toUpperCase()){
                output += txt[i].toLowerCase();
            }else{
                output += txt[i].toUpperCase();
            }           
        }

        return output;