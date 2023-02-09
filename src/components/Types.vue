<script>
export default {
    props: {
        types: Array,
    }
}
</script>

<script setup>
import capitalise from '../helper/capitaliseFirstChar'
</script>

<template>
    <div class="sub-card">
        <b>Types</b>
        <div class="white-subcard">
            <div :class="item.type.name" id="type-container" v-for="(item,index) in types" :key="index">
                <p class="type-name">{{ capitalise(item.type.name) }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.white-subcard{
    align-content: center;
}
.type-name{
    color: white;
}
.white-subcard{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
#type-container{
    border-radius: 5px;
    padding: 0px 4px 0px 4px;
    margin: 2px;
}
</style>