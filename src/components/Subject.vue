<template>
    <b-container> 
        <div class="d-flex p-3 bg-secondary text-white">
          <router-link to="/">
            <div class="p-2 bg-info text-white">Home</div>
          </router-link>
           <router-link to="/English">
                <div class="p-2 bg-warning text-white">English</div>
           </router-link>
           <router-link to="/Maths">
            <div class="p-2 bg-primary text-white">Maths</div>
           </router-link>
        </div>

    </b-container>
</template>
<script>
export default {
  name: 'Subject',
  props: {
    msg: String
  }
}
</script>