<template>
  <div id="example">
    	<select >
    		<option v-for="option in cityArr" :value="option.name">
    			{{ option.name }}
    		</option>
    	</select>
    	<select >
    		<option v-for="option in cityArr" :value="option.name">
    			{{ option.name }}
    		</option>
    	</select>
    	<select>
    		<option v-for="option in cityArr" :value="option.name">
    			{{ option.name }}
    		</option>
    	</select>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
      // prov: '北京',
  		// city: '北京',
  		// district: '东城区',
  		cityArr: [],
  		districtArr: []
    }
	},
  methods:{
    ajaxssss:function(){
      var _this = this;
      axios.get('static/linkage.json', {

      })
      .then(function (response) {
        _this.cityArr = response;
        console.log(_this.cityArr)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
	beforeMount: function () {
		// this.updateCity();
		// this.updateDistrict();
	},
	watch: {
		prov: function () {
			// this.updateCity();
			// this.updateDistrict();
		},
		city: function () {
			// this.updateDistrict();
		}
	},
  mounted(){
    this.ajaxssss();
  }
}
</script>

<style lang="css">
</style>
