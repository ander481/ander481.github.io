import React, { useState } from 'react'

// import Deck.gl
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';



// import layer dataset

import DATASET from '../../data.json';


// MapBox settings
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5kZXI0ODEiLCJhIjoiY2wzdDFjMmlwMDR0YTNjbnhuMGt3bzd5dSJ9.WLVFwpZGYUgT2SmwWo-aTw';



// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 14.4641691,
  latitude: 50.0263714,
  zoom: 13,
  pitch: 0,
  bearing: 0
};






const Mapinterface = () => {


    const [name, setName] = useState();
    const [locality, setLocality] = useState();
    const [price, setPrice] = useState();
    const [square, setSquare] = useState();

    const [mapStyle, setMapStyle] = useState('https://tiles.basemaps.cartocdn.com/gl/voyager-gl-style/style.json');

    const Dashboard = () => {        
        return(
            <div className='dashboard'>
                <div className='map_title'>
                    <h2>Properties in Prague 4</h2>
                </div>
                <p>Visual representation of 2+kk flats for sale from sreality.cz</p>
                <p><span>288</span> were displayed</p>

            </div>
        )
    }

    const Modal = () => {
        return(
            <div className='modal'>
                {name ? null : <small>{'(Click property to see description)'}</small>}
                <div className='map_title'>
                    <h2>{name}</h2>
                </div>
                {locality ? <p>{locality}</p> : null}
                {square ? <p><span>{square}</span> m2</p> : null}
                {price ? <p><span className='price'>{price}</span> czk</p> : null}
            </div>
        )
    }

    const onClick = (info) => {


        if(info.object) {
            setName( () => info.object.properties.name )
            setPrice( () => info.object.properties.price_czk )
            setLocality( () => info.object.properties.locality_name )
            setSquare( () => info.object.properties.square )
        }
    };


    const layers = [
        new GeoJsonLayer({
            id: 'realEstate',
            data: DATASET,
            extruded: true,
            filled: true,
            getElevation: 30,
            // getIconAngle: 0,
            // getIconColor: [0, 0, 0, 255],
            // getIconPixelOffset: [0, 0],
            pointType: 'icon',
            getIcon: f => ({
                url: 'https://raw.githubusercontent.com/ander481/ander481.github.io/a05cce4f8fadac55439ea965447d6890077d2bc7/house_icon.svg',
                width: 150,
                height: 150,
                anchorY: 150
            }),
            getIconSize: 22,
            getIconColor: [0, 0, 0, 255],
            // getText: f => f.properties.name,
            // getTextAlignmentBaseline: 'center',
            // getTextAnchor: 'middle',
            // getTextAngle: 0,
            // getTextBackgroundColor: [255, 255, 255, 255],
            // getTextBorderColor: [0, 0, 0, 255],
            // getTextBorderWidth: 0,
            // getTextColor: [0, 0, 0, 255],
            // getTextPixelOffset: [0, 0],
            // getTextSize: 12,
            // iconAlphaCutoff: 0.05,
            // iconAtlas: null,
            // iconBillboard: true,
            // iconMapping: {},
            // iconSizeMaxPixels: Number.MAX_SAFE_INTEGER,
            // iconSizeMinPixels: 0,
            // iconSizeScale: 1,
            // iconSizeUnits: 'pixels',
            // lineBillboard: false,
            // lineCapRounded: false,
            // lineJointRounded: false,
            // lineMiterLimit: 4,
            // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
            lineWidthMinPixels: 2,
            // lineWidthScale: 1,
            // lineWidthUnits: 'meters',
            // material: true,
            // pointAntialiasing: true,
            // pointBillboard: false,
            // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
            // pointRadiusMinPixels: 0,
            // pointRadiusScale: 1,
            stroked: false,
            // textBackground: false,
            // textBackgroundPadding: [0, 0, 0, 0],
            // textBillboard: true,
            // textCharacterSet: [' ', '!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ''],
            // textFontFamily: 'Monaco, monospace',
            // textFontSettings: {},
            // textFontWeight: 'normal',
            // textLineHeight: 1,
            // textMaxWidth: -1,
            // textOutlineColor: [0, 0, 0, 255],
            // textOutlineWidth: 0,
            // textSizeMaxPixels: Number.MAX_SAFE_INTEGER,
            // textSizeMinPixels: 0,
            // textSizeScale: 1,
            // textSizeUnits: 'pixels',
            // textWordBreak: 'break-word',
            // wireframe: false,
            
            /* props inherited from Layer class */
            
            // autoHighlight: false,
            // coordinateOrigin: [0, 0, 0],
            // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
            // highlightColor: [0, 0, 128, 128],
            // modelMatrix: null,
            // opacity: 1,
            pickable: true,
            // visible: true,
            // wrapLongitude: false,

            onClick,
            Modal
        })
    ];

  return (
    <div className='map'>
        <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        >
            <StaticMap
                mapStyle={ mapStyle }    
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            />

            <Dashboard />
            { Modal ? <Modal /> : null }
        
        </DeckGL>
    </div>
  )
}

export default Mapinterface