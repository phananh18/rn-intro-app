import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import slides from './src/assets/data/slide'
import colors from './src/assets/colors/colors';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(true);
  const renderNextButton = () => {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Next</Text>
      </View>
    )
  }
  const renderDoneButton = () => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}
        colors={['#A5C8FF', '#23286E']}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>Done</Text>
      </LinearGradient>
    )
  }
  const renderPrevButton = () => {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Prev</Text>
      </View>
    )
  }
  const onDone = () => {
    setShowRealApp(false);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.introImage} source={item.image} />
        <View>
          <Text style={styles.introTitle}>{item.title}</Text>
          <Text style={styles.introText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='transparent' />
      {showRealApp ? (
        <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onDone={onDone}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            React Native App Intro Slider using AppIntroSlider
          </Text>
          <Text style={styles.paragraphStyle}>
            This will be your screen when you click Skip from any slide or
            Done button at last
          </Text>
          <Button
            title="Show Intro Slider again"
            onPress={() => setShowRealApp(true)}
          />
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introImage: {
    marginHorizontal: 20,
  },
  introTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: colors.black,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  introText: {
    marginTop: 20,
    color: colors.gray,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: colors.blueFaded
  },
  activeDotStyle: {
    backgroundColor: colors.blue
  },
  text: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  textWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 25,
    marginRight:-30,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.gray
  },
});
