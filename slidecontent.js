$(function(){

	if($('.slideContent').size() > 0){

		//コンテンツの数
		var slideContentNum = $('.slideContent li').length;

		//コンテンツ分のフラグ
		var navFlag = new Array();
		for( i = 0 ; i < slideContentNum ; i++ ){
			navFlag[i] = true;
		};

		//クリックした時の処理
		$('.slideContent h2').click(function(){

			//何個目のものがクリックされたかを確認
			var clickNum = $(this).parent().index();

			//フラグがtrueだったら
			if(navFlag[clickNum]){
				$(this).next('.inner').slideDown();
				$(this).addClass('current');
				navFlag[clickNum] = false;
			}
			else{
				$(this).next('.inner').slideUp();
				$(this).removeClass('current');
				navFlag[clickNum] = true;
			}
		});

		//閉じるをクリックした時の処理
		$('.slideContent .close').click(function(){
			var closeNum = ($(this).parents('li').index());
			$(this).parents('.inner').slideUp('fast');
			$(this).parents('.inner').prev('h2').removeClass('current');
			navFlag[closeNum] = true;
		});

	}

});

