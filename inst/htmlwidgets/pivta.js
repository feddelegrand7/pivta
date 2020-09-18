HTMLWidgets.widget({

  name: 'pivta',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance


    return {

      renderValue: function(x) {


      var pivot = new WebDataRocks({
	          container: el.id,
            toolbar: true,
            report: {
            dataSource: {
                filename: x.dsource,
                report: x.report,
                fieldSeparator: x.sep
            },


       options: {

             grid: {

                type: "flat"

             }

      }


            }});





      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});


