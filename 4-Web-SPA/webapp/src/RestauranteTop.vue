<template>
	
	<h2>{{ texto }} : {{ id_restaurante }}</h2>

</template>


<script>
	export default {
	  	name: 'restaurantes-top',
	  	mounted(){
	  		this.id_restaurante = this.$route.params.id;
	  	},
		data () {
		    return {
		     	texto: 'Pagina Restaurantes Top',
		     	id_restaurante: null,
		    }
	  	}
	}
</script>


<style lang="scss">
	

</style>