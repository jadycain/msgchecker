function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var anchorId;
var vice_num;
var vice_title;
var vice_preface;
var vice_img;
var vice_content;

$(document).ready(function () {
  anchorId = getParameterByName("aid");
  console.log(anchorId);

  $.ajax({
    url: "https://intersense.ddns.net:9022/api/Message/GetArticle",
    type: "POST",
    dataType: "json",
    data: JSON.stringify({ ArticleID: anchorId }),
    contentType: "application/json",
    success: function (data) {
      console.log(data);
      vice_num = data.ListViceData.length;

      $(".blogHeader").css("display", "block");
      $(".blogFooter").css("display", "block");
      $(".blogArticle").css("display", "block");

      $("section.blog .inner").append(
        '<div class="title">' +
          data.Title +
          "</div>" +
          '<div class="titleImg"><img src="' +
          data.TitleImageUrl +
          '" /><div class="author">' +
          data.DateAuthor +
          "</div></div>" +
          '<div class="content">' +
          data.Content +
          "</div>"
      );

      for (var i = 0; i < vice_num; i++) {
        vice_title = data.ListViceData[i].ViceTitle;
        vice_preface = data.ListViceData[i].VicePreface;
        vice_img = data.ListViceData[i].ViceImageUrl;
        vice_content = data.ListViceData[i].ViceContent;
        vice_ImgSource =
          data.ListViceData[i].ImageDes === null
            ? ""
            : data.ListViceData[i].ImageDes;

        if (vice_title) {
          $("section.blog .inner").append(
            '<div class="viceTitle">' + vice_title + "</div>"
          );
        }
        if (vice_preface) {
          $("section.blog .inner").append(
            '<div class="vicePreface">' + vice_preface + "</div>"
          );
        }
        if (vice_img) {
          $("section.blog .inner").append(
            '<div class="viceImg"><img src="' +
              vice_img +
              '" /><div class="viceImgSource">' +
              vice_ImgSource +
              "</div></div>"
          );
        }
        if (vice_content) {
          $("section.blog .inner").append(
            '<div class="viceContent">' + vice_content + "</div>"
          );
        }

        // $('section.blog .inner').append(
        // 	'<div class="viceTitle">'+vice_title+'</div>'+
        // 	'<div class="vicePreface">'+vice_preface+'</div>'+
        // 	'<div class="viceImg"><img src="'+vice_img+'" /></div>'+
        // 	'<div class="viceContent">'+vice_content+'</div>'
        // )
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
      const domain = window.location.origin;
      window.location = `${domain}/404.html`;
    },
  });
});
