$(function () {
	//获取数据
	var resourceFun=new ResourceFun();
	var resourceJson=resourceFun.returnJsonFun();
    
    //插入列表到index
	var resourceHtml=resourceFun.returnHtmlFun();
  $("#root").prepend(resourceHtml);

  //获取缓存pageNum
  var obj=localStorage.getItem("inputObj");
  if(obj){
    obj=JSON.parse(obj);
    $("#root ul li").each(function (i,val) {
         var type=$(this).find(".type").val();
         if(obj[type]){
            $(this).find(".maxNum").val(obj[type]);
         }
         
    })
  }
  

	$(".createJson").click(function () {
		
	});
    
    //隐藏单行
	$(".deleteLi").click(function () {
		$(this).parents("ul").hide();
	});
    
    //隐藏所有
	$(".allDelete").click(function () {
		var checkboxList=$("#root ul input[type=checkbox]");
		$("#root ul input[type=checkbox]").each(function (i,val) {
			if(checkboxList.eq(i).get(0).checked){
				$("#root ul").eq(i).hide();
			}
		})
	});

	//还原显示
	$(".showList").click(function () {
		$("#root ul").each(function (i,val) {
			$("#root ul").eq(i).show();
		});
	});

	//生成目录
	$(".allCreate").click(function () {
		//目录html
		var  html="";
    var  inputObj={};
    //遍历页面漫画数据
		$("#root ul").each(function (i,val) {
			var ul=$("#root ul").eq(i);
			if(!ul.is(":hidden")&& ul.find("input[type=checkbox]").is(":checked")){
				//输入最大章数   
                var maxNum=parseInt(ul.find(".maxNum").val());
                //名字
                var name=ul.find(".name").val();
                //资源匹配数据
                var resourceData=resourceJson.filter(function (resource) {
                	return resource.name==name;
                });
                //类型
                // var type=resourceData[0].name;

                //文章url Number
                var articleNum=resourceData[0].articleNum;
                var articleListNum=resourceData[0].articleListNum;

                //图片资源网站入口
                var webType=resourceData[0].source;
                
                var type=resourceData[0].type;

                inputObj[type]=maxNum;
                
                //图片路径
                var imgUrl="";
                for (var i = 0,len=resourceData[0].imgUrl.length; i <len; i++) {
                	if(i==(len-1)){
                		imgUrl+=(resourceData[0].imgUrl[i]);
                	}else{
                		imgUrl+=(resourceData[0].imgUrl[i]+"*");
                	}
                	
                }
                
                //漫画列表标题
                html+='<div>'+name+'</div><ul id="topic1" name="topiccount" style="display: block;">';
                //漫画列表
                for (var i = maxNum; i >0; i--) {
                	        // http://www.zhengwenjie.com/wordpress/archives/'+articleNum
                	        // ./testArticle.html
                          // 
                          //特殊过滤 过滤没用的樟数
                          var isFor=false;
                          if( name=="全职猎人漫画" ){
                             isFor= 30<i && i<291 ;
                          }
                          

                          if( !isFor ){
                              html+= '<li>'+
                                        '<a target="_blank" title="第'+i+'话" href="'+encodeURI('http://www.zhengwenjie.com/wordpress/archives/'+articleNum+'?pageNum='+i+'&pageSize='+maxNum+'&pageName='+name+'&imgUrl='+imgUrl+'&webType='+webType+'&articleListNum='+articleListNum+'&articleNum='+articleNum)+'" >'+
                                              '<span>第'+i+'话</span>'+
                                        '</a>'+
                                  '</li>';
                          }
                	        
                                  // html+='<li>'+
                                  // 		'<a target="_blank" title="第'+i+'话" href="./article.html'+'?pageNum='+i+'&pageSize='+maxNum+'&name='+name+'&imgUrl='+imgUrl+'&webType='+webType+'&articleNum'+articleNum+'&articleListNum='+articleListNum+'">'+
                                  // 		      '<span>第'+i+'话</span>'+
                                  // 		'</a>'+
                                  // '</li>';
                           
                }

                html+='</ul><hr />';
                 
			}
		});

        //图片加载失败隐藏掉
        $("img").error(function(){     
          $(this).remove(); 
        }); 

        //在新窗口打印漫画列表
        // localStorage.removeItem("manhua");
        // manhua 漫画列表
        // open 是否已经打开article
        // inputObj 输入框中最大章数
        // 
        var firstStorage=localStorage.getItem("manHuaList");
        var isOpen=sessionStorage.getItem("isOpen");

        localStorage.setItem("inputObj",JSON.stringify(inputObj));
        localStorage.setItem("manHuaList",html);

        if(!isOpen){
           window.open('./html/createList.html','');
           sessionStorage.setItem("isOpen","true");
        }
		
	});
})