// Parent HTML element analog =================================================
function HtmlElement() {
  this.click = function () {
    console.log("Click");
  };
}

// Set prototype function to the parent:
HtmlElement.prototype.focus = function () {
  console.log("Focus");
};

// SELECT HTML element ========================================================
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    let result = `<select>\n${this.items
      .map((item) => `   <option>${item}</option>\n`)
      .join("")}</select>`;
    console.log(result);
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;

// IMAGE HTML element =========================================================
function HtmlImgElement(src) {
  this.src = src;

  this.render = function () {
    console.log(`<img src="${this.src}" />`);
  };
}
HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlElement;

// const he = new HtmlElement(); // Parent element with no render function...
const select = new HtmlSelectElement([1, 2, 3, 4]);
const image = new HtmlImgElement("http://google.com/logo.png");

const arrayOfElements = [select, image];

for (let element of arrayOfElements) {
  element.render();
}

// Use: image.click() will trigger click function from parent
// Use: image.focus() will trigger focus function from parent prototype
