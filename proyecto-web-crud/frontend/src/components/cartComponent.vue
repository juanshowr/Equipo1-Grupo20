<template>
<main>
    <section>
      <div
        class="banner-innerpage"
        style="
          background-image: url(https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?cs=srgb&dl=pexels-oleg-magni-1005638.jpg&fm=jpg);
        "
      >
        <div class="container">
          <!-- Row  -->
          <div class="row justify-content-center">
            <!-- Column -->
            <div
              class="col-md-6 align-self-center text-center"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <h1 class="title">Carrito de Compras</h1>
              <h6 class="subtitle op-8">
                
              </h6>
            </div>
            <!-- Column -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="spacer">
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-9">
              <div class="row shop-listing">
                <table class="table shop-table">
                  <tr>
                    <th class="b-0">Imagen</th>
                    <th class="b-0">Producto</th>
                    <th class="b-0">Precio</th>
                    <th class="b-0">Cantidad</th>
                    <th class="b-0 text-right">Precio Total</th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="data:image/png;base64,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"
                        width="200"
                        alt="wrapkit"
                      />
                    </td>
                    <td>
                      Acá va el producto escogido
                    </td>
                    <td>
                      Acá va el precio a pagar
                    </td>
                    <td>
                      <button class="btn btn-primary btn-sm">+</button> 3
                      <button class="btn btn-primary btn-sm">
                        -
                      </button>
                    </td>
                    <td class="text-right">
                      <h5 class="font-medium m-b-30">
                        $195
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" align="right">Subtotal :$1000</td>
<td colspan="4" align="right">
                      <button class="btn btn-danger">Empty Cart</button>
                    </td>
                  </tr>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
export default {
  data() {
    return {
      carts: {},
    };
  },
  methods: {
    async getCartItems() {
      try {
        const res = await fetch("http://localhost:4000/cart");
        const data = await res.json();
        this.carts = new Proxy(data.data, {});
        console.log(this.carts);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getCartItems();
  },
};
</script>