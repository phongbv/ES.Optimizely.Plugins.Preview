define([
    "dojo/_base/declare",
    "dijit/form/Button",

    "epi-cms/component/command/_GlobalToolbarCommandProvider",
    "previewButton/PreviewCommand",
  ],
  function (declare, Button, _GlobalToolbarCommandProvider, PreviewCommand) {
    return declare([_GlobalToolbarCommandProvider], {
      constructor: function () {
        this.inherited(arguments);

        this.addToTrailing(new PreviewCommand({
          label: "Preview in new window"
        }), {
          showLabel: true,
          widget: Button
        });
      }
    });
  }
);