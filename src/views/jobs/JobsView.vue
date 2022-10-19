<template>
  <h1>Posts</h1>
    <div v-if="posts.length">
         <div v-for="post in posts" :key="post.id" class="job">
        <router-link :to="{name:'jobDetails', params:{id:post.id}}">
            <h2>{{post.title}}</h2>
        </router-link> 
  </div>
    </div>
  <div v-else>
    <p>Loading posts...</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            posts:[]
        }
    },

    mounted(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        // fetch("http://localhost:3000/jobs")
        .then(res=>res.json())
        .then(data=>this.posts=data)
        .catch(err=>console.log(err))
    }
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
    text-align: justify;
}
.job h2:hover{
    background: #ddd;
}
.job a{
    text-decoration: none;
}
</style>