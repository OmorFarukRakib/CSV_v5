const duplicate_status_set = () => {
  console.log(`CLICK HOISE duplicate a`);
  let totalData = $("#csvRoot").DataTable().data().count();
  let iColumns = $("#csvRoot thead th").length;
  let totalRow = totalData / iColumns;
  for (let i = 1; i <= totalRow; i++) {
    var TrackID_1 = $(`#csvRoot tr:nth-child(${i}) td:nth-child(3)`).text();
    if (TrackID_1) {
      for (let j = i + 1; j <= totalRow; j++) {
        var TrackID_2 = $(`#csvRoot tr:nth-child(${j}) td:nth-child(3)`).text();
        if (TrackID_1 === TrackID_2) {
          $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).html(`duplicated`);
          $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).css("color", "blue");
          $(`#csvRoot tr:nth-child(${j}) td:nth-child(2)`).html(`duplicated`);
          $(`#csvRoot tr:nth-child(${j}) td:nth-child(2)`).css("color", "blue");
        }
      }
    }
  }
};

const AutoGeneratedTrackIDValidation = () => {
  let totalData = $("#csvRoot").DataTable().data().count();
  let iColumns = $("#csvRoot thead th").length;
  let totalRow = totalData / iColumns;
  for (let i = 1; i <= totalRow; i++) {
    var TrackID = $(`#csvRoot tr:nth-child(${i}) td:nth-child(3)`).text();
    if (checkSumValid(TrackID)) {
      $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).html(`Auto Generated`);
      $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).css("color", "blue");
    }
  }
};

// $(document).ready(function () {
//   console.log("ready!");
//   $("button#post_add_jichitai_codes_Button").click(function () {
//     AutoGeneratedTrackIDValidation();
//   });
// });

// var autogenerated_TrackID = $(
//   `#csvRoot tr:nth-child(${i}) td:nth-child(3)`
// ).text();
// if (checkSumValid(autogenerated_TrackID)) {
//   $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).html(`Auto Generated`);
//   $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).css("color", "blue");
// } else {
//   $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).html(`InValid`);
//   $(`#csvRoot tr:nth-child(${i}) td:nth-child(2)`).css("color", "red");
// }

//_________________________________________________________________________________
// For adding individual track ID generator button post_add_jichitai_codes_Button

const setIndividualButton = () => {
  //console.log(`Func paise`);
  $("#csvRoot tr").each(function (index) {
    if (
      $(this).find("td:nth-child(2)").text().trim() == "Empty" ||
      $(this).find("td:nth-child(2)").text().trim() == "InValid" ||
      $(this).find("td:nth-child(2)").text().trim() == "duplicated"
    ) {
      $($(this).find("td:nth-child(2)")).append(
        `<button  type="button" style="display: none" class="Empty_individual_TrackID_generator btn btn-info btn-sm">
            Generate
        </button>
        <button  type="button" class="TrackIDGeneratorByQRCodeScanner-btn btn btn-info btn-sm" data-toggle="modal" data-target="#QRCodeScannerModal">
            QR Code
        </button>`
      );
    }
  });
};

// $(document).ready(function () {
//   $("button#post_add_jichitai_codes_Button").click(function () {
//     console.log(`shuru`);
//     $("#csvRoot tr").each(function (index) {
//       console.log($(this).find("td:nth-child(2)").text().split(" ")[0]);
//       // $(this).find("td:nth-child(2)").text().trim()
//     });
//     console.log(`sesh`);
//   });
// });

// Add kora hoise

$(document).ready(function () {
  var generator_index;
  $("#csvRoot").on("click", ".Empty_individual_TrackID_generator", function () {
    generator_index = $(this).closest("tr").index();
    console.log(`ata akhn click kora button er index: ${generator_index}`);
    updateStatus_ForIndividual_TrackId(generator_index + 1);
    setValid_Invalid_Status();
  });
});
