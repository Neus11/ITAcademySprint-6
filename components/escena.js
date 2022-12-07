Vue.component('escena', {
    template: //html
    `
    <div v-if="isHid">
        <button @click="$emit('ant', 'sentence1')">Anterior</button>
        <button @click="$emit('seg', 'sentence2')">Següent</button> 
        <!--Aqui es un text que provee del primer exercici.
        <p>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</p>
        <hr>-->
        <p  v-for="(text, i) in textos"
            :key="i"
            :class="{frasePrueba: i === activeIt}">
            {{text}} 
        </p>
    </div>
    `,
    props: ['textos', 'botones', 'activeIt', 'isHid']
})