import { Injectable, ChangeDetectorRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { config } from '../../../config/config';

@Injectable()
export class CgpSidenavService {
    @Output() updatedItemsEvent: EventEmitter<any> = new EventEmitter();

    private items;

    // SideNav Actions
    //
    private actions = {};

    constructor() {
        this.items = config.navItems;
    }
    
    onPanelChange(event) {
        var flatItems = this.flattenItems([], this.items);
        var selectedPanelBarItem = event.filter(uiItem => uiItem.selected)[0] || { id: '' };
        var selectedItem = flatItems.filter(item => item.id === selectedPanelBarItem.id)[0] || {};

        this.updateExpanded(selectedPanelBarItem.id, selectedPanelBarItem.expanded);

        if (selectedItem.url) {
            window.open(selectedItem.url, selectedItem.target || '_self');
            return;
        }

        if (selectedItem.action) {
            this.actions[selectedItem.action]();
            return;
        }
    }

    setItems(items) {
        this.items = items;
        this.updatedItemsEvent.emit(this.getVisibleItems());
    }

    getItem(id) {
        return JSON.parse(JSON.stringify(this.getOriginalItem(id)));
    }

    getItems(idList) {
        return JSON.parse(JSON.stringify(this.getOriginalItems(idList)));
    }

    updateItem(updatedItem, emitEvents = true) {
        let item = this.getOriginalItem(updatedItem.id);

        for (var p in updatedItem) {
            if (updatedItem.hasOwnProperty(p) && item.hasOwnProperty(p)) {
                item[p] = updatedItem[p];
            }
        }

        if (emitEvents) {
            this.updatedItemsEvent.emit(this.getVisibleItems());
        }
    }

    updateItems(updatedItems) {
        for(let i = 0; i < updatedItems.length; i++) {
            this.updateItem(updatedItems[i], false);
        }

        this.updatedItemsEvent.emit(this.getVisibleItems());
    }

    getVisibleItems() {
        let clonedItems = JSON.parse(JSON.stringify(this.items));
        return this.filterHiddenItems(clonedItems, []);
    }

    private getOriginalItem(id) {
        let originalItem = this.getOriginalItems([id])[0];

        if (!originalItem) {
            return null;
        }

        return originalItem;
    }

    private getOriginalItems(idList) {
        let items = this.flattenItems([], this.items);

        return items.filter((n) => {
           return idList.indexOf(n.id) !== -1;
        });
    }

    private updateExpanded(id, expanded) {
        let items = this.flattenItems([], this.items);

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if(item.id === id) {
                item.expanded = expanded;
                return item;
            }
        }
        return null;
    }

    private filterHiddenItems(unfiltered, filtered) {
        for (var index = 0; index < unfiltered.length; index++) {
            var element = unfiltered[index];
            
            if (element.children && element.children instanceof Array && !element.hidden) {
                element.children = this.filterHiddenItems(element.children, []);
            }

            if (!element.hidden) {
                filtered.push(element);
            }
        }
        return filtered;
    }

    private flattenItems(result, items) {
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i];

            result.push(item);

            if (item.children && item.children instanceof Array) {
                this.flattenItems(result, item.children);
            }
        }
        return result;
    }
}
