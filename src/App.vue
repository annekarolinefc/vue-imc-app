<template>
  <h1>Cálculo de IMC</h1>
  <h2>Digite seu peso e altura para calcular o IMC</h2>
  <span class="p-float-label">
	<InputText id="input-weight" type="text" v-model="value" />
	<label for="input-weight">Peso</label>
  </span>

  
</template>

<script>

export default {
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
}
</style>
