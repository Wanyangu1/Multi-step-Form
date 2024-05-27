<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import { ref, computed, watch } from "vue";

const currentStep = ref(1);
const name = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const phone = ref("");
const altphone = ref("");
const location = ref("");
const date = ref("");
const selectedCategory = ref("");
const selectedCounty = ref("");
const isPasswordValid = ref(true);
const isRepeatPasswordValid = ref(true);
const isEmailValid = ref(true);

const prevStep = () => {
  currentStep.value--;
};

const nextStep = () => {
  if (currentStep.value === 1) {
    validatePassword();
    validateRepeatPassword();
    validateEmail();
    if (
      !isPasswordValid.value ||
      !isRepeatPasswordValid.value ||
      !isEmailValid.value
    ) {
      return;
    }
  }
  currentStep.value++;
};

const submitForm = () => {
  // Handle form submission here
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
    phone: phone.value,
    altphone: altphone.value,
    location: location.value,
    date: date.value,
    selectedCategory: selectedCategory.value,
    selectedCounty: selectedCounty.value,
  });
};

const progressPercentage = computed(() => {
  return (currentStep.value / 2) * 100;
});

const validatePassword = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  isPasswordValid.value = passwordRegex.test(password.value);
};

const validateRepeatPassword = () => {
  isRepeatPasswordValid.value = password.value === repeatPassword.value;
};

const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isEmailValid.value = emailRegex.test(email.value);
};

watch([password, repeatPassword, email], () => {
  validatePassword();
  validateRepeatPassword();
  validateEmail();
});
</script>

<template>
  <header class="sticky-top">
    <TheNavbar />
  </header>
  <div class="bg-image">
    <div class="container py-4">
      <div
        class="mx-auto card rounded-4 bg-white bg-opacity-50 col-12 col-sm-8 col-lg-6"
      >
        <div class="card-body p-5">
          <div class="d-flex justify-content-between mb-1">
            <div class="d-flex align-items-center">
              <i class="bi bi-person-circle mr-2"></i>
              <span>User Profile</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-envelope-fill mr-2"></i>
              <span>Contact Info</span>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-1"></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-success progress-bar-animated d-flex align-items-center"
              role="progressbar"
              :style="{ width: progressPercentage + '%' }"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="mr-2">{{ currentStep }}/2</span>
            </div>
          </div>

          <form @submit.prevent="submitForm">
            <!-- Step 1 -->
            <div v-if="currentStep === 1" class="step">
              <div class="row row-cols-1 row-cols-sm-2 g-2">
                <div class="col">
                  <label for="firstname" class="form-label">First Name:</label>
                  <input
                    type="text"
                    class="form-control border border-success"
                    id="firstname"
                    placeholder="First name"
                    v-model="name"
                    required
                  />
                </div>
                <div class="col">
                  <label for="lastname" class="form-label">Last Name:</label>
                  <input
                    type="text"
                    class="form-control border border-success"
                    id="lastname"
                    placeholder="Last name"
                    v-model="lastname"
                    required
                  />
                </div>
                <div class="col-12 col-sm-12">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    class="form-control border border-success"
                    id="email"
                    placeholder="e.g example@gmail.com"
                    v-model="email"
                    required
                  />
                  <div v-if="!isEmailValid" class="text-danger">
                    Please enter a valid email address.
                  </div>
                </div>

                <div class="col">
                  <label for="password" class="form-label">Password:</label>
                  <input
                    type="password"
                    class="form-control border border-success"
                    id="password"
                    placeholder="Enter password"
                    v-model="password"
                    required
                  />
                  <div
                    v-if="!isPasswordValid && password.length > 0"
                    class="text-danger"
                  >
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one digit, one special character, and be
                    at least 8 characters long.
                  </div>
                  <div
                    v-if="isPasswordValid && password.length > 0"
                    class="text-success"
                  >
                    Password is valid.
                  </div>
                </div>
                <div class="col">
                  <label for="repeat-password" class="form-label"
                    >Repeat password:</label
                  >
                  <input
                    type="password"
                    class="form-control border border-success"
                    id="repeat-password"
                    placeholder="Repeat password"
                    v-model="repeatPassword"
                    required
                  />
                  <div
                    v-if="!isRepeatPasswordValid && repeatPassword.length > 0"
                    class="text-danger"
                  >
                    Passwords do not match.
                  </div>
                </div>
                <div class="col col-sm-12">
                  <label for="userCategory">User Category:</label>
                  <select
                    id="userCategory"
                    class="form-control border border-success"
                    v-model="selectedCategory"
                    @change="categoryChanged"
                  >
                    <option disabled value="">Please select one</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Trader">Trader</option>
                    <option value="Extension Officer">Extension Officer</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-if="currentStep === 2" class="step">
              <div class="row">
                <div class="col">
                  <label for="phone" class="form-label">Phone:</label>
                  <input
                    type="tel"
                    class="form-control border border-success"
                    id="phone"
                    placeholder="Enter phone"
                    v-model="phone"
                    required
                  />
                </div>
                <div class="col">
                  <label for="alt-phone" class="form-label">Alt Phone:</label>
                  <input
                    type="tel"
                    class="form-control border border-success"
                    id="alt-phone"
                    placeholder="Other phone"
                    v-model="altphone"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <label for="county" class="form-label">County:</label>
                <select
                  id="county"
                  class="form-control border border-success"
                  v-model="selectedCounty"
                  required
                >
                  <option disabled value="">Select a county</option>
                  <option value="Baringo">Baringo</option>
                  <option value="Bomet">Bomet</option>
                  <option value="Bungoma">Bungoma</option>
                  <option value="Busia">Busia</option>
                  <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
                  <option value="Embu">Embu</option>
                  <option value="Garissa">Garissa</option>
                  <option value="Homa Bay">Homa Bay</option>
                  <option value="Isiolo">Isiolo</option>
                  <option value="Kajiado">Kajiado</option>
                  <option value="Kakamega">Kakamega</option>
                  <option value="Kericho">Kericho</option>
                  <option value="Kiambu">Kiambu</option>
                  <option value="Kilifi">Kilifi</option>
                  <option value="Kirinyaga">Kirinyaga</option>
                  <option value="Kisii">Kisii</option>
                  <option value="Kisumu">Kisumu</option>
                  <option value="Kitui">Kitui</option>
                  <option value="Kwale">Kwale</option>
                  <option value="Laikipia">Laikipia</option>
                  <option value="Lamu">Lamu</option>
                  <option value="Machakos">Machakos</option>
                  <option value="Makueni">Makueni</option>
                  <option value="Mandera">Mandera</option>
                  <option value="Marsabit">Marsabit</option>
                  <option value="Meru">Meru</option>
                  <option value="Migori">Migori</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Muranga">Muranga</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Nandi">Nandi</option>
                  <option value="Narok">Narok</option>
                  <option value="Nyamira">Nyamira</option>
                  <option value="Nyandarua">Nyandarua</option>
                  <option value="Nyeri">Nyeri</option>
                  <option value="Samburu">Samburu</option>
                  <option value="Siaya">Siaya</option>
                  <option value="Taita-Taveta">Taita-Taveta</option>
                  <option value="Tana River">Tana River</option>
                  <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                  <option value="Trans Nzoia">Trans Nzoia</option>
                  <option value="Turkana">Turkana</option>
                  <option value="Uasin Gishu">Uasin Gishu</option>
                  <option value="Vihiga">Vihiga</option>
                  <option value="Wajir">Wajir</option>
                  <option value="West Pokot">West Pokot</option>
                </select>
              </div>

              <div class="row">
                <div class="col">
                  <label for="phone" class="form-label">Location:</label>
                  <input
                    type="text"
                    class="form-control border border-success"
                    id="location"
                    placeholder="Enter City/Town"
                    v-model="location"
                    required
                  />
                </div>
                <div class="col">
                  <label for="alt-phone" class="form-label">Date:</label>
                  <input
                    type="date"
                    class="form-control border border-success"
                    id="date"
                    placeholder="Choose date"
                    v-model="date"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-success"
                @click="prevStep"
                v-if="currentStep > 1"
              >
                Previous
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="nextStep"
                v-if="currentStep < 2"
              >
                Next
              </button>
              <button
                type="submit"
                class="btn btn-success"
                v-if="currentStep === 2"
              >
                Submit
              </button>
            </div>
            <div class="col">
              <span>Already have an account?</span>
              <RouterLink to="/login"> login</RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step {
  margin-bottom: 2rem;
}

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
