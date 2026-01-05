<script setup>
import { capitalizer } from '~/assets/js/utils.js';

const { data: clicks, error, status } = await useFetch('/api/clicks', {
    lazy: true,
    key: String(Math.random())
});

</script>

<template>
    <div class="">
        <h3>Top 10 Clicks</h3>
    </div>
    <div v-if="status === 'pending'" class="loader"></div>
    <div v-else-if="error" class="error">{{ error.statusMessage }}</div>
    <div v-else class="clear-both pokeGrid">
        <div class="text-center">
            <div v-for="click in clicks" :key="click.name" class="pokeCard">
                {{ capitalizer(click.pokeName) }}: {{ click.clicks }}
            </div>
        </div>
    </div>
</template>
