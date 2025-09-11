(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgB7ZZPchJBFMa/14wJIQsnpSTlDk5gcgKHhVXIRj2BeAKHE8ScIDlCvAFsCLtwA71BcGUVWJVZKKESpp/9qkRJmGF6mmSRKn5VFD399+vX771uYM1jZtjYbv5slN5iBTysgGL94W+xA0cIjpjd7yvwVymz1rVyb9KHAwquMIf/ylR4B0ecLHBZL1ZipS7mqqLCeKO6048i5MTJAjeqENyp8qel6xAOOAkg6MPFOnyCA7kFSOgRqJLQ5I/qxQA5WeoDP8xZy7+J1QrJj+ipJoQpAoRvxHzKoO/MOuI4juJCIXrRmwyQJeAy8P24dH1sJghYkQ+Gj/uEEJk5ByLSOGxr5rC3LCA79ojOzU4reADYCJiyrs1b5JYPSMOUuSYqcd8w939dbRzcPY5UHxg1tk8I7OTZi4vjy/OzcTOpKTUKyt3fIQNHWHltHKUtLmRmwuGbrVARHcMBzdzaPbs6WdbHKhVLfJNS58gD473ZeTurm/tllLW+yQM2/ewEKBUgL5ZjrASY5PQKObEdY2kB2kdeyG5MpgB5+SSlZclqsXE0rfVHZh4kDPWHr59kisi2AOtgocrEtmS1PePlu73Jqbe5eZCYMzwvwKoCTA74f5Ymnd5oXS13x5+rc6+fnXYUSZ20mc/23NiXWfNn5oFRY+sCbJ4gQGvPIq6FYb3YNBfaoRGAZ91xdVnfpRaQtx9YdWbmhiVyLHKpaVBn9qZYsyaNP7Nh02Yfw0qUAAAAAElFTkSuQmCC";
console.log("npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요");
console.log(
  "%c ___       ___  ___  ________   ________  ___  ___     \n|\\  \\     |\\  \\|\\  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    \n\\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   \n \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\   __  \\  \n  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \n   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\__\\\n    \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|",
  "color: #d81b60; font-size: 14px; font-weight: bold;"
);
addEventListener("load", () => {
  const app = document.querySelector("#app");
  const buttonImage = document.createElement("img");
  buttonImage.src = image;
  if (app) {
    app.appendChild(buttonImage);
  }
});
