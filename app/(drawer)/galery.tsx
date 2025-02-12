import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Camera from "../../components/camera";
import { Picture } from "../../types/Picture";
import PictureService from "../../service/pictureService";
import { ScrollView } from "react-native-gesture-handler";
import { asyncStorageService } from "../../service/async-storage-service";

const GaleryPage = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);

  useEffect(() => {
    const checkGalery = async () => {
      const token = await asyncStorageService.get(
        asyncStorageService.KEYS.userToken
      );
      const fetchedPictures = await PictureService.getAllPictures(token);
      setPictures(fetchedPictures);
    };

    checkGalery();
  }, [pictures]);

  const selectionHandler = (picture: Picture) => {
    setSelectedPicture(picture);
  };

  return (
    <View style={styles.container}>
      {selectedPicture && (
        <View style={styles.fullcontainer}>
          <Image
            style={styles.imageselected}
            source={{
              uri: `data:image/jpg;base64,${selectedPicture.encodedData}`,
            }}
          />
          <TouchableOpacity
            style={styles.close}
            onPress={() => setSelectedPicture(null)}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={pictures}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} 
        ListEmptyComponent={<Text>No hay imágenes</Text>}
        contentContainerStyle={styles.galleryContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectionHandler(item)}>
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: `data:image/jpg;base64,${item.encodedData}` }}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default GaleryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  galleryContainer: {
    paddingBottom: 20,
  },
  imageWrapper: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
  fullcontainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  imageselected: {
    width: "90%", 
    height: "80%",
    resizeMode: "contain",
  },
  close: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
