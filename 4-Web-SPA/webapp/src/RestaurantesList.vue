<template>
	<div>
		<ul id="restaurantes-list" v-if="restaurantes != null">
			<li v-for="restaurante in restaurantes">
				<strong>{{ restaurante.nombre }}</strong>
				<p>
					<router-link :to="{name: 'restaurante', params: {id: restaurante.id} }">Ver</router-link>
					<router-link :to="{name: 'editar-restaurante', params: {id: restaurante.id} }">Editar</router-link>
					<span v-if="showBorrar != restaurante.id">
						<a v-on:click="borrarRestaurante(restaurante.id)" style="cursor: pointer">Eliminar</a>
					</span>
					<span v-else>
						<p>¿ estas seguro de querer borrarlo?</p>
						<button v-on:click="cancelarBorrado()">Cancelar</button>
						<button v-on:click="confirmarBorrado(restaurante.id)">Borrar</button>
					</span>
				</p>
			</li>
		</ul>
		<span v-else>Cargando Restaurantes...</span>
	</div>
</template>


<script>
import axios from 'axios';

	export default {
	  	name: 'restaurantes-list',
	  	mounted(){
	  		this.getRestaurantes();
	  	},
		data () {
		    return {
		     	texto: 'Pagina Restaurantes List',
		     	restaurantes: null,
		     	showBorrar: '',
		    }
	  	},
	  	methods:{
	  		getRestaurantes(){
	  			axios.get('http://localhost/dashboard/Cursos/VueJS/VersionPaga/4-Web-SPA/api-webApp/restaurantes-api.php/restaurantes')
	  				.then((respuesta) => {
	  					this.restaurantes = respuesta.data.data;
	  				});
	  		},
	  		borrarRestaurante(id){
	  			this.showBorrar = id;
	  		},
	  		cancelarBorrado(){
	  			this.showBorrar = '';
	  		},
	  		confirmarBorrado(id){
	  			axios.get('http://localhost/dashboard/Cursos/VueJS/VersionPaga/4-Web-SPA/api-webApp/restaurantes-api.php/delete-restaurante/'+id)
	  			.then((respuesta) => {
	  				this.showBorrar = '';
	  				this.getRestaurantes();

	  			});
	  		}
	  	}
	}
</script>


<style lang="scss">
	
	#restaurantes-list{
		padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding: 20px;
			overflow: hidden;
		}
	}

</style>