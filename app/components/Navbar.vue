<template>
    <div class="navbar">
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