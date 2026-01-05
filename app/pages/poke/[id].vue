<script setup>
import { useRoute } from '#imports';
import { ref } from 'vue';
import { capitalizer } from '~/assets/js/utils';

const route = useRoute();
const pokeId = route.params.id;
const pokeName = ref('');
const abilities = ref('');
const types = ref('');
const stats = ref('');
const img1 = ref('');
const img2 = ref('');
const img3 = ref('');
const img4 = ref('');

const { data: pokeData, error, status } = await useFetch(`/api/poke/${pokeId}`, {
    lazy: false,
    retry: true,
    key: String(Math.random())
});

pokeName.value = capitalizer(pokeData.value.name);

img1.value = pokeData.value.sprites.front_shiny;
img2.value = pokeData.value.sprites.back_shiny;
img3.value = pokeData.value.sprites.other.home.front_default;
img4.value = pokeData.value.sprites.other.home.front_shiny;

abilities.value = pokeData.value.abilities
    .map(a => capitalizer(a.ability.name))
    .join(', ');

types.value = pokeData.value.types
    .map(a => capitalizer(a.type.name))
    .join(', ');

stats.value = pokeData.value.stats
    .map(a => capitalizer(a.stat.name))
    .join(', ');

</script>

<template>
    <div v-if="status === 'pending'" class="loader"></div>
    <div v-else-if="error" class="error">{{ error.statusMessage }}</div>
    <h3 class="text-center">Pokemon</h3>
    <div class="clear-both img-container">
        <img :src="`${img1}`" />
        <img :src="`${img2}`" />
        <img :src="`${img3}`" />
        <img :src="`${img4}`" />

    </div>
    <div class="clear-both data-container">
        <div class="p-5">Name: {{ pokeName }}</div>
        <div class="p-5">Height: {{ pokeData.height }}</div>
        <div class="p-5">Weight: {{ pokeData.weight }}</div>
        <div class="p-5">Abilities: {{ abilities }}</div>
        <div class="p-5">Types: {{ types }}</div>
        <div class="p-5">Stats: {{ stats }}</div>
    </div>
</template>

<style scoped>
.img-container {
    padding: 5px;
    margin: 5px;
}

.data-container {
    padding: 20px;
    margin-bottom: 20px;
}
</style>