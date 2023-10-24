<template>
  <div>
    <h1>
      <span class="let1">l</span>
      <span class="let2">o</span>
      <span class="let3">a</span>
      <span class="let4">d</span>
      <span class="let5">i</span>
      <span class="let6">n</span>
      <span class="let7">g</span>
    </h1>
  </div>
</template>

<script></script>

<style scoped>
div {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  background: #191a1a;
  color: rgba(245, 216, 100, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 999;
}

span {
  display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);
}

.let1 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.2s;
}

.let2 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.3s;
}

.let3 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.4s;
}

.let4 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.5s;
}

.let5 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.6s;
}

.let6 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.7s;
}

.let7 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.8s;
}

@keyframes drop {
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  80% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    top: 6.94em;
  }
}
</style>
