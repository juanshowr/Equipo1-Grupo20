<template>
        <div class="container ">
            <main>
              <div class="py-5 text-center">
                <h2>Formulario de Pago</h2>
                <p class="lead">Revice atentamente los detalles de su pedido, y complete el formulario</p>
              </div>
          
              <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-primary">Tu pedido</span>
                    <span class="badge bg-primary rounded-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Producto</h6>
                        <small class="text-muted">Descripcion</small>
                      </div>
                      <span class="text-muted">$12.000</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Producto</h6>
                        <small class="text-muted">Descripcion</small>
                      </div>
                      <span class="text-muted">$8.000</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">Producto</h6>
                        <small class="text-muted">Descripcion</small>
                      </div>
                      <span class="text-muted">$5.000</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total</span>
                      <strong>$25.000</strong>
                    </li>
                  </ul>
                </div>
              <!-- inicio del formulario -->
                <div class="col-md-7 col-lg-8">
                  <h4 class="mb-3">Direccion de Envio</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="firstName" class="form-label">Nombres</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                          La validacion de los nombres es requerido.
                        </div>
                      </div>
                    
                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">Apellidos</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                            La validacion de los apellidos es requerido.
                        </div>
                      </div>
            

                      <div class="col-12">
                        <label for="email" class="form-label">Email </label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                          Ingrese una direccion de correo valida.
                        </div>
                      </div>
          
                      <div class="col-12">
                        <label for="address" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="address" placeholder="Cra 25 #25-25" required>
                        <div class="invalid-feedback">
                          Ingrese direccion de envio.
                        </div>
                      </div>
          
                    <div>
                      <div class="col-md-5">
                        <label for="country" class="form-label">Departamento</label>
                        <select class="form-select" id="country" required>
                          <option value="">Elige...</option>
                          <option>Valle del Cauca</option>
                        </select>
                        <div class="invalid-feedback">
                          Ingresa un departamento.
                        </div>
                      </div>
          
                      <div class="col-md-4">
                        <label for="state" class="form-label">Ciudad</label>
                        <select class="form-select" id="state" required>
                          <option value="">Elige...</option>
                          <option>Andalucia</option>
                          <option>Cerrito</option>
                          <option>Tulua</option>
                        </select>
                        <div class="invalid-feedback">
                          Ingrese una ciudad.
                        </div>
                      </div>
          
                    </div>
                  </div>
                    <hr class="my-4">
          
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="save-info">
                      <label class="form-check-label" for="save-info">Guardar la información para la próxima vez</label>
                    </div>
          
                    <hr class="my-4">
          
                    <h4 class="mb-3">Modo de Pago</h4>
          
                    <div class="my-3">
                      <div class="form-check">
                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                        <label class="form-check-label" for="credit">Tarjeta Credito</label>
                      </div>
                      <div class="form-check">
                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                        <label class="form-check-label" for="debit">Tarjeta Debito</label>
                      </div>
                      <div class="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
                        <label class="form-check-label" for="paypal">Efecty</label>
                      </div>
                    </div>
          
                    <div class="row gy-3">
                      <div class="col-md-6">
                        <label for="cc-name" class="form-label">Nombre en la tarjeta</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required>
                        <small class="text-muted">Nombre completo como se muestra en la tarjeta</small>
                        <div class="invalid-feedback">
                            Nombre completo como se muestra en la tarjeta
                        </div>
                      </div>
          
                      <div class="col-md-6">
                        <label for="cc-number" class="form-label">Número de la Tarjeta </label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required>
                        <div class="invalid-feedback">
                            Se requiere el número de la tarjeta
                        </div>
                      </div>
          
                      <div class="col-md-3">
                        <label for="cc-expiration" class="form-label">Vencimiento</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                        <div class="invalid-feedback">
                          Se requiere fecha de vencimiento
                        </div>
                      </div>
          
                      <div class="col-md-3">
                        <label for="cc-cvv" class="form-label">CVC</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                        <div class="invalid-feedback">
                          Se requiere codigo de seguridad
                        </div>
                      </div>
                    </div>
          
                    <hr class="my-4">
          
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Continuar para realizar el Pago</button>
                  </form>
                </div>
              </div>
            </main>
        </div>
    <!-- Section-->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = {
            name: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
