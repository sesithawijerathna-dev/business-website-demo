# Ceylon & Crumb — café portfolio demo

A responsive, fictional Colombo café website. Plain HTML, CSS and JavaScript: no installation, build step, paid hosting or API keys required.

## Open on your computer

Double-click `index.html` to open it in your browser. You can also right-click it in VS Code and select **Open with Live Server** if you already have that extension. Save a file and refresh the browser to see your changes.

## What each file does

- `index.html`: business name, copy, menu, prices, sample reviews, opening hours and location.
- `styles.css`: colours, typography, layouts and mobile styles. Brand colours are at the top.
- `script.js`: mobile navigation, menu filters and WhatsApp settings.
- `assets/cafe.jpg`: locally saved café photo; works offline.
- `assets/favicon.svg`: the small browser-tab icon.
- `.nojekyll`: tells GitHub Pages to serve these static files directly.

## Make it your own

1. Replace the café name and text in `index.html`, including the page title and description.
2. Update menu cards, prices and dietary information. Each card's `data-category` matches a filter in the menu.
3. Set `WHATSAPP_NUMBER` at the top of `script.js` to the owner's actual international number, digits only. For Sri Lanka, replace the local leading zero with `94`. Update the message too. An empty value keeps the demo safe and shows setup information instead of contacting someone.
4. Replace the concept location with a real address and the map link with the business's Google Maps link. The existing link shows the Colombo 07 neighbourhood, not an actual café.
5. Replace illustrative opening hours and testimonials with approved, accurate business information. Remove demo labels only after replacing the fictional content. Do not present these sample reviews as real customer feedback.
6. Replace `assets/cafe.jpg` with a photo you have permission to use; update its descriptive `alt` text in HTML.
7. Change the colours in `:root` at the top of `styles.css`.

## Publish free with GitHub Pages

1. Sign in to GitHub and create a **public** repository named `business-website-demo`.
2. Choose **Add file → Upload files**. Upload the contents of this folder, including the `assets` folder. `index.html` must be at the repository's top level, not inside another `business-website-demo` folder. Commit the files to `main`.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait for deployment to finish. The Pages settings will display your link, normally `https://YOUR-USERNAME.github.io/business-website-demo/`.
7. Open the link on your phone. Check navigation, filters, image and contact buttons. Later commits to `main` update the published site automatically.

If you get a 404, check that `index.html` is at the top level, `main` and `/(root)` are selected, and deployment has completed in the Actions tab. Keep filenames and relative links case-correct.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Photo credit

Photo by Rizky Subagja on Unsplash: https://unsplash.com/photos/latte-croissant-and-book-on-cafe-table-1k7TnX5GAww

Used under the Unsplash License: https://unsplash.com/license

The photo illustrates the concept; it does not depict a real Ceylon & Crumb venue. No external fonts, libraries, analytics or backend services are loaded. Maps and WhatsApp need an internet connection when opened. There is no booking submission system; configured WhatsApp links open a message for the visitor to send.
