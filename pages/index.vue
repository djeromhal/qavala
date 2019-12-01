<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="anim_wrapper">
          <div class="anim_wrapper_inner">
            <span class="anim">Q</span>
            <span>avala<br>test</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anim_wrapper{
  background: #343a40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
}
.anim_wrapper_inner{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
span:not(.anim){
  font-size: 5vw;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transform-origin: 0 0;
  opacity: .5;
}
.anim{
  display: inline-block;
  font-size: 60vw;
  color: #fff;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 4000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 4000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 4000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}


@-ms-keyframes spin {
    from { -ms-transform: rotateY(360deg) perspective( 10000px); }
    to { -ms-transform: rotateY(0deg) perspective( 10000px); }
}
@-moz-keyframes spin {
    from { -moz-transform: rotateY(360deg) perspective( 10000px) }
    to { -moz-transform: rotateY(0deg) perspective( 10000px); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotateY(360deg) perspective( 10000px); }
    to { -webkit-transform: rotateY(0deg) perspective( 10000px); }
}
@keyframes spin {
    from {
        transform:rotateY(360deg) perspective( 10000px);
    }
    to {
        transform:rotateY(0deg) perspective( 10000px);
    }
}

</style>
