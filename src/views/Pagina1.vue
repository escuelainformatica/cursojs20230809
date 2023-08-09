<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
let error = ref("");
let posts = ref([]); // este valor es una referencia, es decir, si se cambia el valor se redibuja vue.
console.log("1");

axios.get("https://jsonplaceholder.typicode.com/posts")
    .catch((errorCapturado) => {
        error.value = errorCapturado.message;
    })
    .then((response) => {
        posts.value = response.data; // posts.value, value indica que se va a cambiar el valor de la referencia.
        console.log("2");
        console.log(posts);
    }); // esta operacion es asincronica.
console.log("3");



</script>
<template>
    <h1>Página 1</h1>
    <div class="alert alert-danger" role="alert" v-if="error != ''">
        <img src="/error.png" style="width: 32px;height: 32px;" />
        {{ error }}
    </div>
    <table class="table table-striped" v-else>
        <thead class="thead-dark">
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" v-if="posts.length > 0">
                <td>{{ post.userId }}</td>
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
            </tr>
            <tr v-else>
                <td colspan="4">
                    Cargando.....
                </td>
            </tr>
        </tbody>
    </table>
</template>