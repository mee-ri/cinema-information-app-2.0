// Enable user to start searching immediately after page has loaded without having to click on anything
window.onload = $("#cinema").select();

var theatreID;
var searchWord;

// Placing contents to heading
var date = new Date();
var day = date.getDate();
if (day < 10) {
  day = "0" + day;
}
var month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
var year = date.getFullYear();
date = day + "." + month + "." + year;
$("#heading").html(
  "<br>Finnkino-elokuvateattereiden tarjonta<br>" + date + "<br><br>"
);

// When user has already used the search field and wants to use the drop-down menu, the search field is emptied to avoid confusion
$("#cinema").click(function () {
  $("#search").val("");
});

// When user has chosen an area or cinema from the drop-down menu, start loading XML
function showMovies() {
  $("#cinema").select();
  switch ($("#cinema").val()) {
    case "Pääkaupunkiseutu":
      theatreID = 1014;
      break;
    case "Espoo":
      theatreID = 1012;
      break;
    case "Espoo: OMENA":
      theatreID = 1039;
      break;
    case "Espoo: SELLO":
      theatreID = 1038;
      break;
    case "Helsinki":
      theatreID = 1002;
      break;
    case "Helsinki: ITIS":
      theatreID = 1045;
      break;
    case "Helsinki: KINOPALATSI":
      theatreID = 1031;
      break;
    case "Helsinki: MAXIM":
      theatreID = 1032;
      break;
    case "Helsinki: TENNISPALATSI":
      theatreID = 1033;
      break;
    case "Vantaa: FLAMINGO":
      theatreID = 1013;
      break;
    case "Jyväskylä: FANTASIA":
      theatreID = 1015;
      break;
    case "Kuopio: SCALA":
      theatreID = 1016;
      break;
    case "Lahti: KUVAPALATSI":
      theatreID = 1017;
      break;
    case "Lappeenranta: STRAND":
      theatreID = 1041;
      break;
    case "Oulu: PLAZA":
      theatreID = 1018;
      break;
    case "Pori: PROMENADI":
      theatreID = 1019;
      break;
    case "Tampere":
      theatreID = 1021;
      break;
    case "Tampere: CINE ATLAS":
      theatreID = 1034;
      break;
    case "Tampere: PLEVNA":
      theatreID = 1035;
      break;
    case "Turku ja Raisio":
      theatreID = 1047;
      break;
    case "Turku: KINOPALATSI":
      theatreID = 1022;
      break;
    case "Raisio: LUXE MYLLY":
      theatreID = 1046;
      break;
    default:
      theatreID = null;
      var name = $("#cinema").val();
      alert(
        'Hakemaasi alueen tai teatterin nimeä "' +
          name +
          '" ei löytynyt. Ole hyvä ja valitse nimi alasvetovalikosta tai etsi hakusanalla.'
      );
      $("#cinema").val("");
  }
  loadAndParseXML();
}

// When user has searched for an area or cinema using the search field, start loading XML
function searchFunction() {
  var valinta = $("#search").val();
  valinta = valinta.trim();
  valinta = valinta.toLowerCase();
  switch (valinta) {
    case "pääkaupunkiseutu":
      theatreID = 1014;
      searchWord = "Pääkaupunkiseutu";
      break;
    case "espoo":
      theatreID = 1012;
      searchWord = "Espoo";
      break;
    case "espoo: omena":
    case "espoo omena":
    case "omena":
    case "iso omena":
    case "omppu":
    case "iso omppu":
      theatreID = 1039;
      searchWord = "Espoo: OMENA";
      break;
    case "espoo: sello":
    case "espoo sello":
    case "sello":
      theatreID = 1038;
      searchWord = "Espoo: SELLO";
      break;
    case "helsinki":
    case "hki":
    case "stadi":
      theatreID = 1002;
      searchWord = "Helsinki";
      break;
    case "helsinki: itis":
    case "helsinki itis":
    case "helsinki itäkeskus":
    case "itis":
    case "itäkeskus":
      theatreID = 1045;
      searchWord = "Helsinki: ITIS";
      break;
    case "helsinki: kinopalatsi":
    case "helsinki kinopalatsi":
    case "kinopalatsi":
    case "kino":
      theatreID = 1031;
      searchWord = "Helsinki: KINOPALATSI";
      break;
    case "helsinki: maxim":
    case "helsinki maxim":
    case "maxim":
      theatreID = 1032;
      searchWord = "Helsinki: MAXIM";
      break;
    case "helsinki: tennispalatsi":
    case "helsinki tennispalatsi":
    case "tennispalatsi":
    case "tennis":
    case "tennari":
      theatreID = 1033;
      searchWord = "Helsinki: TENNISPALATSI";
      break;
    case "vantaa: flamingo":
    case "vantaa flamingo":
    case "vantaa jumbo":
    case "vantaa":
    case "flamingo":
    case "jumbo":
      theatreID = 1013;
      searchWord = "Vantaa: FLAMINGO";
      break;
    case "jyväskylä: fantasia":
    case "jyväskylä fantasia":
    case "jyväskylä":
    case "jkl":
    case "fantasia":
      theatreID = 1015;
      searchWord = "Jyväskylä: FANTASIA";
      break;
    case "kuopio: scala":
    case "kuopio scala":
    case "kuopio":
    case "scala":
      theatreID = 1016;
      searchWord = "Kuopio: SCALA";
      break;
    case "lahti: kuvapalatsi":
    case "lahti kuvapalatsi":
    case "lahti":
    case "kuvapalatsi":
      theatreID = 1017;
      searchWord = "Lahti: KUVAPALATSI";
      break;
    case "lappeenranta: strand":
    case "lappeenranta strand":
    case "lappeenranta":
    case "strand":
      theatreID = 1041;
      searchWord = "LAPPEENRANTA: STRAND";
      break;
    case "oulu: plaza":
    case "oulu plaza":
    case "oulu":
    case "plaza":
      theatreID = 1018;
      searchWord = "Oulu: PLAZA";
      break;
    case "pori: promenadi":
    case "pori promenadi":
    case "pori":
    case "promenadi":
      theatreID = 1019;
      searchWord = "Pori: PROMENADI";
      break;
    case "tampere":
    case "tre":
      theatreID = 1021;
      searchWord = "Tampere";
      break;
    case "tampere: cine atlas":
    case "tampere cine atlas":
    case "tre cine atlas":
    case "tre atlas":
    case "tre cine":
    case "cine atlas":
    case "cine":
    case "atlas":
      theatreID = 1034;
      searchWord = "Tampere: CINE ATLAS";
      break;
    case "tampere: plevna":
    case "tampere plevna":
    case "tre plevna":
    case "plevna":
      theatreID = 1035;
      searchWord = "Tampere: PLEVNA";
      break;
    case "turku ja raisio":
    case "raisio ja turku":
    case "turku raisio":
    case "raisio turku":
      theatreID = 1047;
      searchWord = "Turku ja Raisio";
      break;
    case "turku: kinopalatsi":
    case "turku kinopalatsi":
    case "kinopalatsi turku":
    case "turku":
      theatreID = 1022;
      searchWord = "Turku: KINOPALATSI";
      break;
    case "raisio: luxe mylly":
    case "raisio luxe mylly":
    case "raisio":
    case "luxe mylly":
    case "luxe":
    case "mylly":
      theatreID = 1046;
      searchWord = "Raisio: LUXE MYLLY";
      break;
    default:
      theatreID = null;
      searchWord = "";
      var name = $("#search").val();
      alert(
        'Hakemaasi alueen tai teatterin nimeä "' +
          name +
          '" ei löytynyt. Ole hyvä ja kokeile toista hakusanaa tai valitse nimi alasvetovalikosta.'
      );
      $("#search").val("");
  }
  loadAndParseXML();
  //Convert user's search field input to the cinema's complete name (= searchWord), to clarify which cinema's data is being fetched
  $("#search").val(searchWord);
  $("#search").select();
  return false;
}

function loadAndParseXML() {
  if (theatreID != undefined) {
    $("#results").hide();
    var url2 =
      "https://www.finnkino.fi/xml/Schedule/?area=" + theatreID + "&dt=" + date;

    $.get(url2, function (data) {
      var i;
      var cards = "<table><tr>";
      var x = $(data).find("Show");
      // In case there are no shows on the current date, alert user and empty search fields
      if (x.length == 0) {
        var listName = $("#cinema").val();
        var cinemaName;
        if (listName == "") {
          cinemaName = searchWord;
        } else {
          cinemaName = listName;
        }
        alert(
          cinemaName +
            ": Ei näytöksiä tänään. Valitse toinen alue tai teatteri."
        );
        $("#cinema").val("");
        $("#search").val("");
      } else {
        var cardCount = 1;
        for (i = 0; i < x.length; i++) {
          //Save the result from the AJAX call into var cards

          cards +=
            "<td><div class='flip-card'><div class='flip-card-inner'>" +
            "<div class='flip-card-front'><br><p>" +
            date +
            "</p>" +
            "<img src='" +
            $(x[i]).find("EventLargeImagePortrait")[0].childNodes[0].nodeValue +
            "' alt='Elokuvajuliste' style='width:100px;height:150px;'>" +
            "<br><br><h5 class='title'>" +
            $(x[i]).find("Title")[0].childNodes[0].nodeValue +
            "</h5>" +
            "<h1>" +
            $(x[i])
              .find("dttmShowStart")[0]
              .childNodes[0].nodeValue.slice(11, 16) +
            "</h1>" +
            "<p>Finnkino " +
            $(x[i]).find("TheatreAndAuditorium")[0].childNodes[0].nodeValue +
            "</p></div>" +
            "<div class='flip-card-back'><br><br>";

          var ratingImage = $(x[i]).find("RatingImageUrl").length;
          if (ratingImage > 0) {
            var rating = $(x[i]).find("Rating")[0].childNodes[0].nodeValue;

            switch (rating) {
              case "S":
                rating = "Sallittu kaikenikäisille.";
                break;
              case "7":
                rating =
                  "Kielletty alle 7-vuotiailta. Aikuisen (yli 18 v.) seurassa sallittu 4 vuotta täyttäneille.";
                break;
              case "12":
                rating =
                  "Kielletty alle 12-vuotiailta. Aikuisen (yli 18 v.) seurassa sallittu 9 vuotta täyttäneille.";
                break;
              case "16":
                rating =
                  "Kielletty alle 16-vuotiailta. Aikuisen (yli 18 v.) seurassa sallittu 13 vuotta täyttäneille.";
                break;
              case "18":
                rating = "Kielletty alle 18-vuotiailta.";
                break;
              case "Anniskelu K18 (elokuva: 16)":
              case "Anniskelu K18 (elokuva: 12)":
              case "Anniskelu K18 (elokuva: 7)":
              case "Anniskelu K18 (elokuva: S)":
                rating = "Kielletty alle 18-vuotiailta.";
                break;
              default:
                rating = "Elokuvaa ei ole vielä luokiteltu.";
            }

            cards +=
              "<img src='" +
              $(x[i]).find("RatingImageUrl")[0].childNodes[0].nodeValue +
              "' alt='Ikäraja' title='" +
              rating +
              "'>";
          }

          var contentDescriptor = $(x[i]).find("ContentDescriptor").length;
          if (contentDescriptor > 0) {
            for (y = 0; y < contentDescriptor; y++) {
              var contentName = $($(x[i]).find("ContentDescriptor")[y]).find(
                "Name"
              )[0].childNodes[0].nodeValue;
              switch (contentName) {
                case "Disturbing":
                  contentName = "Voi aiheuttaa ahdistusta.";
                  break;
                case "SexualContent":
                  contentName = "Sisältää seksiä.";
                  break;
                case "SubstanceAbuse":
                  contentName = "Sisältää päihteiden käyttöä.";
                  break;
                case "Violence":
                  contentName = "Sisältää väkivaltaa.";
                  break;
              }
              cards +=
                "<img src='" +
                $($(x[i]).find("ContentDescriptor")[y]).find("ImageURL")[0]
                  .childNodes[0].nodeValue +
                "' alt='Sisältömerkintä' title='" +
                contentName +
                "'>";
            }
          }

          cards +=
            "<br><br><p><b>Kieli: </b>" +
            $($(x[i]).find("SpokenLanguage")[0]).find("Name")[0].childNodes[0]
              .nodeValue +
            "</p>" +
            "<p><b>Tekstitys: </b>";

          var subtitle1 = $(x[i]).find("SubtitleLanguage1").length;

          if (subtitle1 > 0) {
            cards += $($(x[i]).find("SubtitleLanguage1")[0]).find("Name")[0]
              .childNodes[0].nodeValue;
          } else {
            cards += "Ei teksitystä";
          }

          var subtitle2 = $(x[i]).find("SubtitleLanguage2").length;
          if (subtitle2 > 0) {
            cards +=
              ", " +
              $($(x[i]).find("SubtitleLanguage2")[0]).find("Name")[0]
                .childNodes[0].nodeValue;
          }

          cards += "</p>";

          var localRelease = $(x[i]).find("dtLocalRelease")[0].childNodes[0]
            .nodeValue;
          var rDay = $(x[i])
            .find("dtLocalRelease")[0]
            .childNodes[0].nodeValue.slice(8, 10);
          var rMonth = $(x[i])
            .find("dtLocalRelease")[0]
            .childNodes[0].nodeValue.slice(5, 7);
          var rYear = $(x[i])
            .find("dtLocalRelease")[0]
            .childNodes[0].nodeValue.slice(0, 4);

          cards +=
            "<p><b>Ensi-ilta: </b>" +
            rDay +
            "." +
            rMonth +
            "." +
            rYear +
            "</p>" +
            "<p><b>Kesto: </b>" +
            timeConvert(
              $(x[i]).find("LengthInMinutes")[0].childNodes[0].nodeValue
            ) +
            "</p><br>" +
            "<h4><a href='" +
            $(x[i]).find("EventURL")[0].childNodes[0].nodeValue +
            "' target='_blank' title='Siirry elokuvan sivuille.'>Osta lippu</a></h4>" +
            "</div></div></div><td>";

          if (cardCount % 3 == 0) {
            cards += "</tr><tr>";
          }

          cardCount++;
        }

        cards += "</tr></table>";

        $("#results").html(cards);

        $("#results").fadeIn(500);

        //Enlargen rating and content descriptor images when mouse hovers on them
        $("img").hover(
          function () {
            $(this).animate({
              height: "+=10px",
              width: "+=10px",
            });
          },
          function () {
            $(this).animate({
              height: "-=10px",
              width: "-=10px",
            });
          }
        );

        $("#cinema").val("");
      }
    });
  }
}

//Make "Scroll to top" button visible and usable when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#scroll").fadeIn(1000);
  } else {
    $("#scroll").fadeOut(500);
  }
}

$("#scroll").click(function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $("#cinema").select();
});

//Convert movie duration data from minutes to hours and minutes
function timeConvert(duration) {
  var minutes = duration % 60;
  var hours = (duration - minutes) / 60;
  return hours + " h " + minutes + " min";
}
