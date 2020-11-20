import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

const GOOGLE_API_KEY = 'AIzaSyCAWUnsFZHdf05Tpvr9pAekgJkKQHgX_to';


const RoutesMaps = () => {
  const [atual, setAtual] = useState({})
  const [destino, setDestino] = useState("")

  const linkDestino = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destino +"&key=" + GOOGLE_API_KEY;

  const buscarCord = async () => {
    await fetch(linkDestino)
      .then(response => response.json())
      .then(data => { setDestino })
  }

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <MapView

        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitude: -22.3342379,
          longitude: -49.10452910000001
        }}

      >
        <MapViewDirections
          origin={origin}
          destination={destino}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
      </MapView>
      <View>
        <TextInput placeholder="Localização atual" />
        <TextInput style={{ marginTop: 5 }} placeholder="Destino" />
      </View>
      <View>
        <Button
          title="Clique"
          onPress={() => buscarCord()} />
      </View>
    </View>
  )
};

export default RoutesMaps;
