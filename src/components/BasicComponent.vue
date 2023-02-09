<script>
export default{
    props: {
        title: String,
        contents: Array
    }
}
</script>

<template>
    <div class="sub-card">
        <b>{{ title }}</b>
        <div class="white-subcard">
            <p v-for="(content, index) in contents" :key="index">{{ content }}</p>
        </div>
    </div>
</template>