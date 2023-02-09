<script>
export default {
    props: {
        stats: {
            value: Array,
            required: true,
        }
    },
    data() {
        return {
            shortenedStatNames: {
                'hp': 'HP',
                'attack': 'Atk',
                'defense': 'Def',
                'speed': 'Spd',
                'special-attack': 'Sp. Atk',
                'special-defense': 'Sp. Def'
            },
            statColors:{
                'hp': '#FF5959',
                'attack': '#F5AC78',
                'defense': '#FAE078',
                'speed': '#FA92B2',
                'special-attack': '#9DB7F5',
                'special-defense': '#A7DB8D'
            }
        }
    }
}
</script>

<template>
    <div class="sub-card">
        <b class="card-title">Base stats</b>
        <div class="stats">
            <div 
                class="indiv-stat" 
                v-for="(item, index) in stats" 
                :key="index"
                :style="{'background-color': statColors[item.stat.name]}"
            >
                <p>{{ `${item.base_stat}` }}</p>
                <p>{{ `${shortenedStatNames[item.stat.name]}` }}</p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.sub-card{
    display: flex;
    flex-direction: column;
}
.stats{
    background-color: white;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 5px;
    justify-content: space-around;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
}

.indiv-stat{
    width: 4rem;
    border-radius: 10px;
}
</style>