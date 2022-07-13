<template>
    <div class="name">
        {{name}}        
    </div>
</template>

<style>
    .name{
        color: rgb(61, 73, 142);
        background-color: aqua;
    }
</style>

<script>
export default {
    name:'TipName',
    data() {
        return {
            name:'小欧'
        }
    },
}
</script>