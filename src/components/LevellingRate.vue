<script>
import capitalise from '../helper/capitaliseFirstChar';

export default{
    props: {
        rate: JSON
    },
    computed: {
        generateLevellingRate(){
            return this.rate === undefined ? '' : capitalise(this.rate.name)
        }
    }
}
</script>

<template>
    <div class="sub-card">
        <b>Levelling rate</b>
        <div class="white-subcard">
            <p>{{ generateLevellingRate }}</p>
        </div>
    </div>
</template>