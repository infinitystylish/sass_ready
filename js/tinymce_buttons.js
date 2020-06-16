// (function() {

//   tinymce.PluginManager.add( 'tmceBtnTooltip', function( editor, url ) {
//       // Add Button to Visual Editor Toolbar
//       editor.addButton('tmceBtnTooltip', {
//           title: 'Tooltip',
//           cmd: 'tmceBtnTooltip',
//           icon: 'dashicons-admin-comments',
//       });
//       editor.addCommand('tmceBtnTooltip', function() {
//           var selected_text = editor.selection.getContent({
//               'format': 'html'
//           });
         
//           var open_column = '<div class="swp-btn"> \
//       <a class="btn btn-default " href="" rel="nofollow" target="_blank"><span>' + selected_text + '</span> </a> \
//     </div>';
//           var close_column = '';
//           var return_text = '';
//           return_text = open_column + close_column;
//           editor.execCommand('mceReplaceContent', false, return_text);
//           return;
//       });
//   });
// })();

(function() {
  tinymce.PluginManager.add('tmceBtnTooltip', function(editor, url) {
      console.log(url);
      editor.addButton('tmceBtnTooltip', {
          image: url + '/tooltip.png',
          onclick: function() {
              editor.windowManager.open({
                  title: 'Insert Tooltip',
                  body: [{
                      type: 'textbox',
                      name: 'textboxtooltipName',
                      label: 'Tooltip Text',
                      value: ''
                  }, ],
                  onsubmit: function(e) {
                    editor.insertContent(
                      '[tooltip  \
                        content="' + e.data.textboxtooltipName + '"]' +
                        editor.selection.getContent() +
                      '[/tooltip]'
                    );
                  }
              });
          }
      });
  });
})();