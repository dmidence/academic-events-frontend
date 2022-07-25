<template>
    <Dialog header="Eventos que este usuario Creo" v-model:visible="eventoDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '850px' }" :maximizable="true"
        :modal="true">
        <div class="p-flu">
            <Card style="width: 350px; padding: 1rem; margin: 1rem" v-for="eveOwn in eventOwn" :key="eveOwn.title">
                <template #header>
                    <img alt="user header"
                        src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg">
                </template>
                <template #title>
                    Titulo: {{ eveOwn.title }}
                </template>
                <template #content>
                    <p> Personas Registradas: {{ eveOwn.registeredParticipants }}</p>
                    <p>Modalidad: {{ eveOwn.modality }}</p>
                    <p>Tipo: {{ eveOwn.type }}</p>
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
            eventOwn: [],
        };
    },
    methods: {
        getEventOwn() {
            this.eventoDialog = true;
            fetchConToken("api/v1/events/own", {}, "GET")

                .then((res) => {
                    console.log(res.data.events)
                    this.eventOwn = res.data.events

                })
                .catch(() => {
                    customAlert(
                        "Ha ocurrido un error",
                        "Ocurrio un error al traer los eventos que cree.",
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

<style scoped>
img {
    height: 250px;
    object-fit: cover;
}
</style>
