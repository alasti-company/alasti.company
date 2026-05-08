import { configure } from "onedollarstats";

import "./style.css";

configure({
  hostname: "alasti.company",
  devmode: false,
});

if (window.location.pathname === "/github" || window.location.pathname === "/github/") {
  window.location.replace("https://github.com/alasti-company");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<pre style="margin: 0;">
  <code>
    THE ALASTI COMPANY

    CONTACT: <a href="mailto:the@alasti.company">THE@ALASTI.COMPANY</a>
    LOCATION: SAN FRANCISCO, CA

    PRODUCTS:
      - <a data-s-event="click:alasti.email" target="_blank" href="https://alasti.email">https://alasti.email</a></li>
      - <a data-s-event="click:usealasti.com" target="_blank" href="https://usealasti.com">https://usealasti.com</a></li>
      - <a data-s-event="click:wikiflai.com" target="_blank" href="https://wikiflai.com">https://wikiflai.com</a></li>
      - <a data-s-event="click:unishopapp.com" target="_blank" href="https://unishopapp.com">https://unishopapp.com</a></li>
      - <a data-s-event="click:futdrafts.com" target="_blank" href="https://futdrafts.com">https://futdrafts.com</a></li>
      - <a data-s-event="click:lyraly.com" target="_blank" href="https://lyraly.com">https://lyraly.com</a></li>
      - <a data-s-event="click:healthzkit.dev" target="_blank" href="https://healthzkit.dev">https://healthzkit.dev</a></li>
      - <a data-s-event="click:releasely.dev" target="_blank" href="https://releasely.dev">https://releasely.dev</a></li>
      - <a data-s-event="click:baselines.dev" target="_blank" href="https://baselines.dev">https://baselines.dev</a></li>
      - <a data-s-event="click:gitless.dev" target="_blank" href="https://gitless.dev">https://gitless.dev</a></li>

    © ${new Date().getFullYear()} THE ALASTI COMPANY 
  </code>
</pre>
`;
