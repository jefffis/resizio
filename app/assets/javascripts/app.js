$(function(){
	var img = $('img');
	var div = $('#result');
	var link = $('a');
	var form = $('form');
	var wrap = $('#submit-wrap');
	var submit = $('input[type=submit]');
	var load = $('#load');
	var upload_image = $('#upload_image');
	var span = upload_image.parent().find('span strong');
	
	var error = $('#error');
	var error_vals = $('#error-vals');
	var error_sub = $('#submitted-error');
	var error_file = $('#error-file');
	
	var upload_max_width = $('#upload_max_width');
	var upload_max_height = $('#upload_max_height');

	var meta = $('#meta');
	var aboutsss = $('#aboutsss');
	var aboutsss_close = aboutsss.find('span');

	var nums = $('.nums');
	var numnums = $('.numnums');
	
	// is chrome?
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	var is_Opera = navigator.userAgent.indexOf("Presto") > -1;

	if (is_chrome){
		//nada
	}
	else if (is_explorer) {
		//nada
	}
	/*else if (ie8===true) {
		alert('yargh');
	}
	else if (ie7===true) {
		alert('yargh');
	}*/
	else if (is_safari) {
		span.on('click',function(){
			upload_image.show().focus().click();
		});
	}
	else if (is_Opera) {
		span.on('click',function(){
			upload_image.show().focus().click();
		});
	}
	else {
		span.on('click',function(){
			upload_image.show().focus().click().hide();
		});	
	}

	meta.on('click',function(){
		aboutsss.addClass('show');
		return false;
	});
	aboutsss_close.on('click',function(){
		aboutsss.removeClass('show');
	});

	upload_image.on('change',function(){
		var $this = $(this);
		var path = $this.val();
		var div = $this.parent().find('div');
		var image_type = path.split('.');
		var image_type_ind = image_type[1];
		//alert(image_type_ind);

		/*if((image_type_ind==='jpeg') || (image_type_ind==='jpg') || (image_type_ind==='png') || (image_type_ind==='tiff') || (image_type_ind==='gif')){
			if(is_safari) {
				upload_image.hide();
			}
			if(is_Opera) {
				upload_image.hide();
			}
			//div.fadeIn().html('<em aria-hidden="true" data-icon="c"></em> ' + path);
			span.text('Shweet, that be a file.');
			error.fadeOut();
			error_sub.fadeOut();
			error_file.fadeOut();
			numnums.fadeIn();
			submit.prop('disabled',false).removeClass('disabled');
			submit.parent().removeClass('disabled');
			upload_max_width.focus();
		}else{
			error_file.fadeIn();
			span.text('D\'oh, that ain\'t no image.');
			submit.prop('disabled',true).addClass('disabled').removeClass('ok');;
			submit.parent().addClass('disabled');
			//alert(image_type_ind);
		}*/

		if(is_safari) {
			upload_image.hide();
		}
		if(is_Opera) {
			upload_image.hide();
		}

		div.fadeIn().html('<em aria-hidden="true" data-icon="c"></em> ' + path);
		span.text('Shweet, that be a file.');
		error.fadeOut();
		error_sub.fadeOut();
		error_file.fadeOut();
		numnums.fadeIn();
		submit.prop('disabled',false).removeClass('disabled');
		submit.parent().removeClass('disabled');
		upload_max_width.focus();
		
	});
	
	nums.on('blur',function(){
		if((upload_max_height.val()!='') || (upload_max_width.val()!='')){
			error_vals.fadeOut();
			submit.addClass('ok');
			//$(this).addClass('ok');
		}else{
			error_vals.fadeIn();
		}
	});

	/*upload_max_width.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			upload_max_height.parent().parent().fadeOut();
		}else{
			numnums.fadeIn();
		}
	});

	upload_max_height.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			upload_max_width.parent().parent().fadeOut();
		}else{
			numnums.fadeIn();
		}
	});*/
	
	nums.on('keyup',function(){
		this.value = this.value.replace(/[^0-9\.]/g,'');
	});

	form.on('submit',function(){
		//var $this = $(this);
		/*var url = $this.attr('action')'';
		var id = $this.attr('class');
		var full_url = url + '/' + id;
		//alert(full_url);
		//form.load(full_url + ' #result');*/

		if(upload_image.val()==''){
			error.fadeIn();
			return false;
		}
		if((upload_max_height.val()=='') && (upload_max_width.val()=='')){
			error_vals.fadeIn();
			upload_max_width.focus();
			return false;
		}else{
			submit.hide();
			wrap.hide();
			load.show();
		}
	});

	/*link.on('click',function(){
		var $this = $(this);
		var url = $this.attr('href');
		div.load(url + ' #new_upload');
		return false;
	});*/
});