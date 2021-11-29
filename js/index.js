$(document).ready(function () {
  let init_width = window.innerWidth
  console.log("init_width", init_width)
  if (init_width > 885) animations()

  // window.addEventListener('resize', () => {
  //   let width = window.innerWidth
  //   console.log(width)
  //   if(width > 885) animations()
  // });

});

document.addEventListener("wheel", event => {
  event.preventDefault();
  const container = document.querySelector(".main");
  container.scrollLeft += event.deltaY;
});

const animations = () => {
  $(".category").hover(function () {
    var title = $(this).find(".title")
    console.log(title)
    var desc = $(this).find(".description")
    title.fadeIn();
    title.stop().animate({ top: '550px' }, 200);
    desc.stop().animate({ top: '650px' }, 200);
    desc.show();
  }, function () {
    var title = $(this).find(".title")
    var desc = $(this).find(".description")
    title.stop().animate({ top: '700px' }, 200);
    desc.hide()
    desc.stop().animate({ top: '900px' }, 200);
    desc.hide()
  });
}

