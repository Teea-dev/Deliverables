import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image?: any;
}

const slides: OnboardingSlide[] = [
  {
    id: "1",
    title: "Wide Range Of Food Categories & more",
    description:
      "Browse through our extensive list of restaurants and dishes, and when youre ready to order, simply add your desired items to your cart and checkout. Its that easy!",
    image: require("../assets/images/Illustration.webp"),
  },
  {
    id: "2",
    title: "Free Deliveries for One Month!",
    description:
      "Get your favorite meals delivered to your doorstep for free with our online food delivery app - enjoy a whole month of complimentary delivery!",
    image: require("../assets/images/freeIllustration.webp"),
  },
  {
    id: "3",
    title: "Get Started On Ordering your Food",
    description:
      "Please create an account or sign in to your existing account to start browsing our selection of delicious meals from your favorite restaurants.",
    image: require("../assets/images/deliveryIllustration.webp"),
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const toggleHadOnboarded = useUserStore(
    (state) => state.setHasFinishedOnboarding
  );
  const router = useRouter();

  const handleFinish = () => {
    toggleHadOnboarded();
    router.replace("/");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleFinish();
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  const renderSlide = ({ item }: { item: OnboardingSlide }) => (
    <View style={styles.slide}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === currentIndex && styles.activeDot]}
            />
          ))}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleFinish}>
          <Text style={styles.skipButton}>Skip</Text>
        </Pressable>
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1 ? "Continue" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
      />
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  slide: {
    width,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 60,
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    color: "#666",
    paddingHorizontal: 20,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  imageContainer: {
    width: width * 0.8,
    height: 300,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  nextButton: {
    backgroundColor: "#E47070",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", 
    marginBottom: 20,
    paddingLeft: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#EA985B",
    width: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  skipButton: {
    fontSize: 16,
    color: "#666",
  },

  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
