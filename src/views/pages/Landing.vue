<template>
  <Header :logged="false" />
  <main>
    <section class="acerca-de">
      <div class="contenedor center-div-content">
        <h2 class="sobre-nosotros">Eventos Academicos</h2>
        <h3 class="slogan">SOBRE NOSOTROS</h3>
        <p class="parrafo">
          Te damos la bienvenida a nuestro portal web, un sitio en la nube
          en donde podras encontrar diversos eventos academicos que seran
          impartidos de manerra virtual con diversas categorias del conocimiento
          y que estaran adscritos a tu institucion de estudio, dichos eventos
          seran impartidos por profesionales de distinta areas del conocimiento,
          esperamos que dicha experiencia de aprendizaje sea la mejor.
        </p>
        <p class="parrafo">
          Nuestra labor va mas alla de la enseñanza ordinaria y nos proponemos
          centramos en el fortalecimiento y la facilitación del aprendizaje en
          linea con ideas innovadoras que permitan a las nuevas generaciones de
          estudiantes la busqueda permanente del aprendizaje, con una nueva manera
          mas sencilla y mas expedita de recibir informacion, utilizando el poder de las tecnoligias de
          la información.
        </p>
        <a href="http://localhost:8080/Register" class="boton" style="text-decoration: blink" squared variant="info">Suscribete</a>
      </div>
    </section>
    <section class="galeria">
      <div class="sesgoarriba"></div>
      <div class="imagenes"><img src="../../assets/img/bg1.jpg" alt="" /></div>
      <div class="imagenes"><img src="../../assets/img/bg2.jpg" alt="" /></div>
      <div class="imagenes">
        <img src="../../assets/img/bg3.jpg" alt="" />
        <dic class="encima">
          <h2>Eventos en línea</h2>
          <div></div>
        </dic>
      </div>
      <div class="imagenes"><img src="../../assets/img/bg4.jpg" alt="" /></div>
      <div class="imagenes"><img src="../../assets/img/bg5.jpg" alt="" /></div>
      <div class="sesgoabajo"></div>
    </section>
    <section class="miembros">
      <div class="contenedor">
        <h3 class="sobre-nosotros">NUESTROS SOCIOS</h3>
        <h3 class="slogan">Conoce algunas instituciones educativas con las que hemos trabajado</h3>
        <div class="cards">
          <div class="card card-centered">
            <img src="../../assets/img/unah.png" alt="" />
            <h4>UNAH</h4>
            <p>Universidad Nacional Autonoma de Honduras</p>
          </div>
          <div class="card card-centered">
            <img src="../../assets/img/unicah.jpg" alt="" />
            <h4>UNICAH</h4>
            <p>Universidad Católica de Honduras Sagrado Corazón de Jesús</p>
          </div>
          <div class="card card-centered">
            <img src="../../assets/img/unitec.png" alt="" />
            <h4>UNITEC</h4>
            <p>Universidad Tecnologica Centroamericana</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="contenedor">
        <h2 class="titulo-footer">Contactanos</h2>
        <h2 class="subtitulo-footer">Siguenos en nuestras redes sociales</h2>
        <div class="footer">
          
        </div>
      </div>
    </footer>
  </main>
  <Footer />
  <!-- Modal ref -->

  <EventModal ref="eventModal" />
</template>

<script>
import Header from "../../components/Header.vue";
import EventModal from "../../components/EventModal.vue";
import Footer from "../../components/Footer.vue";


export default {
  props: [],
  mounted() {},
  data() {
    return {};
  },
    
  methods: {},
  computed: {},
  components: {
    Header,
    EventModal,
    Footer,
  },
};
</script>

<style scoped>
main {
  margin-top: 10vh;
}

.card-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sesgoabajo {
  z-index: 10;
  position: absolute;
  bottom: 0px;
  left: -17px;
  border-width: 0 0 35vh 100vw;
  border-style: solid;
  border-color: transparent transparent #fff transparent;
}

.sesgoarriba {
  z-index: 10;
  position: absolute;
  top: -15px;
  left: -17px;
  border-width: 35vh 100vw 0 0;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}

.contenedor {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 52px 0 52px 0;
}

.sobre-nosotros {
  text-align: center;
  font-size: 56px;
  margin-bottom: 10px;
  font-weight: 600;
}

.slogan {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 24px;
}

.parrafo {
  margin-bottom: 13px;
  font-weight: 300;
  text-align: justify;
  line-height: rgb(24, 16, 16);
}
.center-div-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.acerca-de .boton {
  display: inline-block;
  padding: 6px;
  width: 128px;
  border: 1px solid rgb(24, 16, 16);
  color: rgb(24, 16, 16);
  border-radius: 16px;
  text-align: center;
}

.galeria {
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  position: relative;
}

.imagenes {
  width: 20%;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.imagenes img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.encima {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(52, 73, 94, 0.8);
}

.encima h2 {
  position: relative;
  display: block;
  top: 45%;
  text-align: center;
  color: #fff;
}

.encima div {
  position: relative;
  display: block;
  top: 46%;
  width: 40px;
  height: 5px;
  background: #fff;
  margin: auto;
}

.cards {
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}

.card {
  margin: 20px 0 20px 0;
  width: 30%;
  height: 250px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 0 4px 0 rgba(52, 73, 94, 0.8);
}

.cards img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 100%;
}

.fondo {
  height: 1000px;
  position: relative;
  background-image: linear-gradient(
      0deg,
      rgba(6, 30, 49, 0.3),
      rgba(16, 68, 110, 0.3)
    ),
    url("../../assets/img/bg6.jpg");
  overflow: hidden;
  background-attachment: fixed;
  background-position: center;
  background-position: no-repeat;
  background-size: cover;
}

.sesgoabajo-unico {
  z-index: 10;
  position: absolute;
  bottom: 0px;
  left: -17px;
  border-width: 0 0 35vh 100vw;
  border-style: solid;
  border-color: transparent transparent rgb(52, 73, 94) transparent;
}

.titulo-patrocinadores,
.subtitulo-patrocinadores {
  color: #fff;
  text-align: center;
}

.titulo-patrocinadores {
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 1em;
  margin-top: 2em;
}

.subtitulo-patrocinadores {
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 2em;
}

.clientes {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 64px;
  width: 100%;
  justify-content: space-between;
}

.cliente {
  width: 30%;
}

.cliente img {
  width: 100%;
}

footer {
  background-color: rgb(40, 59, 66);
  background-size: 50%;
  height: 145px;
}

.titulo-footer,
.subtitulo-footer {
  color: white;
  text-align: center;
  font-size: 56px;
}

.subtitulo-footer {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 100px;
}

form {
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
}

input[type="text"],
input[type="email"] {
  display: inline-block;
  width: 48%;
  padding: 10px;
  border: none;
  color: white;
  font-family: "open sans";
  background-color: rgb(37, 37, 33);
  margin-bottom: 16px;
  border-top: 1px solid rgb(52, 73, 94);
}

textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
  min-height: 200px;
  background-color: rgb(37, 37, 33);
  border: none;
  color: white;
  margin-bottom: 16px;
  padding: 13px;
  font-family: "open sans";
}

input[type="submit"] {
  display: inline-block;
  padding: 13px;
  border: none;
  background-color: rgb(37, 37, 33);
  color: white;
}
</style>
