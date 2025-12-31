<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const icon = ref('');
icon.value = '/favicon.ico';

</script>
<template>
    <div class="navbar">
        <img :src="icon" />
        <div class="logo">
            PD Pokemon
        </div>
        <nav>
            <ul>
                <li :class="route.name === 'index' ? 'navbarItemActive' : ''">
                    <NuxtLink :to="{ name: 'index' }">
                        <i class="pi pi-home"></i>
                        Home
                    </NuxtLink>
                </li>
                <li :class="route.name === 'about' ? 'navbarItemActive' : ''">
                    <NuxtLink :to="{ name: 'about' }">
                        <i class="pi pi-info-circle"></i>
                        About
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>