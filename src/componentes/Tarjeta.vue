<script setup>
const props = defineProps(['photo']);
</script>
<template>
    <div class="col-4">
        <div class="card">
            <img :src="props.photo.thumbnailUrl" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ props.photo.title }}</h5>
                <p class="card-text">{{ props.photo.url }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <br>
    </div>
</template>