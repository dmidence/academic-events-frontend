<template>
    <Dialog header="Mis Eventos" v-model:visible="eventoDialog" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '820px' }" :maximizable="true" :modal="true">
        <div class="p-flu">

            <div class="card mb-3" style="width: 690px; padding: 1rem; margin: 2rem" v-for="eveMe in eventMe"
                :key="eveMe._id">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="eveMe.image?.secureUrl" class="img-fluid rounded-start" alt="image" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Evento: {{ eveMe.title }}</h5>
                            <p class="card-text">
                                Participantes Registrados: {{ eveMe.registeredParticipants }}
                            </p>
                            <p class="card-text">Modalidad: {{ eveMe.modality }}</p>
                            <p class="card-text">Tipo: {{ eveMe.type }}</p>

                            <p class="card-text">
                                <small class="text-muted">Descripcion: {{ eveMe.description }} </small>
                            </p>
                            <Button icon="pi pi-times-circle" label="Desuscribir" @click="unsubscribed(eveMe._id)" />
                            <Button label="Mas informacion" icon="pi pi-ellipsis-v" class="p-button-text"
                                @click="infoEventsMe()" />

                        </div>
                    </div>
                </div>
            </div>
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
</script >

<style scoped>
img {
    height: 250px;
    width: 950;
    object-fit: cover;
}
</style>