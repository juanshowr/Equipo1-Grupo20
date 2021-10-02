<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
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
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Ingreso de productos</h1>
            </div>

            <!-- inicio del formulario -->
                <div class="col-md-7 col-lg-8">
                  <form class="needs-validation" novalidate @submit.prevent="handleSubmitForm">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="product" class="form-label">Producto</label>
                        <input type="text" v-model="producto.nombre" class="form-control" id="product" placeholder="" value="" required>

                      </div>
                    
                      <div class="col-sm-6">
                        <label for="unit" class="form-label">Unidades</label>
                        <input type="number" v-model="producto.unidades" class="form-control" id="unit" placeholder="0" value="" required>

                      </div>
            

                      <div class="col-6">
                        <label for="Pcompra" class="form-label">Precio de Compra </label>
                        <input type="number" v-model="producto.precio_compra" class="form-control" id="Pcompra" placeholder="0" required>

                      </div>
          
                      <div class="col-6">
                        <label for="Pventa" class="form-label">Precio de Venta</label>
                        <input type="number" v-model="producto.precio_venta" class="form-control" id="Pventa" placeholder="0" required>

                      </div>

                      <div class="col-12">
                        <label for="detalle" class="form-label">Detalle</label>
                        <input type="text" v-model="producto.detalle" class="form-control" id="detalle" placeholder="0" required>
                      </div>
          
                      <div>
                        <div class="col-md-5">
                          <label for="categoria" class="form-label">Categoria</label>
                          <select class="form-select" v-model="producto.categoria" id="categoria" required>
                            <option value="">Elige...</option>
                            <option>Avicultura</option>
                            <option>Equinos</option>
                            <option>Ganaderia</option>
                            <option>Mascotas</option>
                            <option>Porcicultura</option>
                          </select>
                        </div>          
                      </div>

                      <div class="col-12">
                        <label for="url-imagen" class="form-label">Imagen</label>
                        <input type="text" v-model="producto.imagen" class="form-control" id="url-imagen" placeholder="ingresa url" required>
                      </div>

                  </div>
          
                    <hr class="my-4">
                      <button class="w-100 btn btn-primary btn-lg" type="submit">Ingresar Producto</button>
                    <hr class="my-4">
                  </form>
                </div>
            <!-- fin del formulario -->
            </main>
        </div>
    </div>
</div>    
</template>


<script>
/*     export default {
      name: 'inventory',
      props: {
        msg: String
      }
    } */
import axios from "axios";

export default {
  data() {
    return {
      producto: {
          nombre:"", 
          unidades:0, 
          precio_compra:0, 
          precio_venta:0, 
          detalle:"",
          categoria:"",
          imagen:""
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-product";

      axios
        .post(apiURL, this.producto)
        .then(() => {
          // this.$router.push("/view");
          this.producto = {
          nombre:"", 
          unidades:0, 
          precio_compra:0, 
          precio_venta:0, 
          detalle:"",
          categoria:"",
          imagen:""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

