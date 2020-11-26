document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('#object');
    var splash = document.querySelector('#splash');
    scene.addEventListener('model-loaded', function (e) {
        setTimeout(function(){
            console.log('splash hidden');
            splash.style.display = 'none';
            updateAnimationBar();
            animation_bar_start = performance.now();
        },2000);

    });
    scene.addEventListener('animation-loop', function(){
        console.log(performance.now()-animation_bar_start);
        animation_bar_start = performance.now();
    });
});

function updateAnimationBar(){
    let gap = performance.now()-animation_bar_start;
    let length = (gap)/animation_length*100;
    $('#animation_bar').width(length+'%');
    setTimeout(function(){
        updateAnimationBar();
    },animation_bar_timer);
}

var animation_bar_timer = 20
var animation_bar_start = performance.now();

