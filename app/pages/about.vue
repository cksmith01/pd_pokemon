<script setup>
</script>

<template>
    <h3 class="text-center">About</h3>

    <div class="m-5">
        <div class="todo">
            <h3>Thoughts/Considerations:</h3>
            <ul>
                <li>Having never developed anything with Vue.JS, this project was a lot of fun for me. Inevitably,
                    when learning a new framework there are frustrations, but Nuxt and Vue are pretty intuitive
                    and I can see why developers like it so much. The learning curve isn't as steep as it is with
                    React. I find myself wanting to develop an app on the platform that is more useful to me.
                </li>
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
                        <li>Using ID's vs names: I'm so used to using ID's for everything that I default to that.
                            That is why this component strips out the pokemon ID's rather than just using the name.
                            Although, I think the name would have been perfectly fine to use in this application.
                        </li>
                    </ul>
                </li>
                <li>To demonstrate creativity I added a Sqlite database and Drizzle to the project as a way to handle
                    tracking which pokemon users have clicked on. Since most business applications use a database, I
                    thought that would be a good starting point to get familiar with a Nuxt compatible ORM.
                </li>
                <li>PrimeVue: I was originally going to add this library to the project and use it to create another
                    version of the main page, but when I installed it, it broke the app and it wasn't clear why. I also
                    concluded that there wasn't much benefit to using it because there are only 2 values being displayed
                    on that page. I've used the PrimeReact libary pretty extensively and I really like that it can save
                    you a lot of time in prototyping and development. The only public-facing app I can show is here:
                    <a href="https://s.utleg.gov/bigboard" target="_blank">BigBoard</a>. It make extensive use of
                    PrimeReact components.
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