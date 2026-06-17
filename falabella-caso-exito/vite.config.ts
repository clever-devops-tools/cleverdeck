import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'spa-github-pages-redirect',
      transformIndexHtml(html) {
        // Inject inline script that runs before Vue boots.
        // When GitHub Pages serves 404.html for /cleverdeck/falabella/3,
        // the 404.html saves the path to sessionStorage and redirects to root.
        // This script restores the full path so Vue Router sees the correct URL.
        const script = `<script>
    (function(){
      var r=sessionStorage.getItem('spa_redirect');
      if(r){sessionStorage.removeItem('spa_redirect');window.history.replaceState(null,'',r);}
    })();
  </script>`
        return html.replace('</head>', script + '</head>')
      },
    },
  ],
})
