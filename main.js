let n;
init();
setInterval(() => {
	goLeave(getImage(n)).one('transitionend',(f)=>{
		goEnter($(f.currentTarget));
	});
	goCurrent(getImage(n+1));
	n += 1;
},2000)

function init(){
	n = 1;
	$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}

function getImage(n){
	return $(`.images > img:nth-child(${countPosition(n)})`)
}

function countPosition(n){
	if(n>5){
		n = n%5;
		if(n === 0){
			n = 5;
		}
	}
	return n;
}

function goCurrent($node){
	return $node.removeClass('enter leaver').addClass('current');
}

function goLeave($node){
	return $node.removeClass('enter current').addClass('leave');	
}

function goEnter($node){
	return $node.removeClass('leave leaver').addClass('enter');
}