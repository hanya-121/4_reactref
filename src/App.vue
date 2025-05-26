<template>
  <h1>에밋메서드</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  <div class="" id="wrapper">
    <div>
      <food-item
        v-for="x in foods"
        :key="x.name"
        :food-name="x.name"
        :food-desc="x.desc"
        :is-favorite="x.favorite"
        @toggle-favorite="receiveEmit"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        {
          name: "Apples",
          desc: "Apples are a type of fruit that grow on trees.",
          favorite: true,
        },

        {
          name: "Pizza",
          desc: "Pizza has a bread base with tomato sauce, cheese, and toppings on top.",
          favorite: false,
        },

        {
          name: "Rice",
          desc: "Rice is a type of grain that people like to eat.",
          favorite: false,
        },

        {
          name: "Fish",
          desc: "Fish is an animal that lives in water.",
          favorite: true,
        },

        {
          name: "Cake",
          desc: "Cake is something sweet that tastes good.",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    receiveEmit(foodId) {
      //$emit으로 전달된 foodId를 매개변수로 받음
      let foundFood = this.foods.find(
        //변수 findFood에 조건을 만족하는 첫번째 객체 찾아냄
        (food) => food.name === foodId //완전히 일치
      );
      foundFood.favorite = !foundFood.favorite; //찾은 음식 객체의 fovorite 속성을 현재값의 반대로 설정
    },

    receiveEmit() {
      alert("🐈 Cat world 🐈");
    },
  },
};
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightskyblue;
}
</style>

<!--
Vue $emit() 메서드 => 구성요소에서 부모로 정보를 전달해야 되는 경우
- 부모 요소에서 캡처 할 수 있는 사용자 정의 이벤트를 자식 구성 요소에서 만들 수 있음
- props는 부모 요소에서 자식 구성요소로 데이터를 전달
- $emit은 자식 구성요소에서 부모 요소로 데이터를 전달 (props와 반대)
-->