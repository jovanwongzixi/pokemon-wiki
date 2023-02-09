<script>
export default{
    props: {
        rate: Number
    }
}
</script>

<template>
    <div class="sub-card">
        <b>Capture rate</b>
        <div class="white-subcard">
            <p>{{ rate }}</p>
        </div>
    </div>
</template>