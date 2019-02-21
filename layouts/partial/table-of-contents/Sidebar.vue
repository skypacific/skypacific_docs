<template>
  <div class="sidebar-container">
    <div class="sidebar-title"></div>
    <ul class="sidebar-links">
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.sidebar-container {
  position: fixed;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(255,255,255,1);
  font-size: 0.9rem;
  padding: 1rem 1.4rem;
  z-index: 30;
  transition: all 400ms;
}
@media screen and (min-width: 752px) {
  .sidebar-container {
    top: 0;
    bottom: 0;
    right: 0;
    min-width: 300px;
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  }
}
@media screen and (max-width: 751px) {
  .sidebar-container {
    top: 0;
    bottom: 0;
    right: 0;
    width: 65%;
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  }
}
.sidebar-container * {
  transition: 0ms;
}

.sidebar-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.sidebar-title2 {
  margin: 0.1em 0em;
}
.sidebar-title2 a {
  color: grey;
}
.sidebar-title2.is-active a {
  font-weight: bold;
  color: #3a8fb7;
  border-bottom: 2px solid #3a8fb7;
}

.sidebar-title3 {
  margin: 0.1em 0em;
}
.sidebar-title3 a {
  color: grey;
}
.sidebar-title3 {
  margin-left: 1rem;
}
.sidebar-title3.is-active a {
  font-weight: bold;
  color: #3a8fb7;
}
</style>
