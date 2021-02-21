
(function ($){
    
    $.fn.pageLoad = function (){

        var slides = this.children('ol').children('li');
        var pageIndex = ["Home", "BAE", "BAD", "BAA", "About"];

        var loadPage = function (e) {
            var $this = $(this);
            var index = slides.index($this);
            if (index == -1) {
                $("#Homepage").load('Home.html body');
                return;
            };

        }

        slides.on('click.pageLoad', loadPage());



     
   

    }
}(jQuery));
