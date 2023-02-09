<script>
import capitalise from '../helper/capitaliseFirstChar';

export default{
    props: {
        habitat: JSON
    },
    computed:{
        generateHabitat(){
            if(this.habitat === undefined){
                return ''
            }
            else if(this.habitat == null){
                return 'Null'
            }
            return capitalise(this.habitat.name)
        }
    }
}
</script>

<template>
    <div class="sub-card">
        <b>Habitat</b>
        <div class="white-subcard">
            <p>{{ generateHabitat }}</p>
        </div>
    </div>
</template>