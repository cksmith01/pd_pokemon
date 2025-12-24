<template>
    <div class="navbar">
        <div class="logo">
            PD Pokemon
        </div>
        <nav>
            <ul>
                <li>
                    <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>