<script>
export default{
    props: {
        height: Number,
        weight: Number,
    },
    computed: {
        generateHeight(){
            return (parseFloat(this.height)/10).toFixed(1) + 'm'
        },
        generateWeight(){
            return (parseFloat(this.weight)/10).toFixed(1) + 'kg'
        }
    }
}
</script>

<template>
    <div class="sub-card">
        <b>Height & Weight</b>
        <div class="white-subcard">
            <p>{{ generateHeight }}</p>
            <p>{{ generateWeight }}</p>
        </div>
    </div>
</template>