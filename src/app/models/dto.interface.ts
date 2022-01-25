import { Observable } from "rxjs";

export interface dto {
    name: string,
    value: Observable<number>
}

