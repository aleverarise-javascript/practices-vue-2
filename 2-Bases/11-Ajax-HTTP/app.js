Vue.filter('mayusculas', (value) => value.toUpperCase() );

new Vue({
	el: "main",
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta) => {
				this.posts = respuesta.data;
			})
	},
	data: {
		posts: null,
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
		confirmado: null,
	},
	methods: {
		crearPelicula(){
			this.peliculas.push(this.peliculaNueva);
			this.peliculaNueva = '';
		},
		borrarPelicula(index){
			// alert(index);
			this.peliculas.splice(index, 1);
		},
		marcar(key){
			this.confirmado = key;
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
	
});

const vue2 = new Vue({
	el: '#app',
	data: {
		texto: 'Segunda instancia vue',
	}
});

const vue3 = new Vue({
	el: '#app1',
	data: {
		texto: 'tercera instancia vue',
	}
});