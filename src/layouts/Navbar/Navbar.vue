<script></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">HomeFunding ID</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="../../../img/list.png" class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse w-100 justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav my-3">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Beranda</a
            >
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
          <li class="nav-item w-100 text-center">
            <button
              class="download btn btn-sm btn-outline-light rounded-pill"
              type="submit"
            >
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media screen and (min-width: 905px) {
  .navbar {
    height: 68px;
    background: linear-gradient(271.06deg, #4169e1 -26.94%, #5b84ff 100%);
  }

  .navbar-brand {
    width: 169px;
    height: 30px;
    left: 26px;
    top: 19px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }

  .navbar-toggler img {
    width: 32px;
    height: 17.86px;
    left: 312px;
    top: 13px;
  }

  .nav-item {
    font-size: 15px;
    width: 100px;
    background-color: red;
    font-family: "Poppins";
    font-style: normal;
  }

  .nav-link {
    width: 120%;
  }
  
  /* .nav-item.artikel {
    padding-left: 30px;
  } */

  .nav-item .download {
    width: 160px;
    margin-top: 4px;
  }
}

/* Mobile */
@media screen and (min-width: 320px) {
  .navbar {
    background: linear-gradient(271.06deg, #4169e1 -26.94%, #5b84ff 100%);
  }

  .navbar-brand {
    width: 127px;
    height: 23px;
    left: 16px;
    top: 11px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }

  .navbar-toggler img {
    width: 32px;
    height: 17.86px;
    left: 312px;
    top: 13px;
  }

  .nav-item {
    width: 100%;
    font-size: 15px;
    text-align: end;
  }

  .nav-item .download {
    width: 160px;
    margin-top: 4px;
  }
}
/* Mobile */

/* Tablet */
@media screen and (min-width: 600px) {
  .navbar {
    background: linear-gradient(271.06deg, #4169e1 -26.94%, #5b84ff 100%);
  }

  .navbar-brand {
    width: 169px;
    height: 30px;
    left: 26px;
    top: 19px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }

  .navbar-toggler img {
    width: 43px;
    height: 29px;
    left: 525px;
    top: 20px;
  }

  /* .navbar-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 60px;

    position: absolute;
    width: 140px;
    height: 300px;
    left: 204px;
    top: 155px;
  } */

  .nav-item {
    width: 100%;
    text-align: end;
    font-weight: 600;
    line-height: 30px;
    height: 30px;
    /* font-family: 'Poppins';
    font-style: normal; */
    font-size: 20px;
  }

  .nav-item .download {
    width: 160px;
    margin-top: 4px;
  }
}
/* Tablet */
</style>

<!-- 1024 dan 600 masih belum -->
