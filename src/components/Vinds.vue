<template>
<div class="">
    <h2>{{ foodName }}
        <img src="../assets/img/stamp.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
</div>
</template>

<script>
export default{
    props:['foodName','foodDesc','isFavorite'],
    // 부모 컴포넌트로부터 세가지 속성을 전달 받음
    data(){ // 컴포넌트 인스턴스의 반응형 상태를 리턴
        return{
            foodIsFavorite : this.isFavorite // 프롭스의 초기값
        }
    },
    methods:{
        toggleFavorite(){ // 즐겨찾기를 반전시킴 (상태가 토글이 됨 true <> false)
            this.foodIsFavorite = !this.foodIsFavorite // 즐겨찾기를 눌렀다면 = 누르지 않았다면
        }
    }
}
</script>

<style>
    img {
        height: 1.5em;
        float: right;
    }
</style>