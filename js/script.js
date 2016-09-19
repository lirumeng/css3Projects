// 1.翻面控制
function turn(elem){
	var clsN = elem.className;
	if(/photo-front/.test(clsN)){
		clsN = clsN.replace(/photo-front/,'photo-back');
	}else{
		clsN = clsN.replace(/photo-back/,'photo-front');
	}
	return elem.className = clsN;
}

// 3.通用函数
function g(selector){
	var method = selector.substr(0,1) == '.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
// 随机生成一个值 0~20
function random(range){
	var max = Math.max(range[0],range[1]);
	var min = Math.min(range[0],range[1]);

	var diff = max-min; //差值
	var num = Math.ceil((Math.random()*diff + min));

	return num;
}

// 4.输出所有的海报
var data = data;
function addPhotos(){
	var template = g('#wrap').innerHTML;
	var html = [];
	for(s in data){
		var _html = template.replace('{{index}}',s)
							.replace('{{img}}',data[s].img)
							.replace('{{caption}}',data[s].caption)
							.replace('{{desc}}',data[s].desc);
		html.push(_html);
	}
	g('#wrap').innerHTML = html.join('');

	rsort(random([0,data.length]));
}
addPhotos();

// 6.计算左右分区的范围 {left:{x:[min,max],y:[]}, right:{x:[],y:[]}}
function range(){
	var range = {left:{x:[],y:[]}, right:{x:[],y:[]}};

	var wrap = {
		w:g('#wrap').clientWidth,
		h:g('#wrap').clientHeight
	}
	var photo = {
		w:g('.photo')[0].clientWidth,
		h:g('.photo')[0].clientHeight
	}
	range.wrap = wrap;
	range.photo = photo;

	range.left.x = [0-photo.w, wrap.w/2-photo.w/2];
	range.left.y = [0-photo.h, wrap.h];
	range.right.x = [wrap.w/2 + photo.w/2, wrap.w + photo.w];
	range.right.y = range.left.y;

	return range;
}

// 5.排序海报
function rsort(n){
	var _photo = g('.photo');
	var photos = [];
	for(s = 0;s<_photo.length;s++){
		_photo[s].className = _photo[s].className.replace(/\s*photo-center\s*/,' ');
		photos.push(_photo[s]);
	}

	var photo_center = g('#photo-'+n);
	photo_center.className += ' photo-center';
	photo_center = photos.splice(n,1)[0];

	var photos_left = photos.splice(0,Math.ceil(photos.length/2));
	var photos_right = photos;

	var ranges = range();
	for(s in photos_left){
		var photo = photos_left[s];
		photo.style.left = random(ranges.left.x) + 'px';
		photo.style.top = random(ranges.left.y) + 'px';

		photo.style['-webkit-transform'] = 'rotate('+random([-150,150])+'deg)';
	}
	for(s in photos_right){
		var photo = photos_right[s];
		photo.style.right = random(ranges.right.x) + 'px';
		photo.style.top = random(ranges.right.y) + 'px';

		photo.style['-webkit-transform'] = 'rotate('+random([-150,150])+'deg)';
	}
}


