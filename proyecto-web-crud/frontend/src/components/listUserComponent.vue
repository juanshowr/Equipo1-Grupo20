<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list-user">
                        Usuarios
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create-user">
                        Administracion Usuarios
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

            <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                <h2>Lista de Usuarios</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Email</th>
                            <!-- <th scope="col">Password</th> -->
                            <th scope="col">Telefono</th>
                            <!-- <th scope="col">Pais</th> -->
                            <th scope="col">Ciudad</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Clasificacion</th>
                            <th>acciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="usuario in usuarios" :key="usuario.id">
                                    <td>{{usuario.nombres}}</td>
                                    <td>{{usuario.apellidos}}</td>
                                    <td>{{usuario.email}}</td>
                                    <!-- <td>{{usuario.password}}</td> -->
                                    <td>{{usuario.telefono}}</td>
                                    <!-- <td>{{usuario.pais}}</td> -->
                                    <td>{{usuario.ciudad}}</td>
                                    <td>{{usuario.direccion}}</td>
                                    <td>{{usuario.clasificacion}}</td>
                                    <td>
                                        <router-link class="btn btn-primary" :to="{name:'uptate-user', params:{id: usuario._id}}"><i class="bi bi-wrench"></i></router-link>
                                        <button class="btn btn-danger" @click.prevent="deleteUser(usuario._id)"><i class="bi bi-x-lg"></i></button>
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
      usuarios: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/apiuser";
    axios
      .get(apiURL)
      .then((res) => {
        this.usuarios = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteUser(id) {
      let apiURL = `http://localhost:4000/apiuser/delete-user/${id}`;
      let indexOfArrayItem = this.usuarios.findIndex((i) => i._id === id);

      if (window.confirm("desear eliminar El usuario?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.usuarios.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>