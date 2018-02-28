console.log("evaluating testModule.js");

exports.invisible = function () {
    console.log("invisible");
}

exports.message = "hi";

exports.say = function () {
    console.log(message);
}