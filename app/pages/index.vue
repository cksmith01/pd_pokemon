<script setup>

const { data: pokeList, error, status } = await useFetch('/api/pokemon', {
    lazy: true,
    key: String(Math.random())
});

console.log('pokeList', pokeList); // wip

</script>

<template>

    <h3 class="text-center">Pokemon List</h3>

    <div v-if="status === 'pending'" class="loader"></div>
    <div v-else-if="error" class="error">{{ error.statusMessage }}</div>
    <div v-else class="pokeGrid">
        <div v-for="poke in pokeList" :key="poke.id" class="pokeCard center">
            <div class="align-center">
                <NuxtLink :to="{ name: 'poke-id', params: { id: poke.id } }">
                    <img
                        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`">
                </NuxtLink>
            </div>
            <div class="align-center">
                <NuxtLink :to="{ name: 'poke-id', params: { id: poke.id } }">
                    {{ poke.name }}
                </NuxtLink>
            </div>
        </div>
    </div>

</template>