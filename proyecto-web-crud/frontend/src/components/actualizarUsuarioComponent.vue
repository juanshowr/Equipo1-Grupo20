<template>
<section class="container contenedor px-3 py-5 px-lg-5 m-1">
    <!--trabajr desde aca-->
    <h1>Mi cuenta</h1> 
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
        <b-form-group class="col-md-3" id="pais-input-group" label="Pais" label-for="pais-input">
            <b-form-input id="pais-input" type="password" name="pais-input" v-model="$v.form.pais.$model" :state="validateState('pais')" aria-describedby="pais-input-live-feedback"></b-form-input>

            <b-form-invalid-feedback id="pais-input-live-feedback">Este es un campo obligatorio y debe tener al menos 3 caracteres.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="col-md-3" id="ciudad-input-group" label="Ciudad" label-for="ciudad-input">
            <b-form-input id="ciudad-input" name="ciudad-input" v-model="$v.form.ciudad.$model" :state="validateState('ciudad')" aria-describedby="ciudad-input-live-feedback"></b-form-input>

            <b-form-invalid-feedback id="ciudad-input-live-feedback">Este es un campo obligatorio y debe tener al menos 3 caracteres.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="col-md-6" id="direccion-input-group" label="Direccion" label-for="direccion-input">
            <b-form-input id="direccion-input" name="direccion-input" v-model="$v.form.direccion.$model" :state="validateState('direccion')" aria-describedby="direccion-input-live-feedback"></b-form-input>

            <b-form-invalid-feedback id="direccion-input-live-feedback">Escriba una direccion valida</b-form-invalid-feedback>
        </b-form-group>
        </div>

        <div class="row">
        <b-form-group class="col-md-5" id="clasificacion-input-group" label="Clasificacion ante la DIAN" label-for="clasificacion-input">
            <b-form-select id="clasificacion-input" name="clasificacion-input" v-model="$v.form.clasificacion.$model" :options="clasificaciones" :state="validateState('clasificacion')" aria-describedby="clasificacion-input-live-feedback"></b-form-select>

            <b-form-invalid-feedback id="clasificacion-input-live-feedback">Este es un campo requerido.</b-form-invalid-feedback>
        </b-form-group>
        </div>
        

        <b-button type="submit" variant="primary">Guardar Cambios</b-button>
        <b-button class="ml-2" @click="resetForm()">Restablecer</b-button>
    </b-form>
</section>
</template>

<style>
body {
    padding: 1rem;
}
</style>

<script>
import axios from "axios";
import {
    validationMixin
} from "vuelidate";
import {
    required,
    minLength,
    email,
    integer,
    between
} from "vuelidate/lib/validators";

export default {
    name: 'update-user',
    mixins: [validationMixin],
    data() {
        return {
            clasificaciones: [{
                    value: null,
                    text: "Elegir opcion"
                },
                {
                    value: "personaNatural",
                    text: "Persona Natural"
                },
                {
                    value: "personaJuridica",
                    text: "Persona Juridica"
                }
            ],
            form: {
                nombres: null,
                apellidos: null,
                email: null,
                telefono: null,
                pais: null,
                ciudad: null,
                direccion: null,
                clasificacion: null
            }
        };
    },
    validations: {
        form: {
            clasificacion: {
                required,
            },
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
            pais: {
                required,
                minLength: minLength(3)
            },
            ciudad: {
                required,
                minLength: minLength(3)
            },
            direccion: {
                required,
                minLength: minLength(8)
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
                pais: null,
                ciudad: null,
                direccion: null,
                clasificacion: null
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-user/61637544a1ef8b0d14f3bb78`;

            if (this.$v.form.$anyError) {
                return;
            }
            axios
                .put(apiURL, this.form)
                .then((res) => {
                    console.log(res);
                    this.resetForm();
                    //this.$router.push("/inventory");
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
            alert("Datos actualizados exitosamente!");
        }
    }
};
</script>

<style>
.contenedor {
    background-color: rgb(167, 236, 213);
}
</style>
