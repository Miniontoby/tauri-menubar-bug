/**
 * This code will show that the menu items enabled state doesn't automatically update without hovering over them
 * 
 * Needed capabilities:
 * "core:menu:allow-new", "core:menu:allow-set-as-app-menu", "core:menu:allow-set-enabled"
 * 
 */

import { Menu, MenuItem, Submenu } from "@tauri-apps/api/menu";

export async function setMenu(): Promise<Menu> {
	const items = [
		await Submenu.new({
			id: 'File',
			text: 'File',
			items: [
				await MenuItem.new({ id: 'FileEnable', text: 'Enable menuitems', action }),
				await MenuItem.new({ id: 'FileDisable', text: 'Disable menuitems', action }),
			]
		}),
		await Submenu.new({
			id: 'Edit',
			text: 'Edit',
			enabled: false,
			items: [
				await MenuItem.new({ id: 'EditCopy', text: 'Copy', accelerator: 'Ctrl+C', action }),
				await MenuItem.new({ id: 'EditSelectAll', text: 'Select all', accelerator: 'Ctrl+A', action }),
			]
		}),
		await Submenu.new({
			id: 'Navigation',
			text: 'Navigation',
			enabled: false,
			items: [
        await MenuItem.new({ id: 'NavigationSearch', text: 'Search', accelerator: 'Ctrl+F', action }),
			]
		}),
		await Submenu.new({
			id: 'Notes',
			text: 'Notes',
			enabled: false,
			items: [
				await MenuItem.new({ id: 'NotesNew', text: 'New Note', accelerator: 'Ctrl+I', action }),
			]
		}),
		await Submenu.new({
			id: 'Bookmarks',
			text: 'Bookmarks',
			enabled: false,
			items: [
				await MenuItem.new({ id: 'BookmarksNew', text: 'New Bookmark', accelerator: 'Ctrl+B', action }),
			]
		}),
		await Submenu.new({
			id: 'View',
			text: 'View',
			enabled: false,
			items: [
				await MenuItem.new({ id: 'ViewBigger', text: 'Bigger', accelerator: 'Shift++', action }),
        await MenuItem.new({ id: 'ViewNormal', text: 'Normal', accelerator: 'Shift+\\', action }),
        await MenuItem.new({ id: 'ViewSmaller', text: 'Smaller', accelerator: 'Shift+-', action }),
			]
		}),
	];
	function action(id: string) {
		if (id === 'FileEnable' || id === 'FileDisable') {
			items.find(m => m.id === 'Edit')?.setEnabled(id === 'FileEnable');
			items.find(m => m.id === 'Navigation')?.setEnabled(id === 'FileEnable');
			items.find(m => m.id === 'Notes')?.setEnabled(id === 'FileEnable');
			items.find(m => m.id === 'Bookmarks')?.setEnabled(id === 'FileEnable');
			items.find(m => m.id === 'View')?.setEnabled(id === 'FileEnable');
		}
	}
	const m = await Menu.new({ items });
	await m.setAsAppMenu();
	return m;
}


window.addEventListener("DOMContentLoaded", () => {
  setMenu();
});
