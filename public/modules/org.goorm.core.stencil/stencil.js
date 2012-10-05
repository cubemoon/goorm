/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.goorm.org/License
 **/org.goorm.core.stencil=function(){this.container=null,this.timestamp=null,this.shape=null,this.data=null,this.type=null,this.properties=null,this.javascript=null},org.goorm.core.stencil.prototype={init:function(e,t,n,r){return this.timestamp=(new Date).getTime(),this.shape=e,this.type=t,this.container=n,this.properties={},$(this.container).append("<div id='stencil_"+this.timestamp+"' style='position:absolute; display:none;'></div>"),this.adapter(r),this},move:function(e,t,n,r){var i,s,o,u;this.type=="square"&&(e>n?i=n:i=e,t>r?s=r:s=t,o=Math.abs(n-e),u=Math.abs(r-t),$(this.container).find("#stencil_"+this.timestamp).css("left",i),$(this.container).find("#stencil_"+this.timestamp).css("top",s),$(this.container).find("#stencil_"+this.timestamp).css("width",o),$(this.container).find("#stencil_"+this.timestamp).css("height",u))},rotate:function(e,t,n,r,i){var s,o,u,a;if(this.type=="line"){u=Math.abs(r-t);var f=parseInt(Math.sqrt((r-t)*(r-t)+(i-n)*(i-n))),l=Math.acos((r-t)/f);s=(t+r)/2-f/2,o=(n+i)/2;var c=1;i<n&&(c=-1),$(this.container).find("#stencil_"+this.timestamp).css("left",s),$(this.container).find("#stencil_"+this.timestamp).css("top",o),$(this.container).find("#stencil_"+this.timestamp).css("width",f),$(this.container).find("#stencil_"+this.timestamp).css("height",1),$(this.container).find("#stencil_"+this.timestamp).css({WebkitTransform:"rotate("+c*l+"rad)"}),$(this.container).find("#stencil_"+this.timestamp).css({"-moz-transform":"rotate("+c*l+"rad)"})}},adapter:function(callback){var self=this,url="file/get_contents";this.type=="square"?($.ajax({url:url,type:"GET",data:"path=stencils/"+this.shape+".json",success:function(data){self.properties=eval("("+data+")"),typeof callback=="function"&&callback(),self.set_shape()}}),$.ajax({url:url,type:"GET",data:"path=stencils/"+this.shape+".html",success:function(e){self.data=e,$(self.container).find("#stencil_"+self.timestamp).html(e),typeof callback=="function"&&callback()}})):this.type=="line"&&$.ajax({url:url,type:"GET",data:"path=stencils/"+this.shape+".js",success:function(e){self.javascript=e,$(document).trigger("line_stencil_code_loaded")}})},set_shape:function(){var e=this;this.properties!=null&&$.each(this.properties,function(t,n){t=="font_size"?$(e.container).find("#stencil_"+e.timestamp).find("."+t).css("font-size",n):t=="font_color"?$(e.container).find("#stencil_"+e.timestamp).find("."+t).css("color",n):t=="font_style"?$(e.container).find("#stencil_"+e.timestamp).find("."+t).css("font-style",n):t=="font_weight"?$(e.container).find("#stencil_"+e.timestamp).find("."+t).css("font-weight",n):t=="bg_color"?$(e.container).find("#stencil_"+e.timestamp).find("."+t).css("background-color",n):$(e.container).find("#stencil_"+e.timestamp).find("."+t).html(n)})},remove:function(){$(this.container).find("#stencil_"+this.timestamp).remove(),delete this},show:function(){$(this.container).find("#stencil_"+this.timestamp).show()}};