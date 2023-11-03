
<div align="center">
  
  <div>
  <h1 fontSize="500">CarConnect </h1>
  <img height="150" src="https://github.com/talkshrey/imobilothon/assets/79246912/df871ffe-7c16-4a36-92a7-cdb4274199bc" /><br>
  </div>
</div>
<p align="center">
✨Seamless Connectivity for Smart Cars with CarConnect✨
</p>


## Project Description

Amidst the automotive industry's pursuit of excellence, there's a crucial challenge - the need for seamless communication. In this era of real-time vehicle-to-vehicle connectivity, telematics, and data-driven insights, businesses must harness the power of communication to enhance safety, efficiency, and collaboration.The spectrum of solutions is broad, encompassing autonomous vehicles, car connectivity, driver monitoring, safety enhancements, and surveillance. The question is: How can we surprise us with your unique solution to this imperative challenge?

Introducing CarConnect: Transforming the EV Experience

CarConnect is not just another software solution; it's a revolutionary ecosystem designed to redefine the EV ownership experience. Our vision is to seamlessly connect Electric Vehicle (EV) owners, charging infrastructures, and users within an integrated network. With CarConnect, EV users will enjoy a host of intelligent features such as predictive maintenance, efficient routing, and grid-integrated charging. Our goal is to drive electric vehicle adoption, promote sustainability, and make the future of mobility smarter and greener.

## Contents of CarConnect Product Suite 
1. Mobile Application for Car Owners
2. Interface integrated on Car Screen
3. Web Application for User
5. Web Application for CarConnect Admin
<img width="1394" alt="3" src="https://github.com/talkshrey/imobilothon/assets/79246912/3cb3a047-c75b-4f9d-8bbd-46ed7140b89b">

## Table of Contents

- [Project Description](#project-description)
- [Contents of CarConnect Product Suite](#contents-of-carconnect-product-suite)
- [Table of Contents](#table-of-contents)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Demonstration \& Screenshots](#demonstration--screenshots)
  - [Link to video demonstration](#link-to-video-demonstration)
  - [Screenshots of Mobile App](#screenshots-of-mobile-app)
  - [Screenshots of Car Application](#screenshots-of-car-screen)
  - [Screenshots of Admin Panel](#screenshots-of-admin-panel)
- [Installation](#installation)
  - [To run our React Project Locally](#to-run-our-react-project-locally)
  - [To run our React Native Project Locally](#to-run-our-react-native-project-locally)
  - [To run our Django Project Locally](#to-run-our-backend-project-locally)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)



## Technologies Used

CarConnect is a versatile application that supports multiple devices and utilizes a diverse range of technology stacks.
- React (Website to demonstrate car screen)
- Django
- React Native
- SQLite
- Figma


The choice of these technologies is based on factors such as their scalability, cross-platform compatibility, community support, availability of libraries and frameworks, and familiarity of the development team.

*Note: React is used to for demonstration purposes. There will be a separate firmware created for car screen (Car Screen OS)*

## Features

The key features of CarConnect ecosystem are:-
- 3 interfaces : Admin Panel, Mobile and Car Screen <br>
  - Intuitive interfaces catering to different gadgets and enabling seamless interactions.
- Auto-slot booking<br>
    - Secure your charging slot automatically when battery drains below a desired level.
- Manual slot booking <br>
    - Book your slot according your time and convenience.
- Smart Routing <br>
    - Choose the best possible path to reach charging station at the earliest.
- Smart Grid<br>
    - Connects vehicles, charging stations and users to manage efficient routing, traffic allocation, slot booking etc.
- QR Scanning<br>
    - Scan QR codes to make easy in-app payments.
- Statistical Insights<br>
    - Generate insightful statistics and analytics for informed decision-making and trend analysis.
- Blogs<br>
    - To know about the latest trends in the field of connected electric cars.

## Demonstration & Screenshots

### Link to video demonstration 
[CarConnect](https://youtu.be/BtFEAdQDizE)

### Screenshots of Mobile App
![screen1](https://github.com/talkshrey/imobilothon/assets/74039736/dda57039-dcd7-44cc-b46e-c403f04b1949) 
![screen2](https://github.com/talkshrey/imobilothon/assets/74039736/c8f4962d-fe3e-4e8a-ba14-2393bea75ee5)
![screen3](https://github.com/talkshrey/imobilothon/assets/74039736/9224cb69-734e-4dd3-a217-e8e51b43a482)
![Search Screen](https://github.com/talkshrey/imobilothon/assets/74039736/bbb35607-823e-43be-bd74-68dc822f376f)
![Search Screen 3](https://github.com/talkshrey/imobilothon/assets/74039736/c8bc7fe0-601d-4dc4-a866-15c1ddb925b6)
![Search Screen 2](https://github.com/talkshrey/imobilothon/assets/74039736/53ac36a7-486f-4858-a684-b5b28a53cc4a)
![Payment Screen](https://github.com/talkshrey/imobilothon/assets/74039736/1eb8bf15-1ea0-496a-a68c-c2451c0317f5)
![Payment Screen 3](https://github.com/talkshrey/imobilothon/assets/74039736/016fe66f-d165-4553-a5ee-719a4bc10c46)
![Payment Screen 2](https://github.com/talkshrey/imobilothon/assets/74039736/2788982b-3b18-448c-bf49-fc2136d540a9)

### Screenshots of Car Screen
![image](https://github.com/talkshrey/imobilothon/assets/74039736/b89815b8-4242-4e9f-8af9-387f9c1f7909)
![image](https://github.com/talkshrey/imobilothon/assets/74039736/5d0928a5-cabd-415b-89af-8fbec67f8968)
![image](https://github.com/talkshrey/imobilothon/assets/74039736/36872b01-3056-41af-ae7f-def3ec593b22)

### Screenshots of Admin Panel
![image](https://github.com/talkshrey/imobilothon/assets/74039736/39c356af-b355-4941-9f22-41e2172ba21f)
![image](https://github.com/talkshrey/imobilothon/assets/74039736/0a0debfe-bd23-4416-933a-7255722ffaf0)
![image](https://github.com/talkshrey/imobilothon/assets/74039736/c51e2d75-eb45-45f7-9f2a-afd8aa539251)



## Installation

### To run our Backend Project Locally 

Run the backend application before running any frontend application. All migrations have been applied and database has been populated. Follow these steps to run a Django project on your local machine:

1. Clone the project repository: 
```bash
git clone https://github.com/talkshrey/imobilothon
```
2. Navigate to the branch: `backend`
3. Create a virtual environment and pip install the requirements.txt file
4. Navigate to the project directory: `cd carconnect`
5. Simply run the server: `python manage.py runserver`
6. You can login to the admin panel using these credentials: (Username - admin@gmail.com, Password - admin)
7. You can also view the API documentation in the `/swagger` route

### To run our React Project Locally 

Follow these steps to run a React project on your local machine:

1. Clone the project repository: 
```bash
git clone https://github.com/talkshrey/imobilothon
```
2. Navigate to the branch: `frontend`
2. Navigate to the project directory: `cd car-connect`
3. Install project dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000/login`
6. Login with the following credentials: (Username - user1@gmail.com, Password - testpass@123)
7. Once logged in you can go to the home page (main car screen)

You should now see the React project running in your browser. 

### To run our React Native Project Locally

Follow these steps to run a React Native project on your local machine:

1. Clone the project repository: `
```bash
git clone https://github.com/talkshrey/imobilothon
```
2. Navigate to the branch:  `app`
2. Navigate to the project directory: `cd Car-Connect-App`
3. Install project dependencies: `npm install`
4. Make sure you have set up the development environment by installing Node.js and React Native CLI.
5. Connect your Android or iOS device to your computer, or set up an emulator/simulator.
6. Start the development server: `npx react-native start`
7. In a new terminal window, run the project on the connected device or emulator:
   - For Android: `npx react-native run-android`
   - For iOS: `npx react-native run-ios`

The React Native project should now start building and running on your device or emulator. You will see the app running and any changes made to the code will automatically update in real-time.


## Contributors

- [Priyambi Hiran (App | Design) ](https://github.com/priyambi)
- [Shrey Parekh (Frontend | Backend) ](https://github.com/talkshrey)



## Acknowledgements

We would like to express our heartfelt gratitude to Volkswagen for providing us with the incredible opportunity to participate in their prestigious hackathon. This platform has allowed us to showcase our skills, creativity, and innovative ideas in the realm of technology and cars. 


---

Developed by: Team PyTorch

