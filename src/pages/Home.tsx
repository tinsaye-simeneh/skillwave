// src/pages/Homepage.tsx
import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Container>
          <h1>Your Website</h1>
        </Container>
      </header>

      {/* Hero Header */}
      <Container>
        <Title order={1}>Welcome to Your Website</Title>
        <Text>Your tagline goes here</Text>
      </Container>

      {/* Features Section */}
      <Container>
        <Title order={2}>Key Features</Title>
        <Text>Feature 1: Description of feature 1</Text>
        <Text>Feature 2: Description of feature 2</Text>
        {/* Add more features as needed */}
      </Container>

      {/* FAQ Section */}
      <Container>
        <Title order={2}>Frequently Asked Questions</Title>
        <Text>Q: Your question goes here?</Text>
        <Text>A: Your answer goes here.</Text>
        {/* Add more FAQs as needed */}
      </Container>

      {/* Footer */}
      <footer>
        <Container>
          <Grid>
            <div>
              <p>&copy; 2024 Your Website. All rights reserved.</p>
            </div>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default Homepage;
