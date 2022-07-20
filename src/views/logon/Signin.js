import Header from "../../components/header/Header.vue";
import Footer from "../../components/Footer.vue";
import { defineComponent, ref } from "vue";
import { useAuth } from "../../composable";

import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "login",
  components: {
    Header,
    Footer,
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const { login } = useAuth();

    let errors = [];
    const onSubmit = async ({ email, password }) => {
      try {
        login(email, password);
      } catch (error) {
        errors = error.response.data.errors;
      }
    };
    const validatePassword = (value) => {
      if (!value) {
        return "Contraseña requerida";
      }
      if (value.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres";
      }
      return true;
    };
    const validateEmail = (value) => {
      //   regex
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "El email no es válido";
      }
      return true;
    };
    const signin = () => {
      validate();
      console.log("er", errors);
      if (errors.length === 0) {
        login(inputEmail.value, inputPassword.value);
      }
    };
    return {
      errors,
      onSubmit,
      validatePassword,
      validateEmail,
    };
  },
});
