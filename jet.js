class cloudlink {
	getInfo() {
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
