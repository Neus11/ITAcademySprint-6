
    Vue.component('home', {
        template: //html
        `
        <div>          
            <escena 
            :textos = 'arrayTexts' 
            :botones = 'currentSentence' 
            :activeIt = 'activeItem'
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
                activeItem: 0
            }
        },
        methods: {
            
            currentSentence(i) {
                if(i == 'sentence2'){
                    this.activeItem++;
                }
                if(i == 'sentence1'){
                    this.activeItem--;
                }
                
            }
        }
    })