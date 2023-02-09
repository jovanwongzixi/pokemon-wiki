<script>
export default {
    props: {
        abilities: Array
    }
}
</script>

<script setup>
import capitalise from '../helper/capitaliseFirstChar';
</script>

<template>
    <div class="sub-card">
        <b>Abilities</b>
        <div class="white-subcard">
            <div v-for="(item, index) in abilities" :key="index">
                <p>{{ capitalise(item.ability.name) }}</p>
            </div>
        </div>
    </div>
</template>