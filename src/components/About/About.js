import React from 'react'
import  Accordion  from "react-bootstrap/Accordion";


const About = () => {
    return ( 
 <>
   <div className="container-fluid">
   <h1 className="my-2">About Us</h1>  
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About OpenSource</Accordion.Header>
    <Accordion.Body>
    OpenSource is the free source of HTML CSS and JAVA Script based Games.
In this website you will get many interesting and exciting games. As a team of passionate gaming enthusiasts, OpenSource is dedicated to celebrating the gaming community. Our expansive content includes current news, recent releases and helpful guides, all of which are geared for our fellow gamers, novices and professionals alike. We’re committed to enhancing your gaming experience. You can contact us for one-on-one support or browse our ever-expanding selection of articles and videos to find exactly what you’re looking for. We’re looking forward to hearing from you.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>    
 <Accordion eventKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is TexUtils?</Accordion.Header>
    <Accordion.Body className="text-center">
      TextUtils is a website made by <a href="https://osourcegames.firebasepp.com">OpenSource</a> where you can analyze your text with powerfull tools.<br />
      A lot of features are available here like extra space remover, clear text, copy text and etc.<br />
      This is totally based on react and bootstrap. 
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>
  <Accordion eventKey="2">
  <Accordion.Item eventKey="2">
    <Accordion.Header>Source Code</Accordion.Header>
    <Accordion.Body>
      Source code can be found in this link - <a href="https://github.com/abindent/TextUtils">https://github.com/abindent/TextUtils</a>
    </Accordion.Body>
  </Accordion.Item>
</Accordion><br />
        </div>
        <center><h1 className="my-2"><u>YouTube</u></h1></center>
        <center><iframe title="YouTube" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/XHi79-kTE_8?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=http://youtubeembedcode.com"><div></div></iframe></center>
        </>
    )
}

export default About