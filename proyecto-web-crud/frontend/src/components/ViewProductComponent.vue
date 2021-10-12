<template>
    <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <!-- inicio de tarjetas -->
                    <div class="col mb-5" v-for="producto in productos" :key="producto.id">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" v-bind:src="producto.imagen" height="300" width="450" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{producto.nombre}}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">{{producto.precio_venta}}</span>
                                    
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <!--<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>-->
                                  <button class="btn btn-md btn-info" @click="addToCart(producto._id, 1)">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productos: [],
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
  //obtener productos para el carrito
  methods: {
    async getProducts() {
      const res = await fetch("http://localhost:4000/product");
      const data = await res.json();
      this.productos = new Proxy(data.data, {});
      console.log(this.productos);
    },
    async addToCart(id, quantity) {
      try {
        const response = await fetch("http://localhost:4000/cart", {
          method: "POST",
          body: JSON.stringify({
            productId: id,
            quantity: quantity,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        let data = await response.json();
        alert("Item agregado al carrito");
        console.log(data);
      } catch (err) {
        alert("Algo salió mal");
        console.log(err);
      }
    },
  },
};

</script>