<template>
    <Dialog header="Calendario de mis Eventos" v-model:visible="eventoDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '850px' }" :maximizable="true"
        :modal="true">
        <div class="p-flu">
            <h1>hola1</h1>

            <div class='demo-app-sidebar-section'>
                <h2>All Events ({{ eventsCalendar.length }})</h2>
                <ul>
                    <li v-for='event in eventsCalendar' :key='event._id'>
                        <b>{{ event.startDate }}</b>
                        <i>{{ event.title }}</i>
                    </li>
                </ul>
            </div>

            <div class='demo-app-main'>
                <FullCalendar class='demo-app-calendar' :options="calendarOptions" :events="events">

                </FullCalendar>

            </div>
        </div>
    </Dialog>
</template>

<script >
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    data() {
        return {
            eventoDialog: false,
            eventsCalendar: [],

            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                locale: 'es',
                initialView: 'dayGridMonth',
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                /* events: [
                    { title: "hola", date: '2022-08-11' },

                ] */
                events: [
                    eventsCalendar.forEach((items) => {


                        console.log(items)

                    }),


                ],

            },


        }
    },
    methods: {
        calendarEventMe() {
            this.eventoDialog = true;
            fetchConToken("api/v1/events/me", {}, "GET")
                .then((res) => {
                    this.eventsCalendar = res.data.events

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
    components: { FullCalendar },
    created() { },
};
</script>

<style >
.demo-app-main {
    flex-grow: 1;
    padding: 3em;
}

.fc {
    max-width: 1100px;
    margin: 0 auto;
}
</style>