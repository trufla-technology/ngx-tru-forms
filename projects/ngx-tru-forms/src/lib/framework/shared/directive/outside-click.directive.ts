import {
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    PLATFORM_ID,
    SimpleChanges,
    NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[jfOutsideClick]'
})
export class OutsideClickDirective implements OnInit, OnChanges, OnDestroy {

    @Input() clickOutsideEnabled = true;
    @Input() attachOutsideOnClick = false;
    @Input() delayClickOutsideInit = false;
    @Input() emitOnBlur = false;
    @Input() exclude = '';
    @Input() excludeBeforeClick = false;
    @Input() clickOutsideEvents = '';
    @Output() clickOutside: EventEmitter<Event> = new EventEmitter<Event>();
    private nodesExcluded: Array<HTMLElement> = [];
    private events: Array<string> = ['click'];
    constructor(
        private el: ElementRef,
        private ngZone: NgZone,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.initOnClickBody = this.initOnClickBody.bind(this);
        this.onClickBody = this.onClickBody.bind(this);
        this.onWindowBlur = this.onWindowBlur.bind(this);
    }

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) { return; }
        this.init();
    }

    ngOnDestroy() {
        if (!isPlatformBrowser(this.platformId)) { return; }
        this.removeClickOutsideListener();
        this.removeAttachOutsideOnClickListener();
        this.removeWindowBlurListener();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!isPlatformBrowser(this.platformId)) { return; }
        if (changes['attachOutsideOnClick'] || changes['exclude'] || changes['emitOnBlur']) {
            this.init();
        }
    }

    private init() {
        if (this.clickOutsideEvents !== '') {
            this.events = this.clickOutsideEvents.split(',').map(e => e.trim());
        }
        this.excludeCheck();
        if (this.attachOutsideOnClick) {
            this.initAttachOutsideOnClickListener();
        } else {
            this.initOnClickBody();
        }
        if (this.emitOnBlur) {
            this.initWindowBlurListener();
        }
    }

    private initOnClickBody() {
        if (this.delayClickOutsideInit) {
            setTimeout(this.initClickOutsideListener.bind(this));
        } else {
            this.initClickOutsideListener();
        }
    }

    private excludeCheck() {
        if (this.exclude) {
            try {
                const nodes = Array.from(document.querySelectorAll(this.exclude)) as Array<HTMLElement>;
                if (nodes) {
                    this.nodesExcluded = nodes;
                }
            } catch (err) {
                console.error(err);
            }
        }
    }

    private onClickBody(ev: Event) {
        if (!this.clickOutsideEnabled) { return; }
        if (this.excludeBeforeClick) {
            this.excludeCheck();
        }
        if (!this.el.nativeElement.contains(ev.target) && !this.shouldExclude(ev.target)) {
            this.emit(ev);
            if (this.attachOutsideOnClick) {
                this.removeClickOutsideListener();
            }
        }
    }

    private onWindowBlur(ev: Event) {
        setTimeout(() => {
            if (!document.hidden) {
                this.emit(ev);
            }
        });
    }

    private emit(ev: Event) {
        if (!this.clickOutsideEnabled) { return; }
        this.ngZone.run(() => this.clickOutside.emit(ev));
    }

    private shouldExclude(target): boolean {
        for (const excludedNode of this.nodesExcluded) {
            if (excludedNode.contains(target)) {
                return true;
            }
        }

        return false;
    }

    private initClickOutsideListener() {
        this.ngZone.runOutsideAngular(() => {
            this.events.forEach(e => document.addEventListener(e, this.onClickBody));
        });
    }

    private removeClickOutsideListener() {
        this.ngZone.runOutsideAngular(() => {
            this.events.forEach(e => document.removeEventListener(e, this.onClickBody));
        });
    }

    private initAttachOutsideOnClickListener() {
        this.ngZone.runOutsideAngular(() => {
            this.events.forEach(e => this.el.nativeElement.addEventListener(e, this.initOnClickBody));
        });
    }

    private removeAttachOutsideOnClickListener() {
        this.ngZone.runOutsideAngular(() => {
            this.events.forEach(e => this.el.nativeElement.removeEventListener(e, this.initOnClickBody));
        });
    }

    private initWindowBlurListener() {
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('blur', this.onWindowBlur);
        });
    }

    private removeWindowBlurListener() {
        this.ngZone.runOutsideAngular(() => {
            window.removeEventListener('blur', this.onWindowBlur);
        });
    }
}
