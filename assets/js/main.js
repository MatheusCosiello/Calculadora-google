// factory function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        /*abaixo Chaves do objeto referenciar utilizando this */
        
        inicia() {
            this.cliqueBotoes();
            this.precionaEntrer();

        },

        precionaEntrer(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm(){ /*apaga um caracter */
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('conta invalida');
                return;
            }
        },

        // captura o evento dos botoes
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target; /*el=element*/
                    //console.log(this);
                /*verifica se o element contem a class btn-num e faz ação */
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
    },

   };
}

const calculadora = criaCalculadora();

// metodo que inicia toda cadeia de comandos (gatilho)
calculadora.inicia();