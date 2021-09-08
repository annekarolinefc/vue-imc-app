<template>
  <h1 class="label-title">Cálculo de IMC</h1>
  <h2 class="label-subtitle">Digite seu peso e altura para calcular o IMC</h2>

  <div class="div-imc">
    <span class="p-float-label">
	<InputText id="input-weight" type="text" v-model="weight" v-bind:disabled="imc" />
	<label for="input-weight">Peso (kg)</label>
  </span>
  </div>

  <div class="div-imc" >
    <span class="p-float-label">
	<InputText id="input-height" type="text" v-model="height" v-bind:disabled="imc" />
	<label for="input-height">Altura (m)</label>
  </span>
  </div>

  <div class="div-imc" v-if="!imc">
    <Button label="Limpar" @click="clear"/>
    <Button class="button-calculate" label="Calcular" @click="calculate"/>
    
  </div>



  <div v-if="imc">
    <p class="label-result">Seu IMC é: {{ imc }}</p>
    <p class="label-classification">A classificação do seu IMC é: {{ classification }}</p>
    <Button @click="clear" label="Calcular Novamente"/>
  </div>
  
</template>

<script>

export default {
  data(){
    return{
      height: null,
      weight: null,
      imc: null,
      classification: ""
    }
  },
  methods:{
    calculate: function(){
      console.log(this.imc);
      this.imc=(this.weight/(this.height*this.height)).toFixed(2);
      console.log(this.height);
      console.log(this.weight);
      console.log(this.imc);
      if(this.imc<18.5){
        this.classification="Magreza"
      } else if(this.imc>=18.5 && this.imc<25){
        this.classification="Normal";
      } else if(this.imc>=25 && this.imc< 30){
        this.classification="Sobrepeso"
      } else if(this.imc>=30 && this.imc<40){
        this.classification="Obesidade"
      }else{
        this.classification="Obesidade Grave"
      }
    },
    clear(){
      this.height= null,
      this.weight= null,
      this.imc= null,
      this.classification= "",
      this.result=""
    }
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
}

.div-imc{
  margin-top: 2rem;
}

.button-calculate{
  margin-left: 1rem !important;
}

.label-title{
  font-size: 2rem;
}

.label-subtitle{
  font-size: 1.1rem;
}

.label-result{
  font-size: 2rem;
}
.label-classification{
  font-size: 1.5rem;
}

</style>
