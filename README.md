# Shoe Store Inventory Monitoring System
**Potloc Test React frontend**

### Overview

The Shoe Store Inventory Monitoring System frontend provides a user-friendly interface for monitoring Aldo's stores and shoes inventory in real-time. This React-based application connects to the backend API to fetch and display inventory data.

## Technologies

The following technologies are used in this project:

||Version|Command for checking
|-|-:|-|
|node|20.11.1|node --version
|npm|10.2.4|npm --version
|react|18.3.1|

## Deployment

To deploy the application, follow these steps:

1. Install dependencies:

```bash
  npm install
```

2. Start the server:

```bash
  npm run dev
```

## Running Tests

Execute the following command to run the tests:

```bash
   npm run test
```

## Solution Approach

The solution approach for building the Shoe Store Inventory Monitoring System frontend involves the following steps:

**Atomic Pattern Design:** The atomic pattern design pattern was implemented to ensure a consistent and modular design architecture. This approach breaks down the user interface into independent and reusable components called "atoms," which are then combined to form more complex molecules and, ultimately, complete organisms. This promotes a clean and scalable code structure, facilitating maintainability and extensibility of the system.

**Design Thinking:** This project embraced certain stages of the Design Thinking methodology. After empathizing with and defining the requirements of the project, ideation took place.

**Inspiration & References**

Various design inspirations and references were explored to create an intuitive and visually appealing user interface. Behance and Dribbble provided valuable insights into dashboard UI designs, particularly focusing on neumorphism design trends.

* https://www.behance.net/gallery/196934185/Neumorphism-Dashboard-UI-Design?tracking_source=search_projects|neumorphism+dashboard&l=0
* https://www.behance.net/gallery/99511533/Neumorphism-Trading-Exchange-Dashboard?tracking_source=search_projects|neumorphism+dashboard&l=13
* https://www.behance.net/gallery/189074535/FinanceDashboard-UIUX-Design?tracking_source=search_projects|neumorphism+dashboard&l=17
* https://dribbble.com/shots/22150452-Analytics-Dashboard

**Wireframes**

Visual wireframes in Figma served as a skeletal framework, providing a visual guide for the project's layout and structure.

**Mockups**

Graphic mockups in Figma further detailed the design, offering a clear representation of the to-be system's interface.

## Future Enhancements

For future enhancements, the installation of Redux was performed. This decision was made in anticipation of receiving anomaly notifications, as Redux offers a convenient solution for managing global variables. By utilizing Redux, the frontend will be well-equipped to receive and handle alerts seamlessly, ensuring efficient monitoring of inventory anomalies.