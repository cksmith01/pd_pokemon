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
                <li :class="route.name === 'clicks' ? 'navbarItemActive' : ''">
                    <NuxtLink :to="{ name: 'clicks' }">
                        <i class="pi pi-question-circle"></i>
                        Clicks
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