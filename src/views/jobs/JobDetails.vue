<template>
 <div v-if="post">
  <h1>{{post.title}}</h1>
  <p>The id of the post is: {{post.id}}</p>
  <p class="mybody">{{post.body}}</p>
  <!-- <p class="mybody">{{post.details}}</p> -->
 </div>
 <div v-else>
  <p>Loading post details</p>
 </div>
</template>

<script>
export default {
    props:['id'],
data(){
    return{
        // id:this.$route.params.id
        post:null
    }
},
mounted(){
    fetch("https://jsonplaceholder.typicode.com/posts/"+this.id)
    // fetch("http://localhost:3000/jobs/"+this.id)
    .then(res=>res.json())
    .then(data=>this.post=data)
    .catch(error=>console.log(error))
  }
}
</script>

<style scoped>
.mybody{
  width: 420px;
  margin: 20px auto;
  text-align: justify;
}
h1{
  width: 380px;
   margin: 20px auto;
  text-align: justify;
  text-decoration: underline;
  text-transform: capitalize;
}
</style>