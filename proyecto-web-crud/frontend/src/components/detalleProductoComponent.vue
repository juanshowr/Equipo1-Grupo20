<template>
    <div class="container ">
        <main>
            <div class="row g-2">
                <div class="col-md-9">
                    <h2 class="cabecera">{{producto.nombre}}</h2>
                    <p id="precio" class="cabecera">$ {{producto.precio_venta}}</p>
                </div>
            </div>
          <div class="row g-3">
                <div class="col-md-4 order-md-last">
                    <p id="grey_texts">{{producto.detalle}}</p>
                </div>
                <div class="col-md-3 col-lg-3">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        Categorías
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Insumos avícolas</a>
                    <a href="#" class="list-group-item list-group-item-action">Medicina Veterinaria</a>
                    <a href="#" class="list-group-item list-group-item-action">Concentrados</a>
                    <a class="list-group-item list-group-item-action disabled">Atención Veterinaria</a>
                </div>
                <div class="col-md-5 col-lg-3">
                    <img v-bind:src="producto.imagen" alt="" width="230" height="340">
                    <button class="btn btn-primary" id="addToCar" v-on:click="addToCart">Agregar al carrito</button>
                </div>
          </div>
          <br>
          <br>
          <br>
          <div class="row mx-auto my-auto justify-content-center py-5">
            <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="col-md-3">
                          <center>
                            <a  href="https://www.google.com/">
                              <img src="../assets/logoB.jpg" class="img-fluid" width="150" height="50">
                            </a>
                          </center>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="//via.placeholder.com/500x400/e66?text=2" class="img-fluid">
                                </div>
                                <div class="card-img-overlay">Slide 2</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="//via.placeholder.com/500x400/7d2?text=3" class="img-fluid">
                                </div>
                                <div class="card-img-overlay">Slide 3</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="//via.placeholder.com/500x400?text=4" class="img-fluid">
                                </div>
                                <div class="card-img-overlay">Slide 4</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="//via.placeholder.com/500x400/aba?text=5" class="img-fluid">
                                </div>
                                <div class="card-img-overlay">Slide 5</div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="//via.placeholder.com/500x400/fc0?text=6" class="img-fluid">
                                </div>
                                <div class="card-img-overlay">Slide 6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
        </main>
    </div>

</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      producto: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/search-product/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.producto = res.data;
    });
  },
  methods: {
      addToCart(){
          alert("Componente en edición");
      }
  }
};
</script>

<style>
    .cabecera {
        display: block;
        text-align: center;
        font-weight: bold;
    }

    #precio {
        border: 1px solid silver;
    }

    #addToCar {
        margin: 15px;
        width: 100%
    }
</style>
