var check = {};

function cadastro() {

    var registrousuario = document.getElementById('nomeusuario').value;
    var registrosenha = document.getElementById('pass').value;
    var registroemail = document.getElementById('email').value;
    var check1 = document.getElementById('pass').value;
    var check2 = document.getElementById('pass2').value;

    check.usuario = registrousuario;
    check.email = registroemail;
    check.pass1 = check1;
    check.pass2 = check2;

    function checkPass() {
        if (check1 != check2 || check1 === '' && check2 === '') {
            alert("Senhas não conferem ou nulas");
            return false;

        } else (check1 === check2)
             console.log("senhas iguais");
    }

    function checkfield() {
        if (registrousuario== '' || registroemail==''){
            alert("Preencha todos os Campos")
        } else console.log('campos preenchidos')
    }

    checkPass(); checkfield();

}

function maiuscula () {
    var maiuscula = document.getElementById("email");
    maiuscula.value = maiuscula.value.toUpperCase();

    function checaremail() {

        if (document.forms[0].email.value ==' '
        || document.forms[0].email.value.indexOf('@')== -1
        || document.forms[0].email.value.indexOf('.')== -1){
            alert("Verifique o e-mail digitado") ;
            return false;
        }
    }
    
   checaremail();
    
    }; 

    function alertemail (){

        if (document.forms[0].email.value.length == 0) {
            alert('Por favor, informe um e-mail');
                document.cadastroform.email.focus();
            return false;

        }
        return true;

    }; 

    function checarsenha () {
        // testando função para validação de senhas
    var check1 = document.getElementById('pass').value;
    if (check1.indexOf('@')== -1){
        document.getElementById('textpassword').innerHTML = "Senha Fraca"
    } else document.getElementById('textpassword').innerHTML = "Senha Media"
};


