declare namespace $ { }
export = $;

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context | void, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: $mol_ambient_context;
        [$mol_ambient_ref]: $mol_ambient_context;
        get $(): $mol_ambient_context;
        set $(next: $mol_ambient_context);
        constructor(init?: (obj: any) => void);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'url';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $mol_ambient_context, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $mol_ambient_context, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; } & {
        $: $mol_ambient_context;
    }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    const $mol_tree_convert: unique symbol;
    type $mol_tree_path = Array<string | number | null>;
    type $mol_tree_hack = (input: $mol_tree, context: $mol_tree_context) => readonly $mol_tree[];
    type $mol_tree_context = Record<string, $mol_tree_hack>;
    type $mol_tree_library = Record<string, $mol_tree_context>;
    class $mol_tree extends $mol_object2 {
        readonly type: string;
        readonly data: string;
        readonly sub: readonly $mol_tree[];
        readonly baseUri: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(config?: Partial<$mol_tree>);
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config?: Partial<$mol_tree>): $mol_tree;
        make(config: Partial<$mol_tree>): $mol_tree;
        make_data(value: string, sub?: readonly $mol_tree[]): $mol_tree;
        make_struct(type: string, sub?: readonly $mol_tree[]): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        get uri(): string;
        toString(prefix?: string): string;
        toJSON(): any;
        get value(): string;
        insert(value: $mol_tree, ...path: $mol_tree_path): $mol_tree;
        select(...path: $mol_tree_path): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
        transform(visit: (stack: $mol_tree[], sub: () => $mol_tree[]) => $mol_tree | null, stack?: $mol_tree[]): $mol_tree | null;
        hack(context: $mol_tree_context): $mol_tree;
        error(message: string): Error;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: keyof typeof $node.colorette): (this: $mol_ambient_context, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
    function $mol_conform_array<Value, List extends {
        [index: number]: Value;
        length: number;
    }>(target: List, source: List): List;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_async<Args extends any[], Value>(task: (...args: Args) => Value): (...args: Args) => Promise<Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static logs: boolean;
        static wrap<Func extends (...args: any[]) => any>(task: Func): (this: ThisParameterType<Func>, ...args: Parameters<Func>) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any> | null;
        static scheduled: $mol_after_frame | null;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        value: Value;
        error: Error | PromiseLike<Value> | null;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any> | undefined)[];
        calculate: () => Value;
        schedule(): void;
        wake(): Value | undefined;
        push(value: Value): Value;
        fail(error: Error): Error;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        get master(): $mol_fiber;
        set master(next: $mol_fiber);
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value | undefined;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static logs: boolean;
        static get current(): $mol_atom2<any> | null;
        static cached: boolean;
        static reap_task: $mol_fiber<any> | null;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any> | undefined)[];
        rescue(master: $mol_atom2, cursor: number): void;
        subscribe(promise: Promise<unknown>): Promise<void>;
        get(): Value;
        pull(): void;
        _value: Value;
        get value(): Value;
        set value(next: Value);
        _error: Error | PromiseLike<Value> | null;
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        get fresh(): () => void;
        get alone(): boolean;
        get derived(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_atom2_value;
    function $mol_mem_persist(): void;
    function $mol_mem<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): {
        value: ((this: Host, next?: $mol_type_param<Prop, 0> | undefined, force?: $mol_mem_force | undefined) => any) & {
            orig: NonNullable<Prop>;
        };
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value | undefined;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (id: any, next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value | undefined) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_func_name(this: $mol_ambient_context, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): ClientRect | null;
        view_rect_cache(next?: ClientRect | null): ClientRect | null;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
    type $mol_view_all = $mol_type_pick<$mol_ambient_context, typeof $mol_view>;
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    const $mol_colors: {
        readonly aliceblue: "#f0f8ff";
        readonly antiquewhite: "#faebd7";
        readonly aqua: "#00ffff";
        readonly aquamarine: "#7fffd4";
        readonly azure: "#f0ffff";
        readonly beige: "#f5f5dc";
        readonly bisque: "#ffe4c4";
        readonly black: "#000000";
        readonly blanchedalmond: "#ffebcd";
        readonly blue: "#0000ff";
        readonly blueviolet: "#8a2be2";
        readonly brown: "#a52a2a";
        readonly burlywood: "#deb887";
        readonly cadetblue: "#5f9ea0";
        readonly chartreuse: "#7fff00";
        readonly chocolate: "#d2691e";
        readonly coral: "#ff7f50";
        readonly cornflowerblue: "#6495ed";
        readonly cornsilk: "#fff8dc";
        readonly crimson: "#dc143c";
        readonly cyan: "#00ffff";
        readonly darkblue: "#00008b";
        readonly darkcyan: "#008b8b";
        readonly darkgoldenrod: "#b8860b";
        readonly darkgray: "#a9a9a9";
        readonly darkgreen: "#006400";
        readonly darkgrey: "#a9a9a9";
        readonly darkkhaki: "#bdb76b";
        readonly darkmagenta: "#8b008b";
        readonly darkolivegreen: "#556b2f";
        readonly darkorange: "#ff8c00";
        readonly darkorchid: "#9932cc";
        readonly darkred: "#8b0000";
        readonly darksalmon: "#e9967a";
        readonly darkseagreen: "#8fbc8f";
        readonly darkslateblue: "#483d8b";
        readonly darkslategrey: "#2f4f4f";
        readonly darkturquoise: "#00ced1";
        readonly darkviolet: "#9400d3";
        readonly deeppink: "#ff1493";
        readonly deepskyblue: "#00bfff";
        readonly dimgray: "#696969";
        readonly dimgrey: "#696969";
        readonly dodgerblue: "#1e90ff";
        readonly firebrick: "#b22222";
        readonly floralwhite: "#fffaf0";
        readonly forestgreen: "#228b22";
        readonly fuchsia: "#ff00ff";
        readonly gainsboro: "#dcdcdc";
        readonly ghostwhite: "#f8f8ff";
        readonly gold: "#ffd700";
        readonly goldenrod: "#daa520";
        readonly gray: "#808080";
        readonly green: "#008000";
        readonly greenyellow: "#adff2f";
        readonly grey: "#808080";
        readonly honeydew: "#f0fff0";
        readonly hotpink: "#ff69b4";
        readonly indianred: "#cd5c5c";
        readonly indigo: "#4b0082";
        readonly ivory: "#fffff0";
        readonly khaki: "#f0e68c";
        readonly lavender: "#e6e6fa";
        readonly lavenderblush: "#fff0f5";
        readonly lawngreen: "#7cfc00";
        readonly lemonchiffon: "#fffacd";
        readonly lightblue: "#add8e6";
        readonly lightcoral: "#f08080";
        readonly lightcyan: "#e0ffff";
        readonly lightgoldenrodyellow: "#fafad2";
        readonly lightgray: "#d3d3d3";
        readonly lightgreen: "#90ee90";
        readonly lightgrey: "#d3d3d3";
        readonly lightpink: "#ffb6c1";
        readonly lightsalmon: "#ffa07a";
        readonly lightseagreen: "#20b2aa";
        readonly lightskyblue: "#87cefa";
        readonly lightslategray: "#778899";
        readonly lightslategrey: "#778899";
        readonly lightsteelblue: "#b0c4de";
        readonly lightyellow: "#ffffe0";
        readonly lime: "#00ff00";
        readonly limegreen: "#32cd32";
        readonly linen: "#faf0e6";
        readonly magenta: "#ff00ff";
        readonly maroon: "#800000";
        readonly mediumaquamarine: "#66cdaa";
        readonly mediumblue: "#0000cd";
        readonly mediumorchid: "#ba55d3";
        readonly mediumpurple: "#9370db";
        readonly mediumseagreen: "#3cb371";
        readonly mediumslateblue: "#7b68ee";
        readonly mediumspringgreen: "#00fa9a";
        readonly mediumturquoise: "#48d1cc";
        readonly mediumvioletred: "#c71585";
        readonly midnightblue: "#191970";
        readonly mintcream: "#f5fffa";
        readonly mistyrose: "#ffe4e1";
        readonly moccasin: "#ffe4b5";
        readonly navajowhite: "#ffdead";
        readonly navy: "#000080";
        readonly oldlace: "#fdf5e6";
        readonly olive: "#808000";
        readonly olivedrab: "#6b8e23";
        readonly orange: "#ffa500";
        readonly orangered: "#ff4500";
        readonly orchid: "#da70d6";
        readonly palegoldenrod: "#eee8aa";
        readonly palegreen: "#98fb98";
        readonly paleturquoise: "#afeeee";
        readonly palevioletred: "#db7093";
        readonly papayawhip: "#ffefd5";
        readonly peachpuff: "#ffdab9";
        readonly peru: "#cd853f";
        readonly pink: "#ffc0cb";
        readonly plum: "#dda0dd";
        readonly powderblue: "#b0e0e6";
        readonly purple: "#800080";
        readonly rebeccapurple: "#663399";
        readonly red: "#ff0000";
        readonly rosybrown: "#bc8f8f";
        readonly royalblue: "#4169e1";
        readonly saddlebrown: "#8b4513";
        readonly salmon: "#fa8072";
        readonly sandybrown: "#f4a460";
        readonly seagreen: "#2e8b57";
        readonly seashell: "#fff5ee";
        readonly sienna: "#a0522d";
        readonly silver: "#c0c0c0";
        readonly skyblue: "#87ceeb";
        readonly slateblue: "#6a5acd";
        readonly slategray: "#708090";
        readonly slategrey: "#708090";
        readonly snow: "#fffafa";
        readonly springgreen: "#00ff7f";
        readonly steelblue: "#4682b4";
        readonly tan: "#d2b48c";
        readonly teal: "#008080";
        readonly thistle: "#d8bfd8";
        readonly tomato: "#ff6347";
        readonly turquoise: "#40e0d0";
        readonly violet: "#ee82ee";
        readonly wheat: "#f5deb3";
        readonly white: "#ffffff";
        readonly whitesmoke: "#f5f5f5";
        readonly yellow: "#ffff00";
        readonly yellowgreen: "#9acd32";
    };
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset';
    type Color = keyof typeof $mol_colors | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'>;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | ['first' | 'last', 'baseline'] | ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        background?: 'none' | {
            color?: Color | Common;
            image?: [$mol_style_func<'url'>][];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[];
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch';
        scrollbar?: {
            color?: [Color, Color] | 'dark' | 'light' | 'auto' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | [Span_align, Span_align] | Common;
            };
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        _event_scroll_timer(val?: any, force?: $mol_mem_force): any;
        field(): {
            scrollTop: any;
            scrollLeft: any;
            tabIndex: number;
        };
        scroll_top(val?: any, force?: $mol_mem_force): any;
        scroll_left(val?: any, force?: $mol_mem_force): any;
        tabindex(): number;
        event(): {
            scroll: (event?: any) => any;
        };
        event_scroll(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number): number;
        scroll_left(next?: number): number;
        _event_scroll_timer(next?: $mol_after_timeout | null): $mol_after_timeout | null | undefined;
        event_scroll(next?: Event): void;
    }
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        sub(): readonly $mol_view[];
        pages(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        sub(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    function $mol_lights(this: $mol_ambient_context, next?: boolean): boolean;
}

declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        click(event?: any, force?: $mol_mem_force): any;
        event_click(event?: any, force?: $mol_mem_force): any;
        event(): {
            click: (event?: any) => any;
            keypress: (event?: any) => any;
        };
        event_activate(event?: any, force?: $mol_mem_force): any;
        event_key_press(event?: any, force?: $mol_mem_force): any;
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        disabled(): boolean;
        tab_index(): number;
        hint_or_error(): string;
        hint(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        Speck(): $mol_speck;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        fiber(next?: $mol_fiber<any> | null): $mol_fiber<any> | null;
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_or_error(): string;
        sub_visible(): (string | number | boolean | $mol_view | Node | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        sub(): readonly any[];
        Head(): $mol_view;
        head(): readonly any[];
        Title(): $$.$mol_button;
        event_top(val?: any, force?: $mol_mem_force): any;
        Tools(): $mol_view;
        tools(): readonly (string | number | boolean | $mol_view | Node)[];
        Body(): $$.$mol_scroll;
        body_scroll_top(val?: any, force?: $mol_mem_force): any;
        body(): readonly (string | number | boolean | $mol_view | Node)[];
        Foot(): $mol_view;
        foot(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        reset(): void;
        version(): string;
        abstract ensure(next?: boolean): boolean;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean, force?: $mol_mem_force): boolean;
        type(): $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        text(next?: string, force?: $mol_mem_force): string;
        fail(error: Error): void;
        buffer_cached(buffer: Uint8Array): void;
        text_cached(content: string): void;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        ensure(next?: boolean): boolean;
        buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): any;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: any;
            "aria-checked": any;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        checked(val?: any, force?: $mol_mem_force): any;
        sub(): readonly any[];
        Icon(): any;
        label(): readonly any[];
        Title(): $mol_view;
        title(): string;
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): any[];
        label(): readonly any[];
    }
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        Path(): $mol_svg_path;
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_brightness_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon(): $mol_icon_brightness_6;
        Lights_icon(): $mol_icon_brightness_6;
        hint(): string;
        checked(val?: any, force?: $mol_mem_force): any;
        lights(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        theme(): any;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        click(event?: any, force?: $mol_mem_force): any;
        event_click(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
        minimal_height(): number;
        theme(): "$mol_theme_base" | null;
    }
}

declare namespace $ {
    class $mol_icon_github_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_source extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_github_circle;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        rows(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        gap_before(): number;
        Gap_after(): $mol_view;
        gap_after(): number;
        view_window(): readonly any[];
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
        style(): {
            minHeight: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            paddingLeft: string;
        };
        level_style(): string;
        checked(val?: any, force?: $mol_mem_force): any;
        expanded(val?: any, force?: $mol_mem_force): any;
        enabled(): boolean;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
    }
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        parts(): readonly (string | number | boolean | $mol_view | Node)[];
        Low(id: any): $$.$mol_paragraph;
        string(id: any): string;
        High(id: any): $$.$mol_paragraph;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_scroll {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(index: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): readonly any[];
        Table(): $mol_grid_table;
        rows(): readonly $mol_view[];
        Head(): $mol_grid_row;
        head_cells(): readonly $mol_view[];
        Row(id: any): $mol_grid_row;
        cells(id: any): readonly $mol_view[];
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        cell_content_text(id: any): readonly (string | number | boolean | $mol_view | Node)[];
        cell_content(id: any): readonly (string | number | boolean | $mol_view | Node)[];
        Cell_number(id: any): $mol_grid_number;
        cell_content_number(id: any): readonly (string | number | boolean | $mol_view | Node)[];
        Col_head(id: any): $mol_float;
        col_head_content(id: any): readonly (string | number | boolean | $mol_view | Node)[];
        Cell_branch(id: any): $$.$mol_check_expand;
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any, force?: $mol_mem_force): any;
        Cell_content(id: any): readonly any[];
        Cell_dimmer(id: any): $$.$mol_dimmer;
        needle(): string;
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_list {
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean | null;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
        };
        uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        sub(): readonly any[];
        Icon(): $mol_image;
        icon(): string;
        content(): readonly any[];
        title(): string;
        host(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): any[];
    }
}

declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $$.$mol_text;
        quote_text(id: any): string;
        Row(id: any): $mol_text_row;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        Table(id: any): $$.$mol_grid;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        Table_row(id: any): $mol_grid_row;
        table_cells(id: any): readonly any[];
        Table_cell(id: any): $mol_grid_cell;
        table_cell_content(id: any): readonly any[];
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_paragraph {
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_header_level: any;
        };
        level(val?: any, force?: $mol_mem_force): any;
        sub(): readonly any[];
        content(): readonly any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: any;
        };
        type(val?: any, force?: $mol_mem_force): any;
        sub(): any;
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_link_iconed {
        attr(): {
            mol_text_type: any;
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        type(val?: any, force?: $mol_mem_force): any;
        uri(): any;
        link(val?: any, force?: $mol_mem_force): any;
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            allowfullscreen: boolean;
            mol_text_type: any;
            data: any;
        };
        type(val?: any, force?: $mol_mem_force): any;
        link(val?: any, force?: $mol_mem_force): any;
        sub(): readonly any[];
        title(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code3: RegExp;
        code: RegExp;
        strike: RegExp;
        'text-link': RegExp;
        'image-link': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        rows(): ($mol_grid | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): $mol_view[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): $mol_view[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): $mol_view[];
        code2spans(prefix: string, text: string): $mol_view[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $hyoo_habhub extends $mol_book2 {
        plugins(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        Menu_page(): $$.$mol_page;
        menu_title(): string;
        tools_root(): readonly any[];
        Lights(): $$.$mol_lights_toggle;
        Source_link(): $mol_link_source;
        Menu(): $$.$mol_list;
        menu_rows(): readonly any[];
        Details(id: any): $$.$mol_page;
        gist_current_title(): string;
        Close(): $$.$mol_link;
        close_arg(): {
            gist: any;
        };
        Close_icon(): $mol_icon_cross;
        details_scroll_top(val?: any, force?: $mol_mem_force): any;
        Details_content(): $$.$mol_list;
        Datails_text(): $$.$mol_text;
        gist_current_content(): string;
        Menu_row(id: any): $$.$mol_link;
        gist_title(id: any): string;
        gist_arg(id: any): {};
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: SupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request: (input: RequestInfo, init?: RequestInit | undefined) => Response;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_model<Raw extends Object> extends $mol_object {
        static item<Instance extends $mol_model<{}>>(this: {
            new (): Instance;
        }, uri: string): Instance;
        static cache<Raw extends Object>(): {};
        uri(): string;
        resource_url(): string;
        method_put(): string;
        json(next?: Partial<Raw>, force?: $mol_mem_force): Raw;
        json_update(patch: Partial<Raw>): Raw;
    }
    function $mol_model_prop<Value, Json>(field: string, make: (json: Json) => Value): <Raw extends Object, Host extends $mol_model<Raw>>(host: Host, prop: string, descr: TypedPropertyDescriptor<(next?: Value | undefined) => Value>) => void;
}

declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            mm: (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $mol_atom_wait extends Promise<void> {
        message: string;
        constructor(message?: string);
    }
}

declare namespace $ {
    class $mol_github_auth extends $mol_object {
        static id(): string;
        static secret(): string;
        static code_uri(): string;
        static token_uri(): string;
        static cache(next?: {
            scopes: string[];
            token: string;
        }): {
            scopes: string[];
            token: string;
        };
        static scopes(next?: string[]): string[];
        static code(next?: string, force?: $mol_mem_force): string;
        static token_last(next?: string, force?: $mol_mem_force): string;
        static token(scopes: string[]): string;
    }
}

declare namespace $ {
    interface $mol_github_entity_json {
        url?: string;
        html_url?: string;
        id?: number;
        created_at?: string;
        updated_at?: string;
    }
    class $mol_github_entity<Raw extends $mol_github_entity_json> extends $mol_model<Raw> {
        link(): string | undefined;
        id(): number | undefined;
        moment_created(): $mol_time_moment;
        moment_updated(): $mol_time_moment;
        method_put(): string;
        resource_url(): string;
    }
}

declare namespace $ {
    interface $mol_github_user_json extends $mol_github_entity_json {
        login: string;
        avatar_url: string;
        gravatar_id: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: false;
    }
    class $mol_github_user extends $mol_github_entity<$mol_github_user_json> {
        name(): string;
        avatar(): string;
    }
}

declare namespace $ {
    interface $mol_github_label_json extends $mol_github_entity_json {
        name?: string;
        color?: string;
        default?: boolean;
    }
    class $mol_github_label extends $mol_github_entity<$mol_github_label_json> {
        name(): string | undefined;
        color(): string | undefined;
        default(): boolean | undefined;
    }
}

declare namespace $ {
    interface $mol_github_repository_json extends $mol_github_entity_json {
        name?: string;
        full_name?: string;
        owner?: $mol_github_user_json;
        author_association?: string;
        private?: false;
        description?: string;
        fork?: false;
        forks_url?: string;
        keys_url?: string;
        collaborators_url?: string;
        teams_url?: string;
        hooks_url?: string;
        issue_events_url?: string;
        events_url?: string;
        assignees_url?: string;
        branches_url?: string;
        tags_url?: string;
        blobs_url?: string;
        git_tags_url?: string;
        git_refs_url?: string;
        trees_url?: string;
        statuses_url?: string;
        languages_url?: string;
        stargazers_url?: string;
        contributors_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        commits_url?: string;
        git_commits_url?: string;
        comments_url?: string;
        issue_comment_url?: string;
        contents_url?: string;
        compare_url?: string;
        merges_url?: string;
        archive_url?: string;
        downloads_url?: string;
        issues_url?: string;
        pulls_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        labels_url?: string;
        releases_url?: string;
        deployments_url?: string;
        pushed_at?: string;
        git_url?: string;
        ssh_url?: string;
        clone_url?: string;
        svn_url?: string;
        homepage?: string;
        size?: number;
        stargazers_count?: number;
        watchers_count?: number;
        language?: string;
        has_issues?: boolean;
        has_projects?: boolean;
        has_downloads?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        forks_count?: number;
        mirror_url?: string;
        archived?: boolean;
        open_issues_count?: number;
        watchers?: number;
        default_branch?: string;
        network_count?: number;
        subscribers_count?: number;
    }
    class $mol_github_repository extends $mol_github_entity<$mol_github_repository_json> {
        json_update(patch: Partial<$mol_github_repository_json>): $mol_github_repository_json;
        owner(): $mol_github_user;
        name(): string;
        name_full(): string;
        issues(): $mol_github_repository_issues;
    }
    class $mol_github_repository_issues extends $mol_model<$mol_github_issue_json[]> {
        json_update(patch: $mol_github_issue_json[]): $mol_github_issue_json[];
        items(next?: $mol_github_issue[], force?: $mol_mem_force): $mol_github_issue[];
        add(config: {
            title: string;
            text?: string;
        }, next?: $mol_github_issue, force?: $mol_mem_force): $mol_github_issue | undefined;
    }
}

declare namespace $ {
    interface $mol_github_comment_json extends $mol_github_entity_json {
        issue_url: string;
        user: $mol_github_user_json;
        author_association: string;
        body: string;
    }
    class $mol_github_comment extends $mol_github_entity<$mol_github_comment_json> {
        json_update(patch: Partial<$mol_github_comment_json>): $mol_github_comment_json;
        issue(): $mol_github_issue;
        user(): $mol_github_user;
        text(next?: string): string;
    }
}

declare namespace $ {
    interface $mol_github_issue_json extends $mol_github_entity_json {
        repository_url: string;
        labels_url: string;
        comments_url: string;
        events_url: string;
        number: number;
        title: string;
        user: $mol_github_user_json;
        labels: $mol_github_label_json[];
        state: string;
        locked: string;
        assignees: $mol_github_user_json[];
        milestone: {
            url: string;
        };
        comments: 2;
        closed_at: string;
        author_association: string;
        body: string;
        closed_by: $mol_github_user_json;
    }
    class $mol_github_issue extends $mol_model<$mol_github_issue_json> {
        json_update(patch: Partial<$mol_github_issue_json>): $mol_github_issue_json;
        repository(): $mol_github_repository;
        author(): $mol_github_user;
        title(): string;
        text(): string;
        closer(): $mol_github_user;
        assignees(): $mol_github_user[];
        labels(): $mol_github_label[];
        moment_closed(): $mol_time_moment;
        comments(): $mol_github_issue_comments;
    }
    class $mol_github_issue_comments extends $mol_model<$mol_github_comment_json[]> {
        json_update(patch: Partial<$mol_github_repository_json[]>): $mol_github_comment_json[];
        items(next?: $mol_github_comment[], force?: $mol_mem_force): $mol_github_comment[];
        add(config: {
            text: string;
        }, next?: $mol_github_comment, force?: $mol_mem_force): $mol_github_comment | undefined;
    }
}

declare namespace $ {
    interface $mol_github_search_issues_json {
        incomplete_results: boolean;
        items: $mol_github_issue_json[];
        total_count: number;
    }
    class $mol_github_search_issues extends $mol_model<$mol_github_search_issues_json> {
        json_update(patch: $mol_github_search_issues_json): $mol_github_search_issues_json;
        items(next?: $mol_github_issue[], force?: $mol_mem_force): $mol_github_issue[];
        resource_url(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_habhub extends $.$hyoo_habhub {
        uriSource(): string;
        gists(): $mol_github_issue[];
        gists_dict(): {
            [key: string]: $mol_github_issue;
        };
        gist(id: number): $mol_github_issue;
        gist_current(): $mol_github_issue;
        pages(): $mol_page[];
        menu_rows(): $mol_view[];
        gist_title(id: number): string;
        gist_arg(id: number): {
            gist: number;
        };
        gist_current_title(): string;
        gist_current_content(): string;
        gist_current_issue(): $mol_github_issue;
        details_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    function $mol_exec(this: $mol_ambient_context, dir: string, command: string, ...args: string[]): any;
}
