import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Contact */}
          <div className="container col-md-4 mb-3">
            <h5 className="mb-3">Connect</h5>

            <div className="d-flex flex-column gap-3">
              <a
                href="mailto:sunidhik471@gmail.com"
                className="text-light text-decoration-none"
              >
                <i className="bi bi-envelope-fill me-2"></i>:
                sunidhik471@gmail.com
              </a>

              <a
                href="https://github.com/SunidhiKumari1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="bi bi-github me-2"></i>: SunidhiKumari1
              </a>

              <a
                href="https://www.linkedin.com/in/sunidhi-kumari-b91587274/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="bi bi-linkedin me-2"></i>: Sunidhi Kumari
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div>
          © {new Date().getFullYear()} Sunidhi Kumari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
