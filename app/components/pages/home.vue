<style lang="scss">

  // css

  .Header {
    padding: 20px 0 20px 80px;

    background: #333;
    font-size: 30px;
    color: orange;
    span {
      color: white;
    }
  }

  .Users {
    padding: 20px 0;
  }

  .User {
    position: relative;
    display: block;

    width: 80%;
    margin: 30px auto 15px;
    padding: 0 0 30px 0;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 200px;
      height: 2px;
      background: orange;
    }
  }

  .User-image {
    display: inline-block;
  }

  .User-info {
    display: inline-block;

    padding: 30px 0 0 50px;

    vertical-align: top;
  }

  .User-info-each {
    margin: 0 0 10px 0;
  }

  .User-info-label {
    font-size: 18px;
    color: orange;
  }

  .User-info-data {
    font-size: 18px;
    color: black;
  }
</style>

<template>

  <div class="Home">

    <div class="Header">
      Mandarine <span>People</span>
    </div>

    <div class="Users">
      <div class="User" v-for="user in users">
        <div class="User-image">
          <img v-bind:src="user.profile.image_192" alt="" />
        </div>

        <div class="User-info">
          <div class="User-info-each">
            <span class="User-info-label">Name:</span>
            <span class="User-info-data">{{user.real_name || user.name}}</span>
          </div>
          <div class="User-info-each" v-if="user.profile.title">
            <span class="User-info-label">Title:</span>
            <span class="User-info-data">{{user.profile.title}}</span>
          </div>
          <div class="User-info-each">
            <span class="User-info-label">Email:</span>
            <span class="User-info-data">{{user.profile.email}}</span>
          </div>
          <div class="User-info-each" v-if="user.profile.phone">
            <span class="User-info-label">Phone:</span>
            <span class="User-info-data">{{user.profile.phone}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <sticky-footer></sticky-footer> -->

</template>

<script>
  import Footer from 'components/partials/footer.vue';
  import req from 'lib/request.js';

  export default {
    name: 'Home',
    data() {
      return {
        users: [],
      };
    },
    components: {
      'sticky-footer': Footer
    },
    ready() {
      req.get('/users.list?token=xoxp-62846276498-62837303189-67168854887-5f836b4333')
        .then((resp) => {
          this.users = resp.members;
        });
    }
  };
</script>
