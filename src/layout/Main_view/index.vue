<template>
    <div class="tabber"></div>
    <div class="router_main">
        <router-view></router-view>
    </div>
</template>

<script setup lang='ts'>
    


</script>

<style scoped >
    .tabber{
        width: 100%;
        height: 8%;
        background-color: rgb(149, 217, 244);
        margin-bottom:20px ;
        border-top: 5px solid black;
        border-bottom: 10px solid black;
    }
    .tabber:hover{
        box-shadow: 4px 0px 8px gray;
        z-index: 1;
    }
    .router_main{
        width: 100%;
        height: 90%;
    }
</style>