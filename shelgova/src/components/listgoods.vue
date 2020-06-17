<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">Список покупок</h1>
      <div>
        <div class="form-group">
          <label for="nameGood">Название покупки</label>
          <input id="nameGood" type="text" placeholder="Название" class="form-control" v-model="good.name">
        </div>
        <div class="form-group">
          <label for="quanGood">Количество</label>
          <input id="quanGood" type="text" placeholder="Количество" class="form-control" v-model="good.quantity">
        </div>
      </div>
      <div class="buttons-group mb-5">
        <button class="btn btn-dark mr-5" v-on:click="saveGood()">Записать</button>
        <button class="btn btn-dark ml-5" v-on:click="clearForm()">Очистить</button>
      </div>
      <div class="pt-2 pb-2 listofgoods">
        <h3 class="text-center mt-5">Текущий список</h3>
        <div class="row mt-3 mb-3 ml-3" v-for="good in goods" v-bind:key="good.id">
          <div class="col-6 text-center posgood">{{good.name}}</div>
          <div class="col-6 text-center posgood">{{good.quantity}}</div>
        </div>
      </div>
      <div class="row dop-images">
        <div class="mt-5 col-sm-12 col-md-6 col-lg-4">
          <img class="img-fluid float-left" alt="food" src="../assets/image.jpg" />
        </div>
        <div class="mt-5 col-sm-12 col-md-6 col-lg-4">
          <img class="img-fluid float-right" alt="goods" src="../assets/image2.jpg" />
        </div>
        <div class="mt-5 col-sm-12 col-md-6 col-lg-4">
          <img class="img-fluid" alt="sale" src="../assets/image1.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "listgoods",
    data () {
      return {
        good: {
          name: "",
          quantity: ""
        },
        goods: []
      }
    },
    methods: {
      async saveGood() {
        if (this.good.name != "" && this.good.quantity != "") {
          let good = {
            name: this.good.name,
            quantity: this.good.quantity
          };
          this.clearForm();
          try {
            await this.$http.post("http://localhost:3000/goods", good);
            this.updateListGoods();
          }
          catch(err) {
            console.error(err);
          }
        }
      },
      async updateListGoods() {
        try {
          let res = await this.$http.get("http://localhost:3000/goods");
          this.goods = await res.json();
        }
        catch(err) {
          console.error(err);
        }
      },
      clearForm() {
        this.good.name = "";
        this.good.quantity = "";
      }
    },
    created() {
      this.updateListGoods();
    }
  }
</script>

<style>
  .dop-images{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
  }
  .listofgoods {
    background-image: url(../assets/theme-list.jpg);
    background-size: cover;
  }
  .buttons-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .btn {
    color: white;
    background-color: black;
  }
  .form-control {
    border: 2px solid black;
    border-radius: 15px;
    font-size: 1.5rem;
  }
  .form-group label {
    font-size: 1.5rem;
  }
</style>
