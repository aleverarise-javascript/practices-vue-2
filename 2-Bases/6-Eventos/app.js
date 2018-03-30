new Vue({
	el: "main",
	data: {
		peliculas: [],
		peliculaNueva: '',
	},
	methods: {
		crearPelicula(){
			this.peliculas.push(this.peliculaNueva);
			this.peliculaNueva = '';
		},
		borrarPelicula(index){
			// alert(index);
			this.peliculas.splice(index, 1);
		}
	}
	
})