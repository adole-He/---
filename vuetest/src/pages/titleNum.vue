<template>
  <div>
    <div class="numbox">

      <div class="grid-box1" v-for="(item,index) in data" :key="index">
        <div class="grid-box1-1">
          <div style="color:rgb(92,136,240)" class="number">{{item.untreatFlaut}}</div>
          <div class="footer">告警总数</div>
        </div>
        <div class="grid-box1-1">
          <div class="redNum">{{item.Flaut}}</div>
          <div class="footer">未清除告警数</div>
        </div>
        <div class="grid-box1-1">
          <div class="number" style="color:rgb(92,136,240)">{{item.flautTime}}</div>
          <div class="footer">涉及资源</div>
        </div>
      </div>

      <div class="grid-box2" v-for="(item,index) in scoreData" :key="'info2-'+index">
        <div class="topTitle"><span class="footer">未清除告警数/告警总数</span></div>
        <div class="bottombox">
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">laaS层</div>
        </div>
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">PaaS层</div>
        </div>
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">服务</div>
        </div>
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">IT场景</div>
        </div>
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">客户监控</div>
        </div>
        <div class="grid-box1-1">
          <div><span class="redNum">{{item.firstNum}}</span>/<span class="blackNum">{{item.secondNum}}</span></div>
          <div class="footer">营业效能</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default{
    name:"titleNum",
    data () {
      return {
        data:[],
        scoreData:[],
      }
    },
    created () {
      this.$axios.get("/api/data").then(res=>{
        this.data = res.data.data;
        this.scoreData = res.data.sData;
      })
    },
}
</script>



<style scoped>
.numbox{
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  min-height: 90px;
  margin-bottom: 10px;
}
.grid-box1{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.grid-box1-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 55%;
}
.number{
  font-family: '儒雅软黑';
  font-size: 20px;
  padding-bottom: 4px;
}
.redNum{
  font-family: '儒雅软黑';
  font-size: 20px;
  padding-bottom: 4px;
  color:rgb(241,74,47);
}
.blackNum{
  font-family: '儒雅软黑';
  font-size: 14px;
  padding-bottom: 4px;
}
.footer{
  font-family: '儒雅软黑';
  font-size: 12px;
  color:rgb(128, 125, 125);
}
.grid-box2{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
  border: rgba(170, 170, 170,0.5) 1px solid;
}
.topTitle{
  width: 98%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  padding-top: 6px;
}
.bottombox{
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>