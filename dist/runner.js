// Dynamically inject the Google AdSense script
const gptScript = document.createElement('script');
gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
gptScript.async = true;
document.head.appendChild(gptScript);

// Create a container for the ad
const adContainer = document.createElement('div');
adContainer.id = 'div-gpt-ad-1733637534778-0';
adContainer.style.cssText = `
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: white;
    text-align: center;
    margin: 0;
    padding: 0;
  `;
document.body.prepend(adContainer);

// Initialize Google Publisher Tag (GPT) for the ad
const gptInitScript = document.createElement("script");
gptInitScript.text = `
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/22986375450/GB_Image_A_B_300*250', [[250, 360], [300, 250]], 'div-gpt-ad-1733637534778-0')
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs(); // Collapse the ad container if no ad is loaded
    googletag.enableServices();

    // Add event listener for ad rendering
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot.getSlotElementId() === 'div-gpt-ad-1733637534778-0') {
        const adHeight = adContainer.offsetHeight;
        document.body.style.paddingTop = adHeight > 0 ? \`\${adHeight}px\` : '0px';
      }
    });
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