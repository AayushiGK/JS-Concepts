//pattern matching
function processData(data) {
  switch (data) {
    case { r }: {
      console.log(`Circle with radius: ${r}`);
      return Math.PI * r * r;
    }
    case { type: "rectangle", w, h }: {
      console.log(`Rectangle with width: ${w} and height: ${h}`);
      return w * h;
    }
    case { type: "point", x, y }: {
      console.log(`Point at coordinates: (${x}, ${y})`);
      break;
    }
    default:
      console.log("Unknown data type.");
      return null;
  }
}

const circleData = { r: 5 };
const circleArea = processData(circleData);

const rectangleData = { type: "rectangle", width: 4, height: 6 };
const rectangleArea = processData(rectangleData);

const pointData = { type: "point", x: 10, y: 20 };
processData(pointData);
