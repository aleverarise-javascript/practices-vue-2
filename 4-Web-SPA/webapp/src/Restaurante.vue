<template>
	<div>
		<h1>Detalle del restaurante {{ restaurante.id }}</h1>
		<div id="restaurante-detail" v-if="restaurante != null">
			<h2 v-text="restaurante.nombre"></h2>
			<p v-text="restaurante.descripcion"></p>
		</div>
		<span v-else>Cargando Resturante</span>
	</div>
</template>


<script>
import axios from 'axios';

	export default {
	  	name: 'restaurante-detalle',
	  	mounted(){

	  		this.id = this.$route.params.id;
	  		axios.get('http://localhost/dashboard/Cursos/VueJS/VersionPaga/4-Web-SPA/api-webApp/restaurantes-api.php/restaurante/'+this.id)
	  			.then((respuesta) => {
	  				this.restaurante = respuesta.data.data;
	  			});

	  	},
	  	data(){
	  		return {
	  			id: "",
	  			restaurante: "",
	  		}
	  	},
	  	
	}
</script>


<style lang="scss">
	
	

</style>