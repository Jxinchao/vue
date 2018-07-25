import Vue from 'vue'
Vue.directive('clickoutside',{  // 获取事件
  bind:function(el,binding,vnode){
    function documentHandler(e){
      //contains 方法是用来判断元素A是否包含了元素B，包含返回true,反之false
      if(el.contains(e.target)){
        // 点击区域是否是指令所在得元素内部  如果是就跳出函数，不往下继续执行
        return false
      }
      if(binding.expression){
        // 当前指令有没有写表达式，再该自定义指令中，表达式应该是一个函数，再过滤了内部元素后，点击外面任何区域应该执行用户表达式中得函数。所以binding.value()就是用来执行当前上下文methods中指定得函数得
        binding.value(e); 
      }
    }
    el.__vueClickOutSide__ = documentHandler;
    document.addEventListener('click',documentHandler);
  },
  unbind:function(el,binding){
    document.removeEventListener('click',el.__vueClickOutSide__);
    delete el.__vueClickOutSide__;
  }
});
