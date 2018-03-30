Vue.filter('mayusculas', (value) => value.toUpperCase() );

new Vue({
	el: "main",
	data: {
		peliculas: [
			{nombre: 'spiderma'},
			{nombre: 'insidius'},
			{nombre: 'hannibal'},
			{nombre: 'aleverarise'},
		],
		peliculaNueva: '',
		nombre: 'Alejandro',
		apellido: 'Sanchez',
		nota: '10',
		buscar: null,
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
	},
	computed: {
		nombreYapellidos(){
			var date = new Date();
			var year = date.getFullYear();
			return this.nombre + ' ' + this.apellido + ' - ' + this.nota + ' ' + year
		},
		peliculasOrdenadas(){
			return this.peliculas.sort();
		},
		buscarPelicula(){
			return this.peliculas.filter((pelicula) => pelicula.nombre.includes(this.buscar));
		}
	}
	
})