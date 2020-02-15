declare namespace PIXI.UI {

    class Stage extends PIXI.Container {
        constructor(width: number, height: number);
        constructor();
        minWidth: number;
        minHeight: number;
        UIChildren: any[];
        stage: any;
        interactive: boolean;
        hitArea: PIXI.Rectangle;
        initialized: boolean;
        resize(width: number, height: number):void;
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
    }

    class Container extends PIXI.Container {
        anchorBottom: number;
        anchorTop: number;
        anchorRight: number;
        anchorLeft: number;
        minHeight: number;
        constructor(width: number, height: number);
        constructor();
        container:any;
        textureBg:any;
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class ScrollingContainer extends PIXI.Container {
        constructor(options: any);
        innerContainer: any;
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class SortableList extends PIXI.Container {
        constructor(desc: any, tweenTime: any, tweenEase: any);
    }

    class Sprite extends PIXI.Container {
        constructor(t: any);
        fromFrame(frameId: any): Sprite;
        fromImage(imageUrl: any): Sprite;
        update(): void;
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class TilingSprite extends PIXI.Container {
        constructor(t: any, width: number, height: number);
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class SliceSprite extends PIXI.Container {
        constructor(texture: any, borderWidth: any, horizontalSlice: any, verticalSlice: any, tile: any);
        constructor(texture: any, borderWidth: any);
    }

    class Slider extends PIXI.Container {
        constructor(options: any);
        top: any;
        left: any;
        width: any;
        track: any;
        handle: any;
        fill: any;
        decimals: number;
        vertical: boolean;
        value: number;
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        update(soft: any): void;
        onValueChange(val: any): void;
        onValueChange(): any;
        minValue(val: number): void;
        minValue(): number;
        maxValue(val: number): void;
        maxValue(): number;
        disabled(val: any): void;
        disabled(): any;
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class ScrollBar extends PIXI.Container {
        anchorBottom: number;
        track: any;
        handle: any;
        constructor(options: any);
        anchorTop:any;
        anchorRight:any;
    }

    class Text extends PIXI.Container {
        constructor(text: string, PIXITextStyle: any);
        top : any;
        left : any;
        horizontalAlign : any;
        value: any;
        text: any;
        align: any;
        anchorRight: any;
        baseupdate(): void;
        update(): void;
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class DynamicText extends PIXI.Container {
        constructor(text: any, options: any);
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class DynamicTextStyle extends PIXI.Container {
        constructor(parent: any);
    }

    // NOTE: Only constructor. If functions use, write definitions!
    class TextInput extends PIXI.Container {
        textContainer: any;

        constructor(options: any);
        background: any;
        value: any;
    }

    class Button extends PIXI.Container {
        constructor(options: any);
        background: any;
        isHover: boolean;
        uiText: any;
        click(): void;
        focus(): void;
        blur(): void;
        initialize(): void;
        value: any;
        text: any;
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
    }

    class CheckBox extends PIXI.Container {
        constructor(options: any);
        checkGroup: any;
        background: any;
        checkmark: any;
        x: any;
        y: any;
        value: any;
        checked: any;
        selectedValue: any;
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        change(val: any): void;
        click(): void;
        focus(): void;
        blur(): void;
    }
}
