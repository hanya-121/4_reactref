<!-- 
vue 구성요소 : 사용자의 인터페이스와 특정부분을 캡슐화하는 
재사용 가능하고 독립적인 코드 조각으로 사용 하는 것  
-->

<template>
<div v-on:click="countClicks">
<h1>{{foodName}}</h1>
<img src="../assets/img/img_quality.svg" v-show="isFavorite">
<p>{{foodDesc}}</p>

<h2>{{name}}</h2>
<p>{{message}}</p>
<p id="red">
저를 {{clicks}} 번 클릭 했네용
</p>
</div>
</template>
<script>
export default{
    data(){
        return{
        name:'하얀',
        message:'먹부림',
        clicks:0
        }       
    },
    methods:{
        countClicks(){
            this.clicks++
        }
    },
    props:[
        'foodName','foodDesc','isFavorite'
    ]
}
</script>
<style>
#red{
    font-weight:bold;
    color:rgb(15, 87, 219)
}
img{
    height:1.5em;
    float:right;
}
</style>