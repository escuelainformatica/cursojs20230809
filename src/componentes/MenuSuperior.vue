<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Aplicación Vue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/pagina2">Pagina2</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/pagina3">Pagina3</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>