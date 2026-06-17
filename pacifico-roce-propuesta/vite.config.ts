import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'spa-github-pages-redirect',
      transformIndexHtml(html) {
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
