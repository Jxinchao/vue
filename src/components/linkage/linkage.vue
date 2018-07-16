<template>
  <div id="example">
    <router-link to="/threeW">网上得三级联动</router-link>

    	<select >
    		<option v-for="option in cityArr" :value="option.name">
    			{{ option.name}}
    		</option>
    	</select>
    	<select >
    		<option v-for="option in cityArr" :value="option.city[0].name">
          {{ option.city[0].name }}
    		</option>
    	</select>
    	<select>
    		<option v-for="option in cityArr" :value="option.city[0].area[0]">
    			{{ option.city[0].area[0] }}
    		</option>
    	</select>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
      prov: '北京',
  		city: '北京',
  		district: '东城区',
  		cityArr: [],
  		districtArr: []
    }
	},
  methods:{
    ajaxssss:function(){
      var _this = this;
      console.log(_this.cityArr)
      axios.get('static/linkage.json', {

      })
      .then(function (response) {
        _this.cityArr = response.data;
        // console.log(_this.cityArr.data[0].city[0].area)
        // console.log(typeof _this.cityArr)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateCity: function () {
      console.log(this.cityArr)
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      // console.log(this.cityArr)
      this.city = this.cityArr;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if(this.districtArr && this.districtArr.length > 0 && this.districtArr[0].name) {
        this.district = this.districtArr[0].name;
      } else {
        this.district = '';
      }
    }
  },
	beforeMount: function () {
		this.updateCity();
		this.updateDistrict();
	},
	watch: {
		prov: function () {
			this.updateCity();
			this.updateDistrict();
		},
		city: function () {
			this.updateDistrict();
		}
	},
  mounted(){
    this.ajaxssss();
  }
}
</script>




// var vm = new Vue({
// el: '#example',
// data: {
//   arr: arrAll,
//   prov: '北京',
//   city: '北京',
//   district: '东城区',
//   cityArr: [],
//   districtArr: []
// },
// methods: {
//   updateCity: function () {
//     for (var i in this.arr) {
//       var obj = this.arr[i];
//       if (obj.name == this.prov) {
//         this.cityArr = obj.sub;
//         break;
//       }
//     }
//     this.city = this.cityArr[1].name;
//   },
//   updateDistrict: function () {
//     for (var i in this.cityArr) {
//       var obj = this.cityArr[i];
//       if (obj.name == this.city) {
//         this.districtArr = obj.sub;
//         break;
//       }
//     }
//     if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
//       this.district = this.districtArr[1].name;
//     } else {
//       this.district = '';
//     }
//   }
// },
// beforeMount: function () {
//   this.updateCity();
//   this.updateDistrict();
// },
// watch: {
//   prov: function () {
//     this.updateCity();
//     this.updateDistrict();
//   },
//   city: function () {
//     this.updateDistrict();
//   }
// }
// })

<style lang="css">
</style>
