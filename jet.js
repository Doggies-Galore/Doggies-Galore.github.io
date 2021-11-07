// CloudLink icons
const cl_icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwRkJEOEM7fQ0KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy41MDAxNCwtMTU3LjUwMDEzKSI+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTcuNSwxODBjMC0xMi40LDEwLjEtMjIuNSwyMi41LTIyLjVzMjIuNSwxMC4xLDIyLjUsMjIuNXMtMTAuMSwyMi41LTIyLjUsMjIuNVMyMTcuNSwxOTIuNCwyMTcuNSwxODANCgkJCUwyMTcuNSwxODB6Ii8+DQoJCTxnPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzMC4zLDE4MC4xYzUuNy00LjcsMTMuOS00LjcsMTkuNiwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjI1LjMsMTc1LjFjOC40LTcuNCwyMS03LjQsMjkuNCwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjM1LjIsMTg1YzIuOS0yLjEsNi44LTIuMSw5LjcsMCIvPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI0MCwxOTAuNEwyNDAsMTkwLjQiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
const cl_block = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIuOCwyMi42YzUuNy00LjcsMTMuOS00LjcsMTkuNiwwIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcuOCwxNy42YzguNC03LjQsMjEtNy40LDI5LjQsMCIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy43LDI3LjVjMi45LTIuMSw2LjgtMi4xLDkuNywwIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjUsMzIuOUwyMi41LDMyLjkiLz4NCjwvZz4NCjwvc3ZnPg0K';

class mlforkidsImageData {
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'mlforkidsImageData',
        name: 'Images',
        blocks: [{
          opcode: 'getCostumeImage',
          // text: formatMessage({
          //     id: 'mlforkidsImageData.imageblocks.getCostumeImage',
          //     defaultValue: 'costume image'
          // }),
          text: 'costume image',
          blockType: BlockType.REPORTER,
          filter: [TargetType.SPRITE]
        }, {
          opcode: 'getBackdropCostumeImage',
          // text: formatMessage({
          //     id: 'mlforkidsImageData.imageblocks.getBackdropCostumeImage',
          //     defaultValue: 'backdrop image'
          // }),
          text: 'backdrop image',
          blockType: BlockType.REPORTER,
          filter: [TargetType.SPRITE]
        }, {
          opcode: 'getBackdropImage',
          // text: formatMessage({
          //     id: 'mlforkidsImageData.imageblocks.getBackdropImage',
          //     defaultValue: 'backdrop image'
          // }),
          text: 'backdrop image',
          blockType: BlockType.REPORTER,
          filter: [TargetType.STAGE]
        }, {
          opcode: 'saveScreenshotToCostume',
          // text: formatMessage({
          //     id: 'mlforkidsImageData.imageblocks.saveScreenshotToCostume',
          //     defaultValue: 'save screenshot to costume'
          // }),
          text: 'save screenshot to costume',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE]
        }]
      };
    }
  }, {
    key: "_getImageAsJpeg",
    value: function _getImageAsJpeg(imagedata) {
      return new Promise(function (resolve) {
        var image = new Image();

        image.onload = function () {
          var canvas = document.createElement('canvas');
          console.log('[mlforkids] Resizing image to dimensions needed for classifying');
          canvas.width = 224;
          canvas.height = 224;
          var context = canvas.getContext('2d');
          context.fillStyle = "#FFFFFF";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
          var jpegdata = canvas.toDataURL('image/jpeg');

          if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
            jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
          }

          resolve(jpegdata);
        };

        image.src = imagedata;
      });
    }
  }, {
    key: "_getStageCanvas",
    value: function _getStageCanvas() {
      var allCanvases = document.getElementsByTagName('canvas');

      for (var i = 0; i < allCanvases.length; i++) {
        var canvas = allCanvases[i]; // if (canvas.className.startsWith('stage_stage_')) {

        if (canvas.width > 0 && canvas.className.indexOf('paper-canvas_paper-canvas') === -1) {
          return canvas;
        }
      }
    } // Return the image data for a screenshot of the entire stage

  }, {
    key: "_getStageScreenshot",
    value: function _getStageScreenshot() {
      // get the backdrop image
      this.runtime.renderer.draw();

      var originalCanvas = this._getStageCanvas();

      var WIDTH = originalCanvas.width;
      var HEIGHT = originalCanvas.height; // make a new off-screen canvas to copy to

      var copyCanvas = document.createElement('canvas');
      copyCanvas.width = WIDTH;
      copyCanvas.height = HEIGHT;
      var copyContext = copyCanvas.getContext('2d'); // copy a section of the backdrop to the copy canvas

      copyContext.drawImage(originalCanvas, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT); // return the canvas data

      var screenshot = copyCanvas.toDataURL('image/jpeg');
      return screenshot;
    }
  }, {
    key: "getCostumeImage",
    value: function getCostumeImage(args, util) {
      var target = util.target;
      var costume = target.getCurrentCostume();

      if (costume && costume.asset) {
        return this._getImageAsJpeg(costume.asset.encodeDataURI());
      }

      if (costume && costume.assetId) {
        var costumeimage = this.runtime.storage.builtinHelper.get(costume.assetId);

        if (costumeimage && costumeimage.dataFormat === 'png') {
          var pngdata = Base64Util.arrayBufferToBase64(costumeimage.data);
          return this._getImageAsJpeg('data:image/png;base64,' + pngdata);
        } else if (costumeimage && costumeimage.dataFormat === 'jpg') {
          var jpgdata = Base64Util.arrayBufferToBase64(costumeimage.data);
          return this._getImageAsJpeg('data:image/jpeg;base64,' + jpgdata);
        } else if (costumeimage && costumeimage.dataFormat === 'svg') {
          var svgxml = String.fromCharCode.apply(String, _toConsumableArray(costumeimage.data));
          svgxml = svgxml.replace(/"/g, '\'');
          return this._getImageAsJpeg('data:image/svg+xml,' + encodeURIComponent(svgxml));
        }

        console.log('[mlforkids] Unexpected costume image, format: ' + costumeimage.dataFormat);
      }

      return '';
    } // This returns the backdrop image
    //  (i.e. the composite of all sprites - what is visible on
    //   the stage/backdrop)
    //  at the location of the sprite.
    //
    // So the returned image will be from the same size and location
    //  as what you get from getCostumeImage
    //  but will be based on the image you'd get from getBackdropImage
    //
    // It's sort of a hybrid between the two functions

  }, {
    key: "getBackdropCostumeImage",
    value: function getBackdropCostumeImage(args, util) {
      // where is the sprite's top left corner and how big is it?
      var target = util.target;
      var costume = target.getCurrentCostume();
      var sizeRatio = target.size / 100;
      var width = costume.size[0] / costume.bitmapResolution * sizeRatio;
      var height = costume.size[1] / costume.bitmapResolution * sizeRatio;
      var x = target.x - costume.rotationCenterX / costume.bitmapResolution;
      var y = target.y + costume.rotationCenterY / costume.bitmapResolution; // convert the Scratch size and coordinates into canvas coords
      //  Scratch coordinates are:
      //      x=-240 (left)    to  x=+240 (right)
      //      y=-180 (bottom)  to  y=+180 (top)
      //  Canvas coordinates (default view) are:
      //      x=0 (left)       to  x=+960 (right)
      //      y=720 (bottom)   to  y=0 (top)
      //  (the scale factor is different when full-screen, but the
      //   top-left is always 0,0 and the y value increases as you
      //   go down)

      var originalCanvas = this._getStageCanvas(); // assume that the factor will be the same for both width and height


      var scaleFactor = originalCanvas.width / 480;
      x = scaleFactor * (x + 240);
      y = -scaleFactor * (y - 180);
      width *= scaleFactor;
      height *= scaleFactor; // make a new off-screen canvas to copy to

      console.log('[mlforkids] Resizing backdrop to dimensions needed for classifying');
      var RESIZE_WIDTH = 224;
      var RESIZE_HEIGHT = 224;
      var copyCanvas = document.createElement('canvas');
      copyCanvas.width = RESIZE_WIDTH;
      copyCanvas.height = RESIZE_HEIGHT;
      var copyContext = copyCanvas.getContext('2d'); // get the backdrop image

      this.runtime.renderer.draw(); // copy a section of the backdrop to the copy canvas

      copyContext.drawImage(originalCanvas, x, y, width, height, 0, 0, RESIZE_WIDTH, RESIZE_HEIGHT); // get the base64-encoded version of the copy canvas

      var jpegdata = copyCanvas.toDataURL('image/jpeg');

      if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
        jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
      }

      return jpegdata;
    }
  }, {
    key: "getBackdropImage",
    value: function getBackdropImage() {
      this.runtime.renderer.draw();

      var canvas = this._getStageCanvas();

      var jpegdata = canvas.toDataURL('image/jpeg');

      if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
        jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
      }

      return jpegdata;
    } //
    // step 1) Take a screenshot of the entire stage,
    //  (i.e. the composite of all sprites - what is visible on
    //   the stage/backdrop)
    //
    // step 2) Add the screenshot to the sprite as a new costume
    //
    // step 3) Switch to the new costume
    //

  }, {
    key: "saveScreenshotToCostume",
    value: function saveScreenshotToCostume(args, util) {
      var _storage = this.runtime.storage;
      var _runtime = this.runtime;
      var target = util.target;
      var BitmapAdapter = SvgRenderer.BitmapAdapter;
      var bitmapAdapter = new BitmapAdapter();
      return bitmapAdapter.importBitmap(this._getStageScreenshot(), 'image/jpeg').then(function (dataBuffer) {
        var name = 'webcam';
        var type = _storage.AssetType.ImageBitmap;
        var dataFormat = _storage.DataFormat.JPG;

        var asset = _storage.createAsset(type, dataFormat, dataBuffer, null, true);

        var assetId = asset.assetId;
        var md5 = assetId + '.' + dataFormat;
        var costume = {
          name: name,
          dataFormat: dataFormat,
          asset: asset,
          md5: md5,
          assetId: assetId
        };
        return loadCostume(md5, costume, _runtime);
      }).then(function (costume) {
        target.addCostume(costume);
        target.setCostume(target.getCostumes().length - 1);
      }).catch(function (e) {
        console.log('[mlforkids] Failed to save screenshot to costume');
        console.log(e);
      });
    }
  }]);

  return Scratch3ML4KImageDataBlocks;
}();

module.exports = Scratch3ML4KImageDataBlocks;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extensions/scratch3_ml4kidsimagenet/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extensions/scratch3_ml4kidsimagenet/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var formatMessage = __webpack_require__(/*! format-message */ "./node_modules/scratch-vm/node_modules/format-message/index.js");

var BlockType = __webpack_require__(/*! ../../extension-support/block-type */ "./node_modules/scratch-vm/src/extension-support/block-type.js");

var ArgumentType = __webpack_require__(/*! ../../extension-support/argument-type */ "./node_modules/scratch-vm/src/extension-support/argument-type.js");

var Scratch3ML4KImagenetBlocks = /*#__PURE__*/function () {
  function Scratch3ML4KImagenetBlocks() {
    var _this = this;

    _classCallCheck(this, Scratch3ML4KImagenetBlocks);

    this._labels = {
      items: ['background', 'tench', 'goldfish', 'great white shark', 'tiger shark', 'hammerhead', 'electric ray', 'stingray', 'cock', 'hen', 'ostrich', 'brambling', 'goldfinch', 'house finch', 'junco', 'indigo bunting', 'robin', 'bulbul', 'jay', 'magpie', 'chickadee', 'water ouzel', 'kite', 'bald eagle', 'vulture', 'great grey owl', 'European fire salamander', 'common newt', 'eft', 'spotted salamander', 'axolotl', 'bullfrog', 'tree frog', 'tailed frog', 'loggerhead', 'leatherback turtle', 'mud turtle', 'terrapin', 'box turtle', 'banded gecko', 'common iguana', 'American chameleon', 'whiptail', 'agama', 'frilled lizard', 'alligator lizard', 'Gila monster', 'green lizard', 'African chameleon', 'Komodo dragon', 'African crocodile', 'American alligator', 'triceratops', 'thunder snake', 'ringneck snake', 'hognose snake', 'green snake', 'king snake', 'garter snake', 'water snake', 'vine snake', 'night snake', 'boa constrictor', 'rock python', 'Indian cobra', 'green mamba', 'sea snake', 'horned viper', 'diamondback', 'sidewinder', 'trilobite', 'harvestman', 'scorpion', 'black and gold garden spider', 'barn spider', 'garden spider', 'black widow', 'tarantula', 'wolf spider', 'tick', 'centipede', 'black grouse', 'ptarmigan', 'ruffed grouse', 'prairie chicken', 'peacock', 'quail', 'partridge', 'African grey', 'macaw', 'sulphur-crested cockatoo', 'lorikeet', 'coucal', 'bee eater', 'hornbill', 'hummingbird', 'jacamar', 'toucan', 'drake', 'red-breasted merganser', 'goose', 'black swan', 'tusker', 'echidna', 'platypus', 'wallaby', 'koala', 'wombat', 'jellyfish', 'sea anemone', 'brain coral', 'flatworm', 'nematode', 'conch', 'snail', 'slug', 'sea slug', 'chiton', 'chambered nautilus', 'Dungeness crab', 'rock crab', 'fiddler crab', 'king crab', 'American lobster', 'spiny lobster', 'crayfish', 'hermit crab', 'isopod', 'white stork', 'black stork', 'spoonbill', 'flamingo', 'little blue heron', 'American egret', 'bittern', 'crane', 'limpkin', 'European gallinule', 'American coot', 'bustard', 'ruddy turnstone', 'red-backed sandpiper', 'redshank', 'dowitcher', 'oystercatcher', 'pelican', 'king penguin', 'albatross', 'grey whale', 'killer whale', 'dugong', 'sea lion', 'Chihuahua', 'Japanese spaniel', 'Maltese dog', 'Pekinese', 'Shih-Tzu', 'Blenheim spaniel', 'papillon', 'toy terrier', 'Rhodesian ridgeback', 'Afghan hound', 'basset', 'beagle', 'bloodhound', 'bluetick', 'black-and-tan coonhound', 'Walker hound', 'English foxhound', 'redbone', 'borzoi', 'Irish wolfhound', 'Italian greyhound', 'whippet', 'Ibizan hound', 'Norwegian elkhound', 'otterhound', 'Saluki', 'Scottish deerhound', 'Weimaraner', 'Staffordshire bullterrier', 'American Staffordshire terrier', 'Bedlington terrier', 'Border terrier', 'Kerry blue terrier', 'Irish terrier', 'Norfolk terrier', 'Norwich terrier', 'Yorkshire terrier', 'wire-haired fox terrier', 'Lakeland terrier', 'Sealyham terrier', 'Airedale', 'cairn', 'Australian terrier', 'Dandie Dinmont', 'Boston bull', 'miniature schnauzer', 'giant schnauzer', 'standard schnauzer', 'Scotch terrier', 'Tibetan terrier', 'silky terrier', 'soft-coated wheaten terrier', 'West Highland white terrier', 'Lhasa', 'flat-coated retriever', 'curly-coated retriever', 'golden retriever', 'Labrador retriever', 'Chesapeake Bay retriever', 'German short-haired pointer', 'vizsla', 'English setter', 'Irish setter', 'Gordon setter', 'Brittany spaniel', 'clumber', 'English springer', 'Welsh springer spaniel', 'cocker spaniel', 'Sussex spaniel', 'Irish water spaniel', 'kuvasz', 'schipperke', 'groenendael', 'malinois', 'briard', 'kelpie', 'komondor', 'Old English sheepdog', 'Shetland sheepdog', 'collie', 'Border collie', 'Bouvier des Flandres', 'Rottweiler', 'German shepherd', 'Doberman', 'miniature pinscher', 'Greater Swiss Mountain dog', 'Bernese mountain dog', 'Appenzeller', 'EntleBucher', 'boxer', 'bull mastiff', 'Tibetan mastiff', 'French bulldog', 'Great Dane', 'Saint Bernard', 'Eskimo dog', 'malamute', 'Siberian husky', 'dalmatian', 'affenpinscher', 'basenji', 'pug', 'Leonberg', 'Newfoundland', 'Great Pyrenees', 'Samoyed', 'Pomeranian', 'chow', 'keeshond', 'Brabancon griffon', 'Pembroke', 'Cardigan', 'toy poodle', 'miniature poodle', 'standard poodle', 'Mexican hairless', 'timber wolf', 'white wolf', 'red wolf', 'coyote', 'dingo', 'dhole', 'African hunting dog', 'hyena', 'red fox', 'kit fox', 'Arctic fox', 'grey fox', 'tabby', 'tiger cat', 'Persian cat', 'Siamese cat', 'Egyptian cat', 'cougar', 'lynx', 'leopard', 'snow leopard', 'jaguar', 'lion', 'tiger', 'cheetah', 'brown bear', 'American black bear', 'ice bear', 'sloth bear', 'mongoose', 'meerkat', 'tiger beetle', 'ladybug', 'ground beetle', 'long-horned beetle', 'leaf beetle', 'dung beetle', 'rhinoceros beetle', 'weevil', 'fly', 'bee', 'ant', 'grasshopper', 'cricket', 'walking stick', 'cockroach', 'mantis', 'cicada', 'leafhopper', 'lacewing', 'dragonfly', 'damselfly', 'admiral', 'ringlet', 'monarch', 'cabbage butterfly', 'sulphur butterfly', 'lycaenid', 'starfish', 'sea urchin', 'sea cucumber', 'wood rabbit', 'hare', 'Angora', 'hamster', 'porcupine', 'fox squirrel', 'marmot', 'beaver', 'guinea pig', 'sorrel', 'zebra', 'hog', 'wild boar', 'warthog', 'hippopotamus', 'ox', 'water buffalo', 'bison', 'ram', 'bighorn', 'ibex', 'hartebeest', 'impala', 'gazelle', 'Arabian camel', 'llama', 'weasel', 'mink', 'polecat', 'black-footed ferret', 'otter', 'skunk', 'badger', 'armadillo', 'three-toed sloth', 'orangutan', 'gorilla', 'chimpanzee', 'gibbon', 'siamang', 'guenon', 'patas', 'baboon', 'macaque', 'langur', 'colobus', 'proboscis monkey', 'marmoset', 'capuchin', 'howler monkey', 'titi', 'spider monkey', 'squirrel monkey', 'Madagascar cat', 'indri', 'Indian elephant', 'African elephant', 'lesser panda', 'giant panda', 'barracouta', 'eel', 'coho', 'rock beauty', 'anemone fish', 'sturgeon', 'gar', 'lionfish', 'puffer', 'abacus', 'abaya', 'academic gown', 'accordion', 'acoustic guitar', 'aircraft carrier', 'airliner', 'airship', 'altar', 'ambulance', 'amphibian', 'analog clock', 'apiary', 'apron', 'ashcan', 'assault rifle', 'backpack', 'bakery', 'balance beam', 'balloon', 'ballpoint', 'Band Aid', 'banjo', 'bannister', 'barbell', 'barber chair', 'barbershop', 'barn', 'barometer', 'barrel', 'barrow', 'baseball', 'basketball', 'bassinet', 'bassoon', 'bathing cap', 'bath towel', 'bathtub', 'beach wagon', 'beacon', 'beaker', 'bearskin', 'beer bottle', 'beer glass', 'bell cote', 'bib', 'bicycle-built-for-two', 'bikini', 'binder', 'binoculars', 'birdhouse', 'boathouse', 'bobsled', 'bolo tie', 'bonnet', 'bookcase', 'bookshop', 'bottlecap', 'bow', 'bow tie', 'brass', 'brassiere', 'breakwater', 'breastplate', 'broom', 'bucket', 'buckle', 'bulletproof vest', 'bullet train', 'butcher shop', 'cab', 'caldron', 'candle', 'cannon', 'canoe', 'can opener', 'cardigan', 'car mirror', 'carousel', 'carpenter\'s kit', 'carton', 'car wheel', 'cash machine', 'cassette', 'cassette player', 'castle', 'catamaran', 'CD player', 'cello', 'cellular telephone', 'chain', 'chainlink fence', 'chain mail', 'chain saw', 'chest', 'chiffonier', 'chime', 'china cabinet', 'Christmas stocking', 'church', 'cinema', 'cleaver', 'cliff dwelling', 'cloak', 'clog', 'cocktail shaker', 'coffee mug', 'coffeepot', 'coil', 'combination lock', 'computer keyboard', 'confectionery', 'container ship', 'convertible', 'corkscrew', 'cornet', 'cowboy boot', 'cowboy hat', 'cradle', 'crane', 'crash helmet', 'crate', 'crib', 'Crock Pot', 'croquet ball', 'crutch', 'cuirass', 'dam', 'desk', 'desktop computer', 'dial telephone', 'diaper', 'digital clock', 'digital watch', 'dining table', 'dishrag', 'dishwasher', 'disk brake', 'dock', 'dogsled', 'dome', 'doormat', 'drilling platform', 'drum', 'drumstick', 'dumbbell', 'Dutch oven', 'electric fan', 'electric guitar', 'electric locomotive', 'entertainment center', 'envelope', 'espresso maker', 'face powder', 'feather boa', 'file', 'fireboat', 'fire engine', 'fire screen', 'flagpole', 'flute', 'folding chair', 'football helmet', 'forklift', 'fountain', 'fountain pen', 'four-poster', 'freight car', 'French horn', 'frying pan', 'fur coat', 'garbage truck', 'gasmask', 'gas pump', 'goblet', 'go-kart', 'golf ball', 'golfcart', 'gondola', 'gong', 'gown', 'grand piano', 'greenhouse', 'grille', 'grocery store', 'guillotine', 'hair slide', 'hair spray', 'half track', 'hammer', 'hamper', 'hand blower', 'hand-held computer', 'handkerchief', 'hard disc', 'harmonica', 'harp', 'harvester', 'hatchet', 'holster', 'home theater', 'honeycomb', 'hook', 'hoopskirt', 'horizontal bar', 'horse cart', 'hourglass', 'iPod', 'iron', 'jack-o\'-lantern', 'jean', 'jeep', 'jersey', 'jigsaw puzzle', 'jinrikisha', 'joystick', 'kimono', 'knee pad', 'knot', 'lab coat', 'ladle', 'lampshade', 'laptop', 'lawn mower', 'lens cap', 'letter opener', 'library', 'lifeboat', 'lighter', 'limousine', 'liner', 'lipstick', 'Loafer', 'lotion', 'loudspeaker', 'loupe', 'lumbermill', 'magnetic compass', 'mailbag', 'mailbox', 'maillot', 'maillot', 'manhole cover', 'maraca', 'marimba', 'mask', 'matchstick', 'maypole', 'maze', 'measuring cup', 'medicine chest', 'megalith', 'microphone', 'microwave', 'military uniform', 'milk can', 'minibus', 'miniskirt', 'minivan', 'missile', 'mitten', 'mixing bowl', 'mobile home', 'Model T', 'modem', 'monastery', 'monitor', 'moped', 'mortar', 'mortarboard', 'mosque', 'mosquito net', 'motor scooter', 'mountain bike', 'mountain tent', 'mouse', 'mousetrap', 'moving van', 'muzzle', 'nail', 'neck brace', 'necklace', 'nipple', 'notebook', 'obelisk', 'oboe', 'ocarina', 'odometer', 'oil filter', 'organ', 'oscilloscope', 'overskirt', 'oxcart', 'oxygen mask', 'packet', 'paddle', 'paddlewheel', 'padlock', 'paintbrush', 'pajama', 'palace', 'panpipe', 'paper towel', 'parachute', 'parallel bars', 'park bench', 'parking meter', 'passenger car', 'patio', 'pay-phone', 'pedestal', 'pencil box', 'pencil sharpener', 'perfume', 'Petri dish', 'photocopier', 'pick', 'pickelhaube', 'picket fence', 'pickup', 'pier', 'piggy bank', 'pill bottle', 'pillow', 'ping-pong ball', 'pinwheel', 'pirate', 'pitcher', 'plane', 'planetarium', 'plastic bag', 'plate rack', 'plow', 'plunger', 'Polaroid camera', 'pole', 'police van', 'poncho', 'pool table', 'pop bottle', 'pot', 'potter\'s wheel', 'power drill', 'prayer rug', 'printer', 'prison', 'projectile', 'projector', 'puck', 'punching bag', 'purse', 'quill', 'quilt', 'racer', 'racket', 'radiator', 'radio', 'radio telescope', 'rain barrel', 'recreational vehicle', 'reel', 'reflex camera', 'refrigerator', 'remote control', 'restaurant', 'revolver', 'rifle', 'rocking chair', 'rotisserie', 'rubber eraser', 'rugby ball', 'rule', 'running shoe', 'safe', 'safety pin', 'saltshaker', 'sandal', 'sarong', 'sax', 'scabbard', 'scale', 'school bus', 'schooner', 'scoreboard', 'screen', 'screw', 'screwdriver', 'seat belt', 'sewing machine', 'shield', 'shoe shop', 'shoji', 'shopping basket', 'shopping cart', 'shovel', 'shower cap', 'shower curtain', 'ski', 'ski mask', 'sleeping bag', 'slide rule', 'sliding door', 'slot', 'snorkel', 'snowmobile', 'snowplow', 'soap dispenser', 'soccer ball', 'sock', 'solar dish', 'sombrero', 'soup bowl', 'space bar', 'space heater', 'space shuttle', 'spatula', 'speedboat', 'spider web', 'spindle', 'sports car', 'spotlight', 'stage', 'steam locomotive', 'steel arch bridge', 'steel drum', 'stethoscope', 'stole', 'stone wall', 'stopwatch', 'stove', 'strainer', 'streetcar', 'stretcher', 'studio couch', 'stupa', 'submarine', 'suit', 'sundial', 'sunglass', 'sunglasses', 'sunscreen', 'suspension bridge', 'swab', 'sweatshirt', 'swimming trunks', 'swing', 'switch', 'syringe', 'table lamp', 'tank', 'tape player', 'teapot', 'teddy', 'television', 'tennis ball', 'thatch', 'theater curtain', 'thimble', 'thresher', 'throne', 'tile roof', 'toaster', 'tobacco shop', 'toilet seat', 'torch', 'totem pole', 'tow truck', 'toyshop', 'tractor', 'trailer truck', 'tray', 'trench coat', 'tricycle', 'trimaran', 'tripod', 'triumphal arch', 'trolleybus', 'trombone', 'tub', 'turnstile', 'typewriter keyboard', 'umbrella', 'unicycle', 'upright', 'vacuum', 'vase', 'vault', 'velvet', 'vending machine', 'vestment', 'viaduct', 'violin', 'volleyball', 'waffle iron', 'wall clock', 'wallet', 'wardrobe', 'warplane', 'washbasin', 'washer', 'water bottle', 'water jug', 'water tower', 'whiskey jug', 'whistle', 'wig', 'window screen', 'window shade', 'Windsor tie', 'wine bottle', 'wing', 'wok', 'wooden spoon', 'wool', 'worm fence', 'wreck', 'yawl', 'yurt', 'web site', 'comic book', 'crossword puzzle', 'street sign', 'traffic light', 'book jacket', 'menu', 'plate', 'guacamole', 'consomme', 'hot pot', 'trifle', 'ice cream', 'ice lolly', 'French loaf', 'bagel', 'pretzel', 'cheeseburger', 'hotdog', 'mashed potato', 'head cabbage', 'broccoli', 'cauliflower', 'zucchini', 'spaghetti squash', 'acorn squash', 'butternut squash', 'cucumber', 'artichoke', 'bell pepper', 'cardoon', 'mushroom', 'Granny Smith', 'strawberry', 'orange', 'lemon', 'fig', 'pineapple', 'banana', 'jackfruit', 'custard apple', 'pomegranate', 'hay', 'carbonara', 'chocolate sauce', 'dough', 'meat loaf', 'pizza', 'potpie', 'burrito', 'red wine', 'espresso', 'cup', 'eggnog', 'alp', 'bubble', 'cliff', 'coral reef', 'geyser', 'lakeside', 'promontory', 'sandbar', 'seashore', 'valley', 'volcano', 'ballplayer', 'groom', 'scuba diver', 'rapeseed', 'daisy', 'yellow lady\'s slipper', 'corn', 'acorn', 'hip', 'buckeye', 'coral fungus', 'agaric', 'gyromitra', 'stinkhorn', 'earthstar', 'hen-of-the-woods', 'bolete', 'ear', 'toilet tissue'],
      acceptReporters: true
    };
    this._statuses = [{
      value: 'Ready',
      text: 'ready to use'
    }, {
      value: 'Loading',
      text: 'still loading'
    }, {
      value: 'Model Failed',
      text: 'ERROR - broken'
    }];
    this._modelState = 'Loading'; // the number of times that the 'recognise image' block has been used
    // incorrectly (this will be reset when the Help page is displayed)

    this.numIncorrectUses = 0; // the number of times that the 'recognise image' block should be used
    // incorrectly before the Help page is shown

    this.MAX_INCORRECT_USES = 2;
    tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/classification/5/default/1', {
      fromTFHub: true
    }).then(function (model) {
      _this._model = model;
      _this._modelState = 'Ready';
    }).catch(function (err) {
      console.log('[mlforkids] Imagenet failed init', err);
      _this._modelState = 'Model Failed';
    });
  }

  _createClass(Scratch3ML4KImagenetBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'mlforkidsImagenet',
        name: 'imagenet',
        menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAB3RJTUUH5QIKDy0JzYo24wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAOG0lEQVRYw5WZeYxd1X3HP+ece+9bZ96b3TMeOxhjG4NjFgcMhhIiAiQE0gQFgxQJUJTQhipNUUjbRC2URmmaCgFCgqimsUMDwZAQQmyKHajZCbbBYFzbeImX8TL7m3nb3HeXc07/uM82i7HJ1bvS3c/nfH/L+Z3zBMfZau/9a5Fw8Gtutvd5bH2I9qVBqmORBYgOPojbfyt/7haPrsaUX8Q77W4AosNPSeu/mTY6mmZifZ4xel1+wX2jH37POd7HTDh4k/K33QfjyEzvC7K2+qFo310b9cw79rhSGID40DKc6bd8IjgzuR5ZXAxAcPA3nmN3zRJ66yXG1r9hg+ELCMogW64BVn/4XfH+k/qBx8nNuJ7KxmtfMP6+SyfGR1FeO/mO2RR7PvWecIqrYptf6c783iaAcHAlXu8NJ4SLDtyLO+O2RMVD931WUVmqG6WvTAzt7muUD4Ep01rsxMnPvcvkF/+45bTvRB8LCGCtldX1V/nD+9/26uUhMlmFthm06KD3lDPpmDH/oLbZX+uWq+5IdVxYC/b+lNSsf/go2NATMHwP7llvEA493qfCHT8Vpnb56MDmnrEDW3FEGWEDwjCktf1TtE8/9xktiksLi1ZMndDEpT2/bFNxxRseqtDRBqm0AhsRRgfZ/fYhBvdu7Z97zpLvqnjldY19996UOuW2ddFDwFUP406/KYEbuAd32tLkeN+PviGn1v809kc7dr/9gogawxQLLo7jYnGJo5B6tU5r5M8Tjuee1AdVMNRnwjKVSoO2AoRhhLVgjSWXg9LIfv747KBceMGS/tae6H+jvXf9LHbO/m75wOq4suNuCdqW9r9mw313d0oxdT/x2A2lAxvY9tZ6igVDseAihEHrAK1jwghsHBL5EykvHXFSwDiqZjAhQWhpBBDHFmsh1qBjkAJqjZDXnnuRc5eM0zlz4bd1Y/P8tPX/25Qnu60JY4+J8Wjyzb/y0tkLDu96gx3vbqNQACHA9yOkTDptDEQRIAwWVUR68qSA2rpGGgNW4E9ZhASjE8AoSnbPkxTbs/jlUfzhTSDUpVJ5l9poEIEFJHF5G3EF4kaNnt42qpUKjQlNKgWOA1ImgEEAbspiddQwOrAnV9DmR1wclIRGg6PqxXHywf4ZLfT09dBSaMX1ciAdhHQRQjXDTiQvAQjL9Fw3UVCnOjnOyOAwI8NlHAeUSiI0isFNgRViyljn5ICZ6UurcekRMhmF3zBYIApBOYKzz+mlvasPJ5VDKg+ki1AphHRBKIRUgMTaGCxYG2PjBk5KUOxwyeWzZHMH2bN7HGtt0hcDqiCRKlXW5E4O2N7dPzH0/OKxllavs16PCEJobVWcd/4ppFu6EdJBKA+hcggvj3AyCOmBUCAdsBZhNegQYxoIoTAkqrqpAn0zXFKeYOvWMYLA4jmJy1gbbwkj8ZEo+YBT1kc2NEO5+F5bexYhoavL5TPnzSCVa0cIB+lkUF4BmS4ivSLCLSK8IiLVgXALCK+tuReRXjvSbUF6OYSTAeUinAztnX0sWFAgkwHXBS/t4mZ7D7hdX4hPqGCu+/yE2s2vyeayF3e0CU49rR3XyyIQSDeN9AoIN49IFRAqB9Jr7i4CmSiJxeoAYYLERwFpNFiDMTFWueRbOpk3J+TwYIN0rgPXERvbF9wSfaKxWOVOfdmpbqG7O4WXSiGVm5jVySLdXALotCJUNjGr9EAc8UMJxoJQWC0Bi7Qx1mqs1QgTImKJcjNkc0W6usZxU+m6sfLQ8VjkcauZ0S1v+wFhNusiVboJ5yFUCqSHkKmjqiVgbjNQnKTPRwLoCLzKgJNGqhRCpZHSAQHSTeO6DrXy2NuTfvHgJwYUbofUceg5jodSqcS8MnUsnTSDAWwynAuZHInmORZxNNWIBFy4gEKIxA2stWAtjuMARtUrU/KkgOWBNUmy1uIviEZxUnmEchDKBeWAEFgMWA2YYwBJFxJebPMnE1hrwIRg4maHQMgEVAiQQiAwi0x996yTAr6x4gtJzVbZ/R3P1UiVan7QaQIY0BFWB2CCpFGrk4aFAKlAyERE0YQ1MdjmLo4VUUKoxCLKhbjiKWUuOvDWMueEgFfeCWOD+wumse9yN5VJwKSb5DkEWI01EVZPYaMaNq5hTQQmCYBmVZEMOTbCah+0j9U+1gRYEyf3EQjlIaVCKQ/XjbFx+S8ndq5Ije36zYmjuLT5n7+sGJNKdSOERKr3VUCWpOFYg4mxJkQKlQQLDtaKxANtBDqAuIYNS5i4AaaB1SHWGhAK5aSxOkSIOo7jYqbKi7Pdi4qdc75WP66CA+v/DYCwvOX6lKsS10rcPXHsZm6zJgQdYKIaNqpiwwo2nkqATIQ1TfNrHxtOooNyU20fG/tgdDNQHKR0kY6DclJIPYIOpq77WBPPXPxDqr5t0cGhi6RUTR9RSKlAOYl4JuZPAxM8+Yc9jI6VkoZ1FbQPJgKaPqkDbFzDBBWkqTNwaIRHn9nHwcEyQpim6yikk0G6OaRy8TyBX9n/dYBvfxhweNtKAPY/f/PVUo+nhFJIJ4Vys0l+a/rf6ESVB5+KWf3uxfzk5/uxxseGNayeakaqTgCtxuoGmCl8v8KtPznM9sq1/Mejdaq1OgKLEC5COThOGuWkcF0H0zj8mYl9f+z42YcBe85IJj5+actljiNSUjhI5SVRLJ2m7xkODNV59sVBGrUhnlhbojblg26AbiSmxySuYCKIGzgi4vV3xtk3JNi5/R3e2xuyeWcFpUgKQuEgpIOUzdFKjzCw6YHrjmtia60b1Q7NlcJIpEAqJxm6hEgEtIah0YCDh8fZuHE91bphZKwKJkzgbNO8RifA2kcQsvdAg1q1wqZNbzFwcJzRiQhxJJda3XSlBNRxoDa+7bPHBdyy9l9mal3vMMYijwaGaWb8BNAYQ0trgc7OTrKZPFZrQDdzXdRMM/ootI1DrNa0trTS1dVFLpfHxonC1hzLn1JKpJCJskZ/CWB419oPppnxg++0S2OzFou1JmncmsRsJoI4pKdoacmlaS0UaS+U6G6TGCtQRwJD1EDYJqxBG5g7U+K4HsViG4Fbp63VYHSMEB6WY1W4bY5M9ckBBdAz58oPKqi1yOpYejoGHUcYEx7tqbUWa0KmtWnm9fsMDpe56oKItJukoaRDiS8SN5KRBksUW84/Q9HfVmNiskZv0WdeP2htsMZgdYSNQ4wO0XGE1hCFgbDWdn4kUWvr1cKGCYIGhHGIjhrE4VTygPSwWDpaLH/31TobtldZelkKo99n0thvKm4xkX80KQskd97os3bDbi5eKOnpaMUYEASYuIGOp4jDKaIwpBGAEXkhhBj7CGDPnM8P7hp4tjKVgWwjIspUkzILkK7FWotyM5z/6TznnRkiZBohFVaHmKiGNDFIlahpIkzUSMxsXU6flWXOzADPyxPbFMoaTByiI58orBEGVRoNTb0OeNMOwwiD21fRO/+aY4BnX3bL4cfvPH1/tb7rrHRGk/KqzQmQxtERwkkeFSqDEOnmBEmgIx9MQGQ0jSCpcrIpBcLBaI2QEunmQHgYJNJG6EgnE/ewThhUqNfq1GqWyQmwxfbHAHrnX3NMwZ2vP8TcJd8i33vhw+M79l6W8nTOdSIQk6RNhHazOG6mmbMUOC6ymRqEFOw7UOO5N1LEsh+wePYgX7y4TF9vEWKDsRblSnQcEId1jI4xOiAM6vh+nWrFMDEJ1aibL9/04L18/4wPppm5S74FwJf+esVvbebMZ4ZHJaUSVMoxlXKFidIEY6MlxkbHqZQrmDhCCIGUHtJJMzTh4TOX/tmL6Z91HoGcw/4hgedlkhFDSMLAp1KuMjoyztjYOKXxEtVKjfKkYWwcRktpMu1n31boPmN8y7p7P7q6tWH1v3P+1f/I5tdXt61/4m8ek9GBK1tbDC35ZCCZ8iVhBMVWyfzTCxTbO3G8PNLxGBou8bvnGgyWTyEIY+bPGOCrV7RSKBTRkU8c1BgbGWLbjilqdU0qZcmmQWsol6HuO7it834x68Lbv7n9uR/qWx8YPOHyG688/cAdW1/++UXVkf+7wpERHR2QS0MQQxjCvNMUvT0ejpuUYnEccehwg5XPFSnmQr7yOZ/u7hxSOlhr0HHI/gMBO/9kyGaSpY9qDcZLoI1Lz+xL1s1edO1/FqfN+W1rnvjUhVd8POC+ba927d2xtXeqXr5l8tA7cv/Wl26ujB/OtLZY+rrBdZL1lNaWZBbQCKBSFXR2t3DOoj6iyLDxjYNUK1O0tkA6lSybTJYhlwO/AYMjUPMlXX2nMuOMz/9Ttn12vnva9Kdnz1/wVtfMhSdewHzhdw9dr+NomqPU76uV8s359t51o7ue76lODN5QHtmfUcp0K8lp1YlDnisbTleHdRbMl3R3p5PKx4I1EYNDDbbuMIyVRGzJRfmO/igKou1WeKV82/Th3lPP+rXMzanGYfWqdDrzS6HUNY6Say+5/IubZW6GPS7g5lefurDh+5N+vdYZBo05V1z/t8s/bml3bGhk5pplN349KL3zzdZM6ZS2QiizmeTelA+lclpXg44tLb2Ll113+5O/EkKUj/edNU8u84SObvS81KZsNtfT3tm+Y865V+45bqPWWja/+tSlr6xevujItZdX/eIDz+x+9wWevOfmo+cvPf1ffctuP+vO5d/rf/GRv+/e/egP+vasuH3G2uU/WPz9db9f2XbkuXdf/tVH2vufx+4/evzi0yuWbFu/6lyAnW+tOb4qA9tf8rZvWFUAeGX18j/rb4ZVy3807eG7rv70Iz9euvAPj93fdeT6bZfAzjdXfex7r6154ujx9o2rez58//8B77pKs64FO7EAAAAASUVORK5CYII=',
        blocks: [{
          opcode: 'label',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            default: 'recognise image [IMAGE] (label)',
            id: 'mlforkids.images.recogniseLabel'
          }),
          arguments: {
            IMAGE: {
              type: ArgumentType.STRING,
              defaultValue: 'image'
            }
          }
        }, {
          opcode: 'checkModelStatus',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            default: 'Is the machine learning model [STATUS] ?',
            id: 'mlforkids.text.checkModelStatus'
          }),
          arguments: {
            STATUS: {
              type: ArgumentType.STRING,
              defaultValue: this._statuses[0].value,
              menu: 'statuses'
            }
          }
        }, {
          opcode: 'labelname',
          blockType: BlockType.REPORTER,
          text: '[LABEL]',
          arguments: {
            LABEL: {
              type: ArgumentType.STRING,
              defaultValue: this._labels.items[0].value,
              menu: 'labels'
            }
          }
        }],
        menus: {
          labels: this._labels,
          statuses: this._statuses
        }
      };
    }
  }, {
    key: "label",
    value: function label(_ref) {
      var _this2 = this;

      var IMAGE = _ref.IMAGE;
      return new Promise(function (resolve) {
        return _this2.getImageClassificationResponse(IMAGE, 'class_name', resolve);
      });
    }
  }, {
    key: "labelname",
    value: function labelname(_ref2) {
      var LABEL = _ref2.LABEL;
      return LABEL;
    }
  }, {
    key: "checkModelStatus",
    value: function checkModelStatus(_ref3) {
      var STATUS = _ref3.STATUS;
      return STATUS === this._modelState;
    }
  }, {
    key: "getImageClassificationResponse",
    value: function getImageClassificationResponse(imagedata, valueToReturn, callback) {
      if (imagedata === '' || imagedata === 'image') {
        // The student has left the default text in the image block
        //  so there is no point in submitting an xhr request
        this.registerIncorrectUse();
        return callback('You need to put an image block in here');
      }

      this.classifyImage(imagedata).then(function (result) {
        console.log('[mlforkids] imagenet output', result);
        callback(result[0][valueToReturn]);
      });
    }
  }, {
    key: "classifyImage",
    value: function classifyImage(imagedata) {
      var _this3 = this;

      var failResponse = {
        class_name: 'Unknown',
        confidence: 0,
        classifierTimestamp: new Date().toISOString()
      };
      return this._prepareDataForClassification(imagedata).then(function (imgtensor) {
        return _this3._model.predict(imgtensor).data();
      }).then(function (output) {
        return tf.argMax(tf.squeeze(output)).data();
      }).then(function (topans) {
        return [{
          class_name: _this3._model.metadata.classNames[topans[0]]
        }];
      }).catch(function (err) {
        console.log(err);
        return [failResponse];
      });
    }
  }, {
    key: "registerIncorrectUse",
    value: function registerIncorrectUse() {
      console.log('recognise image block used incorrectly');
      this.numIncorrectUses += 1;

      if (this.numIncorrectUses >= this.MAX_INCORRECT_USES) {
        window.dispatchEvent(new Event('mlforkids-recogniseimage-help'));
        this.numIncorrectUses = 0;
      }
    }
  }, {
    key: "_prepareDataForClassification",
    value: function _prepareDataForClassification(classifydata) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        if (_this4._modelState === 'Ready') {
          var imageElement = document.createElement('img');
          imageElement.width = 224;
          imageElement.height = 224;

          imageElement.onerror = function (err) {
            console.log('[mlforkids] Imagenet failed to prepare image data for prediction', err);
            return reject();
          };

          imageElement.onload = function () {
            return resolve(tf.tidy(function () {
              return tf.browser.fromPixels(imageElement).expandDims(0).toFloat().div(255);
            }));
          };

          imageElement.src = 'data:image/jpeg;base64,' + classifydata;
        } else {
          console.log('[mlforkids] model not ready');
          return reject();
        }
      });
    }
  }]);

  return Scratch3ML4KImagenetBlocks;
}():
Scratch.extensions.register(new mlforkidsImageData());
