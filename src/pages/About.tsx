import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Meet The Maker</h1>
        <div className="profile">
          <img src={profile}/>
        </div>
        <br/>
        <p>
           One seemingly ordinary day, I decided to check out my new neighbor’s garage sale, and in a matter of minutes, I found myself in his knife-making shop engrossed in a very interesting conversation. That day lit a spark and I discovered a passion for knife-making, and have been making them now for almost a decade.
        </p>
        <br/>
        <p>
          It didn’t take long, like many other knife-makers, to realize my knives needed sheaths. Leather runs in my blood, so to speak. My great-grandmother worked, sewing leather stirrups, in a saddle shop, and my dad worked in leather work in his early teens. With scrap leather and my dad’s old tools, long story short, JCW Maker Custom Goods was born.
        </p>
        <br/>
        <p>
          I’m a seventh-generation Texan – and more importantly, I’m a son of God through Jesus my Savior, who has bestowed in me the gifts to do the work that I do. I love making something with my hands from the gifts He gave me that will work – or play -- as hard as the people who use them.
        </p>
        <br/>
        <p>
          If you’ll notice, pricing in my Gallery uses the phrase “starting at.”
        </p>
        <br/>
        <p>
          Every piece I create is special, and almost every one is custom. With custom work, sizes vary – which affect the amount of leather needed. Some folks prefer tooling, while others select plain. Finished edges truly elevate any leather piece, and finished edges add time to any project. Sizing, material, details like edging or painting, supply chain issues and inflation fluctuations all impact price.
        </p>
        <br/>
        <p>
          I primarily take custom orders and I’d love to make one for you. I use the top-quality leather and materials that I can get my hands on. My Gallery shows a portfolio of some products I’ve made.
        </p>
        <br/>
        <ul>
          <li>knife sheaths</li>
          <li>gun leathers</li>
          <li>belts</li>
          <li>wallets</li>
          <li>bags, etc.</li>
        </ul>
        <br/>
        <p>
          Thanks for stopping by! You can reach me via my Contact page or social media.
        </p>
        <br/>
        <p>
          All the best to you and yours!
        </p>
      </div>
    </div>
  );
};

export default About;
