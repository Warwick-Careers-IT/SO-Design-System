// adds active classes to top nav based on sub nav info
jQuery(document).ready(function ($) {
    var parentText = $("nav.navbar-secondary > ul.nav >li.first").text();
    if (parentText.length) {
        $("ul.nav >li:contains(" + parentText.trim() + ")").addClass('active');
    }

    var h1ComponentText = $("div.column-2-content > h1").text();
    if (h1ComponentText.length){
         $("li.app-subnav__section-item:contains(" + h1ComponentText.trim() + ")").addClass('app-subnav__section-item--current');
    }
   
});