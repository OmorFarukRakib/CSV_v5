// var resultContainer = document.getElementById("qr-reader-results");

// function onScanSuccess(qrMessage) {
//   // handle the scanned code as you like, for example:
//   console.log(`QR matched = ${qrMessage}`);
//   resultContainer.innerHTML = `${qrMessage}`;
// }

// function onScanFailure(error) {
//   // handle scan failure, usually better to ignore and keep scanning.
//   // for example:
//   console.warn(`QR error = ${error}`);
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "reader",
//   { fps: 10, aspectRatio: 1.0 },
//   /* verbose= */ false
// );

// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// $("#reader").find("a").first().css("display", "none");

// $("#reader__scan_region").css({});
// $("#reader__scan_region").find("video").first().css({
//   height: "500px",
// });

$(document).ready(function () {
  $("#csvRoot").on(
    "click",
    ".TrackIDGeneratorByQRCodeScanner-btn",
    function () {
      var row_index = $(this).closest("tr").index();
      var resultContainer = document.getElementById("qr-reader-results");
      var QRMessage = "";
      function onScanSuccess(qrMessage) {
        // handle the scanned code as you like, for example:
        console.log(`QR matched = ${qrMessage}`);
        resultContainer.innerHTML = `Track ID: ${qrMessage}`;
        QRMessage = qrMessage;
      }

      function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`QR error = ${error}`);
      }

      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, aspectRatio: 1.0 },
        /* verbose= */ false
      );

      html5QrcodeScanner.render(onScanSuccess, onScanFailure);

      $("#reader").find("a").first().css("display", "none");

      $("#reader__scan_region").css({});
      $("#reader__scan_region").find("video").first().css({
        height: "500px",
      });
      //   if (QRMessage == ""){

      //   }
      $(".QRTrackID_ADD_Button").on("click", function (e) {
        // console.log("QR modal dea TrackID add hoise ");
        // console.log(row_index);
        if (QRMessage !== "") {
          // console.log("track ID nai");
          $(`#csvRoot tr:nth-child(${row_index + 1}) td:nth-child(3)`).text(
            `${QRMessage}`
          );
          $(`#csvRoot tr:nth-child(${row_index + 1}) td:nth-child(2)`).text(
            `Generated by QR`
          );
          setValid_Invalid_Status();
          calculateStatusInfo();
          resultContainer.innerHTML = ``;
          QRMessage = "";
          $("#QRCodeScannerModal").modal("hide");
          // $("#QRCodeScannerModal").modal("hide");
        } else {
          resultContainer.innerHTML = `No Track ID to Add`;
        }
        //
      });
    }
  );
});