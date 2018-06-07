import { ElementRef, OnChanges, Provider, Renderer, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const MASKEDINPUT_VALUE_ACCESSOR: Provider;
export declare class MaskedInputDirective implements ControlValueAccessor, OnChanges {
    private renderer;
    private element;
    private textMaskInputElement;
    private inputElement;
    textMaskConfig: {
        mask: any[];
        guide: boolean;
        placeholderChar: string;
        pipe: any;
        keepCharPositions: boolean;
    };
    _onTouched: () => void;
    _onChange: (_: any) => void;
    constructor(renderer: Renderer, element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    onInput(value: any): void;
    private setupMask(create?);
}
export declare class TextMaskModule {
}
export { conformToMask } from 'text-mask-core/dist/textMaskCore';
