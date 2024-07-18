<script>
export default {
  name: 'AppLoader',
}
</script>

<template>

  <!--   <div class="wrapper d-flex justify-content-center align-items-center">
    <div class="loader"></div>
  </div> -->
  <section class="dots-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </section>

</template>

<style scoped>
.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.dot {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #b3d4fc;
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:last-child {
  margin-right: 0;
}

.dot:nth-child(1) {
  animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }

  50% {
    transform: scale(1.2);
    background-color: #6793fb;
    box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
  }

  100% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }
}

/* .wrapper {
  height: 550px;

  .loader {
    --uib-size: 25px;
    --uib-speed: 1.5s;
    --uib-color: white;
    position: relative;
    top: -15%;
    transform: translate(-50%, -50%);
    height: var(--uib-size);
    width: var(--uib-size);
    animation: rotate936 calc(var(--uib-speed) * 1.667) infinite linear;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 60%;
      width: 60%;
      border-radius: 50%;
      background-color: var(--uib-color);
      will-change: transform;
      flex-shrink: 0;
    }

    &::before {
      animation: orbit var(--uib-speed) linear infinite;
    }

    &::after {
      animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2) infinite;
    }
  }
}

@keyframes rotate936 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  0% {
    transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
    opacity: 0.65;
  }

  5% {
    transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208);
    opacity: 0.58;
  }

  10% {
    transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576);
    opacity: 0.51;
  }

  15% {
    transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944);
    opacity: 0.44;
  }

  20% {
    transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312);
    opacity: 0.37;
  }

  25% {
    transform: translate(0%) scale(0.47368);
    opacity: 0.3;
  }

  30% {
    transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312);
    opacity: 0.37;
  }

  35% {
    transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944);
    opacity: 0.44;
  }

  40% {
    transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576);
    opacity: 0.51;
  }

  45% {
    transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208);
    opacity: 0.58;
  }

  50% {
    transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684);
    opacity: 0.65;
  }

  55% {
    transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472);
    opacity: 0.72;
  }

  60% {
    transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104);
    opacity: 0.79;
  }

  65% {
    transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736);
    opacity: 0.86;
  }

  70% {
    transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368);
    opacity: 0.93;
  }

  75% {
    transform: translate(0%) scale(1);
    opacity: 1;
  }

  80% {
    transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368);
    opacity: 0.93;
  }

  85% {
    transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736);
    opacity: 0.86;
  }

  90% {
    transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104);
    opacity: 0.79;
  }

  95% {
    transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472);
    opacity: 0.72;
  }

  100% {
    transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
    opacity: 0.65;
  }
} */
</style>