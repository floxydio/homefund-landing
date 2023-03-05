<script></script>

<template>
  <div class="main">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <h1 class="title">Investasi Rumah dan Ruko</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur. Lobortis pulvinar tortor
            magna gravida duis. In et condimentum nullam fringilla sed nisl
            semper sit. Laoreet in augue porta nec sollicitudin sit risus
            egestas. Sed et ipsum sagittis dictumst eu proin urna. Tellus massa
            pharetra turpis mauris.
          </p>
          <div class="col-lg-9 d-flex mt-4 justify-content-center">
              <button
              class="download btn btn-light rounded-pill"
              type="submit" style="color: #4169E1">
              Get it now
            </button>
            <button
              class="download ms-4 mb-4 btn btn-outline-light rounded-pill"
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
                <p>Kontak Kami</p>
                <i class="bi bi-arrow-right ms-2"></i>
            </div>
            <div class="solusi d-flex">
                <p>Solusi Kami</p>
                <i class="bi bi-arrow-right ms-2"></i>
            </div>
            <div class="cerita d-flex">
                <p>Cerita Kami</p>
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
  background: linear-gradient(284.5deg, #4169e1 0%, #5b84ff 101.21%);
}
.row {
  padding-block: 40px;
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
</style>
