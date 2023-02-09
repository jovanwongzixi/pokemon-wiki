<script>
export default {
    props: {
        front_default: String,
        back_default: String
    },
}
</script>

<template>
    <div class="sub-card">
        <div class="white-subcard">
            <img :src="front_default" /> 
            <img :src="back_default" /> 
        </div>
    </div>
</template>

<style scoped>
.white-subcard{
    display: flex;
    flex-direction: row;
}

.white-subcard > img {
    width: 200px;
    height: 200px;
}
</style>