<template>
    <nav class="navbar navbar-expand  navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Qavala Test SSR</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" class="nav-link" to="/chart">Chart FB</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<style scoped>

.navbar{
  z-index: 777;
}
</style>