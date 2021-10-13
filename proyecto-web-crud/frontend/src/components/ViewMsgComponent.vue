<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <label for="producto">Buscar</label>
                        <input type="text" v-model="search" id="producto">
                    </li>
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
                <h2>Lista de Productos</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Asunto</th>
                            <!-- <th scope="col">Detalle</th> -->
                            <th>acciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="mensaje in filtermsg" :key="mensaje.id">
                                    <td>{{mensaje.nombres}}</td>
                                    <td>{{mensaje.apellidos}}</td>
                                    <td>{{mensaje.asunto}}</td>
                                    <!-- <td>{{mensaje.fecha}}</td> -->
                                    <td>
                                        <router-link class="btn btn-primary" :to="{name:'viewmsg', params:{id: mensaje._id}}"><i class="bi bi-vinyl-fill"></i></router-link>
                                        <button class="btn btn-danger" @click.prevent="deleteMensaje(mensaje._id)"><i class="bi bi-x-lg"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
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
      mensajes: [],
      search:''
    };
  },
  created() {
    let apiURL = "http://localhost:4000/apimsg";
    axios
      .get(apiURL)
      .then((res) => {
        this.mensajes = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    filtermsg:function(){
      return this.mensajes.filter((mensaje)=>{
        return mensaje.asunto.match(this.search);
      })
    }
  },
  methods: {
    deleteMensaje(id) {
      let apiURL = `http://localhost:4000/apimsg//delete-msg/${id}`;
      let indexOfArrayItem = this.mensajes.findIndex((i) => i._id === id);

      if (window.confirm("desear eliminar el mensaje?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.mensajes.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>