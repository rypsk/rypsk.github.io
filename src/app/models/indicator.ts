import { Geo } from "./geo";
import { Magnitud } from "./magnitud";
import { Value } from "./value";

export interface Indicator {
    name: string;
    short_name: string;
    id: number;
    composited?: any;
    step_type: string;
    disaggregated: boolean;
    magnitud: Magnitud[];
    tiempo?: any;
    geos: Geo[];
    values_updated_at: Date;
    values_sum: number;
    values: Value[];
}
