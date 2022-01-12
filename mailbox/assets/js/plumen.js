(function($){
	$.fn.extend({
		//插件名称；
		_wx_ison: false,
		wxSelect:function(options){
			var defaults = {
				data: [],
				height:240
			};
			var options = $.extend(defaults,options);

			return this.each(function(){
				//创建元素
				var _this = this,
					w = $(_this).width() || $(_this).find("input").width();
					if(!$(_this).attr("data-bind")){
						init();
						renders(options.data);
					}

				function init(){
					$(_this).attr("data-bind",true);

					$(_this).append("<span class='wxSelect_bottom'></span>")
					$(_this).find(".wxSelect_bottom").css({
						width:"24px",
						height:"80%",
						background:"#fff",
						display:"inline-block",
						position:"absolute",
						right:"2px",
						top:"1px",
						zIndex:2
					})
					$(_this).css({position:"relative",width:w + "px"}),
					$(_this).append("<span class='wxSelect_label'></span>")
					$(_this).find(".wxSelect_label").css({
						display: "inline-block",
						width:"0",
					    height:"0",
					    borderWidth:"8px 8px 0",
					    borderStyle:"solid",
					    borderColor:"#6c6c6c transparent transparent",
						cursor: "pointer",
						position: "absolute",
						right: "3px",
						top: "13px",
						borderRadius: '3px',
						zIndex:3
					})
					$(_this).append('<div class="dataBox"><ul class="dataList"></ul></div>');
					$(_this).find(".dataBox").css({
						width: "100%",
						maxHeight: "180px",
						overflowY: "scroll",
						overflowX: "hidden",
						background:" #fff",
						boxShadow: "1px 2px 4px #ccc",
						display: "none",
						position:'absolute',
						zIndex:'999'
					});
					$(_this).find(".wx-input").on("focus",function(event) {
						renders(options.data)
						$(_this).find(".dataBox").slideDown(10);
					});
					$(_this).find(".wxSelect_label").on("click",function(event) {
						$(_this).find(".dataBox").slideToggle(10);
					});
					function input(e){
						var val = $(_this).find("input").val().trim()
						,data = options.data;
						renders(data);
						$(_this).find(".dataBox").slideDown(50);
					}
					$(_this).find("input").eq(0).on("input",input);
					$(_this).find(".dataList").on("click","li",function(){
						var val = $(this).text();
						var data = $(this).attr("value");
						if(val != ""){
							$(_this).find(".wx-input").val(val).attr("data-value",data);
							$(_this).find(".dataBox").slideUp(50);
						}
					});
					if(!$.fn._wx_ison){
						$(document).on("click",function(event){
							var e = event || window.event;
							e.stopPropagation();	
							var flag = true
							,tag = $(".input-Selector")
							,target = $(e.target);
					        if(target.closest(tag).length == 0 && flag == true){
								$(".input-Selector").find(".dataBox").slideUp(50);
								flag = false;
				       		}
						});
						$.fn._wx_ison = true;
					}
				}
				//渲染列表
				function renders(data){
						$(_this).find(".dataList").html("");
						var html = "";
						for(var i = 0; i<data.length;i++){
							 html += "<li value="+data[i].value+">"+data[i].name+"</li>"
						}
						$(_this).find(".dataList").append(html);
						$(_this).find(".dataList li").css({
							padding:"1px 0 1px 0px",
							border:"1px solid #edf7ff"
						});
						$(_this).find(".dataList li").hover(function(){
							$(this).css({
								background:"#d5dee6"
							})
						},function(){
							$(this).css({background:"none"})
						})
				}
			})
		}
	})
})(jQuery);