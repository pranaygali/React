import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Home = (navigation) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.google.com/search?q=naruto+house+images&rlz=1C1GCEU_enCA977CA977&tbm=isch&source=iu&ictx=1&fir=ktmUUKGly81t4M%252Cip7PS6OFfeaatM%252C_%253BUzW3SdVeyMb45M%252C6dsgb4ujCjJJJM%252C_%253BplTrEGCkJEAIoM%252C0BMNN1iN__17VM%252C_%253BNIAM0SVFSlFWRM%252Cu6D0f3eWwsD7iM%252C_%253BgyNuK15kS4b56M%252C6dsgb4ujCjJJJM%252C_%253BnUIeNHc4wWI0LM%252C9LmrTpLj4ksuXM%252C_%253BqX3W_f7sH4af6M%252CMrKlW8hJP2FhwM%252C_%253B4rqYs-mD1jdEvM%252CWwGK7q8V8vqNAM%252C_%253BrTTBCnRR_L3l0M%252C_Ho0rPhT39fuUM%252C_%253BOItDIjiM7ZivvM%252CrcA_BqjnF2ksSM%252C_%253B9MZMqRNOBG-uTM%252C1i8qxc4MthiF_M%252C_%253B6rfeUVOsr9vJkM%252CcdwpJ4ncZbK1lM%252C_&vet=1&usg=AI4_-kRAFfe4U9qW-9D7IByErfnWezDJrQ&sa=X&ved=2ahUKEwigx7ry__nzAhUnhOAKHah6DUkQ9QF6BAgFEAE&biw=1920&bih=912&dpr=1#imgrc=ktmUUKGly81t4M',
        }}
      />

      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.google.com/search?q=naruto+house+images&rlz=1C1GCEU_enCA977CA977&tbm=isch&source=iu&ictx=1&fir=ktmUUKGly81t4M%252Cip7PS6OFfeaatM%252C_%253BUzW3SdVeyMb45M%252C6dsgb4ujCjJJJM%252C_%253BplTrEGCkJEAIoM%252C0BMNN1iN__17VM%252C_%253BNIAM0SVFSlFWRM%252Cu6D0f3eWwsD7iM%252C_%253BgyNuK15kS4b56M%252C6dsgb4ujCjJJJM%252C_%253BnUIeNHc4wWI0LM%252C9LmrTpLj4ksuXM%252C_%253BqX3W_f7sH4af6M%252CMrKlW8hJP2FhwM%252C_%253B4rqYs-mD1jdEvM%252CWwGK7q8V8vqNAM%252C_%253BrTTBCnRR_L3l0M%252C_Ho0rPhT39fuUM%252C_%253BOItDIjiM7ZivvM%252CrcA_BqjnF2ksSM%252C_%253B9MZMqRNOBG-uTM%252C1i8qxc4MthiF_M%252C_%253B6rfeUVOsr9vJkM%252CcdwpJ4ncZbK1lM%252C_&vet=1&usg=AI4_-kRAFfe4U9qW-9D7IByErfnWezDJrQ&sa=X&ved=2ahUKEwigx7ry__nzAhUnhOAKHah6DUkQ9QF6BAgFEAE&biw=1920&bih=912&dpr=1#imgrc=4rqYs-mD1jdEvM',
        }}
      />

        
      <Button onPress = {() => navighation.navigate('Contact')}
      title="Contact"
      />

        <Button onPress = {() => navighation.navigate('Contact')}
      title="About"
      />
    </View>
  );
}

export default Home;