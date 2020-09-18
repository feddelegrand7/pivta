HTMLWidgets.widget({

  name: 'pivta',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance


    return {

      renderValue: function(x) {

      if (x.report === ""){


      var pivot = new WebDataRocks({
	          container: el.id,
            toolbar: true,
            report: {
            dataSource: {
                filename: x.dsource,
                fieldSeparator: x.sep
            },

       options: {

             grid: {

                type: "flat"

             }

      }


            }});


      } else {



    var pivot = new WebDataRocks({
	          container: el.id,
            toolbar: true,
            report: x.report});



      }







      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});


