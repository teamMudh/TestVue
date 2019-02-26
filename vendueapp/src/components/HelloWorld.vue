<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my Vue.js App'
    }
  },
  methods:{
    gettest(){
     var data = '<?xml version="1.0" encoding="GB2312"?><GNNT><REQ name="system_time_query"></REQ></GNNT>'
     this.$ajax.post('',data)
     .then(resp => {
          console.log(resp)
          console.log(resp.data)
          //将服务器获取的xml格式转化为json对象
          var jsonObj = this.$x2js.xml2js(resp.data)
          console.log(jsonObj)
          console.log(jsonObj.GNNT.REP.RESULT.TD)
          
          this.$messagebox('温馨提示', '操作666成功');
          
        }).catch(error => {
          this.$messagebox('温馨提示', '网络繁忙，请点击重试');
          return;
        })
    }
  },
  created() {
    this.gettest();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
