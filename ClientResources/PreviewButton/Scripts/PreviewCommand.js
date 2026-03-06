define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/topic",
    "epi/shell/command/_Command",
    "epi-cms/_ContentContextMixin",
], function (
    declare,
    lang,
    topic,
    _Command,
    _ContentContextMixin
) {
    return declare([_Command, _ContentContextMixin], {
        // summary:
        //      Command to preview content in a new window
        
        name: "previewContent",
        label: "Preview",
        tooltip: "Preview this content in a new window",
        iconClass: "epi-iconPreview",
        category: "context",
        
        _execute: function () {
            // summary:
            //      Executes the preview command
            
            if (!this.model || !this.model.contentLink) {
                console.error("No content link available for preview");
                return;
            }

            var contentId = this.model.contentLink;
            var contentName = this.model.name || "Content";
            
            // Construct preview URL
            var previewUrl = this.getCurrentContext().previewUrl;
            
            // Open in new window
            var previewWindow = window.open(
                previewUrl,
                'preview_' + contentId
            );
            
            if (!previewWindow) {
                topic.publish("/epi/shell/action/showerror", {
                    message: "Preview window was blocked by browser. Please allow pop-ups for this site."
                });
            } else {
                topic.publish("/epi/shell/action/showmessage", {
                    message: "Opening preview for: " + contentName
                });
            }
        },
                
        _onModelChange: function () {
            // summary:
            //      Updates command availability based on model state
            
            this.inherited(arguments);
            
            // Enable command if we have a valid content link
            var isAvailable = !!(this.model.contentData.previewUrl);
            this.set("isAvailable", isAvailable);
            this.set("canExecute", isAvailable);
        }
    });
});
