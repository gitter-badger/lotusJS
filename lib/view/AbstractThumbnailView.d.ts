/**
 * Created by dsmiley on 8/23/17.
 */
import * as Lavender from 'lavenderjs/lib';
import { AbstractItemView } from "./AbstractItemView";
export declare class AbstractThumbnailView extends AbstractItemView {
    private _thumbWidth;
    private _thumbHeight;
    private _thumbnail;
    private _thumbnailContainer;
    private _allowDrag;
    private _thumbnailDisplay;
    private _thumbnailSelectedClass;
    constructor();
    thumbWidth: string;
    thumbHeight: string;
    thumbnail: HTMLImageElement;
    thumbnailContainer: HTMLElement;
    allowDrag: boolean;
    protected sizeImage(): void;
    protected onThumbClick(event: Event): void;
    protected onDragStart(event: Event): void;
    protected getImageURL(model?: Object): string;
    protected getDefaultSize(): Lavender.widthHeightObject;
    protected getContainerSize(): Lavender.widthHeightObject;
    protected onImageLoad(event: Event): void;
    protected setThumbnailSrc(src: string): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    defineSkinParts(): void;
    onModelChange(model: Object): void;
    onSkinPartAdded(part: string, element: HTMLElement): void;
    resetState(): void;
    destroy(): void;
}
