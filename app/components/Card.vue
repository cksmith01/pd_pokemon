<script setup lang="ts">
import type { Poke } from '~/types/poke.ts';

const props = defineProps({
    poke: {
        type: Object as PropType<Poke>,
        required: true,
    }
});
</script>

<template>
    <div class="align-center">
        <NuxtLink :to="{ name: 'poke-id', params: { id: poke.id } }">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`">
        </NuxtLink>
    </div>
    <div class="align-center">
        <NuxtLink :to="{ name: 'poke-id', params: { id: poke.id } }">
            {{ poke.name }}
        </NuxtLink>
    </div>
</template>