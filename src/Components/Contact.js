import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        minHeight: "100vh",
        color: "white",
        backgroundColor: "#1b1b1b"
      }}
    >
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Contact <span className="text-info">Me</span>
          </h2>

          <div
            className="mx-auto mt-3 mb-3"
            style={{
              width: "170px",
              height: "4px",
              background: "#00d9ff",
              borderRadius: "20px",
            }}
          ></div>

          <p className="text-light fs-5">
            Have a project in mind or want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div
              className="h-100 p-5 rounded-4"
              style={{
                background: "rgba(20, 20, 20, 0.69)",
                border: "1px solid rgba(13,202,240,.3)",
              }}
            >

              <h3 className="text-info mb-4">
                Get In Touch
              </h3>

              <p className="text-light mb-4">
                I'm currently looking for internship and
                full-time Software Engineering opportunities.
                Feel free to reach out!
              </p>

              <div className="mb-4">
                <h6 className="text-info">📧 Email</h6>
                <p className="text-light mb-0">
                  sunidhik471@gmail.com
                </p>
              </div>

              <div className="mb-4">
                <h6 className="text-info">📱 Phone</h6>
                <p className="text-light mb-0">
                  +91 XXXXX XXX23
                </p>
              </div>

              <div className="mb-4">
                <h6 className="text-info">📍 Location</h6>
                <p className="text-light mb-0">
                  Patna, Bihar, India
                </p>
              </div>

              <div className="mb-4">
                <h6 className="text-info">💼 LinkedIn</h6>
                <a
                  href="https://www.linkedin.com/in/sunidhi-kumari-b91587274/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-light"
                >
                  Sunidhi Kumari
                </a>
              </div>

              <div>
                <h6 className="text-info">💻 GitHub</h6>
                <a
                  href="https://github.com/SunidhiKumari1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-light"
                >
                  SunidhiKumari1
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <div
              className="p-5 rounded-4 "
              style={{
                background: "rgba(20, 20, 20, 0.69)",
                border: "1px solid rgba(13,202,240,.3)",
              }}
            >

              <form>

                <div className="mb-4">
                  <label className="form-label text-info">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control bg-dark text-white border-info"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-info">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control bg-dark text-white border-info"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-info">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    className="form-control bg-dark text-white border-info"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-info px-5 py-2 fw-semibold"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}