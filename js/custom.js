(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.splash').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('#home > .navbar').removeClass('navbar-transparent');
      else
        $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $(".bs-component").hover(function(){
    $(this).append($button);
    $button.show();
  }, function(){
    $button.hide();
  });

  function cleanSource(html) {
    html = html.replace(/×/g, "&times;")
               .replace(/«/g, "&laquo;")
               .replace(/»/g, "&raquo;")
               .replace(/←/g, "&larr;")
               .replace(/→/g, "&rarr;");

    var lines = html.split(/\n/);

    lines.shift();
    lines.splice(-1, 1);

    var indentSize = lines[0].length - lines[0].trim().length,
        re = new RegExp(" {" + indentSize + "}");

    lines = lines.map(function(line){
      if (line.match(re)) {
        line = line.substring(indentSize);
      }

      return line;
    });

    lines = lines.join("\n");

    return lines;
  }
    
   
   
     
     
 var index = elasticlunr(function () {
    this.addField('title');
    this.addField('body');
    this.setRef('id');
});
    
var doc1 = {
    "id": 1,
    "title": "demo-1",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor."
}

var doc2 = {
    "id": 2,
    "title": "demo-2",
    "body": "content ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor."
}

var doc3 = {
    "id": 3,
    "title": "Searching Text",
    "body": "demo ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. demo nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus demo, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. demo viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo demo, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, demo congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor."
}
var doc4 = {
    "id": 4,
    "title": "demo-4",
    "body": " ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel, mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus.  nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus , nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero.  viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo , mattis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna justo, hendrerit nec justo vel,  congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ante mi, mollis sit amet consequat nec, pretium ac dolor. Proin elementum vel orci at dictum. Aliquam finibus rhoncus orci id semper. Morbi volutpat purus id risus varius finibus. Sed nec sapien vel ante pretium tempor vel et eros. Pellentesque consectetur scelerisque ipsum ut luctus. Sed scelerisque, metus sed tempus interdum, nunc dui iaculis diam, non vehicula ex quam sed dolor. Donec non interdum libero. Morbi viverra turpis nibh, eget accumsan urna pulvinar nec. Cras sollicitudin nulla ut felis accumsan porttitor."
}


     
  
index.addDoc(doc1);
index.addDoc(doc2);
index.addDoc(doc3);
index.addDoc(doc4);

    
     $(window).load(function(){
         $('#user_guide').click(function(){
         $('.changable_header').text(index.search("demo-1")['0'].doc.title)
         $('.changable_content').text(index.search("demo-1")['0'].doc.body)
         })
   
     
     
         $('#to_do_smith').click(function(){
         $('.changable_header').text(index.search("content")['0'].doc.title)
         $('.changable_content').text(index.search("content")['0'].doc.body)
         })
  
     
   
         $('#admin_guide').click(function(){
             $('.display_none').css({'display':'block'})
             $('.changable_header').text(index.search("demo-4")['0'].doc.title)
             $('.changable_content').text(index.search("demo-4")['0'].doc.body)
         })
     
         $('.search_button').click(function(){
             var text = $('.seach_area').val();
             $('.changable_header').text(index.search(text , { 
             fields: {
                body: {boost: 1}
             }
                })['0'].doc.title)
             $('.changable_content').text(index.search(text , { 
             fields: {
                body: {boost: 1}
             }
                })['0'].doc.body)
         })
     })
     
      
     
     
    
})();