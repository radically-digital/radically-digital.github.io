# Watch The Bundle Size

The amount of JavaScript that has to be sent to the browser is the most important factor of your application’s performance. Your app can be blazing fast but chances are no one will find out about this if they have to load 4MB of JS to load it.

Don’t ship a single JS bundle. Split your application on the route level and even further. Make sure you’re sending the least amount of JS possible.

Load in the background or when the user shows intent that they’ll need another bundle. If a button press is triggering a PDF download, you can delay the download of the PDF library until the button is hovered.
