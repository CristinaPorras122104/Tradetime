import Navbar from "./Navbar";
import "./messages.css";

export default function Messages() {
  return (
    <div className="msg-page">
      <Navbar />

      <div className="msg-wrap">
        <h2 className="msg-title">Messages (XX)</h2>

        <div className="msg-layout">
          {/* LEFT LIST */}
          <aside className="msg-list">
            <div className="msg-user msg-user-active">
              <div className="msg-avatar" />
              <div className="msg-lines">
                <div className="msg-line" />
                <div className="msg-line short" />
              </div>
            </div>

            <div className="msg-user">
              <div className="msg-avatar" />
              <div className="msg-lines">
                <div className="msg-line" />
                <div className="msg-line short" />
              </div>
            </div>

            <div className="msg-user">
              <div className="msg-avatar" />
              <div className="msg-lines">
                <div className="msg-line" />
                <div className="msg-line short" />
              </div>
            </div>
          </aside>

          {/* RIGHT CHAT */}
          <section className="msg-chat">
            <div className="msg-chat-top">
              <div className="msg-avatar" />
              <div className="msg-top-icons">
                <div className="msg-top-dot" />
                <div className="msg-top-dot" />
              </div>
            </div>

            <div className="msg-chat-body">
              <div className="msg-bubble left">
                Hey Maria! I saw your post about needing help with weeding. I can
                come by tomorrow morning around 9 AM if that works?
              </div>

              <div className="msg-bubble right">
                That would be amazing, Alex! It’s just the front yard. Do you
                have your own gloves or should I provide some?
              </div>

              <div className="msg-bubble left">
                I’ve got my own gear! It looks like a 2-hour job. Does 2.0 hours
                for the trade sound fair?
              </div>

              <div className="msg-bubble right">Perfect. See you at 9!</div>
            </div>

            <div className="msg-chat-input">
              <input className="msg-input" placeholder="" />
              <button className="msg-mic">🎤</button>
              <button className="msg-send">send</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}