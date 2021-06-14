import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs"

export abstract class Unsubscribe implements OnDestroy {
    protected _destroyed$ = new Subject();

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
}