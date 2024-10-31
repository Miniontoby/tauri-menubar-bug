# Tauri Menu Bug Reproduce code

This repo contains the minimal code to reproduce a bug with the tauri menubar and it's submenu items's enabled state.

This bug was found whilst running on Windows, no other OS's have been tested *yet*.


## The problem

When you change the enabled state of the submenu items in the bar, the visible state doesn't update.

The visible state of the submenu's only updates when:
- the submenu is 'physicly' updated:
  - by mouse hover
  - by keyboard 'hover' (by pressing Alt and then use the arrow keys)
- the window loses it's focus:
  - By pressing Alt-Tab
  - By clicking into another window (make sure you can still see the tauri window!)


## Reproducing the bug

I got you all the code to reproduce the bug in this repo for you in the [./src/main.ts](./src/main.ts) file.
1. Install deps: `npm install`
2. Run app: `npm run tauri dev`
3. When app is loaded, open the "File" menubar submenu and then select the "Enable menuitems" option (or the "Disable menuitems" option).
4. You will see the other submenu's don't update their visible enabled state.
5. Now use one of these methods:
   - Hover over one of the submenu's.
   - Press Alt and then use the arrow keys to navigate to the other submenu's. (They might all already update when pressing Alt, but not everytime)
   - Hold Alt and press Tab (you can hold Shift and press Tab to 'stay' on the window)
   - - If you have a second screen, just click on any window on your second screen.
     - If you don't have a second screen, then place any window next to the tauri window and do step 3 and then click into the other window.
6. That should have shown the bug
