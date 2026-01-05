<script setup>

// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional

import { ref, onMounted } from 'vue';

const { data: pokeList, error, status } = await useFetch('/api/pokemon', {
    lazy: true,
    key: String(Math.random())
});

</script>


<template>

    <p>I attempt at PrimeVue DataTable but it was giving me problems</p>

    <!-- <div class="card">
        <DataTable :value="pokeList" tableStyle="min-width: 50rem">
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
        </DataTable>
    </div> -->
</template>
