/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.goorm.org/License
 **/org.goorm.core.file._import=function(){this.dialog=null,this.buttons=null,this.dialog_explorer=null},org.goorm.core.file._import.prototype={init:function(){var e=this,t=function(){if($("#file_import_file").attr("value").substr($("#file_import_file").attr("value").length-3,3).toLowerCase()!="zip")return alert.show(core.module.localization.msg.alertFileNotSelect),!1;core.module.loading_bar.start("Import processing..."),$("#myForm").submit(),this.hide()},n=function(){this.hide()};this.buttons=[{text:"OK",handler:t,isDefault:!0},{text:"Cancel",handler:n}],this.dialog=new org.goorm.core.file._import.dialog,this.dialog.init({title:"Import File",path:"configs/dialogs/org.goorm.core.file/file._import.html",width:800,height:500,modal:!0,buttons:this.buttons,kind:"import",success:function(){var t=new YAHOO.util.Resize("import_dialog_left",{handles:["r"],minWidth:200,maxWidth:400});t.on("resize",function(e){var t=$("#import_dialog_middle").width(),n=e.width;$("#import_dialog_center").css("width",t-n-9+"px")});var n={target:"#upload_output",success:function(t){e.dialog.panel.hide(),core.module.loading_bar.stop(),t.err_code==0?(notice.show(t.message),core.module.layout.project_explorer.refresh()):alert.show(t.message)}};$("#myForm").ajaxForm(n),$("#myForm").submit(function(){return!1})}}),this.dialog=this.dialog.dialog,this.dialog_explorer=new org.goorm.core.dialog.explorer},show:function(){var e=this;$("#upload_output").empty(),$("#file_import_file").val(""),e.dialog_explorer.init("#file_import",!1),this.dialog.panel.show()}};