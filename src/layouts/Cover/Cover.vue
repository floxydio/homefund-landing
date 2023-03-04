<script></script>

<template>
    <main class="main">
        <h1 class="title position-absolute">Investasi Rumah dan Ruko</h1>
        <p class="text position-absolute">
            Lorem ipsum dolor sit amet consectetur. Lobortis pulvinar tortor magna
            gravida duis. In et condimentum nullam fringilla sed nisl semper sit.
            Laoreet in augue porta nec sollicitudin sit risus egestas. Sed et ipsum
            sagittis dictumst eu proin urna. Tellus massa pharetra turpis mauris.
        </p>
        <button class="btn get-now d-flex align-middle justify-content-center">Get it now</button>
        <button class="features">
            <p>Features</p>
        </button>
        <div class="vector">
            <img src="../../../public/img/vector.png"  class="" alt="">
        </div>
        <div class="contact">
            <div class="kontak-kami d-flex">
                <p>Kontak Kami</p> <i class="bi bi-arrow-right text-white"></i>
            </div>
        </div>
    </main>
</template>

<style scoped>
.main {
    /* position: absolute; */
    width: 1440px;
    height: 631px;
    left: 0px;
    top: 68px;

    background: linear-gradient(284.5deg, #4169e1 0%, #5b84ff 101.21%);
}

.title {
    /* position: absolute; */
    width: 576px;
    height: 150px;
    left: 156px;
    top: 146px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 75px;

    color: #ffffff;
}

.text {
    /* position: absolute; */
    width: 744px;
    height: 69px;
    left: 156px;
    top: 326px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: rgba(255, 255, 255, 0.7);
}

.get-now {
    box-sizing: border-box;

    /* Auto layout */

    /* display: flex; */
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 5px 40px;
    gap: 10px;

    position: absolute;
    width: 156px;
    height: 44px;
    left: 156px;
    top: 417px;

    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 77px;
}


.features {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 40px;
    gap: 10px;

    position: absolute;
    width: 146px;
    height: 44px;
    left: 332px;
    top: 417px;
    background-color: transparent;

    border: 1px solid #ffffff;
    border-radius: 77px;
}

.features p {
    width: 66px;
    height: 23px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.vector {
    position: absolute;
    width: 232px;
    height: 455px;
    left: 1020px;
    top: 69px;
    background-color: red;
    background-size: cover;
}

.vector img {
    background-size: cover;
}

.contact {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 57px;

    position: absolute;
    width: 453.5px;
    height: 23px;
    left: 516px;
    top: 539px;
}

.kontak-kami p {
    width: 94px;
    height: 23px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */


    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>
