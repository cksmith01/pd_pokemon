<script setup>
</script>

<template>
    <h3 class="text-center">About</h3>

    <div class="p-5 m-5">
        <div class="todo">
            <h3>To Do:</h3>
            <ul>
                <li>nav bar highlighting for the page you're on</li>
                <li>add some other properties to display on the detail page</li>
                <li>make the whole card clickable</li>
                <li>what about a different page that uses PrimeVue grid and modal to display the data</li>
                <li>are there any other properties you'd like display</li>
            </ul>
        </div>
        <br> <br>
        <div class="todo">
            <h3>Considerations:</h3>
            <ul>
                <li>I chose to use Axios because I'm familiar with it and I really like the fact that it has
                    interceptors
                    that allow you to automatically refresh JWT tokens without having to write all that logic yourself.
                    I could have used the built-in fetch API but Axios just makes life easier.
                </li>
                <li>pokemon.get.ts
                    <ul>
                        <li>I used defineEventHandler, however, I would probably use defineCachedEventHandler
                            for this
                            as if the data isn't changing very often</li>
                        <li>I limited the number of pokemon I fetch to 1000 because the higher numbers were missing
                            data elements</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.todo {
    max-width: 600px;
}

.todo h3 {
    font-weight: bold;
    font-size: 12pt;
}

.todo li {
    padding: 5px;
}
</style>