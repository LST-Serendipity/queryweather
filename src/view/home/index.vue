<template>
    <div> 
        <h2>无论天气好坏，都藏着别样的诗意</h2>
        <div class="containerHome">
            <img src="https://haowallpaper.com/link/common/file/previewFileImg/16399281961815424" alt="愿你每天都有一个好心情" class="img_1">
            <img src="https://haowallpaper.com/link/common/file/previewFileImg/16517236433538432" alt="愿你每天都有一个好心情" class="img_2">
            <img src="https://haowallpaper.com/link/common/file/previewFileImg/79dc761210915a5728604c762b6fc0bd" alt="愿你每天都有一个好心情" class="img_3">
            <img src="https://haowallpaper.com/link/common/file/previewFileImg/16449373166816640" alt="愿你每天都有一个好心情" class="img_4">
            <img src="https://haowallpaper.com/link/common/file/previewFileImg/15788491055272256" alt="愿你每天都有一个好心情" class="img_5">
         
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped >
    h2{
        text-align: center;
        margin: 40px 0;
        font-family: KaiTi, serif;
    }
    .containerHome{
        padding: 5px;
        box-sizing: border-box;
        display:grid ;
        grid-template-columns: repeat(25,1fr);
        grid-template-rows: repeat(20,1fr);
        width: 100%;
        height: 600px;
        gap: 10px;
        justify-items: center;
        overflow: hidden;

        
        .img_1{
            position: relative;
            width: 100%;
            height: 100%;
            grid-row-start: 1;
            grid-row-end: 8;
            grid-column-start: 1;
            grid-column-end: 11;
            border-radius: 20px;

        }
        .img_2{
            position: relative;
            width: 100%;
            height: 100%;
            grid-row-start: 1;
            grid-row-end: 12;
            grid-column-start: 12;
            grid-column-end: 26;
            border-radius: 20px;
        }
        .img_3{
            position: relative;
            width: 100%;
            height: 100%;
            grid-row-start: 8;
            grid-row-end: 21;
            grid-column-start: 1;
            grid-column-end: 8;
            border-radius: 20px;
        }
        .img_4{
            position: relative;
            width: 100%;
            height: 100%;
            grid-row-start: 12;
            grid-row-end: 21;
            grid-column-start: 8;
            grid-column-end: 19;
            border-radius: 20px;
        }
        .img_5{
            
            position: relative;
            width: 100%;
            height: 100%;
            grid-row-start: 13;
            grid-row-end: 20;
            grid-column-start: 19;
            grid-column-end: 26;
            border-radius: 20px;
            
        }

    }
    img:hover{
        box-shadow: 5px 5px 8px rgb(59, 59, 59);
    }
    
</style>