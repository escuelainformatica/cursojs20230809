<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Tarjeta from '../componentes/Tarjeta.vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
//  this.$router.push('/dashboard')
//console.log(router);
console.log(route.params);

// albumId,id,title,url,thumbnailUrl
let photos = ref([]);
axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((respuesta) => {
        photos.value = respuesta.data;
    });
</script>
<template>
    <div class="row">
        <div class="col">
            <h1>pagina2</h1>
        </div>
    </div>
    <div class="row">
        <template v-for="photo in photos">
            <Tarjeta :photo="photo" />
        </template>
    </div>
</template>