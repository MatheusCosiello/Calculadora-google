// factory function
function criaCalculadora(){
    return {
        display:document.querySelector('.display'),

        inicia(){
            alert('testando')
        },
        // captura o evento dos botoes
        cliqueBotoes(){
            document.addEventListener('click',function(e) {
                const el = e.target; /*el=element*/
                
                        /*verifica se o element contem a class btn-num e faz ação */
                    if (el.classList.contains('btn-num')){
                        this.btnParaDisplay();
                    }
            });
        },

    };
}

const calculadora = criaCalculadora();

// metodo que inicia toda cadeia de comandos (gatilho)
calculadora.inicia();