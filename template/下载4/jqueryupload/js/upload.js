$(function() {
	layui.use([ 'layer', 'element', 'form', 'upload' ], function() {
		let layer = layui.layer,
			element = layui.element,
			form = layui.form,
			upload = layui.upload;

		var files;
		let uploadInst = upload.render({
			elem : '#upload',
			url : 'api/upload',
			data : {},
			accept : 'file',
			size : 1024 * 2,
			auto : false,
			bindAction : ".all-upload",
			multiple : true,
			choose : function(obj) {
				files = obj.pushFile();
				$(".file-list").removeClass("layui-hide");
				$(".all-upload").removeClass("layui-hide");
				obj.preview(function(index, file, result) {
					let tr = $([ "<tr id='upload-" + index + "'>",
						"<td>" + file.name + "</td>",
						"<td>" + (file.size / 1024).toFixed(1) + "KB</td>",
						"<td>等待上传</td>",
						"<td>",
						"<button class='layui-btn layui-mini file-reload layui-hide'>重新上传</button>",
						"<button class='layui-btn layui-mini layui-btn-danger file-del'>删除</button>",
						"</td>",
						"</tr>" ].join(""));

					tr.find(".file-reload").on("click", function() {
						obj.upload(index, file);
					})

					tr.find(".file-del").on("click", function() {
						delete files[index];
						tr.remove();
					})

					$("table").append(tr);
				});
			},
			allDone : function(obj) { //当文件全部被提交后，才触发
				console.log(obj.total); //得到总文件数
				console.log(obj.successful); //请求成功的文件数
				console.log(obj.aborted); //请求失败的文件数
			},
			done : function(res, index, upload) { //上传后的回调
				if (res == 200) { //上传成功
					var tr = $("table").find('tr#upload-' + index),
						tds = tr.children();
					tds.eq(2).html("<span style='color:#5FB878;'>上传成功</span>")
					tds.eq(3).html(""); //清空操作
					delete files[index];
					return;
				}
			},
			error : function(index, upload) {
				var tr = $("table").find('tr#upload-' + index),
					tds = tr.children();
				tds.eq(2).html("<span style='color:#FF5722;'>上传失败</span>")
				tds.eq(3).find(".file-reload").removeClass("layui-hide"); //清空操作
			}
		})
	})
})