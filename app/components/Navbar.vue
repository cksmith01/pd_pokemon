<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<template>
    <header class="navbar">
        <div class="logo">
            PD Pokemon
        </div>
        <img src="/favicon.ico" />
        <nav>
            <ul>
                <li :class="route.name === 'index' ? 'navbarItemActive' : ''">
                    <NuxtLink :to="{ name: 'index' }">
                        <i class="pi pi-home"></i>
                        Home
                    </NuxtLink>
                </li>
                <li :class="route.name === 'prime' ? 'navbarItemActive' : ''">
                    <NuxtLink :to="{ name: 'prime' }">
                        <i class="pi pi-table"></i>
                        Prime
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
    </header>
</template>