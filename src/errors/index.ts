export class UnityProjectNotSetError extends Error {
  constructor() {
    super('Unity project not set. Use set_unity_project first.');
    this.name = 'UnityProjectNotSetError';
  }
}

export class InvalidUnityProjectError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidUnityProjectError';
  }
}

export class FileNotFoundError extends Error {
  constructor(fileName: string, fileType: string = 'File') {
    super(`${fileType} ${fileName} not found.`);
    this.name = 'FileNotFoundError';
  }
}

export class BuildError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BuildError';
  }
}

export class InvalidParameterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidParameterError';
  }
}

export class FileOperationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileOperationError';
  }
}

export class ShaderCompilationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ShaderCompilationError';
  }
}

export class MaterialError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MaterialError';
  }
}

export class AssetNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AssetNotFoundError';
  }
}