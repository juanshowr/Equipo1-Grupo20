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
                        <router-link class="nav-link" to="/inventory">
                        Inventario
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create-product">
                        Ingresar producto
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
                            <th scope="col">producto</th>
                            <th scope="col">unidades</th>
                            <th scope="col">P.compra</th>
                            <th scope="col">P.venta</th>
                            <th scope="col">Categoria</th>
                            <!-- <th scope="col">Detalle</th> -->
                            <th>acciones</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="producto in filterProduct" :key="producto.id">
                                    <td>{{producto.nombre}}</td>
                                    <td>{{producto.unidades}}</td>
                                    <td>{{producto.precio_compra}}</td>
                                    <td>{{producto.precio_venta}}</td>
                                    <td>{{producto.categoria}}</td>
                                    <!-- <td>{{producto.detalle}}</td> -->
                                    <td>
                                        <router-link class="btn btn-primary" :to="{name:'edit', params:{id: producto._id}}"><i class="bi bi-wrench"></i></router-link>
                                        <button class="btn btn-danger" @click.prevent="deleteProduct(producto._id)"><i class="bi bi-x-lg"></i></button>
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
      productos: [],
      search:''
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.productos = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    filterProduct:function(){
      return this.productos.filter((producto)=>{
        return producto.nombre.match(this.search);
      })
    }
  },
  methods: {
    deleteProduct(id) {
      let apiURL = `http://localhost:4000/api/delete-product/${id}`;
      let indexOfArrayItem = this.productos.findIndex((i) => i._id === id);

      if (window.confirm("desear eliminar el producto?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.productos.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>