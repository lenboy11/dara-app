/*Bootstrap Table Init*/

var data = [
  {
    name: "Sales Figures",
    price: "4",
  },
  {
    name: "Reputational Risk",
    price: "4",
  },
  {
    name: "New Partnerships",
    price: "4",
  },
  {
    name: "Climate Change Strategy",
    price: "4",
  },
  {
    name: "Recycling",
    price: "4",
  },
  {
    name: "Renewable Energy",
    price: "4",
  },
  {
    name: "Geographical Market Entry",
    price: "4",
  },
];

$(function () {
  "use strict";
  $("#table_js,#table_js_1,#table_js_2").bootstrapTable({
    data: data,
  });

  /*Scroll to top*/
  $(document).on("click", "#mybtn_top", function (e) {
    $("#table_js").bootstrapTable("scrollTo", 0);
    return false;
  });

  /*Scroll to index*/
  $(document).on("click", "#mybtn_row", function (e) {
    var index = +$("#row_index").val(),
      top = 0;
    $("#table_js")
      .find("tbody tr")
      .each(function (i) {
        if (i < index) {
          top += $(this).height();
        }
      });
    $("#table_js").bootstrapTable("scrollTo", top);
    return false;
  });

  /*Scroll to bottom*/
  $(document).on("click", "#mybtn_btm", function (e) {
    $("#table_js").bootstrapTable("scrollTo", "bottom");
    return false;
  });
});
