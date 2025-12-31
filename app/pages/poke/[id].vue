<script setup>
import { useRoute } from '#imports';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { capitalizer } from '~/assets/js/utils';

const route = useRoute();
const pokeId = route.params.id;
const poke = ref({});
const pokeName = ref('');
const abilities = ref('');

onMounted(async () => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    poke.value = resp.data;
    pokeName.value = capitalizer(resp.data.name);

    const len = resp.data.abilities.length;
    if (len > 0) {
        resp.data.abilities.forEach((item, index) => {
            abilities.value += capitalizer(item.ability.name);
            if (index < (len - 1))
                abilities.value += ', ';
        });
    }
});

</script>

<template>
    <h3 class="text-center">Pokemon</h3>
    <div class="clear-both img-container">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeId}.png`" />
        <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokeId}.png`" />
        <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`" />
        <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokeId}.png`" />
    </div>
    <div class="clear-both data-container">
        <div class="p-5">Name: {{ pokeName }}</div>
        <div class="p-5">Height: {{ poke.height }}</div>
        <div class="p-5">Weight: {{ poke.weight }}</div>
        <div class="p-5">Abilities: {{ abilities }}</div>
    </div>
</template>

<style scoped>
.img-container {
    padding: 5px;
    margin: 5px;
}

/*
img {
    transform: scale(.80);
}
*/

.data-container {
    padding: 20px;
    margin-bottom: 20px;
}
</style>