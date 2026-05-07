import "./style.css";

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
      - <a target="_blank" href="https://wikiflai.com">https://wikiflai.com</a></li>
      - <a target="_blank" href="https://usealasti.com">https://usealasti.com</a></li>
      - <a target="_blank" href="https://unishopapp.com">https://unishopapp.com</a></li>
      - <a target="_blank" href="https://futdrafts.com">https://futdrafts.com</a></li>
      - <a target="_blank" href="https://healthzkit.dev">https://healthzkit.dev</a></li>
      - <a target="_blank" href="https://releasely.dev">https://releasely.dev</a></li>
      - <a target="_blank" href="https://baselines.dev">https://baselines.dev</a></li>
      - <a target="_blank" href="https://gitless.dev">https://gitless.dev</a></li>
  </code>
</pre>
`;
