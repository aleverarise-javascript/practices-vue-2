new Vue({
	el: "main",
	data: {
		peliculas: ['spiderma', 'insidius', 'hannibal', 'aleverarise'],
		peliculaNueva: '',
		nombre: 'Alejandro',
		apellido: 'Sanchez',
		nota: '10',
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
		}
	}
	
})