

var $txt = document.querySelector('#text')
var $sky = document.querySelector('#sky')
var $pano = document.querySelector('#pano')
var $audio = document.querySelector('#ambient')

var places = [
	'go to mars',
	'see beach',
	'explore mars',
	'travel china',
	'visit times square'
]

var micWorks = setTimeout(function () {
	setMainText('Check your mic to make sure it can record or check your browser settings to make sure that you gave access to the site')
}, 20 * 1000)

var commands = {
	'Hi there': onStart,
	'go to :tag': onPanoramaQuery,
	'travel to :tag': onPanoramaQuery,
	'visit :tag': onPanoramaQuery,
	'explore :tag': onPanoramaQuery,
	'see :tag': onPanoramaQuery,
}

function fadeOutAudio () {
	var interval

	interval = setInterval(function(){
		$audio.volume -= 0.05

		if ($audio.volume <= 0.05) {
			clearInterval(interval)
			$audio.pause()
		}
	}, 250)

}

function onPanoramaQuery (tag) {
	var loader = document.querySelector('#loader')
	$pano.emit('fadeOut')
	setMainText(tag)
	loader.setAttribute('visible', 'true')
	Promise.all([fetch('https://gurivr.com/api/assets/search?type=panorama&query=' + tag), fetch('https://gurivr.com/api/assets/search?type=audio&query=' + tag)])
	.then(resp => Promise.all(resp.map(r => r.json())))
	.then(([pano, audio]) => {
		if (audio) {
			// TODO: FADE IN
			$audio.src = audio
			$audio.volume = 1.0
			$audio.play()
			setTimeout(function(){
				fadeOutAudio()
			}, 3000)
		}

		if (!pano.length) {
			$pano.emit('fadeOut')
			setMainText('We couldn\'t find the panorama. Try with `'+places[Math.floor(Math.random() * places.length)]+'`')
			return $sky.emit('fadeIn')
		} else {
		}

		var imgSrc = pano[0].url_k || pano[0].url_o

		var img = new Image()
		img.onload = function () {
			$sky.emit('fadeOut')
			setTimeout(function(){
				$pano.emit('fadeIn')
				loader.setAttribute('visible', 'false')
				setTimeout(function(){ setMainText('') }, 3 * 1000)
				setTimeout(askForFeedback, 15 * 1000)
			}, 300)
		}

		img.src = imgSrc
		$pano.setAttribute('src', imgSrc)
	})
}

function onStart () {
	clearTimeout(micWorks)
	setMainText('Hi there')
	setTimeout(function(){
		setMainText('Now you can go anywhere you can imagine. Say "Go to"')
	}, 3 * 1000)
}

var oldText = ''

function setMainText (str) {
	oldText = str
  $txt.setAttribute('bmfont-text', 'text: ' + str + '; align: center; width: 1000; color: white; fnt: font.fnt; fntImage: font.png;')
}

function askForFeedback () {
	var showUI = Math.random() > .5
	if (showUI) {
		// show UI

	} else {

	}
}


annyang.addCommands(commands)

var listening = document.querySelector('#listening')

annyang.addCallback('soundstart', function(){
	//console.log('pepe')
	//listening.setAttribute('visible', 'true')
	var a = oldText
	setMainText('Listening...')
	oldText = a
})

annyang.addCallback('result', function(){
	//listening.setAttribute('visible', 'false')
	setMainText(oldText)
})

annyang.start({ continuous: false })


setTimeout(function(){
var component = document.querySelector("#loader").components["canvas-material"];
var c = component
var ctx = component.getContext()
var    cw = 150
var    ch = 150

c.width = cw;
c.height = ch;

var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}

var path = [
    {x: cw/2, y:(ch/2-50)},
    {x: (cw/2)-60, y: (ch/2+50)},
    {x: (cw/2)+60, y: (ch/2+50)}
  ],
	particles = [],
	particleCount = 10,
	particleDelayTick = 7,
	particleDelayTickMax = 7,
  hue = rand(0, 360);

var Particle = function(path, speed){
  this.path = path;
  this.currentPoint = 0;
	this.x = path[0].x;
  this.y = path[0].y;
  this.speed = speed;
}

var createParticles = function(){
  if(particles.length < particleCount){
  	if(particleDelayTick >= particleDelayTickMax){
  		particles.push(new Particle(path, 3));
      particleDelayTick = 0;
 		} else {
    	particleDelayTick++;
  	}
  }
}

var updateParticles = function(){
	var i = particles.length;
  while(i--){
    var p = particles[i];

    var onLastPoint = (p.currentPoint === p.path.length-1);
    var nextPoint = (onLastPoint) ? 0 : p.currentPoint+1;
    var dx = p.path[nextPoint].x - p.x;
    var dy = p.path[nextPoint].y - p.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
	var vx = dx / dist * p.speed;
    var vy = dy / dist * p.speed;

    if(dist > p.speed){
      p.x += vx;
      p.y += vy;
    } else {
      p.x = p.path[nextPoint].x;
      p.y = p.path[nextPoint].y;
      p.currentPoint = nextPoint;
    }
  }
}

var renderParticles = function(){
  ctx.fillStyle = 'hsla('+hue+',50%,10%,1)';
  ctx.strokeStyle = 'hsla('+hue+',50%,10%,1)';
  var i = particles.length;
  while(i--){
  	var p = particles[i];
    var i2 = particles.length;
    while(i2--){
    	var p2 = particles[i2];
      if(i != i2){
      	ctx.beginPath();
      	ctx.moveTo(p.x, p.y);
      	ctx.lineTo(p2.x, p2.y);
     		ctx.lineTo(cw/2, ch/2);
     		ctx.stroke();
      }
    }
  }
	component.updateTexture();

}

var eraseIt = function(){
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, .4)';
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = 'lighter';
}

var loopsIDidItAgain = function(){
  eraseIt();
  createParticles();
	updateParticles();
  renderParticles();
  hue = (hue < 360) ? hue+1 : 0;
}

setInterval(loopsIDidItAgain, 16);
}, 1000)
