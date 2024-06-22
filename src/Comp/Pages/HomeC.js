import React from "react";
import { Navbar } from "../Navbar";
import pics from '../img/pic2.jpeg';

export const HomeC =() =>{
    return(
        
                <div>
                <Navbar />
                Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.

               <div><img src={pics} class=" ml-72" alt="" ></img></div>
               <div>The genesis of AWS came in the early 2000s. After building Merchant.com, Amazon's e-commerce-as-a-service platform that offers third-party retailers a way to build their own web-stores, Amazon pursued service-oriented architecture as a means to scale its engineering operations,[15][16][17][18][19][20][21] led by then CTO Allan Vermeulen.[22]

Around the same time frame, Amazon was frustrated with the speed of its software engineering, and sought to implement various recommendations put forth by Matt Round, an engineering leader at the time, including maximization of autonomy for engineering teams, adoption of REST, standardization of infrastructure, removal of gate-keeping decision-makers (bureaucracy), and continuous deployment. He also called for increasing the percentage of the time engineers spent building the software rather than doing other tasks.[23] Amazon created "a shared IT platform" so its engineering organizations, which were spending 70% of their time on "undifferentiated heavy-lifting" such as IT and infrastructure problems, could focus on customer-facing innovation instead.[24][25] Besides, in dealing with unusual peak traffic patterns, especially during the holiday season, by migrating services to commodity Linux hardware and relying on open source software, Amazon's Infrastructure team, led by Tom Killalea,[26] Amazon's first CISO,[27] had already run its data centers and associated services in a "fast, reliable, cheap" way.[26]

In July 2002 Amazon.com Web Services, managed by Colin Bryar,[28] launched its first web services, opening up the Amazon.com platform to all developers.[29] Over one hundred applications were built on top of it by 2004.[30] This unexpected developer interest took Amazon by surprise and convinced them that developers were "hungry for more".[25]

By the summer of 2003, Andy Jassy had taken over Bryar's portfolio[31] at Rick Dalzell's behest, after Vermeulen, who was Bezos' first pick, declined the offer.[22] Jassy subsequently mapped out the vision for an "Internet OS"[15][17][19][32] made up of foundational infrastructure primitives that alleviated key impediments to shipping software applications faster.[15][16][17][19][21] By fall 2003,[15][17] databases, storage, and compute were identified as the first set of infrastructure pieces that Amazon should launch.[15][17][25]

Jeff Barr, an early AWS employee, credits Vermeulen, Jassy, Bezos himself, and a few others for coming up with the idea that would evolve into EC2, S3, and RDS;[33] Jassy recalls the idea was the result of brainstorming for about a week with "ten of the best technology minds and ten of the best product management minds" on about ten different internet applications and the most primitive building blocks required to build them.[19] Werner Vogels cites Amazon's desire to make the process of "invent, launch, reinvent, relaunch, start over, rinse, repeat" as fast as it could was leading them to break down organizational structures with "two-pizza teams"[c] and application structures with distributed systems;[d] and that these changes ultimately paved way for the formation of AWS[21] and its mission "to expose all of the atomic-level pieces of the Amazon.com platform".[36] According to Brewster Kahle, co-founder of Alexa Internet, which was acquired by Amazon in 1999, his start-up's compute infrastructure helped Amazon solve its big data problems and later informed the innovations that underpinned AWS.[37]</div>
                </div>

            
    );
}