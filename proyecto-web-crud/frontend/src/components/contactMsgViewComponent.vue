<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/viewcontact">
                        Mensajes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">
                        Administracion
                        </router-link>
                    </li>
                </ul>
            </div>
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Visualizar Mensajes</h1>
            </div>

            <!-- inicio del formulario --> 
                <div class="col-md-7 col-lg-8">
                  <form class="needs-validation">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="product" class="form-label">Nombre</label>
                        <input type="text" v-model="mensaje.nombres" class="form-control" id="product" placeholder="" value="" readonly>

                      </div>
                    
                      <div class="col-sm-6">
                        <label for="unit" class="form-label">Apellido</label>
                        <input type="text" v-model="mensaje.apellidos" class="form-control" id="unit" placeholder="" value="" readonly>

                      </div>
            

                      <div class="col-6">
                        <label for="Pcompra" class="form-label">Email </label>
                        <input type="text" v-model="mensaje.email" class="form-control" id="Pcompra" placeholder="" readonly>

                      </div>
          
                      <div class="col-6">
                        <label for="Pventa" class="form-label">Telefono</label>
                        <input type="number" v-model="mensaje.telefono" class="form-control" id="Pventa" placeholder="" readonly>

                      </div>

                      <div class="col-12">
                        <label for="detalle" class="form-label">Asunto</label>
                        <input type="text" v-model="mensaje.asunto" class="form-control" id="detalle" placeholder="" readonly>
                      </div>

                      <div class="col-12">
                        <label for="msg" class="form-label">Mensaje</label>
                        <textarea name="" id="msg" cols="76px" rows="10" v-model="mensaje.mensaje" readonly></textarea>
                      </div>

                  </div>
                  </form>
                </div>
            <!-- fin del formulario -->
            </main>
        </div>
    </div>
</div>    
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mensaje: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/apimsg/search-msg/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.mensaje = res.data;
    });
  },
};
</script>


<style>
.contenedor {
    background-color: rgb(167, 236, 213);
}
</style>
