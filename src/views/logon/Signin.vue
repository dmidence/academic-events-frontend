<script src="./Signin"></script>

<template>
  <Header :logged="false" />
  <div class="main-container logon-bg">
    
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
      <h1 class="my-2">Inicio de Sesión</h1>
      <hr class="w-100" />
      <Form @submit="onSubmit" class="w-100">  
        <span class="vertical-group my-1 ">
          <label for="email"  class="form-label">Correo</label>
          <Field name="email" type="email" class="form-control"  :rules="validateEmail" />
          <ErrorMessage name="email" />
        </span>
        <span class="vertical-group my-1">
          <label for="password" class="form-label">Contraseña</label>
          <Field
            type="password"
            name="password"
            class="form-control"
            :rules="validatePassword"
          />
          <ErrorMessage name="password" />
        </span>
        <span class="vertical-group w-100 my-1">
          <!-- <router-link to="/Home" class="text-center w-100"> -->
          <Button label="Ingresar" type="submit" class="w-100" />
          <!-- </router-link> -->
        </span>
      </Form>
      <div class="vertical-group centered-group w-100 my-1 fs-6">
        <span
          >¿No recuerda su contraseña?,
          <router-link to="/restorePassword" class="text-center w-100"
            >Restablecer contraseña</router-link
          ></span
        >
      </div>
      <div class="vertical-group centered-group w-100 my-1 fs-6">
        <span
          >¿No tienes una cuenta?,
          <router-link to="/Register" class="text-center w-100"
            >Registrate</router-link
          ></span
        >
      </div>
    </div>
  </div>
  <Footer />
</template>


<style></style>
