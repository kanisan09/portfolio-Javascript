const images = document.querySelectorAll('.image');

images.forEach((image, index) => {
  let duration = 40000; // デフォルトの速度

  // indexによって速度を変える。
  if (index === 0) {
    duration = 20000; // 最初の画像の速度を速くする
  } else if (index === 1) {
    duration = 60000; // 2番目の画像の速度を遅くする
  } else if (index === 2) {
    duration = 30000;
  }else if (index === 3) {
    duration = 17000;
  } else if (index === 4){
    duration = 40000;
  } else if (index === 5){
    duration = 50000;
  }else if (index === 6){
    duration = 5000;
  }

  image.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(1500px)' }
    ],
    {
      duration: duration, // 動的に速度を変更
      iterations: Infinity,
      easing: 'linear'
    }
  );
});