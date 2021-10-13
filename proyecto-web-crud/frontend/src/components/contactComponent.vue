<template>
<section class="container contenedor px-3 py-5 px-lg-5 m-1">
    <h1>Contacto</h1>
    <b-form @submit.stop.prevent="onSubmit" class="p-4">
        <div class="row">
            <b-form-group class="col-md-6 col" id="nombres-input-group" label="Nombres" label-for="nombres-input">
                <b-form-input id="nombres-input" name="nombres-input" v-model="$v.form.nombres.$model" :state="validateState('nombres')" aria-describedby="nombres-input-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="nombres-input-live-feedback">Este es un campo obligatorio y debe tener al menos 3 caracteres.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group class="col-md-6" id="apellidos-input-group" label="Apellidos" label-for="apellidos-input">
                <b-form-input id="apellidos-input" name="apellidos-input" v-model="$v.form.apellidos.$model" :state="validateState('apellidos')" aria-describedby="apellidos-input-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="apellidos-input-live-feedback">Este es un campo obligatorio y debe tener al menos 3 caracteres.</b-form-invalid-feedback>
            </b-form-group>
        </div>
        <div class="row">
            <b-form-group class="col-md-6" id="email-input-group" label="E-mail" label-for="email-input">
                <b-form-input id="email-input" name="email-input" v-model="$v.form.email.$model" :state="validateState('email')" aria-describedby="email-input-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="email-input-live-feedback">Este es un campo obligatorio y debe tener una direccion email valida.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group class="col-md-6" id="telefono-input-group" label="Telefono" label-for="telefono-input">
                <b-form-input id="telefono-input" name="telefono-input" v-model="$v.form.telefono.$model" :state="validateState('telefono')" aria-describedby="telefono-input-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="telefono-input-live-feedback">Debe contener un numero valido.</b-form-invalid-feedback>
            </b-form-group>
        </div>

        <div class="row">
            <b-form-group class="col-md-5" id="asunto-input-group" label="Asunto" label-for="asunto-input">
                <b-form-input id="asunto-input" name="asunto-input" v-model="$v.form.asunto.$model" :state="validateState('asunto')" aria-describedby="asunto-input-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="asunto-input-live-feedback">Este es un campo obligatorio y debe tener maximo 40 caracteres.</b-form-invalid-feedback>
            </b-form-group>

        </div>

        <div class="row">
            <b-form-group class="col-12" id="mensaje-input-group" label="Mensaje" label-for="mensaje-input">
                <b-form-textarea id="mensaje-input" name="mensaje-input" v-model="$v.form.mensaje.$model" :state="validateState('mensaje')" aria-describedby="mensaje-input-live-feedback"></b-form-textarea>

                <b-form-invalid-feedback id="mensaje-input-live-feedback">Este es un campo obligatorio.</b-form-invalid-feedback>
            </b-form-group>

        </div>

        <b-button type="submit" variant="primary">Enviar mensaje</b-button>
        <b-button class="ml-2" @click="resetForm()">Restablecer</b-button>
    </b-form>
</section>
</template>

<script>
import axios from "axios";
import {
    validationMixin
} from "vuelidate";
import {
    required,
    minLength,
    maxLength,
    email,
    integer,
    between
} from "vuelidate/lib/validators";
export default {
    name: 'contact',
    mixins: [validationMixin],
    data() {
        return {
            form: {
                nombres: null,
                apellidos: null,
                email: null,
                telefono: null,
                asunto: null,
                mensaje: null
            }
        };
    },
    validations: {
        form: {
            nombres: {
                required,
                minLength: minLength(3)
            },
            apellidos: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            telefono: {
                required,
                integer,
                between: between(1000000, 99999999999)
            },
            asunto: {
                required,
                maxLength: maxLength(40),
            },
            mensaje: {
                required
            }
        }
    },
    methods: {
        validateState(name) {
            const {
                $dirty,
                $error
            } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                nombres: null,
                apellidos: null,
                email: null,
                telefono: null,
                asunto: null,
                mensaje: null
            };
            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/apimsg/create-msg`;
            if (this.$v.form.$anyError) {
                return;
            }
            axios
                .post(apiURL, this.form)
                .then(() => {
                    // this.$router.push("/view");
                    this.resetForm();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            this.handleUpdateForm();
            alert("Mensaje enviado exitosamente!");
        }
    }
};
</script>

<style>
.contenedor {
    background-color: rgb(167, 236, 213);
}
</style>
