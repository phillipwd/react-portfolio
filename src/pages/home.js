import React from "react";
import MyImage from "../components/images/IMG_5112c.jpeg";
import "./homeStyle.css";

function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="content">
        <div className="imgBox">
          <img src={MyImage} />
        </div>
          <p>
          Hi, my name is Phillip Dunham. I am pretty quiet when I first meet people, but once I have spent a little time with them, I enjoy riffing and joking with them. My ice is a bit thick, but what's underneath is fun and helpful, though often not at the same time. I decided to pursue a career in coding after giving it a try and finding myself losing track of the hours. I wouldn't look at the time, and before I knew it, it was time for lunch, or something. If something can keep my interest so deeply, that would be a great thing to have in a career, to WANT to be doing it, to WANT to work. In my free time I run, ideally a few times a week. I have completed 3 marathons as of today, one of which was part of "The Dopey Challenge" which is a four day event in Walt Disney World consisting of a 5k, 10k, half-marathon, and full marathon on subsequent days (Thursday through Sunday). I plan on doing it again in 2023.
          </p>
          <br></br>
          <p>
            My professional experiences before coding have been primarily in manufacturing as a quality assurance inspector. I have enjoyed working in a machine shop setting, but as I have not been a machinist myself, there is no real potential for advancement in the field. I also have some training in Mechanical Engineering, but only associates level. In that field, that level of education is not especially useful. It has, however, has given me experience in technical writing and communicating. 
          </p>
      </div>
    </div>
  );
}

export default Home;
