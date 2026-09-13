import illume from "../assets/illume_0926.png"
import illume_1 from "../assets/illume_0926_48_35.webp"
import illume_2 from "../assets/illume_0926_49_35.webp"

const About = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Meet The Maker</h1>
        {/*<div className="profile">
          <img src={profile}/>
        </div>*/}
        <br/>
        <p>
          For as long as I can remember, I have always enjoyed “making,” the creative process and its results. I’ve long been passionate about turning raw materials into durable, purposeful pieces that stand the test of time. More importantly, I want to honor and glorify Heavenly Father with the gifts He’s given me and serve Christ through my work. 
        </p>
        <br/>
        <p>
          Nearing a decade ago, I made friends with our neighbor, an incredibly talented knife maker. At that moment, I discovered my interest in making cutlery. Working with him through the years was monumental in my knife making journey. 
        </p>
        <br/>
        <p>
          It didn’t take long to realize -- my knives needed leather sheaths. I’d always been fascinated with the collection of leather working tools housed in a black briefcase in my dad’s office. One day, I took those tools and some leather scraps and made my first leather projects, with, might I add, much room for improvement.
        </p>
        <br/>
        <p>
          I invested countless hours, honing my skills as a self-taught leather worker.
        </p>
        <br/>
        <p>
          Being a 7th generation Texan, I am not the first in my family to work with leather. Officially starting with my great-grandmother Lela, who worked in a saddle shop in west Texas, hand stitching stirrups, to my dad, who worked leather in his early teen years, leather work is a tradition I’m honored to continue.
        </p>
        <br/>
        <p>
          Now, I am closing in on a decade of experience in these trades. From using scraps, to reinvesting into better tools, to where I am today, I thank God for the opportunities and experiences I’ve had over the years through this business. I appreciate the opportunity for your business. From JCW Maker, thank you and God bless!
        </p>
        <br/>
      <div className="illume">
        <h3>
          Featured in <a href="https://illumeconnect.com/pages/illume-magazine">Illume</a>
        </h3>
        <p>
          September 2026
        </p>
        <br/>
        <img src={illume_1}/>
        <img src={illume_2}/>
      </div>
      </div>
    </div>
  );
};

export default About;
