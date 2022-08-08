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
                    <Button label="Mas informacion" icon="pi pi-ellipsis-v" class="p-button-text"
                        @click="infoEventsMe()" />
                    <Button label="Desuscribir" icon="pi pi-times-circle" class="p-button-text"
                        @click="unsubscribed(eveMe._id)" />
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
        async unsubscribed(_id) {
            if (confirm("Esta seguro de desuscribirse de este evento??")) {
                const res = await fetchConToken(`api/v1/events/unsubscribed/${_id}`, {}, "PUT")
                    .then((res) => {
                        this.eventoDialog = false;

                    })
                    .catch(() => {
                        alert(
                            "Ha ocurrido un error",
                            "Ocurrio un error al desuscribirse de el evento.",
                            "error"
                        );
                    });
            }
        },
        infoEventsMe() {

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