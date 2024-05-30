
<script setup>
</script>

<template>
    <div class="px-2 py-3 px-md-4 bg-body overflow-x-none" data-bs-theme="light">
      <section>
        <div class="card rounded-4">
          <img
            src="/src/assets/bg1.jpg"
            height="300px"
            class="card-img object-fit-cover rounded-4"
          />
          <div class="card-img-overlay text-center text-white">
            <h1 class="card-title text-center mt-5">AfriFarm-Connect</h1>
            <p class="card-text text-center fs-5">
              Streamlining the Agricultural value Chain in Kenya
            </p>
            <router-link
              to="/login"
              class="btn btn-lg btn-outline-primary text-body rounded-pill"
              >Get Started</router-link
            >
          </div>
        </div>
      </section>

      <section aria-labelledby="section-heading" class="p-5">
        <div class="row row-cols-1 row-cols-lg-2 g-5 align-items-lg-center">
          <div class="col">
            <div class="text-body">
              <h2 id="section-heading" class="h5 fw-bold">Afrifarm-Connect</h2>
              <p>
                Welcome to our platform, dedicated to revolutionizing the
                agricultural value chain in Kenya and across Africa.
              </p>
              <ol>
                <li>
                  Our mission is to empower farmers, traders, and extension
                  officers with cutting-edge digital tools and services tailored
                  to their specific needs.
                </li>
                <li>
                  By leveraging advanced technology, we aim to enhance
                  productivity, optimize resource management, and ensure
                  sustainable agricultural practices.
                </li>
              </ol>
            </div>
          </div>
          <div class="col order-first order-lg-last">
            <div class="card bg-dark text-white rounded-4">
              <img
                src="/src/assets/background1.jpg"
                class="card-img object-fit-cover rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="p-5">
        <div class="row row-cols-1 row-cols-lg-2 g-5 align-items-lg-center">
          <div class="col">
            <div class="card rounded-4">
              <img src="/src/assets/bt1.webp" class="card-img rounded-4" />
            </div>
          </div>
          <div class="col">
            <div class="text-body">
              <h2 class="h5">
                Bridging the Gap in the Agricultural Value Chain
              </h2>
              <p>
                Our vision is to create a seamless agricultural value chain that
                benefits everyone involved.
              </p>
              <p>
                Our team of experts from various fields, including agriculture,
                technology, and data science, works tirelessly to create
                solutions that address the real challenges faced by the
                agricultural community.<br />
                Join Afrifarm-Connect on our journey to streamline the
                agricultural value chain, improve livelihoods, and support the
                sustainable development of agriculture in Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1 class="text-center mt-5 text-body">Our Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div class="col">
          <div class="card h-100">
            <img src="/src/assets/ext1.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">E-Extension Services</h5>
              <p class="card-text">
                Get expert agricultural advice tailored to your needs. Our
                e-extension services provide personalized guidance on crop
                management, pest control, and soil health. With our platform,
                improve your crop yields and sustainability practices.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/src/assets/mkt1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Market Access Solutions</h5>
              <p class="card-text">
                Connect directly to markets and buyers. Our solutions facilitate
                transparent transactions, ensuring fair prices for your produce.
                Access new market opportunities easily and reliably, increasing
                your income and business growth.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/src/assets/mkt.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Digital Tools for Farmers</h5>
              <p class="card-text">
                Boost your productivity with our digital tools. From crop
                planning to weather forecasting, our user-friendly tools empower
                you to optimize your farming operations. Make data-driven
                decisions and achieve sustainable farming practices
                effortlessly. .
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center mt-5 text-body">FAQs</h1>
      <div class="card-group mt-5">
        <div class="card">
          <img src="/src/assets/afrifarm.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-text">What is Afrifarm-connect?</h5>
            <p>
              Afrifarm is a digital platform dedicated to revolutionizing the
              agricultural landscape in Kenya and across Africa. We provide
              farmers, traders, and extension officers with state-of-the-art
              digital tools and services tailored to their unique needs.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/src/assets/background1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-text">
              What sets Afrifarm apart from other agricultural platforms?
            </h5>
            <p>
              Afrifarm stands out for its commitment to innovation,
              sustainability, and community impact. We leverage advanced
              technology and data analytics to empower farmers with personalized
              agricultural advice, market access solutions, and digital tools
              for increased productivity and sustainability.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/src/assets/background.jpeg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-text">
              How does Afrifarm contribute to the agricultural sector in Kenya
              and Africa?
            </h5>
            <p>
              Afrifarm contributes to the agricultural sector by bridging the
              gap between farmers and markets, providing access to quality
              inputs and advisory services, and promoting sustainable farming
              practices. Our platform facilitates transparent transactions,
              ensures fair prices for farmers' produce, and supports economic
              growth and food security in the region.
            </p>
          </div>
        </div>
      </div>
      <footer class="py-4 mt-3">
        <div class="container text-center">
          <p class="mb-0">
            © 2024 Software Development Team. All rights reserved.
          </p>
          <p class="mb-2">
            <a href="/privacy-policy">Privacy Policy</a> |
            <a href="/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
</template>

<style>

  </style>
