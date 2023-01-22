# DiamondSec<img style="padding: 0px 0px 0px 5px" src="images/cropped_logo.png" width=3% alt="logo">
A website that generates strong passwords, evaluates your existing ones, and teaches the user about the core concepts and strategies of password creation and online security.

</br>

## Table of Contents
- [Goal](#goal)
- [The Approach](#the-approach)
- [Functionality](#functionality)
  - [Generating a Secure Password](#generating-a-secure-password)
  - [Evaluating Your Passwords](#evaluating-your-passwords)
- [Design and Prototype](#design-and-prototype)
- [Future Steps](#future-steps)
  
</br>

## Goal
Hackers have many tools in their tool belts that can help crack your passwords and expose your valuable data; ie. credit card information and/or private conversations. So it is essential for individuals on the internet to choose a password that is strong and can protect against popular, malicious password attacks. However, a good password can't help you against phishing attacks, and that is why anyone from an experienced software engineer to a grandmother who only checks her email should have a good understanding of the best practices for password creation and how to keep that password out of the hands of a hacker.

</br>

## The Approach
After brainstorming and blackboarding our initial concept and project idea, we decided how to implement it by weighing our various design options; (1) website or app, (2) back-end, front-end, or full-stack, and (3) desired languages, frameworks, and libraries. We determined that a front-end website written in HTML, CSS, and Javascript that can generate passwords through particular specs such as length and types of accepted characters (ie. numbers, special characters, and letters), as well as evaluating passwords given by the user, would be a useful and simple tool for ensuring strong password use.

Determing password strengths was calculated by testing the password against the top 14 million used passwords and by complexity of the password based on used characters; a password with only numbers has 10^N combinations where N = the length, opposed to lowercase letters and numbers which has 36^N combinations. Therefore, by testing against known passwords and calculating number of combinations based on length, determining password complexity is possible.

Dividing tasks amongst teammates, we were able to separate the website into parts using the GitHub repository; such as UI/UX designs, documentation, and programming the core password generation and analyzation processes in Javascript. After the website's main features were implemented and tested, the website's UI/UX were refined in order to maximize user experience.

</br>

## Functionality

### Generating a Secure Password:

-Select a desired length of the password
</br>
-Select the characters that should be included within the password
</br>
-Keep generating passwords until you find one you like
</br>

### Evaluating Your Passwords:

-Enter a password into the textbox labeled "Enter Password" with any desired password
</br>
-The password will be analyzed and return the password's strength
</br>
-Keep entering passwords until you reach your desired strength
</br>

## Design and Prototype
Over the course of the last 24hrs, we built a website that generates strong passwords, evaluates user inputed password strengths, and educates the user about the basics of cyber security. A video demonstration of it can be accessed on the [Devpost](https://devpost.com/software/diamondsec). The website is hosted on Github and can be accessed [here](https://kritgrover.github.io/conuhacks/).

</br>

## Future Steps
In this day and age, everyone deserves to keep their sensitive data safe from potential hackers. Using our tool, everyone can make their passwords as unbreakable as diamonds.<br>
<br>
At DiamondSec, we are committed to providing our customers with the most secure and user-friendly password generation solutions on the market. As we look to the future, we are focused on the following objectives to continue to grow DiamondSec and promote password protection to the world. One of the objectives we wish to pursue is to implement Artificial Intelligence and Machine Learning to create even more secure and sophisticated password generation algorithms. Moreover, we would like to implement our app for mobile devices, which are more accessible to the general population, to ensure that our customers can securely generate and manage their passwords on-the-go. Furthermore, we wish to seek out and establish partnerships and collaborations with other leading companies in the cybersecurity industry to continue to provide the best possible solutions to our customers.<br>

By pursuing these future endeavours, we are confident that we will continue to lead the way in password generation and help our users protect their online identities with the highest level of security."
</br>
