var gallery = (function() {
  var data = [
    {
      title: "_02",
      text: "Blue miles of sky",
      link: "assets/images/image_2.jpg"
    },
    {
      title: "_03",
      text: "Moon and chimney",
      link: "assets/images/image_3.jpg"
    },
		{
      title: "_04",
      text: "Lights by the water",
      link: "assets/images/image_4.jpg"
    },
		{
      title: "_05",
      text: "Island on the rocks",
      link: "assets/images/image_5.jpg"
    }
  ];
   
  var $gallery = $('.gallery');
  var galleryItemTemplate = $("#gallery-item-template").html();
  
  function _render(data) {
    $gallery.html(Mustache.render(galleryItemTemplate, {links: data}));
  }
  
  _render(data);
})();
