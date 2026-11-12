import "./Bonjour.css";

type BonjourProps = {
  name: string;
  firstName: string;
};

// export function Bonjour(props) {
export function Bonjour({ name, firstName }: BonjourProps) {
  // const {name,firstName} = props;
  // console.log(props);

  // const name = props.name;
  // const firstName = props.firstName;

  // const name: string = "Fred";
  const isFrench = false;

  const compEn = (
    <p>
      Hello {firstName} {name}
    </p>
  );
  const compFr = (
    <p>
      Bonjour {firstName} {name}
    </p>
  );

  return (
    <>
      {isFrench ? compFr : compEn}

      <br />
      {isFrench && (
        <>
          <strong>French</strong>
          {compFr}
        </>
      )}

      <strong>English</strong>
      <br />
      {!isFrench && compEn}
    </>
  );
}
