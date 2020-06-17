<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">Список</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="pt-5 pb-5">
      <router-view></router-view>
    </main>
    <footer class="bg-dark navbar-dark">
      <p class="mysign">Шельгова Дарья Сергеевна группа 181-362 17.06.2020</p>
      <ul class="listlinks">
        <li><a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">Официальный сайт Bootstrap</a></li>
        <li><a href="https://html5css.ru/bootstrap4/default.php" target="_blank">Учебник Bootstrap 4</a></li>
        <li><a href="https://ruseller.com/htmlshpora.php" target="_blank">Справочник по html тегам и css (1)</a></li>
        <li><a href="http://htmlbook.ru/html5" target="_blank">Справочник по html тегам и css (2)</a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference" target="_blank">Справочник JavaScript</a></li>
        <li><a href="https://router.vuejs.org/ru/guide/#html" target="_blank">VueRouter (1)</a></li>
        <li><a href="https://metanit.com/web/vuejs/8.1.php" target="_blank">VueRouter (2)</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    //MainPage,
    //ListGoods
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
* {
  font-family: 'Sriracha', cursive;
}
.mysign {
  font-size: 15px;
}
footer {
  padding: 20px;
  color: white;
}
.listlinks {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
li {
  list-style-type: none;
  margin-right: 5px;
}
a {
  color: white;
}
.posgood {
  font-size: 25px;
}
main {
  background-image: url(./assets/theme-notepad.jpg);
}
</style>
