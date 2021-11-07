class cloudlink {
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'mlforkidsImageData',
        name: 'Images',
        blocks: [{
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

Scratch.extensions.register(new cloudlink());
