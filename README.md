# Atelier
Front End Capstone

**OVERVIEW:**
Atelier is our Front End Capstone project. It is a single page application written in React, with an Express and Nodejs server running in the background. This repo comprises four widgets and is a clone of Target.com’s product pages. It uses an external API to make real-time calls and return product data and information.
This repo comprises four widgets that create a single product page for our organization.

**Table of Contents**
*[Overview Widget](#Overview)
*[Related Products Widget](#RelatedProductsWidget)
*[Questions Widget Widget](#QuestionsWidget)
*[Ratings And Reviews Widget](#RatingsAndReviewsWidget)
*[Installation](#Installation)
*[Team Members](#TeamMembers)
*[RoadMap](#RoadMap)


**#Overview Widget:**
Users can view a detailed description of the product and see its price, availability, and other relevant details.
The far left side of the widget holds a vertical gallery to see the product in different settings and angles.
The right side shows its total star rating, as well as size tabs, colors, and also includes an Add-To-Cart button.



**#Related Products Widget:**
This section displays similar products that users may be interested in. This wonderful carousel slides to the right and left. This is an ambi-turner. Each product displayed has an image, price, star rating, and an ability to "like" the product. The carousel

This widget contains 2 carousels to display products to the user. The first carousel - related products dis

This section contains 2 carousels: Related Products and Your Outfit

The Related Products Carousel: displays products related to the item currently being viewed in the Overview. The carousel does not have a limit to the number of related products it can contain and overflows to give a seamless and endless effect. The Related Product Cards within the carousel contain key information including category, product name, price, and overall star rating. At the top right of each card is a Star icon that when clicked opens up a comparison modal that compares the unique qualities of the current product in over and the related product selected.

Your Outfit Carousel: Displays a clickable card icon that when clicked adds the current product in the Overview section to a carousel to create a unique outfit.

**#Questions Widget:**
This widget allows users to ask and answer questions about the product.

The top of this wight has a search bar that searches all of the questions asked about the widget. It only fires after three characters are written.

Two questions are displayed at the start, but all can be loaded. Each question has two answers also displayed, but all can also be viewed as expanded.

Answers can display images as well.

Users can click on the helpfulness of questions and add answers.

Answers can be reported and removed from the question until our Customer Satisfaction Team can review.

At the bottom there is a button to add a question.

Both questions and answers are created in a pop-up modal that can only be submitted if all necessary information is entered.


**#Ratings and Reviews Widget:**
Reviews section enables users to read and write reviews of the product.

The left side of the widget displays the overall star rating as well as a percentage of reviews that recommend the product.

Below the percentage there is a breakdown showing how many 5,4,3,2 & 1 stars were selected. The reviews are collapsible and expandable showing two at the beginning. Each review shows stars, name of reviewer, date, Title, and the review itself with pictures.

Anyone can also add a review which is displayed in a modal.


**#Installation:**
To run Atelier, make sure you have Nodejs and npm installed on your machine. Then, clone the repository and navigate to the root directory. Run npm install to install all necessary dependencies, and then npm start to start the server. “npm run client-dev” will compile the react application. The app will be available at http://localhost:3000.

We hope you enjoy using Atelier! If you have any issues or suggestions, please don't hesitate to reach out.


**#Team Members:**
* Brian Kuzma: Questions
* Aaron Miller: Related Products
* Mindi Weik: Overview
* Thomas Van: Reviews


**#Road Map:**
This product page is ready to ship and be fully integrated into the larger org website. Additional extra functionality can be added with more time for the team.


**#License:**
@license React v17.0.2
This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
