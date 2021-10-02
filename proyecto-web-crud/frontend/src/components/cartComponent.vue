<template>
  <div><p> Aqui va el carrito de compra</p> 

    <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/checkout">checkout</router-link></li>

    </ul>

  </div>
    
</template>


    <script>
    export default {
      name: 'cart',
      props: {
        msg: String
      }
    }
    </script>