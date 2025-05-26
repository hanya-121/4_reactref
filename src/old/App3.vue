<template>
<h1>Food</h1>
<p>v-for가 Component를 배열로 만들어 준당</p>
<div class="" id="wrapper">
    <food-item
    v-for="x in foods"
    v-bind:food-name="x"
    />
</div>

</template>

<script>
export default{ // 데이터를 컴포넌트에 담아주는
    data(){
        return{
            foods:['사과','메론','귤','참외','오렌지']
        };
    }
}
</script>

<style>
#wrapper{
    display:flex;
    flex-wrap:wrap;
}
#wrapper > div{
    border:dashed black 1px;
    margin:10px;
    padding:0 20px;
    background:pink;
}
</style>

<!--
Vue 삼위일체!!!!!!! html 자바스크립트 css
-->