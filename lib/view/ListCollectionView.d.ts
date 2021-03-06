import { AbstractCollectionView } from "./AbstractCollectionView";
export declare class ListCollectionView extends AbstractCollectionView {
    constructor();
    onChange(event: Event): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    onSkinPartAdded(part: string, element: HTMLElement): void;
    setSelectedItem(model: Object): void;
    destroy(): void;
}
