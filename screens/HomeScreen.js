import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ title, subtitle, count }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
    <View style={styles.cardFooter}>
      <Ionicons name="book-outline" size={16} color="#3182CE" />
      <Text style={styles.cardCount}>{count}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
            <Text style={styles.greeting}>Hi, Fhazar!</Text>
          </View>
          <Ionicons name="search-outline" size={24} color="#333" />
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerText}>Welcome to{`\n`}Cardify</Text>
        </View>

        <Section
          title="Popular Flashcard"
          items={[
            {
              title: "Javascript Basics Flashcard Review",
              subtitle: "- Basic Javascript",
              count: 5,
            },
            {
              title: "Math Essentials",
              subtitle: "- Math",
              count: 5,
            },
          ]}
        />

        <Section
          title="Popular Quiz"
          items={[
            {
              title: "JavaScript Fundamentals Quiz",
              subtitle: "- Basic Javascript",
              count: 10,
            },
            {
              title: "Can You Solve It",
              subtitle: "- Math",
              count: 10,
            },
          ]}
        />

        <Section
          title="Popular Essay"
          items={[
            {
              title: "Why Learning JavaScript Matters in the Digital Era",
              subtitle: "- Basic Javascript",
              count: 5,
            },
            {
              title: "The Importance of Everyday Life",
              subtitle: "- Math",
              count: 5,
            },
          ]}
        />

        <View style={styles.deckHeader}>
          <Text style={styles.sectionTitle}>Your Deck!</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.emptyDeck}>
          <Image
            source={{
              uri: "",
            }}
            style={styles.illustration}
          />
          <Text style={styles.emptyTitle}>No deck yet</Text>
          <Text style={styles.emptySubtitle}>
            Create your first deck to get{" "}
            <Text style={styles.link}>started</Text>
          </Text>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

const Section = ({ title, items }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </ScrollView>
  </View>
);

const BottomNav = () => (
  <View style={styles.bottomNav}>
    <NavItem icon="home" label="Home" active />
    <NavItem icon="library-outline" label="Library" />
    <NavItem icon="stats-chart-outline" label="Stats" />
    <NavItem icon="person-outline" label="Profile" />
  </View>
);

const NavItem = ({ icon, label, active }) => (
  <TouchableOpacity style={styles.navItem}>
    <Ionicons name={icon} size={22} color={active ? "#3182CE" : "#999"} />
    <Text style={[styles.navLabel, active && { color: "#3182CE" }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "600",
  },
  banner: {
    height: 140,
    borderRadius: 20,
    backgroundColor: "#3182CE",
    justifyContent: "center",
    padding: 20,
    marginBottom: 30,
  },
  bannerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF",
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  viewAll: {
    color: "#3182CE",
    fontWeight: "600",
  },
  card: {
    width: 220,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#CBD5E0",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cardCount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3182CE",
  },
  deckHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  emptyDeck: {
    alignItems: "center",
    marginTop: 10,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  emptySubtitle: {
    color: "#777",
  },
  link: {
    color: "#3182CE",
    fontWeight: "600",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});

export default HomeScreen;
