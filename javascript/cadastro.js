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
