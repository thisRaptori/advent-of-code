import { findClosestIntersection, findIntersections, walkPath } from "./1";
import { a, b } from "./input";

describe("walkPath", () => {
  const path1 = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
  const path2 = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];

  it("should return an object contianing the walked paths", () => {
    expect(walkPath(path1)).toEqual({
      "[1,0]": true,
      "[10,0]": true,
      "[100,-30]": true,
      "[101,-30]": true,
      "[102,-30]": true,
      "[103,-30]": true,
      "[104,-30]": true,
      "[105,-30]": true,
      "[106,-30]": true,
      "[107,-30]": true,
      "[108,-30]": true,
      "[109,-30]": true,
      "[11,0]": true,
      "[110,-30]": true,
      "[111,-30]": true,
      "[112,-30]": true,
      "[113,-30]": true,
      "[114,-30]": true,
      "[115,-30]": true,
      "[116,-30]": true,
      "[117,-30]": true,
      "[118,-30]": true,
      "[119,-30]": true,
      "[12,0]": true,
      "[120,-30]": true,
      "[121,-30]": true,
      "[122,-30]": true,
      "[123,-30]": true,
      "[124,-30]": true,
      "[125,-30]": true,
      "[126,-30]": true,
      "[127,-30]": true,
      "[128,-30]": true,
      "[129,-30]": true,
      "[13,0]": true,
      "[130,-30]": true,
      "[131,-30]": true,
      "[132,-30]": true,
      "[133,-30]": true,
      "[134,-30]": true,
      "[135,-30]": true,
      "[136,-30]": true,
      "[137,-30]": true,
      "[138,-30]": true,
      "[139,-30]": true,
      "[14,0]": true,
      "[140,-30]": true,
      "[141,-30]": true,
      "[142,-30]": true,
      "[143,-30]": true,
      "[144,-30]": true,
      "[145,-30]": true,
      "[145,11]": true,
      "[146,-30]": true,
      "[146,10]": true,
      "[146,11]": true,
      "[146,12]": true,
      "[146,13]": true,
      "[146,14]": true,
      "[146,15]": true,
      "[146,16]": true,
      "[146,17]": true,
      "[146,18]": true,
      "[146,19]": true,
      "[146,20]": true,
      "[146,21]": true,
      "[146,22]": true,
      "[146,23]": true,
      "[146,24]": true,
      "[146,25]": true,
      "[146,26]": true,
      "[146,27]": true,
      "[146,28]": true,
      "[146,29]": true,
      "[146,30]": true,
      "[146,31]": true,
      "[146,32]": true,
      "[146,33]": true,
      "[146,34]": true,
      "[146,35]": true,
      "[146,36]": true,
      "[146,37]": true,
      "[146,38]": true,
      "[146,39]": true,
      "[146,40]": true,
      "[146,41]": true,
      "[146,42]": true,
      "[146,43]": true,
      "[146,44]": true,
      "[146,45]": true,
      "[146,46]": true,
      "[146,47]": true,
      "[146,48]": true,
      "[146,49]": true,
      "[146,4]": true,
      "[146,50]": true,
      "[146,51]": true,
      "[146,52]": true,
      "[146,53]": true,
      "[146,5]": true,
      "[146,6]": true,
      "[146,7]": true,
      "[146,8]": true,
      "[146,9]": true,
      "[147,-30]": true,
      "[147,11]": true,
      "[147,4]": true,
      "[147,53]": true,
      "[148,-30]": true,
      "[148,11]": true,
      "[148,4]": true,
      "[148,53]": true,
      "[149,-30]": true,
      "[149,11]": true,
      "[149,4]": true,
      "[149,53]": true,
      "[15,0]": true,
      "[150,-30]": true,
      "[150,11]": true,
      "[150,4]": true,
      "[150,53]": true,
      "[151,-30]": true,
      "[151,11]": true,
      "[151,4]": true,
      "[151,53]": true,
      "[152,-30]": true,
      "[152,11]": true,
      "[152,4]": true,
      "[152,53]": true,
      "[153,-30]": true,
      "[153,11]": true,
      "[153,4]": true,
      "[153,53]": true,
      "[154,-30]": true,
      "[154,11]": true,
      "[154,4]": true,
      "[154,53]": true,
      "[155,-30]": true,
      "[155,11]": true,
      "[155,4]": true,
      "[155,53]": true,
      "[156,-30]": true,
      "[156,11]": true,
      "[156,4]": true,
      "[156,53]": true,
      "[157,-30]": true,
      "[157,11]": true,
      "[157,4]": true,
      "[157,53]": true,
      "[158,-10]": true,
      "[158,-11]": true,
      "[158,-12]": true,
      "[158,-13]": true,
      "[158,-14]": true,
      "[158,-15]": true,
      "[158,-16]": true,
      "[158,-17]": true,
      "[158,-18]": true,
      "[158,-19]": true,
      "[158,-1]": true,
      "[158,-20]": true,
      "[158,-21]": true,
      "[158,-22]": true,
      "[158,-23]": true,
      "[158,-24]": true,
      "[158,-25]": true,
      "[158,-26]": true,
      "[158,-27]": true,
      "[158,-28]": true,
      "[158,-29]": true,
      "[158,-2]": true,
      "[158,-30]": true,
      "[158,-3]": true,
      "[158,-4]": true,
      "[158,-5]": true,
      "[158,-6]": true,
      "[158,-7]": true,
      "[158,-8]": true,
      "[158,-9]": true,
      "[158,0]": true,
      "[158,10]": true,
      "[158,11]": true,
      "[158,12]": true,
      "[158,13]": true,
      "[158,14]": true,
      "[158,15]": true,
      "[158,16]": true,
      "[158,17]": true,
      "[158,18]": true,
      "[158,19]": true,
      "[158,1]": true,
      "[158,20]": true,
      "[158,21]": true,
      "[158,22]": true,
      "[158,23]": true,
      "[158,24]": true,
      "[158,25]": true,
      "[158,26]": true,
      "[158,27]": true,
      "[158,28]": true,
      "[158,29]": true,
      "[158,2]": true,
      "[158,30]": true,
      "[158,31]": true,
      "[158,32]": true,
      "[158,33]": true,
      "[158,34]": true,
      "[158,35]": true,
      "[158,36]": true,
      "[158,37]": true,
      "[158,38]": true,
      "[158,39]": true,
      "[158,3]": true,
      "[158,40]": true,
      "[158,41]": true,
      "[158,42]": true,
      "[158,43]": true,
      "[158,44]": true,
      "[158,45]": true,
      "[158,46]": true,
      "[158,47]": true,
      "[158,48]": true,
      "[158,49]": true,
      "[158,4]": true,
      "[158,50]": true,
      "[158,51]": true,
      "[158,52]": true,
      "[158,53]": true,
      "[158,5]": true,
      "[158,6]": true,
      "[158,7]": true,
      "[158,8]": true,
      "[158,9]": true,
      "[159,11]": true,
      "[159,4]": true,
      "[16,0]": true,
      "[160,11]": true,
      "[160,4]": true,
      "[161,11]": true,
      "[161,4]": true,
      "[162,11]": true,
      "[162,4]": true,
      "[163,11]": true,
      "[163,4]": true,
      "[164,11]": true,
      "[164,4]": true,
      "[165,11]": true,
      "[165,4]": true,
      "[166,11]": true,
      "[166,4]": true,
      "[167,11]": true,
      "[167,4]": true,
      "[168,11]": true,
      "[168,4]": true,
      "[169,11]": true,
      "[169,4]": true,
      "[17,0]": true,
      "[170,11]": true,
      "[170,4]": true,
      "[171,11]": true,
      "[171,4]": true,
      "[172,11]": true,
      "[172,4]": true,
      "[173,11]": true,
      "[173,4]": true,
      "[174,11]": true,
      "[174,4]": true,
      "[175,11]": true,
      "[175,4]": true,
      "[176,11]": true,
      "[176,4]": true,
      "[177,11]": true,
      "[177,4]": true,
      "[178,11]": true,
      "[178,4]": true,
      "[179,11]": true,
      "[179,4]": true,
      "[18,0]": true,
      "[180,11]": true,
      "[180,4]": true,
      "[181,11]": true,
      "[181,4]": true,
      "[182,11]": true,
      "[182,4]": true,
      "[183,11]": true,
      "[183,4]": true,
      "[184,11]": true,
      "[184,4]": true,
      "[185,11]": true,
      "[185,4]": true,
      "[186,11]": true,
      "[186,4]": true,
      "[187,11]": true,
      "[187,4]": true,
      "[188,11]": true,
      "[188,4]": true,
      "[189,11]": true,
      "[189,4]": true,
      "[19,0]": true,
      "[190,11]": true,
      "[190,4]": true,
      "[191,11]": true,
      "[191,4]": true,
      "[192,11]": true,
      "[192,4]": true,
      "[193,11]": true,
      "[193,4]": true,
      "[194,11]": true,
      "[194,4]": true,
      "[195,11]": true,
      "[195,4]": true,
      "[196,11]": true,
      "[196,4]": true,
      "[197,11]": true,
      "[197,4]": true,
      "[198,11]": true,
      "[198,4]": true,
      "[199,11]": true,
      "[199,4]": true,
      "[2,0]": true,
      "[20,0]": true,
      "[200,11]": true,
      "[200,4]": true,
      "[201,11]": true,
      "[201,4]": true,
      "[202,11]": true,
      "[202,4]": true,
      "[203,11]": true,
      "[203,4]": true,
      "[204,11]": true,
      "[204,4]": true,
      "[205,11]": true,
      "[205,4]": true,
      "[206,11]": true,
      "[206,4]": true,
      "[207,11]": true,
      "[207,4]": true,
      "[208,11]": true,
      "[208,4]": true,
      "[209,11]": true,
      "[209,4]": true,
      "[21,0]": true,
      "[210,11]": true,
      "[210,4]": true,
      "[211,11]": true,
      "[211,4]": true,
      "[212,11]": true,
      "[212,4]": true,
      "[213,11]": true,
      "[213,4]": true,
      "[214,11]": true,
      "[214,4]": true,
      "[215,11]": true,
      "[215,4]": true,
      "[216,11]": true,
      "[216,4]": true,
      "[217,10]": true,
      "[217,11]": true,
      "[217,4]": true,
      "[217,5]": true,
      "[217,6]": true,
      "[217,7]": true,
      "[217,8]": true,
      "[217,9]": true,
      "[22,0]": true,
      "[23,0]": true,
      "[24,0]": true,
      "[25,0]": true,
      "[26,0]": true,
      "[27,0]": true,
      "[28,0]": true,
      "[29,0]": true,
      "[3,0]": true,
      "[30,0]": true,
      "[31,0]": true,
      "[32,0]": true,
      "[33,0]": true,
      "[34,0]": true,
      "[35,0]": true,
      "[36,0]": true,
      "[37,0]": true,
      "[38,0]": true,
      "[39,0]": true,
      "[4,0]": true,
      "[40,0]": true,
      "[41,0]": true,
      "[42,0]": true,
      "[43,0]": true,
      "[44,0]": true,
      "[45,0]": true,
      "[46,0]": true,
      "[47,0]": true,
      "[48,0]": true,
      "[49,0]": true,
      "[5,0]": true,
      "[50,0]": true,
      "[51,0]": true,
      "[52,0]": true,
      "[53,0]": true,
      "[54,0]": true,
      "[55,0]": true,
      "[56,0]": true,
      "[57,0]": true,
      "[58,0]": true,
      "[59,0]": true,
      "[6,0]": true,
      "[60,0]": true,
      "[61,0]": true,
      "[62,0]": true,
      "[63,0]": true,
      "[64,0]": true,
      "[65,0]": true,
      "[66,0]": true,
      "[67,0]": true,
      "[68,0]": true,
      "[69,0]": true,
      "[7,0]": true,
      "[70,0]": true,
      "[71,0]": true,
      "[72,0]": true,
      "[73,0]": true,
      "[74,0]": true,
      "[75,-10]": true,
      "[75,-11]": true,
      "[75,-12]": true,
      "[75,-13]": true,
      "[75,-14]": true,
      "[75,-15]": true,
      "[75,-16]": true,
      "[75,-17]": true,
      "[75,-18]": true,
      "[75,-19]": true,
      "[75,-1]": true,
      "[75,-20]": true,
      "[75,-21]": true,
      "[75,-22]": true,
      "[75,-23]": true,
      "[75,-24]": true,
      "[75,-25]": true,
      "[75,-26]": true,
      "[75,-27]": true,
      "[75,-28]": true,
      "[75,-29]": true,
      "[75,-2]": true,
      "[75,-30]": true,
      "[75,-3]": true,
      "[75,-4]": true,
      "[75,-5]": true,
      "[75,-6]": true,
      "[75,-7]": true,
      "[75,-8]": true,
      "[75,-9]": true,
      "[75,0]": true,
      "[76,-30]": true,
      "[77,-30]": true,
      "[78,-30]": true,
      "[79,-30]": true,
      "[8,0]": true,
      "[80,-30]": true,
      "[81,-30]": true,
      "[82,-30]": true,
      "[83,-30]": true,
      "[84,-30]": true,
      "[85,-30]": true,
      "[86,-30]": true,
      "[87,-30]": true,
      "[88,-30]": true,
      "[89,-30]": true,
      "[9,0]": true,
      "[90,-30]": true,
      "[91,-30]": true,
      "[92,-30]": true,
      "[93,-30]": true,
      "[94,-30]": true,
      "[95,-30]": true,
      "[96,-30]": true,
      "[97,-30]": true,
      "[98,-30]": true,
      "[99,-30]": true
    });
    expect(walkPath(path2)).toEqual({
      "[0,10]": true,
      "[0,11]": true,
      "[0,12]": true,
      "[0,13]": true,
      "[0,14]": true,
      "[0,15]": true,
      "[0,16]": true,
      "[0,17]": true,
      "[0,18]": true,
      "[0,19]": true,
      "[0,1]": true,
      "[0,20]": true,
      "[0,21]": true,
      "[0,22]": true,
      "[0,23]": true,
      "[0,24]": true,
      "[0,25]": true,
      "[0,26]": true,
      "[0,27]": true,
      "[0,28]": true,
      "[0,29]": true,
      "[0,2]": true,
      "[0,30]": true,
      "[0,31]": true,
      "[0,32]": true,
      "[0,33]": true,
      "[0,34]": true,
      "[0,35]": true,
      "[0,36]": true,
      "[0,37]": true,
      "[0,38]": true,
      "[0,39]": true,
      "[0,3]": true,
      "[0,40]": true,
      "[0,41]": true,
      "[0,42]": true,
      "[0,43]": true,
      "[0,44]": true,
      "[0,45]": true,
      "[0,46]": true,
      "[0,47]": true,
      "[0,48]": true,
      "[0,49]": true,
      "[0,4]": true,
      "[0,50]": true,
      "[0,51]": true,
      "[0,52]": true,
      "[0,53]": true,
      "[0,54]": true,
      "[0,55]": true,
      "[0,56]": true,
      "[0,57]": true,
      "[0,58]": true,
      "[0,59]": true,
      "[0,5]": true,
      "[0,60]": true,
      "[0,61]": true,
      "[0,62]": true,
      "[0,6]": true,
      "[0,7]": true,
      "[0,8]": true,
      "[0,9]": true,
      "[1,62]": true,
      "[10,62]": true,
      "[100,100]": true,
      "[100,101]": true,
      "[100,102]": true,
      "[100,103]": true,
      "[100,104]": true,
      "[100,105]": true,
      "[100,106]": true,
      "[100,107]": true,
      "[100,108]": true,
      "[100,109]": true,
      "[100,110]": true,
      "[100,111]": true,
      "[100,112]": true,
      "[100,113]": true,
      "[100,114]": true,
      "[100,115]": true,
      "[100,116]": true,
      "[100,117]": true,
      "[100,46]": true,
      "[100,47]": true,
      "[100,48]": true,
      "[100,49]": true,
      "[100,50]": true,
      "[100,51]": true,
      "[100,52]": true,
      "[100,53]": true,
      "[100,54]": true,
      "[100,55]": true,
      "[100,56]": true,
      "[100,57]": true,
      "[100,58]": true,
      "[100,59]": true,
      "[100,60]": true,
      "[100,61]": true,
      "[100,62]": true,
      "[100,63]": true,
      "[100,64]": true,
      "[100,65]": true,
      "[100,66]": true,
      "[100,67]": true,
      "[100,68]": true,
      "[100,69]": true,
      "[100,70]": true,
      "[100,71]": true,
      "[100,72]": true,
      "[100,73]": true,
      "[100,74]": true,
      "[100,75]": true,
      "[100,76]": true,
      "[100,77]": true,
      "[100,78]": true,
      "[100,79]": true,
      "[100,80]": true,
      "[100,81]": true,
      "[100,82]": true,
      "[100,83]": true,
      "[100,84]": true,
      "[100,85]": true,
      "[100,86]": true,
      "[100,87]": true,
      "[100,88]": true,
      "[100,89]": true,
      "[100,90]": true,
      "[100,91]": true,
      "[100,92]": true,
      "[100,93]": true,
      "[100,94]": true,
      "[100,95]": true,
      "[100,96]": true,
      "[100,97]": true,
      "[100,98]": true,
      "[100,99]": true,
      "[101,46]": true,
      "[102,46]": true,
      "[103,46]": true,
      "[104,46]": true,
      "[105,46]": true,
      "[106,46]": true,
      "[107,46]": true,
      "[108,46]": true,
      "[109,46]": true,
      "[11,62]": true,
      "[110,46]": true,
      "[111,46]": true,
      "[112,46]": true,
      "[113,46]": true,
      "[114,46]": true,
      "[115,46]": true,
      "[116,46]": true,
      "[117,46]": true,
      "[118,46]": true,
      "[119,46]": true,
      "[12,62]": true,
      "[120,46]": true,
      "[121,46]": true,
      "[122,46]": true,
      "[123,46]": true,
      "[124,46]": true,
      "[125,46]": true,
      "[126,46]": true,
      "[127,46]": true,
      "[128,46]": true,
      "[129,46]": true,
      "[13,62]": true,
      "[130,46]": true,
      "[131,46]": true,
      "[132,46]": true,
      "[133,46]": true,
      "[134,46]": true,
      "[135,46]": true,
      "[136,46]": true,
      "[137,46]": true,
      "[138,46]": true,
      "[139,46]": true,
      "[14,62]": true,
      "[140,46]": true,
      "[141,46]": true,
      "[142,46]": true,
      "[143,46]": true,
      "[144,46]": true,
      "[145,46]": true,
      "[146,46]": true,
      "[147,46]": true,
      "[148,46]": true,
      "[149,46]": true,
      "[15,62]": true,
      "[150,46]": true,
      "[151,46]": true,
      "[152,46]": true,
      "[153,46]": true,
      "[154,46]": true,
      "[155,-10]": true,
      "[155,-11]": true,
      "[155,-12]": true,
      "[155,-1]": true,
      "[155,-2]": true,
      "[155,-3]": true,
      "[155,-4]": true,
      "[155,-5]": true,
      "[155,-6]": true,
      "[155,-7]": true,
      "[155,-8]": true,
      "[155,-9]": true,
      "[155,0]": true,
      "[155,10]": true,
      "[155,11]": true,
      "[155,12]": true,
      "[155,13]": true,
      "[155,14]": true,
      "[155,15]": true,
      "[155,16]": true,
      "[155,17]": true,
      "[155,18]": true,
      "[155,19]": true,
      "[155,1]": true,
      "[155,20]": true,
      "[155,21]": true,
      "[155,22]": true,
      "[155,23]": true,
      "[155,24]": true,
      "[155,25]": true,
      "[155,26]": true,
      "[155,27]": true,
      "[155,28]": true,
      "[155,29]": true,
      "[155,2]": true,
      "[155,30]": true,
      "[155,31]": true,
      "[155,32]": true,
      "[155,33]": true,
      "[155,34]": true,
      "[155,35]": true,
      "[155,36]": true,
      "[155,37]": true,
      "[155,38]": true,
      "[155,39]": true,
      "[155,3]": true,
      "[155,40]": true,
      "[155,41]": true,
      "[155,42]": true,
      "[155,43]": true,
      "[155,44]": true,
      "[155,45]": true,
      "[155,46]": true,
      "[155,4]": true,
      "[155,5]": true,
      "[155,6]": true,
      "[155,7]": true,
      "[155,8]": true,
      "[155,9]": true,
      "[156,-12]": true,
      "[157,-12]": true,
      "[158,-12]": true,
      "[159,-12]": true,
      "[16,62]": true,
      "[160,-12]": true,
      "[161,-12]": true,
      "[162,-12]": true,
      "[163,-12]": true,
      "[164,-12]": true,
      "[165,-12]": true,
      "[166,-12]": true,
      "[167,-12]": true,
      "[168,-12]": true,
      "[169,-12]": true,
      "[17,62]": true,
      "[170,-12]": true,
      "[171,-12]": true,
      "[172,-12]": true,
      "[173,-12]": true,
      "[174,-12]": true,
      "[175,-12]": true,
      "[176,-12]": true,
      "[177,-12]": true,
      "[178,-12]": true,
      "[179,-12]": true,
      "[18,62]": true,
      "[180,-12]": true,
      "[181,-12]": true,
      "[182,-12]": true,
      "[183,-12]": true,
      "[184,-12]": true,
      "[185,-12]": true,
      "[186,-12]": true,
      "[187,-12]": true,
      "[188,-12]": true,
      "[189,-12]": true,
      "[19,62]": true,
      "[190,-12]": true,
      "[191,-12]": true,
      "[192,-12]": true,
      "[193,-12]": true,
      "[194,-12]": true,
      "[195,-12]": true,
      "[196,-12]": true,
      "[197,-12]": true,
      "[198,-12]": true,
      "[199,-12]": true,
      "[2,62]": true,
      "[20,62]": true,
      "[200,-12]": true,
      "[201,-12]": true,
      "[202,-12]": true,
      "[203,-12]": true,
      "[204,-12]": true,
      "[205,-12]": true,
      "[206,-12]": true,
      "[207,-12]": true,
      "[208,-12]": true,
      "[209,-12]": true,
      "[21,62]": true,
      "[210,-12]": true,
      "[211,-12]": true,
      "[212,-12]": true,
      "[213,-12]": true,
      "[214,-12]": true,
      "[215,-12]": true,
      "[216,-12]": true,
      "[217,-12]": true,
      "[218,-12]": true,
      "[219,-12]": true,
      "[22,62]": true,
      "[220,-12]": true,
      "[221,-12]": true,
      "[222,-12]": true,
      "[223,-12]": true,
      "[224,-12]": true,
      "[225,-12]": true,
      "[226,-12]": true,
      "[227,-12]": true,
      "[228,-12]": true,
      "[229,-12]": true,
      "[23,62]": true,
      "[230,-12]": true,
      "[231,-12]": true,
      "[232,-12]": true,
      "[233,-12]": true,
      "[234,-12]": true,
      "[235,-12]": true,
      "[236,-12]": true,
      "[237,-12]": true,
      "[238,-12]": true,
      "[24,62]": true,
      "[25,62]": true,
      "[26,62]": true,
      "[27,62]": true,
      "[28,62]": true,
      "[29,62]": true,
      "[3,62]": true,
      "[30,62]": true,
      "[31,62]": true,
      "[32,62]": true,
      "[33,62]": true,
      "[34,62]": true,
      "[35,62]": true,
      "[36,62]": true,
      "[37,62]": true,
      "[38,62]": true,
      "[39,62]": true,
      "[4,62]": true,
      "[40,62]": true,
      "[41,62]": true,
      "[42,62]": true,
      "[43,62]": true,
      "[44,62]": true,
      "[45,62]": true,
      "[46,62]": true,
      "[47,62]": true,
      "[48,62]": true,
      "[49,62]": true,
      "[5,62]": true,
      "[50,62]": true,
      "[51,62]": true,
      "[52,62]": true,
      "[53,62]": true,
      "[54,62]": true,
      "[55,62]": true,
      "[56,62]": true,
      "[57,62]": true,
      "[58,62]": true,
      "[59,62]": true,
      "[6,62]": true,
      "[60,62]": true,
      "[61,62]": true,
      "[62,62]": true,
      "[63,62]": true,
      "[64,62]": true,
      "[65,62]": true,
      "[66,100]": true,
      "[66,101]": true,
      "[66,102]": true,
      "[66,103]": true,
      "[66,104]": true,
      "[66,105]": true,
      "[66,106]": true,
      "[66,107]": true,
      "[66,108]": true,
      "[66,109]": true,
      "[66,110]": true,
      "[66,111]": true,
      "[66,112]": true,
      "[66,113]": true,
      "[66,114]": true,
      "[66,115]": true,
      "[66,116]": true,
      "[66,117]": true,
      "[66,62]": true,
      "[66,63]": true,
      "[66,64]": true,
      "[66,65]": true,
      "[66,66]": true,
      "[66,67]": true,
      "[66,68]": true,
      "[66,69]": true,
      "[66,70]": true,
      "[66,71]": true,
      "[66,72]": true,
      "[66,73]": true,
      "[66,74]": true,
      "[66,75]": true,
      "[66,76]": true,
      "[66,77]": true,
      "[66,78]": true,
      "[66,79]": true,
      "[66,80]": true,
      "[66,81]": true,
      "[66,82]": true,
      "[66,83]": true,
      "[66,84]": true,
      "[66,85]": true,
      "[66,86]": true,
      "[66,87]": true,
      "[66,88]": true,
      "[66,89]": true,
      "[66,90]": true,
      "[66,91]": true,
      "[66,92]": true,
      "[66,93]": true,
      "[66,94]": true,
      "[66,95]": true,
      "[66,96]": true,
      "[66,97]": true,
      "[66,98]": true,
      "[66,99]": true,
      "[67,117]": true,
      "[68,117]": true,
      "[69,117]": true,
      "[7,62]": true,
      "[70,117]": true,
      "[71,117]": true,
      "[72,117]": true,
      "[73,117]": true,
      "[74,117]": true,
      "[75,117]": true,
      "[76,117]": true,
      "[77,117]": true,
      "[78,117]": true,
      "[79,117]": true,
      "[8,62]": true,
      "[80,117]": true,
      "[81,117]": true,
      "[82,117]": true,
      "[83,117]": true,
      "[84,117]": true,
      "[85,117]": true,
      "[86,117]": true,
      "[87,117]": true,
      "[88,117]": true,
      "[89,117]": true,
      "[9,62]": true,
      "[90,117]": true,
      "[91,117]": true,
      "[92,117]": true,
      "[93,117]": true,
      "[94,117]": true,
      "[95,117]": true,
      "[96,117]": true,
      "[97,117]": true,
      "[98,117]": true,
      "[99,117]": true
    });
  });
});

describe("findIntersections", () => {
  const path1 = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
  const path2 = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];
  // prettier-ignore
  const path3 = ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"];
  // prettier-ignore
  const path4 = ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"];

  it("should return an array containing the path intersections", () => {
    expect(findIntersections(path1, path2)).toEqual([
      "[146,46]",
      "[155,11]",
      "[155,4]",
      "[158,-12]"
    ]);
    expect(findIntersections(path3, path4)).toEqual([
      "[107,71]",
      "[107,51]",
      "[107,47]",
      "[124,11]",
      "[157,18]"
    ]);
  });
});

describe("findClosestIntersection", () => {
  const path1 = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
  const path2 = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];
  // prettier-ignore
  const path3 = ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"];
  // prettier-ignore
  const path4 = ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"];

  it("should return the closest intersection", () => {
    expect(findClosestIntersection(path1, path2)).toEqual(159);
    expect(findClosestIntersection(path3, path4)).toEqual(135);
  });

  it("should find the actual result", () => {
    expect(findClosestIntersection(a, b)).toEqual(489);
  });
});
