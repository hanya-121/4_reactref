<!-- ↓ 컴포넌트 태그를 만들고 props를 전달 하는 예시를 구현 -->
<template>
  <!-- <h1 class="my-5">Food</h1>
  <food-item food-name="최하얀" food-desc="학생" v-bind:is-favorite="true"/>
  <food-item food-name="Pizza" food-desc="미스터 피자" v-bind:is-favorite="false"/>
  <food-item food-name="Rice" food-desc="eat" v-bind:is-favorite="false"/> -->

  <h1 class="mt-5 mb-3 fw-bold text-success">Food</h1>  <!-- mt-5마진탑 mb-3마진바텀 fw-bold폰트weight -->
  <p>아래의 버튼을 누르면 item이 순차적으로 하나씩 제거 됩니당</p>
  <button class="btn btn-outline-danger" @click="removeItem">버튼button버어어튼</button>
  <!-- 표기차이, 리액트: onClick 뷰:@click -->
  <div id="wrapper"> 
    <food-item
    v-for = "x in foods"
    :key="x.name"
    :food-name="x.name"
    :food-desc="x.desc"
    :is-favorite="x.favorite"
    />
  </div> <!-- 아까는 수량대로 item을 적었는데 불편함, 그래서 item을 컴포넌트 모듈화 시키고 필요한만큼 재사용함-->
</template>

<script>
export default{
  data(){
    return{
    foods:[
      {name:'사과', desc:'red', favorite:true},
      {name:'피자', desc:'hut', favorite:false},
      {name:'바나나', desc:'yellow', favorite:false},
      {name:'hayan', desc:'me', favorite:true},
      {name:'cake', desc:'케이크', favorite:false}
    ]
    };
  },
  methods:{
  removeItem(){
    this.foods.splice(1,1);
    }
  }
}
</script>

<style>
 /* #app>div{
  border:dashed black 1px;
  display:inline-block;
  width:400px; 
  margin:10px;
  padding:10px;
  background-color:lightgoldenrodyellow;
 }
 #app>div:hover{
  cursor:pointer;
 } */
  
#wrapper{
  display:flex;
  flex-wrap:wrap;
}
#wrapper > div{
  border:dashed black 1px;
  flex-basis:120px;
  margin:10px;
  padding:10px;
  background:lightgoldenrodyellow;
}
</style>

<!--
250514
Vue Props
- Vue의 구성옵션
- Props를 사용하면 사용자정의 속성을 컴포넌트 태그에 지정하여 컴포넌트에 데이터를 전달 할 수 있음
- 구성 요소에 데이터 전달
- 리액트 클래스형 컴포넌트에서 최초의 props를 사용, 그리고 함수형 컴포넌트가 나오면서 hook로 전환

250515 
v-for Component
: 동일한 종류의 많은 요소를 생성하는데 재사용 될 수 있음
v-for배열의 값이 따라 props를 동적으로 할당 할 수 있음
-->