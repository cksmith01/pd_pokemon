<script setup>
import { ref } from 'vue';

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
                <li>
                    <NuxtLink :to="{ name: 'index' }">
                        <i class="pi pi-home"></i>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'about' }">
                        <i class="pi pi-info-circle"></i>
                        About
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>