<template>
  <div>
      <!--inicio de la barra de navegacion  -->
        <div class="container-fluid">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                      <div class="col-4 pt-1">
                          <a class="navbar-brand" href="#">Logo</a>
                      </div>

                      <div class="col-4 d-flex justify-content-end align-items-center">
                          <!-- icono de buscar -->
                          <a class="link-secondary" href="#" aria-label="Search">
                            <i class="bi bi-search mx-3" width="20" height="20"></i>
                          </a>

                          <!-- icono de carrito -->
                      
                          <button class="btn btn-sm btn-outline-secondary" type="submit">
                              <router-link to="/cart">
                                    <i class="bi-cart-fill me-1"></i>
                                    <!-- Cart -->
                                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                              </router-link>
                          </button>
                      

                          <!-- icono de login -->
                          <a class="btn btn-sm btn-outline-secondary">
                                <router-link to="/login">Sign up</router-link>
                          </a>
                      </div>
                </div>
            
                <div class="gradiente">
                    <div class="navbar-nav ">
                    
                        <nav class="navbar navbar-expand-lg navbar-light">

                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><router-link class="nav-link pr-3" to="/">Home</router-link></li>
                                    <li class="nav-item"><router-link class="nav-link" to="/">Tienda</router-link></li>
                                    <li class="nav-item"><router-link class="nav-link" to="/acercade">Acerca De</router-link></li>
                                    <li class="nav-item"><router-link class="nav-link" to="/contact">Contacto</router-link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="bg-dark py-5 ">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="text-center text-white">
                            <h1 class="display-4 fw-bolder">EL GALPON</h1>
                            <p class="lead fw-normal text-white-50 mb-0">Agropecuaria</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
      <!--  -->

        <!-- Router view -->
            <div class="container mt-5">
              <router-view></router-view>
            </div>
  </div>
</template>

<style>
    .gradiente {
        background-image: linear-gradient(green, yellow, orange);
    }
</style>