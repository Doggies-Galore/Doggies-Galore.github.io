class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    substringy({num1, num2, string}) {
        var div  = document.getElementById("location");
        function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.watchPosition(showPosition);
            } else {
              div.innerHTML = "The Browser Does not Support Geolocation";
            }
        function showPosition(position) {
        return position.coords.latitude
      }
    };
}