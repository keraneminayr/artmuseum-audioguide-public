import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  
  // Options for different audiences
  const audienceOptions = {
    general: `Write a 200-word audioguide script for an art museum visitor exploring [INSERT WORK AND ARTIST HERE]. The script should use an immersive, first-person narrative that invites the listener to form their own connections to the piece—emotional, intellectual, and visual—by engaging with it directly. As the guide, you should maintain a steady, deeply invested voice that reflects your genuine fascination with the artwork. Balance this tone by strategically using rhetorical questions and invitations, drawing the listener into a participatory experience. Aim to use vivid, evocative language that paints a sensory landscape for the listener, and weave in technical details that highlight the artist's creative process and stylistic choices to enhance understanding.

Surprise the listener with novel interpretations that go beyond conventional analysis, striking a balance between presenting your unique insights and leaving room for the listener's own interpretations. Contextual information about the artwork’s cultural and historical significance should be seamlessly integrated into the narrative, enhancing the experience without breaking its flow. 

Create the impression that the listener is seeing the artwork through the eyes of a passionate docent or art enthusiast. Encourage them to carefully examine the piece’s formal elements—its colors, lines, textures—and to consider how these aspects work together to create an impact. Throughout, use "I" and "my" statements to convey a strong personal connection to the artwork, showing palpable enthusiasm and curiosity without sounding overly academic.

Incorporate questions and invitations that invite the listener’s engagement, prompting them to reflect on their own interpretations and emotional reactions. Introduce unexpected perspectives or connections to broader themes, from cultural insights to the technical nuances of the artist’s methods, showing an informed yet accessible appreciation for the piece’s place in art history. Engage the listener with varied storytelling techniques, using vivid descriptions and analogies that bring the artwork to life, and maintain a rhythmic narrative that captivates and invites ongoing curiosity. Finally, ensure a balance between sharing your personal interpretation and empowering the listener’s own perspective, blending descriptive and contextual details that offer depth without disrupting the immersive experience.`,
      
    children: `Write a 200-word audioguide script for kids exploring [INSERT WORK AND ARTIST HERE]. Use a fun, friendly, and exciting voice that makes them feel like they are on an adventure with the artwork. Encourage them to look closely at the piece, asking questions and imagining things about it as they listen. Talk to them like you’re sharing a secret about the art, with excitement and wonder in your voice.

Let the artwork tell a story! Invite the listener to think about how it looks—its colors, shapes, and textures—and what those things make them feel. Ask questions like, “What do you think this color makes you feel?” or “Can you see any shapes hiding in the picture?” Give them clues to think about, but leave enough space for them to come up with their own ideas.

Be sure to tell them a bit about the artist—how they might have created the piece and what kind of techniques they used. But don’t make it too complicated; keep it fun and easy to understand. You can even share something surprising or unexpected about the art that will make them smile, like a fun fact about how the artist worked.

Make it feel like they’re looking at the art with you, discovering things together. Keep the language simple, lively, and full of wonder, so they feel like they’re really seeing the artwork with fresh eyes. Remind them to think about how the piece makes them feel or what story it might be telling, and encourage them to share their own ideas.

Throughout the script, keep the tone friendly and inviting. Use lots of colors in your descriptions, like “look at the bright yellow paint” or “see how the lines swirl together,” so they can picture everything in their mind. Keep the guide interactive, like a conversation, and always end by encouraging them to keep wondering about the art even after they leave.`,
      
    experts: `Write a 200-word audioguide script for an informed audience of art experts or scholars exploring [INSERT WORK AND ARTIST HERE]. The script should adopt a knowledgeable and insightful voice that invites deep intellectual engagement with the piece. Encourage a reflective, critical examination of the artwork’s formal and conceptual elements, fostering a dialogue between the listener and the work.

Address the audience with the assumption that they have a sophisticated understanding of art history and theory. Invite them to consider the artist’s techniques, formal choices, and the cultural or historical context that influenced the piece. Use precise, technical language to describe the visual characteristics of the work—its use of color, composition, texture, and line—and relate these to the artist’s broader stylistic approach or movement.

Ask analytical questions that prompt deeper reflection, such as, “How does the artist’s use of chiaroscuro here challenge our understanding of light and shadow in the period?” or “What does the tension between abstraction and figuration suggest about the artist’s engagement with contemporary artistic discourse?” Guide the listener through a careful, systematic observation of the piece, drawing attention to subtleties that might otherwise be overlooked.

Weave in insights about the artist’s process and philosophy, considering how the work fits within their larger oeuvre or broader art historical movements. Where relevant, explore the cultural or political implications of the piece, examining how the work engages with or responds to contemporary events, ideologies, or artistic traditions. Present your interpretation in a way that respects the autonomy of the audience’s own insights, offering novel perspectives while leaving room for scholarly debate.

Maintain a tone of intellectual rigor, but one that still fosters engagement and curiosity. While grounded in research and analysis, aim to make the script dynamic and stimulating by introducing fresh interpretations that challenge established readings of the artwork. Conclude by encouraging ongoing scholarly inquiry and reflection, positioning the work as a significant node in broader intellectual and cultural conversations.`,

firstdate: `Write a 200-word audioguide script for a couple on their first date exploring [ARTWORK TITLE] by [ARTIST NAME]. The script should foster meaningful conversation and playful interaction, helping the couple discover shared perspectives and unique viewpoints. Incorporate "Share & Compare" prompts to invite both partners to express their interpretations, and include "Truth or Art" moments where they can choose between answering a personal question inspired by the artwork or completing a creative challenge related to it. Add light-hearted "Partner Perspective" exercises, where couples sketch, describe, or reimagine the artwork from each other's viewpoint. Frame questions that reveal values and personalities, such as asking what part of the artwork speaks to their life philosophy, and include memory-sharing prompts tied to the piece. Include interactive elements like subtle competition through art-spotting challenges, collaborative observation tasks, and playful role-play moments. Maintain a balanced structure, alternating between artwork analysis and relationship-building activities, with a mix of serious artistic insight and lighter, date-appropriate tasks. Use warm, inviting language that addresses both partners, providing clear instructions for interactive moments, ranging from casual to deeper topics. The content should include an opening ice-breaker with a shared observation challenge, a core artwork discussion with partner-focused interpretation activities, and interactive segments like "Truth or Art" choices and collaborative challenges. Conclude with a shared reflection moment and a memorable takeaway activity. The tone should remain warm and encouraging, balancing sophistication with approachability, using inclusive language, and keeping humor subtle. Ensure the script creates natural conversation flows, allows comfortable silences, and maintains focus on both art appreciation and connection-building, while keeping activities suitable for a public setting. The goal is to help the couple connect through shared artistic discovery while maintaining the educational value of a traditional audioguide.`,

reluctant: `Write a 200-word audioguide script for a visitor who is reluctantly exploring [ARTWORK TITLE] by [ARTIST NAME]. The script should maintain a direct, first-person narrative that draws the listener in despite their lack of enthusiasm, subtly guiding them toward an appreciation of the artwork. The tone should balance between offering intriguing insights and being mindful of the listener’s potential indifference, while still encouraging curiosity. Rather than bombarding them with excessive technical details, the script should offer moments of surprise or unexpected interpretations that might challenge their initial reluctance. Avoid a high-pressure tone, instead making the experience feel more like an exploration with gentle, inviting prompts to engage their senses. Use vivid and sensory language to paint a compelling picture of the artwork, while keeping things light and accessible. Acknowledge the possible disinterest in the experience with humor or empathy, but guide the listener through the piece in a way that might make them reconsider their perspective. Incorporate rhetorical questions and subtle invitations to engage with the artwork, but balance this with direct, observational details that help ground the listener in the present moment. Encourage them to notice elements of the piece they might otherwise overlook, like color, texture, or shape. Offer just enough technical background to inform their understanding without overwhelming them with jargon. Be sure to emphasize the artwork’s broader significance, but weave this information naturally into the script so it feels like part of the discovery process. Focus on how the piece might resonate with their own experiences or worldviews, even if they’re not initially seeking deeper meaning in the art. The goal is to help them engage on their terms, sparking curiosity without forcing them to "care" in a conventional sense—allowing them to find their own way into the artwork, even if it’s just a small shift in perception.`,

confusedstudent: `Write a 200-word audioguide script for a first-year student who is unsure and feeling lost while analyzing [ARTWORK TITLE] by [ARTIST NAME] for their art assignment. The script should be written in a supportive, first-person tone that acknowledges the student's uncertainty, while gently guiding them through the analysis process. The goal is to help them feel more confident and engaged, with a focus on building their skills and understanding of art analysis. Start by helping them break the artwork down into its basic elements, such as composition, color, and form, while avoiding overwhelming them with overly technical terms. Offer simple, approachable language and invite them to look at the artwork with fresh eyes. Provide prompts that encourage them to think about how they feel or what they notice, helping them build their interpretation from their own observations. Gently introduce key concepts or artistic techniques in a way that feels natural, ensuring the student doesn’t feel burdened by too much theory at once. Include moments of reassurance that it's okay not to have all the answers immediately, and that art analysis is a process of discovery. Offer guiding questions that encourage the student to reflect on the work, such as "What stands out to you here?" or "How does this piece make you feel?" and remind them that their personal reaction is an important part of the analysis. Encourage them to make connections between the artwork and their own experiences or knowledge, emphasizing that art can speak to us in unique ways. The script should gently remind the student that analyzing art doesn’t require expertise right away, and that each interpretation is valid as long as it’s backed by thoughtful observation. Help them feel at ease, reassuring them that they are on the right path, even if it doesn’t all make sense just yet.`,

annoyinghipster: `Write a 200-word audioguide script exploring [INSERT WORK AND ARTIST HERE] for an art museum visitor who is a pretentious, overconfident hipster. The script should be witty and subtly ironic, acknowledging the visitor’s presumed expertise and enthusiasm for avant-garde art while gently guiding them to engage with the artwork on a deeper level. The tone should be playful, with moments of sarcasm, but without undermining the visitor’s apparent self-assuredness. Start by offering a humorous but insightful observation about the artwork, recognizing that the visitor is likely already familiar with the artist’s technique and significance, but offering a fresh twist or perspective that they might not have considered. Challenge the visitor’s intellectual posturing with slightly exaggerated suggestions, such as inviting them to "feel the soul of the piece" or "engage with the raw energy of this bold statement of modernity." Incorporate rhetorical questions that encourage them to overanalyze their reaction, such as "Do you see the deliberate chaos here, or do you think it’s just a happy accident?" or "Is this really art, or is it an existential comment on the futility of human effort?" Balance the playful tone with genuine artistic insights, highlighting the subtleties of color, texture, and form, but framing these observations in a way that will appeal to their “highbrow” sensibilities. Encourage them to reflect on how the piece challenges traditional artistic conventions, but without getting bogged down in overly academic jargon. Add a few ironic comments on how the artwork fits into broader cultural trends, making it clear that the visitor is part of a "unique" subculture that understands and appreciates the piece on a level that the average museumgoer might miss. Throughout, maintain a balance between satire and genuine art appreciation, ensuring that the visitor’s experience remains enjoyable and engaging while subtly reminding them that true art appreciation involves more than just posing and posturing.`,

justphotos: `Write a playful 200-word audioguide script exploring [INSERT WORK AND ARTIST HERE] for a museum visitor who’s primarily focused on taking the best selfies and photos of themselves with the artwork. The script should be lighthearted and guide them through finding the most flattering angles, while gently encouraging them to engage with the art in the process. Begin with a cheeky acknowledgment of their mission—finding the perfect shot—and offer some friendly, photo-friendly tips. Suggest optimal positions for selfies, like standing slightly to the side of the artwork for a more dynamic composition or recommending specific lighting angles that will make them look their best (natural light from the windows, for instance, to avoid harsh museum overhead lighting). Encourage them to experiment with different poses, like tilting their head just so, or standing with a hand on their chin to look pensive, as if they’re contemplating the piece’s “deeper meaning”—while still looking effortlessly cool, of course. Playfully suggest they “pretend” to be engaged in the art, but make sure the camera is in focus! Remind them to keep the background clear of distracting elements, offering tips on framing, and even suggest they find a spot where they can catch a piece of the artwork in the background without it overwhelming the shot. Incorporate fun, tongue-in-cheek suggestions like, “Want to look like you’re deep in thought about the exhibit? Just glance at the artwork for a few seconds while the camera clicks—it’s all about the illusion.” Let them know when to step back and zoom in to capture the whole piece, or when to get close for an up-close shot with a piece’s texture or unique feature in focus. Finally, wrap up with a playful reminder that, while the perfect selfie is important, perhaps take just a moment to genuinely look at the artwork—after all, the best photo might just be the one where you’re in awe of what’s in front of you.`
  };

  // Sets the selected audience's script
  const selectAudience = (audience) => {
    setValue(audienceOptions[audience]);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Please enter an artist, artwork and chosen audience.");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:3001/gemini", options);
      const data = await response.json();

      if (data.success) {
        setChatHistory((oldChatHistory) => [
          ...oldChatHistory,
          {
            role: "user",
            parts: value,
          },
          {
            role: "model",
            parts: data.message,
          },
        ]);
      }

      setValue(""); // Clear input value
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const clear = () => {
    setChatHistory([]);
    setValue("");
    setError("");
  };

  return (
    <div className="app">
      <p>
        What audioguide script would you like? Choose an audience first.
      </p>
      {/* Buttons for selecting audience type */}
      <div>
        <button className="surprise" onClick={() => selectAudience('general')}>
          General Audiences
        </button>
        <button className="surprise" onClick={() => selectAudience('children')}>
          Children
        </button>
        <button className="surprise" onClick={() => selectAudience('experts')}>
          Experts
        </button>
	 <button className="surprise" onClick={() => selectAudience('firstdate')}>
          First Date
        </button>
	<button className="surprise" onClick={() => selectAudience('reluctant')}>
          I was forced to come here
        </button>
	<button className="surprise" onClick={() => selectAudience('confusedstudent')}>
          NGN Visual Arts Assignment
        </button>
	<button className="surprise" onClick={() => selectAudience('annoyinghipster')}>
          Art Snob
        </button>
	<button className="surprise" onClick={() => selectAudience('justphotos')}>
          I just want nice pictures of myself at the museum!
        </button>
      </div>
      <div className="input-container">
        <input
          value={value}
          placeholder="Starry Night, Vincent van Gogh."
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse}>Tell me!</button>}
        {error && <button onClick={clear}>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, _index) => (
          <div key={_index}>
            <p className="answer">
              {chatItem.role} : {chatItem.parts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
