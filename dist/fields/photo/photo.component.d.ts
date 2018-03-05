import { CommonComponent } from '../common/common.component';
export declare class PhotoComponent extends CommonComponent {
    photoData: string;
    onChange(event: any): void;
    previewSrcExists(): boolean;
    clearPhoto(): void;
    processFile(dataURL: any, fileType: any): Promise<{}>;
}
