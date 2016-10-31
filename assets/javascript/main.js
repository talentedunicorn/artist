var gallery = (function() {
  var data = [
    {
      title: "_02",
      text: "Blue miles of sky with brown walls",
      link: "assets/images/image_2.jpg",
      width: "50"
    },
    {
      title: "_03",
      text: "Moon and chimney",
      link: "assets/images/image_3.jpg",
      width: "50"
    },
		{
      title: "_04",
      text: "Lights by the water at night",
      link: "assets/images/image_4.jpg",
    },
		{
      title: "_05",
      text: "Coconut trees on rocky breach",
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
