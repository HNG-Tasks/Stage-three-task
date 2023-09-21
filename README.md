[![Netlify Status](https://api.netlify.com/api/v1/badges/d309ca86-e414-45b0-815b-3e6ca4dbe17e/deploy-status)](https://app.netlify.com/sites/hng-gallery-app-task/deploys)

# Gallery App
**Table of Contents**
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Overview
The Gallery App is a web application that allows users to explore and manage a collection of images. Users can log in to the gallery, browse through images, and use the Drag-and-Drop feature to rearrange the image order within the gallery. This README provides detailed instructions on how to set up and run the project locally.

**Prerequisites**
Before you begin, ensure you have met the following requirements:

*Make sure you have Node.js installed on your machine. You can download it from [Node.js](nodejs.org.)*

### Installation
Follow these steps to set up the project locally:

1. **Clone the Repository:** Start by cloning the repository to your local machine using Git:

    ```bash
    git clone https://github.com/HNG-Tasks/Stage-three-task.git

2. **Navigate to the Project Directory:** Change your current directory to the project folder:

cd gallery-app

3. **Install Dependencies:** Install the project dependencies using npm:

npm install

### Usage
To run the Image Gallery App locally, follow these steps:

**Start the Development Server:** Launch the Vite development server:
npm run dev

2. **Open in Browser:** Open your web browser and navigate to http://localhost:3000 to access the Image Gallery App.

### Features
- **User Authentication**: Users can sign up and log in to the gallery.
- **Image Display**: Display a collection of images with titles and tags.
- **Drag-and-Drop**: Users can rearrange images within the gallery using the Drag-and-Drop feature.
- **Image Search**: Users can search for images by tags.
- **Responsive Design**: The app is responsive and adapts to different screen sizes.

### Technologies Used
- Vite: The project uses Vite as the build tool and development server.
- React: The frontend is built with React for UI components.
- Firebase: Firebase is used for user authentication.
- Styled-components: The app utilizes styled-components for styling.
- React DnD: The Drag-and-Drop feature is implemented using React DnD.