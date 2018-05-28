<script>
	$(function(){ 
	  //漫画详情
      var detailsUrl=window.location.href;
      console.log(detailsUrl);
      // debugger;
      var articleKey=["pageNum","pageSize","pageType","imgUrl","webType","articleListPage"];
      //详情url参数 value
      var articleValue={};
      //是否是漫画详情页面
      var isArticle=false;
      for(var i=0,len=articleKey.length;i<len;i++){
          var key=articleKey[i];
          //第一个参数位置
          var keyIndex=detailsUrl.indexOf(key);
          //第一个参数结束 第二个的参数开始位置
          var nextKeyIndex="";
          if(detailsUrl.indexOf(key)>0){
            //第一个参数完整位置
             keyIndex+=key.length+1;
             //第二个url参数位置
             nextKeyIndex=detailsUrl.indexOf(articleKey[i+1])-1;
             //保存key value
             i!=(len-1)?articleValue[key]=detailsUrl.slice(keyIndex,nextKeyIndex):articleValue[key]=detailsUrl.substr(keyIndex);
             isArticle=true;
          }else{
            isArticle=false;
          }
          
      }
      // debugger;
      //是否是漫画详情页面
      if(isArticle){
      //图片数组
      var imgArr=articleValue["imgUrl"].split("*");
      //漫画名字
	    var pageType=decodeURI(articleValue['pageType']);
	    //页面章数
      var pageNum=parseInt(articleValue['pageNum']);
      //上一章数
      var lastPageNum=pageNum-1;
      //下一章数
      var nextPageNum=pageNum+1;
      //过滤章数
      formaterPageNum(pageType,pageNum);
      //列表页面
	    var articleListPage=parseInt(articleValue['articleListPage']);
	    //最大章数
	    var pageSize=parseInt(articleValue['pageSize']);
	    //图片资源入口
	    var webType=articleValue['webType'];
	    //图片img
	    var imgStr="";
      	if(webType=="yantai"){
      		
	      	for (var i = 0; i <= 150; i++) {
	      		for (var j = 0; j < imgArr.length; j++) {
              // decodeURIComponent 浏览器默认是用这个加密的
	      			imgStr+='<img width="100%" src="http://mhpic.mh51.com/comic/'+decodeURIComponent(imgArr[j])+pageNum+'%E8%AF%9D%2F'+i+'.jpg-mht.middle.webp" />';
	      		}
	      	}
	    }else if(webType=="feiwan"){
            // http://img.feiwan.net/yqcr/manhua/131/1.jpg
            for (var i = 0; i <= 150; i++) {
	      		for (var j = 0; j < imgArr.length; j++) {
              
	      			imgStr+='<img width="100%" src="http://img.feiwan.net/'+decodeURIComponent(imgArr[j])+pageNum+"/"+i+'.jpg" />';
	      			imgStr+='<img width="100%" src="http://img.feiwan.net/'+decodeURIComponent(imgArr[j])+pageNum+"/"+i+'.png" />'; 
	      		}
	      	}
	    }
      
      //过滤章节数字函数
	    function formaterPageNum(pageType) {
	    	switch(pageType){
	    		case "砂与海漫画":
               //砂与海漫画樟数补零
	    		     if(pageNum<10){
	    		     	  pageNum="0"+pageNum;
	    		     }

               if(lastPageNum<10){
                  lastPageNum="0"+lastPageNum;
               }

               if(nextPageNum<10){
                  nextPageNum="0"+nextPageNum;
               }
	    		break;
	    		default:return true;
	    	}
	    }

      //目录控件
      var pageNumIndex=detailsUrl.indexOf("pageNum=");
      var pageSizeIndex=detailsUrl.indexOf("&pageSize=");
      //上一章链接
      var lastPageUrl=detailsUrl.slice(0,pageNumIndex+8)+lastPageNum+detailsUrl.substr(pageSizeIndex);
      //下一章链接     
      var nextPageUrl=detailsUrl.slice(0,pageNumIndex+8)+nextPageNum+detailsUrl.substr(pageSizeIndex);
      //目录链接
      var listPageUrl='http://www.zhengwenjie.com/wordpress/archives/'+articleListPage;
      //是否显示上一章下一章目录按钮
      var lastDisPlay=(pageNum==1?"none":"block");
      var nextDisPlay=(pageNum==pageSize?"none":"block");

      imgStr+='<div class="list-box">'+
           '<a href="'+lastPageUrl+'" class="last-page" style="display:'+lastDisPlay+'">上一章</a>'+
           '<a href="'+listPageUrl+'" class="to-list-page">目录</a>'+
           '<a href="'+nextPageUrl+'" class="next-page" style="display:'+nextDisPlay+'">下一章</a>'+
        '</div>'
      	//插入页面
      	
      	$(".article-content").html(imgStr);
      	$("html head title").html(pageType);
      	$(".content .article-title").html(pageType+"第"+pageNum+"话");
      	// debugger;
      }

       
      //图片加载失败隐藏掉
      $("img").error(function(){     
      	$(this).remove(); 
      }); 
     
})
</script>