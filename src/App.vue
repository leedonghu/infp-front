<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input type="text" @input="changeName($event)"/>
  <button @click="send">확인</button>
  <!-- <template v-for="(music, i) in musics" :key="music">
    <div>{{i+1}}</div>
    <div>{{music.title}}</div>
    <div>{{music.artist}}</div>
  </template> -->
  <div class="pageList">
    <table>
      <thead></thead>
      <tbody>
        <tr v-for="(music, i) in musics" :key="music">
          <td>{{i+1}}</td>
          <td>{{music.title}}</td>
          <td>{{music.artist}}</td>
          <td>
            <div>
              <button>추천</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="pageNav">
    <span>
      <a @click="page($event)">1</a>
      <a @click="page($event)">2</a>
      <a @click="page($event)">3</a>
      <a @click="page($event)">4</a>
      <a @click="page($event)">5</a>
    </span>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  components: {
    
  },
  methods :{
    changeName(event){
      this.name = event.target.value;
    },
    send(){
      axios.get('http://localhost:8081/music/'+ encodeURIComponent(this.name))
        .then(res => {
            console.log(res);
            this.musics = res.data
            // console.log(this.stat);
        }).catch(res => {
            console.log(res)
            
        })
    },
    page(event){
      console.log(event.target.text)
      console.log(this.name)
      if(this.name != ""){
        axios.get('http://localhost:8081/music/'+ encodeURIComponent(this.name)+ "/" + encodeURIComponent(event.target.text))
        .then(res => {
          this.musics = res.data
          console.log(res);
        }).catch(res => {
          console.log(res)
        })
      }
    },
    test(){
      axios.get('http://localhost:8081/test')
        .then(res => {
          console.log(res)
          this.titles = res.data;
        }).catch(res => {
          console.log(res)
        })
    }
  },
  data(){
    return{
      name : "",
      musics : [],

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
