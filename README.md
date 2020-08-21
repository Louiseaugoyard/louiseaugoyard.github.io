# louise-augoyard.com

## How it works

The site is a [Sapper](https://sapper.svelte.dev/) app. Sapper is a server middleware that acts as an adapter between Node.js servers and the [Svelte UI framework](https://svelte.dev). We have a minimal server in `server.js`, and a tiny client script in `client.js` that acts as a boilerplate for everything that Sapper does behind the scenes.

However, because we don't need customized responses, we serve a static export. This way we don't need a dedicated server and can simply serve everything directly from the repository. The repository is set up in such a way that GitHub pages serves the `__sapper__/export` folder. Don't touch anything in there!

## Editing

### Requirements
1. A working [Node.js](https://nodejs.org) installation with the npm package manager.
2. Pull and do `npm install` in the root folder.

### Dev server
`npm run dev` starts a local server that reloads automatically when you save a file. Keep an eye on the live preview in your browser at `localhost/3000`.

### Where to look
Now look for the sub-page you want to change in the `src/routes` folder. A few common UI components are in `src/components`. Static files (images, fonts etc.) are in `src/static`.

The components usually have a self-explanatory `CONTENT` object in the script at the top of the page. This gets fed into the markup. Unless you want to make considerable changes, you shouldn't need to touch anything else.

Component scoped styling is at the bottom of each svelte file, global styling in `src/static/global.css`.

### Template hierarchy

Just for the curious...

1. `src/template.html`: The HTML template. Sapper hydrates the blanks, most notably, all the content is fed into the body element. Don't touch this.  
2. `src/routes/_layout.svelte`: The root Svelte component. Child components/sub-pages are rendered inside the slot element. If you want to change some global aspect of the layout, start here.  
3. `src/routes/<page>.svelte` or `src/routes/<page>/index.svelte`: Start here for changes to the `<page>` sub-page.

### Export
Once you're done, shut down the dev server and do `npm run export` in the root directory. This will rebuild everything. Do `npx serve ./__sapper__/export` and check the static export in your browser, this time at `localhost/5000`. When everything is working, you can simply push to GitHub from the root and the changes should be live immediately.