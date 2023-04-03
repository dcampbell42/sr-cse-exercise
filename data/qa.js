const pageContent = [
  {
    id: 1,
    question: "What do you want to learn or do more of at work?",
    answer:
      "My passion is to help customers achieve their goals and address their problems efficiently, clearly, and completely. I'm a friendly person who is relative new to this space, but I am motivated and a quick learner. I have excellent people skills and am thoughtful with how I speak to people.",
  },
  {
    id: 2,
    question:
      "Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful?",
    answer:
      "In previous employment, I stepped in to lead a team of support professionals. I quickly determined that we were lacking in proper means and methods of documenting our processes, disaster recovery steps, and day-to-day support actions. I quickly rolled out two systems to help with this. First, I implemented a ticketing system for internal employees to use to request the support team's assistance. I also set up a knowledge base for our support team to use to consolidate truth to a single source and offer repeatable, pre-constructed answers for customers and coworkers.",
  },
  {
    id: 3,
    question:
      "How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.",
    answer:
      "Prior to learning Next.js, the only other framework I used was a homebrew MVC PHP framework. I spent about 2 months creating this framework and another 5 years maintaining it and using it across many of our internal and public-facing apps. My framework had relatively few features, but it prioritized best practices and being a repeatable starting point for our applications.",
  },
  {
    id: 4,
    question:
      "When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?",
    answer:
      "Edge Middleware sits closest to the customer. This code executes before a request is processed on your site. It can be used for filtering and personalization. Edge Functions are your Serverless Functions, but served at the edge. These functions are more performant than normal Serverless Functions and have no cold boots. Additionally, they tend to be more cost-effective. Serverless Functions enable developers to handle authentication, form submissions, dynamic page generation, and more. When you need a site to exist beyond static, Serverless Functions are your means of doing so.",
  },
  {
    id: 5,
    question:
      "Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue:<br>Hi there, I keep getting a build error from Vercel saying that “/vercel/path0/dist/routes-manifest.json” couldn’t be found. Can you help me debug this?? I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. Your docs aren’t helpful.",
    answer:
      "Hi there, thank you for contacting Vercel Support. This error is often experienced when your build settings are not correct. Please make sure that your framework is selected on your Project Settings page. If your project's settings are being overridden, please make sure that you have the correct output directory and build command. Please let me know if you have any questions",
  },
  {
    id: 6,
    question:
      "What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?",
    answer:
      "The most common problems would probably be Build and Deployment related, as Vercel offers support for a number of different frameworks, but each may require some configuration to work. Additionally, Billing and Usage would probably require a significant number of time per request, as extensive investigation is often required and conversations transpire over a number of days. Finally, Abuse cases rank highly as the barrier to hosting things that one shouldn't is quite low.",
  },
  {
    id: 7,
    question: "How could we improve or alter this familiarization exercise?",
    answer:
      "It's perfect just the way it is. I enjoy the creative approach to balancing functionality with knowledge and allowing applicants to show their personality with how their test site is constructed.",
  },
];

export default pageContent;
