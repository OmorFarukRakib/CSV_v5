//20210407
// seedSize : Digit between 2 to 9; generateId version-1's seedSize=4
// idCreatorConsoleType : 1=WEB, 2=ANDROID(ONLINE), 3=ANDROID(OFFLINE), 4=IPHONE(ONLINE), 5=IPHONE(OFFLINE)
function generateId(groupId, userId, idCreatorConsoleType, seedSize = 4) {
  var currentUnixTime = Date.now() ^ seedSize;
  var randomSeed = Math.random().toString(36).substr(2, seedSize);
  var idBody = (
    currentUnixTime +
    groupId.toString() +
    randomSeed +
    userId.toString() +
    idCreatorConsoleType.toString()
  )
    .toUpperCase()
    .substr(1);
  var checkSum = checkSumGenerate(idBody);
  var id = idBody + checkSum;

  console.log("XOR of Current Unix time " + currentUnixTime);
  console.log("SEED " + randomSeed);
  console.log("Body " + idBody);
  console.log("CheckSum " + checkSum);
  console.log("ID " + id);

  return id;
}

function checkSumGenerate(idBody) {
  var sum = 0;
  var idBodyArray = idBody.split("");

  for (i = 0; i < idBodyArray.length; i++) {
    sum = sum + idBodyArray[i].charCodeAt(0);
  }

  var checkSum = sum.toString(36)[sum.toString(36).length - 1].toUpperCase();

  return checkSum;
}

function checkSumValid(id) {
  var idString = id.toString();
  var checkSum = idString[idString.length - 1];
  var idBody = idString.substring(0, id.length - 1);
  var calculatedCheckSum = checkSumGenerate(idBody);

  console.log("CheckSum " + checkSum);
  console.log("Calculated CheckSum " + calculatedCheckSum);

  if (checkSum == calculatedCheckSum) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

