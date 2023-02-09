<script>
export default {
    props: {
        names: Array,
        category: Array,
        id: Number
    },
    computed: {
        generateEnName(){
            return this.names === undefined ? '' : this.names[8].name
        },
        generateJaName(){
            return this.names === undefined ? '' : this.names[0].name
        },
        generateCategory(){
            return this.category === undefined ? '' : this.category[7].genus
        },
        generateId(){
            return this.id === undefined ? '' : '#' + this.id.toString().padStart(4, '0')
        }
    }
}
</script>

<template>
    <div class="sub-card" :style="{'grid-column': '1/span 2'}">
        <div class="white-subcard">
            <b>{{ generateEnName }}</b>
            <p>{{ generateJaName }}</p>
            <p>{{ generateCategory }}</p>
            <b>{{ generateId }}</b>
        </div>
    </div>
</template>