interface LocalStorageAPI<T> {
  [key: string]: T;
}

abstract class Local<T> {
  protected storage: LocalStorageAPI<T> = {};
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class ClassLocalStorage<T> extends Local<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

interface GeolocationAPI {
  coords: {};
  timestamp: Date;
}

interface GeoError {
  code: number;
  message: string;
}

interface GeoOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface CurPosition {
  success(pos: GeolocationAPI): void;
  error?(err: GeoError): void;
  options?: GeoOptions;
}

class ClassGeolocation<M> {
  private currentPosition: GeolocationAPI = {
    coords: {},
    timestamp: new Date(),
  };
  getCurrentPosition({ success, error, options }: CurPosition): GeolocationAPI {
    if (error) {
    }
    if (options) {
      if (options.enableHighAccuracy) {
      }
      if (options.timeout) {
        setTimeout(() => {}, options.timeout);
      }
      if (options.maximumAge) {
      }
    }
    success(this.currentPosition);

    return this.currentPosition;
  }
  watchPosition({ success, error, options }: CurPosition): number {
    let device_id: number;
    device_id = 10;

    success(this.currentPosition);
    return device_id;
  }
  clearWatch(id: number) {}
}
