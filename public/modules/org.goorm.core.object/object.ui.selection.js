/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.goorm.org/License
 **/org.goorm.core.object.ui.selection=function(){this.target=null,this.timestamp=null,this.context_menu=null,this.focus=!0,this.is_dragging=!1,this.is_drawing_finished=!1,this.selected_node=null,this.sx=null,this.sy=null,this.ex=null,this.ey=null,this.previous_x=null,this.previous_y=null,this.id=null,this.name=null,this.x=null,this.y=null,this.width=null,this.height=null,this.connector=null,this.attribute_list=new Array("id","name","sx","sy","ex","ey")},org.goorm.core.object.ui.selection.prototype={init:function(e){var t=this;return this.target=e,this.timestamp=(new Date).getTime(),this.connector=[],this.connector.head=null,this.connector.tail=null,this.id="line",this.name="line_"+this.timestamp,this.x=0,this.y=0,this.width=0,this.height=0,this.context_menu=new org.goorm.core.menu.context,this.context_menu.init("configs/menu/org.goorm.core.object/object.ui.html","object.ui","",this.timestamp,"",function(){$("div[id='object.ui_"+t.timestamp+"']").find("a[action=cut_object]").click(function(){m.s("cut","context menu")}),$("div[id='object.ui_"+t.timestamp+"']").find("a[action=copy_object]").click(function(){m.s("copy","context menu")}),$("div[id='object.ui_"+t.timestamp+"']").find("a[action=paste_object]").click(function(){m.s("paste","context menu")}),$("div[id='object.ui_"+t.timestamp+"']").find("a[action=delete_object]").click(function(){m.s("delete","context menu")})}),$(e).find("canvas").mousedown(function(e){if(!t.focus)return!1;var n=$(this).parent().offset();x=e.pageX-n.left,y=e.pageY-n.top,t.sx&&(t.sx=parseInt(t.sx)),t.sy&&(t.sy=parseInt(t.sy)),t.ex&&(t.ex=parseInt(t.ex)),t.ey&&(t.ey=parseInt(t.ey));if((t.sx-5<x&&x<t.ex+5||t.ex-5<x&&x<t.sx+5)&&(t.sy-5<y&&y<t.ey+5||t.ey-5<y&&y<t.sy+5))if(e.which==1)t.is_dragging=!0,t.is_drawing_finished=!1,t.selected_node="body",x=e.pageX-n.left,y=e.pageY-n.top,t.previous_x=x,t.previous_y=y;else if(e.which===3)return t.context_menu.menu.show(),$("div[id='object.ui_"+t.timestamp+"']").css("z-index",5),$("div[id='object.ui_"+t.timestamp+"']").css("left",e.pageX),$("div[id='object.ui_"+t.timestamp+"']").css("top",e.pageY),e.preventDefault(),e.stopPropagation(),!1;e.which==1&&(!t.is_drawing_finished&&!t.is_dragging?(t.is_dragging=!0,t.is_drawing_finished=!1,x=e.pageX-n.left,y=e.pageY-n.top,t.sx=x,t.sy=y,t.selected_node=null):(x=e.pageX-n.left,y=e.pageY-n.top,t.sy-3<y&&y<t.sy+3&&t.sx-3<x&&x<t.sx+3&&(t.is_dragging=!0,t.is_drawing_finished=!1,t.selected_node="tl"),t.sy-3<y&&y<t.sy+3&&t.ex-3<x&&x<t.ex+3?(t.is_dragging=!0,t.is_drawing_finished=!1,t.selected_node="tr"):t.ey-3<y&&y<t.ey+3&&t.ex-3<x&&x<t.ex+3?(t.is_dragging=!0,t.is_drawing_finished=!1,t.selected_node="br"):t.ey-3<y&&y<t.ey+3&&t.sx-3<x&&x<t.sx+3&&(t.is_dragging=!0,t.is_drawing_finished=!1,t.selected_node="bl")))}),$(e).find("canvas").mousemove(function(e){if(!t.focus)return!1;var n=$(this).parent().offset();x=Math.floor(e.pageX-n.left),y=Math.floor(e.pageY-n.top),!t.is_drawing_finished&&t.is_dragging&&(t.selected_node=="tl"?(t.sx=x,t.sy=y):t.selected_node=="body"?(t.sx+=x-t.previous_x,t.sy+=y-t.previous_y,t.ex+=x-t.previous_x,t.ey+=y-t.previous_y,t.previous_x=x,t.previous_y=y):(t.ex=x,t.ey=y),t.draw_line(t.sx,t.sy,t.ex,t.ey));if(t.sy-3<y&&y<t.sy+3&&t.sx-3<x&&x<t.sx+3||t.sy-3<y&&y<t.sy+3&&t.ex-3<x&&x<t.ex+3||t.ey-3<y&&y<t.ey+3&&t.ex-3<x&&x<t.ex+3||t.ey-3<y&&y<t.ey+3&&t.sx-3<x&&x<t.sx+3)$(t.target).removeClass("status_default"),$(t.target).removeClass("status_move"),$(t.target).removeClass("status_drawing_square"),$(t.target).addClass("status_drawing_line")}),$(e).find("canvas").mouseup(function(e){if(!t.focus)return!1;if(e.which==1)!t.is_drawing_finished&&t.is_dragging&&(t.is_dragging=!1,t.is_drawing_finished=!0,t.sx&&(t.sx=parseInt(t.sx)),t.sy&&(t.sy=parseInt(t.sy)),t.ex&&(t.ex=parseInt(t.ex)),t.ey&&(t.ey=parseInt(t.ey)),t.x=t.sx,t.y=t.sy,t.width=Math.abs(t.ex-t.sx),t.height=Math.abs(t.ey-t.sy)),$(t.target).removeClass("status_drawing_line"),$(t.target).removeClass("status_move"),$(t.target).removeClass("status_drawing_square"),$(t.target).addClass("status_default");else if(e.which===3)return e.preventDefault(),e.stopPropagation(),!1}),$(e).find("canvas").click(function(e){if(!t.focus)return!1;if(e.which===3)return e.preventDefault(),e.stopPropagation(),!1}),this},draw_line:function(e,t,n,r){e&&(e=parseInt(e)),t&&(t=parseInt(t)),n&&(n=parseInt(n)),r&&(r=parseInt(r));if($(this.target).find("canvas").getContext){var i=$(this.target).find("canvas").getContext("2d");i.clearRect(0,0,$(this.target).find("canvas").width(),$(this.target).find("canvas").height()),i.strokeStyle="#000000",i.lineWidth=.5,i.beginPath(),i.rect(e,t,n-e,r-t),i.closePath(),i.stroke()}},remove:function(){}};