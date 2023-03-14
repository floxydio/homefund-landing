<script></script>

<template>
  <div class="main">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 ">
          <h1 class="title">Investasi Rumah dan Ruko</h1>
          <p class="text">
            HomeFunding ID adalah aplikasi investasi berbasis crowdfunding untuk investasi rumah dan bisnis untuk semua orang dengan start invest yang rendah serta periode imbal hasil yang cepat. Solusi terbaik untuk memulai investasi properti kamu.
          </p>
          <div class="col-lg-9">
              <button
              class="download btn btn-light rounded-pill space"
              type="submit" style="color: #4169E1">
              Get it now
            </button>
            <button
              class="download btn btn-outline-light rounded-pill space"
              type="submit">
              Features
            </button>
        </div>
        </div>
        <div class="col-lg-4 text-center">
          <div class="vector">
            <img src="../../../img/vector.png"/>
          </div>
        </div>
        <div class="my-4">
          <div class="contact d-flex justify-content-center gap-5 text-white">
            <div class="kontak d-flex">
                <p class="text-white">Kontak Kami</p>
                <i class="bi bi-arrow-right ms-2"></i>
            </div>
            <div class="solusi d-flex">
                <p class="text-white">Solusi Kami</p>
                <i class="bi bi-arrow-right ms-2"></i>
            </div>
            <div class="cerita d-flex">
                <p class="text-white">Cerita Kami</p>
                <i class="bi bi-arrow-right ms-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: linear-gradient(284.5deg, #4169E1 0%, #5B84FF 101.21%);
}
.row {
  padding-block: 40px;
  /*  */
}

.col-lg-5 {
    align-self: center;
}

.title {
  width: 576px;
  height: 150px;
  font-weight: 700;
  font-size: 50px;
  line-height: 75px;
  color: #ffffff;
  margin-bottom: 30px;
}

.space {
  margin-top: 40px;
  margin-right:20px;
}

.text {
  width: 670px;
  height: 69px;
  left: 156px;
  top: 326px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: rgba(255, 255, 255, 0.7);
}

.download {
    width: 156px;
    height: 44px;
}

.get-now {
  padding: 5px 40px;
  gap: 10px;
  width: 156px;
  height: 44px;
  left: 156px;
  top: 417px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 77px;
}

.vector {
  height: 455px;
}

@media screen and (max-width: 768) {

}
</style>
