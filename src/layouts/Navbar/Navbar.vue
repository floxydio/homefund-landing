<script></script>

<template>
  <div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">HomeFunding ID</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Beranda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Tentang Kami</a>
              </li>
              <li class="nav-item artikel">
                <a class="nav-link text-light" href="#">Artikel</a>
              </li>
              <li class="nav-item">
                <button class="download btn btn-sm btn-outline-light rounded-pill" type="submit">
                  Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.row {
  background: linear-gradient(284.5deg, #4169e1 0%, #5b84ff 101.21%);
}

.navbar-brand {
  font-size: 20px;
  line-height: 22px;
}

.nav-item {
  width: 110px;
  font-size: 15px;
}

.nav-item.artikel {
  padding-left: 30px;
}

.nav-item .download {
  width: 160px;
}
</style>
