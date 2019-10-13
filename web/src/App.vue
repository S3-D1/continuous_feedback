<template>
  <main>
    <header>
        <b-navbar class="is-dark">
            <template slot="start">
                <b-navbar-item>
                    <router-link to="/">Home</router-link>
                </b-navbar-item>
                <b-navbar-item>
                    <router-link to="/feedback">AllUserFeedback</router-link>
                </b-navbar-item>
                <b-navbar-item>
                    <router-link to="/feedback/group">GroupUserFeedback</router-link>
                </b-navbar-item>
                <b-navbar-item>
                    <router-link to="/feedback/user">SingleUserFeedback</router-link>
                </b-navbar-item>
                <b-navbar-item>
                    <router-link to="/stats/latest">Latest</router-link>
                </b-navbar-item>
                <b-navbar-item href="/stats">
                    <router-link to="/stats">Overall</router-link>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item>
                    Login
                </b-navbar-item>
            </template>
        </b-navbar>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Continuous Feedback
                    </h1>
                    <h2 class="subtitle">
                        for me, for you - for everyone
                    </h2>
                </div>
            </div>
        </section>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
