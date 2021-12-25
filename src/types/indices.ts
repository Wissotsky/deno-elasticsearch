import type {
    Health,
    Timeout,
    CommonCatQueryParameters,
    CommonQueryParameters,
    Bytes,
    WaitForActiveShards
} from './index.ts'

export interface IndiceIndexState {
    mappings?: unknown
    settings?: Record<string, any>
    aliases?: Record<string, IndiceAlias>
    data_stream?: string
}

export interface IndiceAlias {
    filter?: unknown
    index_routing?: string
    is_hidden?: boolean
    is_write_index?: boolean
    routing?: string
    search_routing?: string
}

export interface CatIndice {
    health: Health
    status: string
    index: string
    uuid: string
    pri: number
    rep: number
    'docs.count'?: number
    'docs.deleted'?: number
    'store.size'?: string
    'pri.store.size'?: string
}

export interface CatIndicesRequestQueryParams extends CommonCatQueryParameters {
    bytes?: Bytes
    expand_wildcards?: string
    health?: Health
    include_unloaded_segments?: boolean
    pri?: boolean
}

export interface CatIndicesRequest {
    target?: string
    queryParams?: CatIndicesRequestQueryParams
}

export type CatIndicesResponse = CatIndice[]

export interface IndicesGetRequestQueryParams extends CommonQueryParameters {
    allow_no_indices?: boolean
    expand_wildcards?: string
    ignore_unavailable?: boolean
    flat_settings?: boolean
    include_defaults?: boolean
    local?: boolean
}


export interface IndicesGetRequest {
    target: string
    queryParams?: IndicesGetRequestQueryParams
}

export interface IndicesGetResponse {
    [key: string]: IndiceIndexState
}

export interface IndicesCreateRequestBody {
    mappings?: unknown
    settings?: Record<string, any>
    aliases?: Record<string, IndiceAlias>
}

export interface IndicesCreateRequestQueryParams extends CommonQueryParameters {
    wait_for_active_shards?: WaitForActiveShards
    master_timeout?: Timeout
    timeout?: Timeout
}

export interface IndicesCreateRequest {
    index: string
    body?: IndicesCreateRequestBody
    queryParams?: IndicesCreateRequestQueryParams
}

export interface IndicesCreateResponse {
    index: string
    shards_acknowledged: boolean
    acknowledged?: boolean
}

export interface IndicesDeleteRequestQueryParams extends CommonQueryParameters {
    expand_wildcards?: string
    ignore_unavailable?: boolean
    master_timeout?: Timeout
    timeout?: Timeout
}

export interface IndicesDeleteRequest {
    index: string
    queryParams?: IndicesDeleteRequestQueryParams
}

export interface IndicesDeleteResponse {
    acknowledged: boolean
}

export interface IndicesExistsRequestQueryParams extends CommonQueryParameters {
    allow_no_indices?: boolean
    expand_wildcards?: string
    ignore_unavailable?: boolean
    flat_settings?: boolean
    include_defaults?: boolean
    local?: boolean
}

export interface IndicesExistsRequest {
    target: string
    queryParams?: IndicesExistsRequestQueryParams
}

export interface IndicesCloseRequestQueryParams extends CommonQueryParameters {
    allow_no_indices?: boolean
    expand_wildcards?: string
    ignore_unavailable?: boolean
    wait_for_active_shards?: WaitForActiveShards
    master_timeout?: Timeout
    timeout?: Timeout
}

export interface IndicesCloseRequest {
    index: string
    queryParams?: IndicesCloseRequestQueryParams
}

export interface IndicesCloseResponse {
    acknowledged: boolean
}

export interface IndicesOpenRequestQueryParams extends CommonQueryParameters {
    allow_no_indices?: boolean
    expand_wildcards?: string
    ignore_unavailable?: boolean
    wait_for_active_shards?: WaitForActiveShards
    master_timeout?: Timeout
    timeout?: Timeout
}

export interface IndicesOpenRequest {
    target: string
    queryParams?: IndicesOpenRequestQueryParams
}

export interface IndicesOpenResponse {
    acknowledged: boolean
}

export interface IndicesSettingsGetRequestQueryParams extends CommonQueryParameters {
    allow_no_indices?: boolean
    expand_wildcards?: string
    flat_settings?: boolean
    include_defaults?: boolean
    ignore_unavailable?: boolean
    local?: boolean
    master_timeout?: Timeout
}

export interface IndicesSettingsGetRequest {
    target: string
    setting?: string
    queryParams?: IndicesSettingsGetRequestQueryParams
}

export interface IndicesSettingsGetResponse {
    [key: string]: IndiceIndexState
}