const copyButton = document.querySelector("[data-copy-link]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const link = window.location.href;

    try {
      await navigator.clipboard.writeText(link);
      copyButton.textContent = "已复制";
      window.setTimeout(() => {
        copyButton.textContent = "复制链接";
      }, 1800);
    } catch {
      copyButton.textContent = "复制失败";
      window.setTimeout(() => {
        copyButton.textContent = "复制链接";
      }, 1800);
    }
  });
}
