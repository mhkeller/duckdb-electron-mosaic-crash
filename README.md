Electron/Mosaic/DuckDB crash
===

Steps to reproduce:

1. npm install
2. npm start
3. The node process will crash with the error:

```
node_modules/electron/dist/Electron.app/Contents/MacOS/Electron exited with signal SIGSEGV
```

The crash stems from line 19 in `script.js`:

```js
const html = vg.plot(chart);
```

## Loading the server seprately

If you start the duckdb server separately, it works. It also works in Electron if you run the DuckDB server in a child process.

Steps to reproduce:

1. Launch the DuckDB server with `npm run server`
2. Uncomment line 21 in `script.js`: `document.querySelector('body').appendChild(html);`
3. In a separate terminal window, launch the web server with `npm run host`
4. Go to http://localhost:8080 to see the chart
