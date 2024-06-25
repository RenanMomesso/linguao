import { Component } from 'react';
import { ImageProps, ViewStyle } from 'react-native';

declare module 'react-native-image-mapper' {

    interface Coordinate {
        x: number;
        y: number;
    }

    interface Shape {
        shape: 'rectangle' | 'circle' | 'polygon';
        coords: number[];
    }

    interface Area {
        id: string;
        shape: Shape;
        onPress: () => void;
        activeOpacity?: number;
        containerStyle?: ViewStyle;
        imageStyle?: ViewStyle;
    }

    interface ImageMapperProps extends ImageProps {
        imgHeight: number;
        imgWidth: number;
        imgSource: any;
        imgMap: Area[];
        containerStyle?: ViewStyle;
        imgStyle?: ViewStyle;
        onImageLoad?: () => void;
    }

    export default class ImageMapper extends Component<ImageMapperProps> {}
}