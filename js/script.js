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

// 5.排序海报
function rsort(n){
	var photo_center = g('#photo-'+n);
	photo_center.className += ' photo-center';
}