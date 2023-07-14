const email = document.getElementById('email')
const senha = document.getElementById('senha')

// cost = nao muda o valor                                                                                            let e var 

function login() {
    if (email.value == 'cafe@gmail.com' && senha.value == '1234') {
        window.alert('acesso liberado')
    }
    else {
        window.alert('acesso negado')
    }
}