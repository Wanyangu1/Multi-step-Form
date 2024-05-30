<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand ms-5">
      <!-- Sidebar toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list bi-2x"></i>
      </button>
    </a>
    <form class="form-inline d-flex gap-3 me-5">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
  <div>
    <!-- Sidebar component with custom width -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasSidebar"
      aria-labelledby="offcanvasSidebarLabel"
      style="width: 300px"
    >
      <div class="offcanvas-header">
        <h5
          class="offcanvas-title align-items-center"
          id="offcanvasSidebarLabel"
        >
          DASHBOARD
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div
        class="offcanvas-body bg-light"
        style="background-color: rgba(255, 255, 255, 0.9)"
      >
        <!-- User profile section -->
        <div class="user-profile mb-4">
          <img
            src="/src/assets/logo2.1.png"
            alt="User Avatar"
            class="rounded-circle mb-2"
            width="50"
          />
        </div>

        <!-- Search bar -->
        <div class="mb-4">
          <input type="text" class="form-control" placeholder="Search..." />
        </div>

        <!-- Navigation links -->
        <nav class="nav flex-column">
          <a class="nav-link active" href="#">
            <i class="bi bi-house-door"></i> Home
          </a>
          <a class="nav-link" href="#"> <i class="bi-person"></i> Profile </a>
          <a class="nav-link" href="#">
            <i class="bi bi-info-circle"></i> About Us
          </a>
          <a class="nav-link" href="#">
            <i class="bi bi-briefcase"></i> Services
          </a>

          <!-- Product link with nested categories -->
          <div class="nav-item dropdown">
            <a class="nav-link" href="#">
              <i class="bi bi-box-seam"></i> Products
            </a>
            <nav class="nav flex-column ms-3 dropdown-menu">
              <a class="nav-link" href="#">
                <i class="bi bi-box"></i> Product Category 1
              </a>
              <a class="nav-link" href="#">
                <i class="bi bi-box"></i> Product Category 2
              </a>
            </nav>
          </div>

          <a class="nav-link" href="#">
            <i class="bi bi-journal-text"></i> Blog
          </a>
          <a class="nav-link" href="#">
            <i class="bi bi-envelope"></i> Contact
          </a>
          <a class="nav-link" href="#">
            <i class="bi bi-question-circle"></i> Help/FAQ
          </a>
          <a class="nav-link" href="#">
            <i class="bi-box-arrow-right"></i> Logout
          </a>
        </nav>

        <!-- Footer section -->
        <div class="sidebar-footer mt-4">
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.navbar-toggler-icon {
  font-size: 4rem; /* Adjust the size as needed */
}
/* Hide dropdown menu by default */
.nav-item .dropdown-menu {
  display: none;
}

/* Show dropdown menu on hover */
.nav-item:hover .dropdown-menu {
  display: block;
}

.user-profile img {
  display: block;
  margin: 0 auto;
}

.nav-link {
  margin-bottom: 0.5rem;
}

.sidebar-footer a {
  margin-right: 0.5rem;
}
</style>
