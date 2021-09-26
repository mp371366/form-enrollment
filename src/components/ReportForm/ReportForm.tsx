import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ReportForm.css";

const defaultReport = [
  `Pancetta beef chislic sirloin brisket cow meatloaf pork belly.\
  Ham hock meatball shank drumstick leberkas cow short ribs ham sirloin pancetta burgdoggen.\
  Ball tip meatloaf ham salami flank.\
  Kevin cow chicken t-bone, beef beef ribs venison drumstick doner hamburger ground round ham hock capicola buffalo.\
  Chislic boudin leberkas, swine venison bacon filet mignon ham pastrami.`,
  `Pork loin jowl tongue tenderloin brisket tail alcatra ball tip turkey buffalo swine beef salami shoulder shankle.\
  Andouille flank boudin, pork chop pork belly buffalo cupim ground round sausage jerky chicken tri-tip burgdoggen swine strip steak.\
  Hamburger pastrami ribeye sirloin doner, tenderloin filet mignon.  Prosciutto short ribs picanha jerky short loin jowl,\
  pancetta brisket chuck.  Short loin cupim brisket ham hock pork belly bresaola swine shoulder capicola.\
  Drumstick beef shank strip steak frankfurter.`
];
const reportMaxLength = 5000;

export default function ReportForm() {
  const { name } = useParams<{ name: string }>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [report, setReport] = useState<string | Array<string>>(defaultReport);
  const [submitted, setSubmitted] = useState(false);

  function handleChangeWith(handler: (value: string) => void) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handler(event.target.value);
    };
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="ReportForm">
        <p>Thank you for submission.</p>
        <Link className="link" to="/">Back to home page</Link>
      </div>
    );
  }

  return (
    <div className="ReportForm">
      <h3>Add report for {name}</h3>
      <form className="ReportForm-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          maxLength={50}
          value={firstName}
          onChange={handleChangeWith(setFirstName)}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          maxLength={100}
          required
          value={lastName}
          onChange={handleChangeWith(setLastName)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          maxLength={100}
          required
          value={email}
          onChange={handleChangeWith(setEmail)}
        />
        <label htmlFor="report">Report:</label>
        <textarea
          id="report"
          name="report"
          required
          maxLength={reportMaxLength}
          value={report}
          onChange={handleChangeWith(setReport)}
        />
        <input
          type="submit"
          id="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}