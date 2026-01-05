<script setup>
</script>

<template>
    <h3 class="text-center">About</h3>

    <div class="p-5 m-5">
        <div class="todo">
            <h3>To Do:</h3>
            <ul>
                <li>hook it up to sqlite</li>
                <li>create a page to display the click rates</li>
                <li>make the whole card clickable</li>
            </ul>
        </div>
        <br> <br>
        <div class="todo">
            <h3>Considerations:</h3>
            <ul>
                <li>Axios: I chose to use it because I'm familiar with it and I really like the fact that it has
                    interceptors
                    that allow you to automatically refresh JWT tokens without having to write all that logic yourself.
                    I could have used the built-in fetch API but Axios just makes life easier.
                </li>
                <li>pokemon.get.ts
                    <ul>
                        <li>I used defineEventHandler, however, I would probably use defineCachedEventHandler
                            for this if the data isn't changing very often</li>
                        <li>I limited the number of pokemon I fetch to 1000 because the higher numbers were missing
                            data elements</li>
                        <li>There is a wait timer you can uncomment to get a better look at the loading spinner</li>
                        <li>There is also a section to throw an error so you can see that the client does indeed have
                            error handling</li>
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