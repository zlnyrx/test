window.onload = function() {
	var topNavBtn = document.querySelector(".topNav-btn");
	var btnLine = document.querySelector(".btnLine");
	var btnLineSpan = document.querySelectorAll(".btnLine span");
	var topNavLogo = document.querySelector(".topNav-logo");
	var topSerch = document.querySelector('#topSerch');
	var topSearchInput = document.querySelector(".topSearch-input");
	var indexIntroItem = document.querySelectorAll(".indexIntro-item");
	var indexIntroLink = document.querySelectorAll(".indexIntro-link");
	var indexIntroImgItem = document.querySelectorAll(".indexIntro-imgItem");
	var indexIntroBtnItem = document.querySelectorAll(".indexIntro-btnItem");
	var indexIntroBtnItemSpan = document.querySelectorAll(".indexIntro-btnItem span");
	var indexIntroImg = document.querySelector(".indexIntro-img");
	var indexIntroPrev = document.querySelector(".indexIntro-btnPrev");
	var indexIntroNext = document.querySelector(".indexIntro-btnNext");
	var indexIntroBtnPrev = document.querySelector(".indexIntro-btnPrev");
	var indexIntroBtnNext = document.querySelector(".indexIntro-btnNext");
	var indexIntroBtnPrevSpan = document.querySelector(".indexIntro-btnPrev span");
	var indexIntroBtnNextSpan = document.querySelector(".indexIntro-btnNext span");
	var indexMainGridItem = document.querySelectorAll(".indexMain-gridItem");
	var indexMainGrid = document.querySelector(".indexMain-grid");
	var indexMainMainOverviewSeparator = document.querySelectorAll(".indexMain-mainOverviewSeparator"); 
	var indexMainMainOverviewContentMain = document.querySelectorAll(".indexMain-mainOverviewContentMain"); 
	var indexMainMainOverviewContentHover = document.querySelectorAll(".indexMain-mainOverviewContentHover"); 
	var indexMainLetters = document.querySelectorAll(".indexMain-letters"); 
	var indexMainMainOverviewH3 = document.querySelectorAll(".indexMain-mainOverview h3");  
	var indexMainGridItemHover = document.querySelectorAll(".indexMain-gridItemHover");
	var indexMountGridItemImgs = document.querySelectorAll(".indexMount-gridItemImgs");
	var indexMountGridItemImgHover = document.querySelectorAll(".indexMount-gridItemImg--hover");
	var indexMountGridItemTitle = document.querySelectorAll(".indexMount-gridItemTitle"); 
	var indexMainGridItemHoverBorder = document.querySelectorAll(".indexMain-gridItemHoverBorder"); 
	var footerFamiliesLinksLink = document.querySelectorAll(".footer-familiesLinks a"); 
	var footerMainLinks = document.querySelectorAll(".footer-mainLinks a"); 
	var footerAction = document.querySelectorAll(".footer-action"); 
	var TopNavMenu = document.querySelector(".TopNav-menu"); 
	var num ;
	
	//导航
	topNavBtn.onmouseover = function() {
		this.style.background = "#454647"; 
		btnLine.style.cssText = "height:22px; line-height:8px;"
		for(var i=0;i<btnLineSpan.length;i++) {
			btnLineSpan[i].style.marginBottom = "8px";
		}
	}
	topNavBtn.onmouseout = function() {
		this.style.background = "#1a1a1a"; 
		btnLine.style.cssText = "height:18px; line-height:6px;";
		for(var i=0;i<btnLineSpan.length;i++) {
			btnLineSpan[i].style.marginBottom = "6px";
		}
	}
	topNavBtn.onclick = function() {
		console.log('还在完善中')
		
	}
	
	
	topNavLogo.onmouseover = function() {
		this.style.backgroundColor = '#454647';
	}
	topNavLogo.onmouseout = function() {
		this.style.backgroundColor = '#1a1a1a';
	}
	
	//搜索
	var onoff = true;
	topSearchInput.onmouseover = function() {
		if(onoff) {
			$(".topSearch-iconImg").addClass("hid")
			$(".topSearch-iconHover").removeClass("hid")
		}
	}
	topSearchInput.onmouseout = function() {
		$(".topSearch-iconHover").addClass("hid");
		$(".topSearch-iconImg").removeClass("hid")
	}
	topSearchInput.onclick = function() {
		onoff = false;
		$(".topSearch-iconHover").addClass("hid");
		$(".topSearch-iconImg").removeClass("hid")
		topSearchInput.style.cssText = "border-color:#fff; background-color:#fff;";
	}
	
	//上翻下翻btn的显示隐藏
	indexIntroImg.onmouseover = function() {
		indexIntroBtnPrev.style.left = "0";
		indexIntroBtnNext.style.right = "0";
	}
	indexIntroImg.onmouseout = function() {
		indexIntroBtnPrev.style.left = "-77px";
		indexIntroBtnNext.style.right = "-77px";
	}
	
	indexIntroPrev.onmouseenter = function() {
		indexIntroBtnPrevSpan.style.width = "90%";
	}
	indexIntroPrev.onmouseleave = function() {
		indexIntroBtnPrevSpan.style.width = "70%";
	}
	indexIntroNext.onmouseenter = function() {
		indexIntroBtnNextSpan.style.width = "90%";
	}
	indexIntroNext.onmouseleave = function() {
		indexIntroBtnNextSpan.style.width = "70%";
	}
	
	//上一张图片
	num = indexIntroImgItem.length;
	indexIntroPrev.onclick = function() {
		
		num--;
		if(num < 0) {
			num = indexIntroImgItem.length-1;
		}
		for(var i=0;i<indexIntroImgItem.length;i++) {
			indexIntroImgItem[i].style.opacity = "0 ";
			indexIntroBtnItem[i].style.backgroundColor = 'transparent';
			indexIntroItem[i].style.opacity = "0 ";
			indexIntroLink[i].style.opacity = "0 ";
		}
		indexIntroImgItem[num].style.opacity = "1 ";
		indexIntroBtnItem[num].style.backgroundColor = '#fff';
		indexIntroItem[num].style.opacity = "1 ";
		indexIntroLink[num].style.opacity = "1 ";
		
	}
	
	//下一张图片
	num = 0;
	indexIntroNext.onclick = function() {
		num++;
		if(num > indexIntroImgItem.length-1) {
			num = 0;
		}
		for(var i=0;i<indexIntroImgItem.length;i++) {
			indexIntroImgItem[i].style.opacity = "0 ";
			indexIntroBtnItem[i].style.backgroundColor = 'transparent';
			indexIntroItem[i].style.opacity = "0 ";
			indexIntroLink[i].style.opacity = "0 ";
		}
		indexIntroImgItem[num].style.opacity = "1 ";
		indexIntroBtnItem[num].style.backgroundColor = '#fff';
		indexIntroItem[num].style.opacity = "1 ";
		indexIntroLink[num].style.opacity = "1 ";
	}
	//图片切换
	for(var i=0;i<indexIntroBtnItem.length;i++) {
		indexIntroBtnItem[i].index = i;
		indexIntroBtnItem[i].onmouseover = function() {
			for(var i=0;i<indexIntroBtnItem.length;i++) {
				indexIntroBtnItemSpan[i].style.backgroundColor = 'transparent';
			}
			indexIntroBtnItemSpan[this.index].style.backgroundColor = '#fff';
			
		}
		indexIntroBtnItem[i].onmouseout = function() {
			for(var i=0;i<indexIntroBtnItem.length;i++) {
				indexIntroBtnItemSpan[i].style.backgroundColor = 'transparent';
			}
			indexIntroBtnItemSpan[this.index].style.backgroundColor = 'transparent';
		}
		indexIntroBtnItem[i].onclick = function() {
			num = this.index;
			
			for(var i=0;i<indexIntroBtnItem.length;i++) {
				indexIntroBtnItem[i].style.backgroundColor = 'transparent';
				indexIntroImgItem[i].style.opacity = "0 ";
				indexIntroItem[i].style.opacity = "0 ";
				indexIntroLink[i].style.opacity = "0 ";
			}
			indexIntroBtnItem[this.index].style.backgroundColor = '#fff';
			indexIntroImgItem[this.index].style.opacity = "1 ";
			indexIntroItem[this.index].style.opacity = "1 ";
			indexIntroLink[this.index].style.opacity = "1 ";
		}
	}
	
	//主体部分的移入移出效果
	for(var i=0;i<indexMainGridItem.length;i++) {
		indexMainGridItem[i].index = i;
		indexMainGridItem[i].onmouseover = function() {
			for(var i=0;i<indexMainGridItem.length;i++) {
				indexMainMainOverviewContentHover[i].style.opacity = "0";
				indexMainMainOverviewSeparator[i].style.display = "block";
				indexMainMainOverviewContentMain[i].style.display = "block";
				indexMainLetters[i].style.opacity = "1";
				indexMainMainOverviewH3[i].style.display = "block";
				indexMainGridItemHover[i].style.opacity = "0";
			}
			
			indexMainMainOverviewContentHover[this.index].style.opacity = "1";
			indexMainMainOverviewSeparator[this.index].style.display = "none";
			indexMainMainOverviewContentMain[this.index].style.display = "none";
			indexMainLetters[this.index].style.opacity = "0";
			indexMainMainOverviewH3[this.index].style.display = "none";
			indexMainGridItemHover[this.index].style.opacity = "1";
		}
	}
	
	//副题部分移入移出的高亮效果
	for(var i=0;i<indexMountGridItemImgs.length;i++) {
		indexMountGridItemImgs[i].index = i;
		indexMountGridItemImgs[i].onmouseover = function() {
			for(var i=0;i<indexMountGridItemImgs.length;i++) {
				indexMountGridItemImgHover[i].style.opacity = '0';
				indexMountGridItemTitle[i].style.borderColor = 'transparent';
			}
			indexMountGridItemImgHover[this.index].style.opacity = '1';
			indexMountGridItemTitle[this.index].style.borderColor = '#fff';
		}
		indexMountGridItemImgs[i].onmouseout = function() {
			for(var i=0;i<indexMountGridItemImgs.length;i++) {
				indexMountGridItemImgHover[i].style.opacity = '0';
				indexMountGridItemTitle[i].style.borderColor = 'transparent';
			}
		}
	}
	mouseEvent(footerMainLinks);
	mouseEvent(footerFamiliesLinksLink);
	function mouseEvent(obj) {
		for(var i=0;i<obj.length;i++) {
			obj[i].index = i;
			obj[i].onmouseover = function(e) {
				for(var i=0;i<obj.length;i++) {
					obj[i].style.borderBottom = "none";
				}
				obj[this.index].style.borderBottom = "1px solid #fff";
			}
			
			obj[i].onmouseout = function(e) {
				this.style.borderBottom = "none";
			}
		}
	}
	for(var i=0;i<footerAction.length;i++) {
		footerAction[i].index = i;
		footerAction[i].onmouseover = function() {
			for(var i=0;i<footerAction.length;i++) {
				footerAction[i].style.color = "#fff";
			}
			footerAction[this.index].style.color = "#D9707F";
		}
		footerAction[i].onmouseout = function() {
			this.style.color = "#fff";
		}
	}
}
