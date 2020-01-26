// chrome.tabs.onCreated.addListener((tab) => {
//   chrome.browserAction.disable(tab.id);
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (tab.active) {
//     updateBrowserAction(tab.id, tab.url);
//   }
// });

// chrome.tabs.onActiveChanged.addListener((tabId) => {
//   chrome.tabs.get(tabId, (tab) => {
//     if (tab.active) {
//       updateBrowserAction(tab.id, tab.url);
//     }
//   });
// });

// // Clipboard helper
// function getClipboardText(): string {
//   const textarea = document.querySelector('#buffer') as any;
//   textarea.value = '';
//   textarea.focus();
//   document.execCommand('paste');
//   return textarea.value;
// }

// function setClipboardText(text: string) {
//   const textarea = document.querySelector('#buffer') as any;
//   textarea.value = text;
//   textarea.select();
//   document.execCommand('copy');
// }

// (window as any).getClipboardText = getClipboardText;
// (window as any).setClipboardText = setClipboardText;
