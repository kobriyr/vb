import {ElementRef} from '@angular/core';

declare var M;

export class MaterializeService {
    static collapsible(collapsibleRef: ElementRef, option) {
        M.Collapsible.init(collapsibleRef.nativeElement, option);
    }

    static toast(message: string) {
        M.toast({html: message});
    }

    static updateTextInputs() {
        M.updateTextFields();
    }

    static textareaAuto(ref: ElementRef) {
        M.textareaAutoResize(ref.nativeElement);
    }
}
