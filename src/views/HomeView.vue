<script setup>
import { ref, computed } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const passwordVisible = ref(false);

const isValidEmail = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.value);
});

function handleRememberMe() {
  if (rememberMe.value) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
}
</script>

<template>
  <header class="sticky-top">
    <the-navbar />
  </header>
  <div class="bg-image">
    <div class="container py-2">
      <div class="d-flex flex-column gap-2">
        <div class="align-self-center col-11 col-sm-8 col-md-6 col-lg-4">
          <div class="card rounded-4 bg-white bg-opacity-50">
            <div class="card-body p-4">
              <div class="row row-cols-1 g-3">
                <div class="col">
                  <div style="text-align: center">
                    <h1 class="h4">Sign In</h1>
                  </div>

                  <label class="form-label" for="exampleInputEmail1"
                    >Email address:</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                  <small class="text-danger" v-if="email && !isValidEmail"
                    >Please enter a valid email address.</small
                  >
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="col">
                  <label class="form-label" for="exampleInputPassword1"
                    >Password:</label
                  >
                  <input
                    v-model="password"
                    :type="passwordVisible ? 'text' : 'password'"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="col">
                  <div class="mt-1">
                    <div class="form-check">
                      <input
                        v-model="rememberMe"
                        @change="handleRememberMe"
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >Remember me</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
                <div class="col">
                  <span>Don't have an account?</span>
                  <RouterLink to="/registration"> Sign up</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url("/src/assets/background1.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
