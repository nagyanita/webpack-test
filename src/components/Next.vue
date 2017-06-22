<template>
  <div class="next">
    <div class="btn-group" role="group" aria-label="...">
      <router-link to="/otthonikeszlet"><button type="button" class="btn">Otthoni készlet</button></router-link>
      <button type="button" class="btn">Új termék</button>
      <button type="button" class="btn">Bevásárló lista</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'next',
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  font-size: 30px;
  padding: 10px 24px;
  border-radius: 8px;
  color: white;
  background-color: #6495ED;
  border: 2px solid white;
}
</style>
