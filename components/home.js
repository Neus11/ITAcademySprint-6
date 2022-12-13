
    Vue.component('home', {
        template: //html
        `
        <div>    
            <div :class='{isHidden: isHidden}'>
                <h1>Benvinguts!</h1>
                <h3>Preparats per accedir als consells??</h3>
                <h2>Pressioni el botó per seguir</h2>
                <button @click='showHide()':class='{isHidden: isHidden}'>CLiCK ME!</button>
            </div> 
             
            <escena 
            :textos = 'arrayTexts' 
            :botones = 'currentSentence' 
            :activeIt = 'activeItem'
            :isHid = 'isHidden'
            @ant="currentSentence" 
            @seg="currentSentence"></escena>
        </div>
        `,
        data(){
            return {
                arrayTexts: [
                    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",

                    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",

                    "L'heroi va decidir travessar la porta que el portava a casa",

                    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
                ],
                sentence1: '',
                sentence2: '',
                activeItem: 0,
                isHidden: false
            }
        },
        methods: {
            currentSentence(i) {
                if(i == 'sentence2' && this.activeItem <= 4){
                    this.activeItem++;
                }
                if(i == 'sentence1' && this.activeItem > 0){
                    this.activeItem--;
                }  
            },
            showHide(){
                this.isHidden = !this.isHidden;
            }
        }
    })