import {screen} from "electron";

export class DesignUtils {
    static designHeight: number;
    static designWidth: number;
    /**
     * Configure design mode.
     * @param designHeight Design height
     * @param designWidth Design width
     */
    static configure(designHeight: number, designWidth: number) {
        DesignUtils.designHeight = designHeight;
        DesignUtils.designWidth = designWidth;
    }

    static getRealityHeight(height: number): number {
        return (height/this.designHeight) * (1/ screen.getPrimaryDisplay().scaleFactor);
    }

    static getRealityWidth(width: number): number {
        return (width/this.designWidth) * (1/ screen.getPrimaryDisplay().scaleFactor);
    }
}
