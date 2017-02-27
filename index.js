util = require('hexo-util');

hexo.extend.tag.register('imgmodal', function(args) {
	var url = args[0];
	var caption = args[1];

	var tag = '<div>';
	tag    += '  <div class="image-modal-button" style="cursor: pointer"><img src="' + url + '" class="img-responsive center-block" alt="' + caption + '"></div>';
	tag    += '  <div class="text-center" style="font-size: 12px">' + caption + '</div> ';
	tag    += '</div>';
	tag    += '<div class="modal fade" tabindex="-1" role="dialog">';
  	tag    += '  <div class="modal-dialog" role="document">';
    tag    += '    <div class="modal-content">';
	tag    += '      <img src="' + url + '" class="img-responsive" style="margin: 5px 0;" alt="' + caption + '">';
	tag    += '      <div class="text-center">' + caption + '</div> ';
    tag    += '    </div>';
    tag    += '  </div>';
    tag    += '</div>';

	return tag;
});

hexo.extend.filter.register('after_post_render', function(data){
	var script = '$(".image-modal-button").click(function(){';
	   script += '	var modalEl = $(this).parent().next(".modal");';
	   script += '	modalEl.modal("show");';
	   script += '});';
	data.content += util.htmlTag('script', {type: 'text/javascript'}, script)

	return data;
});