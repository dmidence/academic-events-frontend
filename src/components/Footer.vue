<template>
  <footer id="footerId">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-sx-12 md-mb-30 sm-mb-30 segment-one">
            <h3>Academic Events</h3>
            <p>Una forma más organizada de gestionar eventos.</p>
          </div>
          <div class="col-md-3 col-sm-6 col-sx-12 md-mb-30 sm-mb-30 segment-two">
            <h2>Navega ya!</h2>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>

              <!-- <li>
                <span>
                  <router-link to="">Conocenos</router-link>
                </span>
              </li> -->
              <li><router-link to="/Register">Registrate</router-link></li>

              <li>
                <router-link to="/Signin">Inicia Sesión</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-sx-12 md-mb-30 sm-mb-30 segment-three">
            <h2>Siguenos:</h2>
            <p>
              Disfruta de eventos exclusivos que encontrarás unicamente en nuestra
              plataforma.
            </p>
            <a target="_blank" href="https:github.com/dmidence/academic-events-frontend"
              ><i class="pi pi-github"></i
            ></a>
            <!-- <a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.pinterest.com"><i class="fa fa-pinterest"></i></a> -->
          </div>
          <div class="col-md-3 col-sm-6 col-sx-12 md-mb-30 sm-mb-30 segment-four">
            <!-- <h2>Seccion Final</h2> -->
          </div>
        </div>
      </div>
    </div>
    <p class="footer-bottom-text">
      Todos los derechos reservados por &copy; Academic Events. 2022
    </p>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["facebook", "twitter", "inkedin", "instagram"],
  }),
};
</script>

<style scoped>
footer {
  position: absolute;
  width: 100%;
}
.main-footer {
  width: 100%;
  height: 6vh;
  background: rgb(41, 53, 60);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
p {
  color: #999;
  line-height: 25px;
}

h2,
h3 {
  color: #fff;
}

h2 {
  font-size: 18px;
}

.footer-top {
  background: #111;
  padding: 40px 0;
  margin-bottom: 0px;
  margin-top: 5%;
}

.segment-one h3 {
  font-family: "Gill Sans";
  color: #fff;
  letter-spacing: 3px;
  margin: 10px;
  justify-content: center;
}

.segment-one h3:hover {
  color: orange;
}
.segment-two ul :hover {
  color: orange;
}

.segment-two h2 {
  color: #fff;
  font-family: Poppins;
  text-transform: uppercase;
}

.segment-two h2:before {
  content: "|";
  color: #243655;
  padding-right: 10px;
}

.segment-two ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.segment-two ul li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 40px;
}

.segment-two ul li a {
  color: #999;
  text-decoration: none;
}

.segment-three h2 {
  color: #fff;
  font-family: Poppins;
  text-transform: uppercase;
}

.segment-three h2:before {
  content: "|";
  color: #243655;
  padding-right: 10px;
}

.segment-three router-link a {
  background: #494848;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  font-size: 20px;
}

.segment-three router-link a i {
  font-size: 30px;
  color: #fff;
  padding: 5px 5px;
}

.pi-github :hover {
  color: rgb(155, 155, 155);
}

.segment-four h2 {
  color: #fff;
  font-family: Poppins;
  text-transform: uppercase;
}

.segment-four h2:before {
  content: "|";
  color: #243655;
  padding-right: 10px;
}

.segment-four form input[type="submit"] {
  background: #243655;
  border: none;
  padding: 3px 15px;
  color: #fff;
  text-transform: uppercase;
}

.footer-bottom-text {
  text-align: center;
  background: #000;
  line-height: 75px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .md-mb-30 {
    margin-bottom: 30px;
  }
}

@media only screen and(max-width:767px) {
  .sm-mb-30 {
    margin-bottom: 30px;
  }
  .footer-top {
    padding: 50px 0;
  }
}
</style>
