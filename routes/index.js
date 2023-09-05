/**
 * Redirects to the `index.html` page.
 *
 * This function simply returns a `302` HTTP status and redirects
 * to the `public/index.html` file.
*/
const { response } = require('express');

// var textToBeSummarized = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."

exports.index = function( request, response ) {
    
    response.statusCode = 302;
    response.setHeader("Location", "/index.html");
    response.end('<p>302. Redirecting to index.html</p>');
};

exports.streaming = async function( request, response )
{
  console.log("Hello Streaming!")
}