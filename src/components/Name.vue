<script>
export default {
    props: {
        names: Array,
        category: Array,
        id: Number
    },
    computed: {
        generateEnName(){
            return this.names === undefined ? '' : this.names.find((val) => {return val.language.name === 'en'}).name
        },
        generateJaName(){
            return this.names === undefined ? '' : this.names.find((val) => {return val.language.name === 'ja-Hrkt'}).name
        },
        generateCategory(){
            if(this.category===undefined) return ''
            else{
                try {
                    return this.category.find((val) => {return val.language.name === 'en'}).genus
                } catch (error) {
                    return ''
                }
            }
            // return this.category === undefined ? '' : this.category.find((val) => {return val.language.name === 'en'}).genus
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
            <b v-if="generateEnName">{{ generateEnName }}</b>
            <p v-if="generateJaName">{{ generateJaName }}</p>
            <p v-if="generateCategory">{{ generateCategory }}</p>
            <b v-if="generateId">{{ generateId }}</b>
        </div>
    </div>
</template>