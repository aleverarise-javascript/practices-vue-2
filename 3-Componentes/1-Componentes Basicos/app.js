Vue.component('articulos', {
	template: `
		<div class="componente-pelis">
			<h1>Componente {{ titulo }} </h1>
			<ol v-if="posts">
				<li v-for="post in posts">
					{{ post.title }}
				</li>
			</ol>
			<span v-else>Cargando Listado...</span>
		</div>
	`,
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta) => {
				this.posts = respuesta.data;
			})
	},
	data(){
		return {
			titulo: 'Articulos',
			posts: null,
		}
	},
});



new Vue({
	el: "main",
	
	data: {

	},
	methods: {
		
	},
	computed: {
		
	}
	
});
