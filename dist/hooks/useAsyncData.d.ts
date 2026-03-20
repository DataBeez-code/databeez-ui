export interface AsyncDataState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}
export declare function useAsyncData<T>(fetcher: () => Promise<{
    success: boolean;
    data?: T;
    error?: {
        message: string;
    };
}>, options?: {
    immediate?: boolean;
    deps?: unknown[];
}): AsyncDataState<T>;
