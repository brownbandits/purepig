// Dynamically inject the Google AdSense script
const gptScript = document.createElement('script');
gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
gptScript.async = true;
document.head.appendChild(gptScript);

// Create a container for the ad
const adContainer = document.createElement('div');
adContainer.id = 'div-gpt-ad-1733637534778-0';
adContainer.style.cssText = 'min-width: 250px; min-height: 250px; margin: auto; text-align: center;';
document.body.appendChild(adContainer);

// Initialize Google Publisher Tag (GPT) for the ad
const gptInitScript = document.createElement('script');
gptInitScript.text = `
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/22986375450/GB_Image_A_B_300*250', [[250, 360], [300, 250]], 'div-gpt-ad-1733637534778-0')
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
`;
document.head.appendChild(gptInitScript);

// Trigger the ad display
const gptDisplayScript = document.createElement('script');
gptDisplayScript.text = `
  googletag.cmd.push(function() {
    googletag.display('div-gpt-ad-1733637534778-0');
  });
`;
document.body.appendChild(gptDisplayScript);