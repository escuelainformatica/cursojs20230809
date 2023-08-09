<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
let posts=ref([]); // este valor es una referencia, es decir, si se cambia el valor se redibuja vue.
console.log("1");
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{        
        posts.value=response.data; // posts.value, value indica que se va a cambiar el valor de la referencia.
        console.log("2");
        console.log(posts);
    }); // esta operacion es asincronica.
console.log("3");

</script>
<template>
    <h1>Página 1</h1>
    <table border="1">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td>{{ post.userId }}</td>
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
            </tr>
        </tbody>
        </table>    
</template>