<template>
  <p>Comments</p>
  <div v-if="comments.length">
        <div v-for="comment in comments" :key="comment.id">
            <h1>{{comment.email}}</h1>
            <h5>{{comment.name}}</h5>
            <p>{{comment.body}}</p>
        </div>
  </div>
  <div v-else>
    <p>Loading comments...</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            comments:[]
        }
    },
    mounted(){
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then(data=>this.comments=data)
        .catch(err=>console.log(err))
    }
}
</script>

<style scoped>
    h1{
        widows: 400px;
        font-size: 20px;
        text-transform: capitalize;
        /* text-align: left; */
        /* margin: 20px auto; */
    }
   p{
    width: 300px;
    margin: 20px auto;
    text-align: justify;
   }
</style>