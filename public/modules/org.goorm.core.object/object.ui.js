/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.goorm.org/License
 **/org.goorm.core.object.ui=function(){this.target=null,this.parent=null,this.type=null,this.kind=null,this.shape_name=null,this.shape=null,this.dashed=null,this.proportion=null,this.properties=null,this.selected=!1,this.data_uuid=null,this.context_menu=null},org.goorm.core.object.ui.prototype={init:function(e,t,n,r,i,s){var o=this;return this.target=e,this.parent=t,this.type=n,this.shape_name=r,this.properties=null,i&&(this.dashed=i.dashed,this.proportion=i.proportion),n=="line"?r!=null?(this.shape=new org.goorm.core.stencil,this.shape.init(r,this.type,$("#"+core.module.layout.workspace.window_manager.window[core.module.layout.workspace.window_manager.active_window].container).find(".shapes")),this.kind=this.shape_name.split("/"),this.kind=this.kind[1],this.properties=(new org.goorm.core.object.ui.line).init(e,this.kind,this.dashed)):this.properties=(new org.goorm.core.object.ui.line).init(e,"line",this.dashed):n=="square"&&(r!=null?(this.shape=new org.goorm.core.stencil,this.shape.init(r,this.type,$("#"+core.module.layout.workspace.window_manager.window[core.module.layout.workspace.window_manager.active_window].container).find(".shapes"),s),this.kind=this.shape_name.split("/"),this.kind=this.kind[1],this.properties=(new org.goorm.core.object.ui.square).init(e,this.kind,this.proportion)):this.properties=(new org.goorm.core.object.ui.square).init(e,"square",this.proportion)),this.context_menu=new org.goorm.core.menu.context,this.context_menu.init("configs/menu/org.goorm.core.object/object.ui.html","object.ui","",this.properties.timestamp,"",function(){$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=cut_object]").click(function(){o.cut()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=copy_object]").click(function(){o.copy()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=paste_object]").click(function(){o.paste()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=delete_object]").click(function(){o._delete()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=bring_to_front]").click(function(){o.bring_to_front()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=send_to_back]").click(function(){o.send_to_back()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=bring_forward]").click(function(){o.bring_forward()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=send_backward]").click(function(){o.send_backward()}),$("div[id='object.ui_"+o.properties.timestamp+"']").find("a[action=properties_object]").click(function(){o.properties_object()})}),$(e).find("canvas").mousedown(function(e){if(e.which==3){if(o.type=="square"){var t=$(this).parent().offset();x=e.pageX-t.left,y=e.pageY-t.top;if((o.properties.sx-5<x&&x<o.properties.ex+5||o.properties.ex-5<x&&x<o.properties.sx+5)&&(o.properties.sy-5<y&&y<o.properties.ey+5||o.properties.ey-5<y&&y<o.properties.sy+5))return $("div.yuimenu").css("visibility","hidden"),$("div.yui-menu-shadow").removeClass("yui-menu-shadow-visible"),o.context_menu.menu.show(),$("div[id='object.ui_"+o.properties.timestamp+"']").css("z-index",5),$("div[id='object.ui_"+o.properties.timestamp+"']").css("left",e.pageX),$("div[id='object.ui_"+o.properties.timestamp+"']").css("top",e.pageY),e.preventDefault(),e.stopPropagation(),!1}else if(o.type=="line"){var t=$(this).parent().offset();x=e.pageX-t.left,y=e.pageY-t.top,o.properties.sx&&(o.properties.sx=parseInt(o.properties.sx)),o.properties.sy&&(o.properties.sy=parseInt(o.properties.sy)),o.properties.ex&&(o.properties.ex=parseInt(o.properties.ex)),o.properties.ey&&(o.properties.ey=parseInt(o.properties.ey));if((o.properties.sx-5<x&&x<o.properties.ex+5||o.properties.ex-5<x&&x<o.properties.sx+5)&&(o.properties.sy-5<y&&y<o.properties.ey+5||o.properties.ey-5<y&&y<o.properties.sy+5)){var n,r,i,s=5;if(o.properties.ex-o.properties.sx!=0){n=(o.properties.ey-o.properties.sy)/(o.properties.ex-o.properties.sx),s=Math.round(5*Math.sqrt(n*n+1)*1e3)/1e3,r=o.properties.sy-n*o.properties.sx-s,i=o.properties.sy-n*o.properties.sx+s;if(Math.round(Math.abs(n)*1e3)/1e3<.01||Math.round(Math.abs(1/n)*1e3)/1e3<.01||n*x+r<=y&&y<=n*x+i&&((y-r)/n<=x&&x<=(y-i)/n||(y-i)/n<=x&&x<=(y-r)/n))return $("div.yuimenu").css("visibility","hidden"),$("div.yui-menu-shadow").removeClass("yui-menu-shadow-visible"),o.context_menu.menu.show(),$("div[id='object.ui_"+o.properties.timestamp+"']").css("z-index",5),$("div[id='object.ui_"+o.properties.timestamp+"']").css("left",e.pageX),$("div[id='object.ui_"+o.properties.timestamp+"']").css("top",e.pageY),e.preventDefault(),e.stopPropagation(),!1}}}}else e.which==1&&o.context_menu.menu.hide()}),this},set_adapter:function(){},select:function(){this.type=="square"},deselect:function(){this.type=="square"},bring_to_front:function(){this.parent.bring_to_front(this)},send_to_back:function(){this.parent.send_to_back(this)},bring_forward:function(){this.parent.bring_forward(this)},send_backward:function(){this.parent.send_backward(this)},properties_object:function(){},remove:function(){this.properties.remove(),this.shape.remove(),delete this},_delete:function(){this.parent._delete()},cut:function(){this.parent.cut()},copy:function(){this.parent.copy()},paste:function(){this.parent.paste()}};