<script setup lang="ts">
import { onMounted } from 'vue';

import { ref, computed } from 'vue';

const search = ref('');
const { data: pokeList, error, status } = await useFetch('/api/pokemon', {
    lazy: true,
    key: String(Math.random())
});

const filtered = computed(() =>
    pokeList.value?.filter(p =>
        p.name.toLowerCase().startsWith(search.value.toLowerCase())
    )
);

onMounted(() => {
    document.title = 'PD Pokemon v1';
});


</script>

<template>
    <div class="clear-both">
        <div class="w-50 float-left">
            <h3 class="text-right pr-5">Pokemon List</h3>
        </div>
        <div class="w-50 float-left">
            <input v-model="search" id="searchField" type="text" placeholder="Filter items by name..." />

        </div>
    </div>
    <div v-if="status === 'pending'" class="loader"></div>
    <div v-else-if="error" class="error">{{ error.statusMessage }}</div>
    <div v-else class="clear-both pokeGrid">
        <div v-for="poke in filtered" :key="poke.id" :id="poke.id" class="clear-both pokeCard center">
            <Card :poke="poke" />
        </div>
    </div>
</template>

<style scoped>
#searchField {
    margin: 10px;
    padding: 10px 20px;
    border: 1px #ddd solid;
    border-radius: 5px;
}

#searchField:focus {
    border: 1px #999 solid;
    outline: none;
}
</style>