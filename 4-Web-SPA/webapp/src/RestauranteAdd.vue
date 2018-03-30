<template>
	<div id="restaurante-add">
		<form v-on:submit.prevent="guardarRestaurante">
			<h2>Crear Nuevo Restaurante</h2>
			<p>
				<label for="nombre">nombre</label>
				<input type="text" id="nombre" name="nombre" v-model="restaurante.nombre">
			</p>
			<p>
				<label for="direccion">direccion</label>
				<input type="text" id="direccion" name="direccion" v-model="restaurante.direccion">
			</p>
			<p>
				<label for="descripcion">descripcion</label>
				<textarea name="descripcion" id="descripcion" rows="5"  v-model="restaurante.descripcion"></textarea>
			</p>
			<p>
				<label for="precio">precio</label>
				<select name="precio" id="precio" v-model="restaurante.precio">
					<option value="">Seleccione una opcion</option>
					<option value="bajo">Bajo</option>
					<option value="normal">Normal</option>
					<option value="alto">Alto</option>
				</select>
			</p>

			<input type="submit" value="Guardar Restaurante">
		</form>
	</div>
</template>


<script>

import axios from 'axios';
export default {
	name: 'restaurante-add',
	mounted(){

	},
	data(){
		return {
			restaurante: {
				nombre: '',
				direccion: '',
				descripcion: '',
				precio: 'normal'
			}
		}
	},
	methods:{
		guardarRestaurante(){
			var router = this.$router;
			var params = 'json='+JSON.stringify(this.restaurante);
			axios.post('http://localhost/dashboard/Cursos/VueJS/VersionPaga/4-Web-SPA/api-webApp/restaurantes-api.php/restaurantes', params)
				.then((respuesta) => {
					if(respuesta.data.status == 'success'){
						// redirigir
						router.push('/restaurantes');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} 
	}
}

</script>