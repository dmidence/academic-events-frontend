<template>
    <Dialog header="Eventos a los que estoy subscrito" v-model:visible="eventoDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '850px' }" :maximizable="true"
        :modal="true">
        <div class="p-flu">
            <Card style="width: 350px; padding: 1rem; margin: 1rem" v-for="eveMe in eventMe" :key="eveMe.title">
                <template #header>
                    <img alt="user header" :src="eveMe.image.secureUrl">
                </template>
                <template #title>
                    Titulo: {{ eveMe.title }}
                </template>
                <template #content>
                    <p> Finaliza: {{ eveMe.endDate }} </p>
                    <p>Modalidad: {{ eveMe.modality }}</p>
                    <p>Tipo: {{ eveMe.type }}</p>
                </template>
                <template #footer>
                    <Button icon="pi pi-ellipsis-v" label="Mas informacion" />
                </template>
            </Card>
        </div>
    </Dialog>
</template>

<script>
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";

export default {
    data() {
        return {
            eventoDialog: false,
            eventMe: [],
        };
    },
    methods: {
        getEventMe() {
            this.eventoDialog = true;
            fetchConToken("api/v1/events/me", {}, "GET")
                .then((res) => {
                    console.log(res.data.events)
                    this.eventMe = res.data.events

                })
                .catch(() => {
                    customAlert(
                        "Ha ocurrido un error",
                        "Ocurrio un error al traer los eventos en los que esta subscrito.",
                        "error"
                    );
                });
        },


    },
    computed: {},
    components: {},
    created() {

    },
};
</script>

<style>
img {
    height: 250px;
    object-fit: cover;
}
</style>