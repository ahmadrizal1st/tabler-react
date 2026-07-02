import { NavbarLogo } from '../components/layout/NavbarLogo'
import { Button } from '../components/ui/Button'

export default function Onboarding() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col me-auto">
              <NavbarLogo smallLogo className="logo-gray" />
            </div>
            <div className="col-2">
              <div className="progress-steps">
                <div className="progress-step active"></div>
                <div className="progress-step active"></div>
                <div className="progress-step"></div>
                <div className="progress-step"></div>
                <div className="progress-step"></div>
              </div>
            </div>
            <div className="col text-end">
              <Button href="/" color="ghost">
                Skip<span className="d-none d-md-inline">&nbsp;to dashboard</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-5">
        <div className="container container-tight">
          <div className="page-header">
            <h1 className="page-title">Let's set up your account</h1>
          </div>
          
          <div className="card mt-5">
            <div className="card-body space-y-4">
              <div>
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              
              <div>
                <label className="form-label">Company name</label>
                <input type="text" className="form-control" placeholder="Enter your company name" />
              </div>
              
              <div>
                <label className="form-label">Role</label>
                <select className="form-select">
                  <option value="">Select your role</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="founder">Founder</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Team size</label>
                <div className="form-selectgroup">
                  <label className="form-selectgroup-item">
                    <input type="radio" name="team-size" value="1" className="form-selectgroup-input" defaultChecked />
                    <span className="form-selectgroup-label">Just me</span>
                  </label>
                  <label className="form-selectgroup-item">
                    <input type="radio" name="team-size" value="2-10" className="form-selectgroup-input" />
                    <span className="form-selectgroup-label">2-10 people</span>
                  </label>
                  <label className="form-selectgroup-item">
                    <input type="radio" name="team-size" value="11-50" className="form-selectgroup-input" />
                    <span className="form-selectgroup-label">11-50 people</span>
                  </label>
                  <label className="form-selectgroup-item">
                    <input type="radio" name="team-size" value="50+" className="form-selectgroup-input" />
                    <span className="form-selectgroup-label">50+ people</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="form-label">What are you planning to use this for?</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="personal" id="use-personal" defaultChecked />
                  <label className="form-check-label" htmlFor="use-personal">
                    Personal projects
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="business" id="use-business" />
                  <label className="form-check-label" htmlFor="use-business">
                    Business applications
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="client" id="use-client" />
                  <label className="form-check-label" htmlFor="use-client">
                    Client work
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="learning" id="use-learning" />
                  <label className="form-check-label" htmlFor="use-learning">
                    Learning and experimentation
                  </label>
                </div>
              </div>
              
              <div>
                <label className="form-label">How did you hear about us?</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="referral" value="search" id="ref-search" />
                  <label className="form-check-label" htmlFor="ref-search">
                    Search engine
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="referral" value="social" id="ref-social" />
                  <label className="form-check-label" htmlFor="ref-social">
                    Social media
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="referral" value="friend" id="ref-friend" />
                  <label className="form-check-label" htmlFor="ref-friend">
                    Friend or colleague
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="referral" value="blog" id="ref-blog" />
                  <label className="form-check-label" htmlFor="ref-blog">
                    Blog or article
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="referral" value="other" id="ref-other" />
                  <label className="form-check-label" htmlFor="ref-other">
                    Other
                  </label>
                </div>
              </div>
              
              <div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="notifications" defaultChecked />
                  <label className="form-check-label" htmlFor="notifications">
                    Send me product updates and tips via email
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-list justify-content-between mt-4">
            <Button color="link link-secondary">Back</Button>
            <Button color="primary">Continue</Button>
          </div>
        </div>
      </main>
    </>
  )
}
